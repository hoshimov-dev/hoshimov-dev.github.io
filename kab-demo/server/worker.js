/* K.A.B cosmetics — order server for Cloudflare Workers (free plan).

   Stores orders and admin settings in a KV namespace bound as KAB, and sends every new
   order to the shop's Telegram through a bot. Secrets live in Cloudflare, never in this file:
     BOT_TOKEN  — token from @BotFather
     ADMIN_PIN  — PIN for the admin panel and for linking Telegram (defaults to 1234)

   Routes
     GET    /                    health check
     GET    /settings            prices, stock, visibility, delivery zones (public)
     PUT    /settings            save them                         (PIN)
     POST   /order               place an order, notify Telegram
     POST   /order/:no/paid      mark a demo online payment as paid
     GET    /orders              list orders                       (PIN)
     PATCH  /orders/:no          change status {status}            (PIN)
     DELETE /orders              wipe demo orders                  (PIN)
     GET    /init?pin=…          connect the bot (sets the webhook) and show the link to subscribe
     POST   /tg                  Telegram webhook ("/start <PIN>" subscribes a chat)
*/

const STATUS = { new: 'Новый', paid: 'Оплачен', packing: 'Собирается', shipping: 'В пути', done: 'Выполнен', cancelled: 'Отменён' };
const ZONES = { chirchiq: 'Чирчик', tashkent: 'Ташкент', region: 'Ташкентская область', country: 'Другие регионы', pickup: 'Самовывоз: Chirchiq bozor' };
const PAYS = { payme: 'Payme', click: 'Click', uzum: 'Uzum Bank', cash: 'Наличными при получении', card: 'Переводом на карту' };
const MAX_ORDERS = 500;

const cors = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET,POST,PUT,PATCH,DELETE,OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type,X-Pin',
  'Access-Control-Max-Age': '86400'
};
const json = (data, status = 200) => new Response(JSON.stringify(data), { status, headers: { 'Content-Type': 'application/json; charset=utf-8', ...cors } });
const fail = (msg, status = 400) => json({ error: msg }, status);
const pinOf = env => String(env.ADMIN_PIN || '1234');
const authed = (req, env) => req.headers.get('X-Pin') === pinOf(env);
const esc = s => String(s ?? '').replace(/[&<>]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]));
const money = n => Math.round(+n || 0).toLocaleString('ru-RU').replace(/ |,/g, ' ') + ' сум';
const str = (v, max) => String(v ?? '').trim().slice(0, max);
// Telegram only accepts A-Z a-z 0-9 _ - in the webhook secret
const hookSecret = env => String(env.BOT_TOKEN || '').split(':')[1]?.replace(/[^A-Za-z0-9_-]/g, '').slice(0, 64) || 'none';

async function getJSON(env, key, fallback){ return (await env.KAB.get(key, 'json')) ?? fallback; }
const putJSON = (env, key, value) => env.KAB.put(key, JSON.stringify(value));

async function tg(env, method, body){
  if (!env.BOT_TOKEN) return { ok: false, description: 'BOT_TOKEN is not set' };
  try {
    const r = await fetch(`https://api.telegram.org/bot${env.BOT_TOKEN}/${method}`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
    return await r.json();
  } catch (e) { return { ok: false, description: 'Telegram is unreachable: ' + e.message }; }
}
// a Telegram hiccup must never lose an order, so failures here are swallowed
async function notify(env, text){
  try {
    const chats = await getJSON(env, 'chats', []);
    await Promise.all(chats.map(chat_id => tg(env, 'sendMessage', { chat_id, text, parse_mode: 'HTML', disable_web_page_preview: true }).catch(() => null)));
  } catch (e) {}
}
function orderText(o, title){
  const paid = ['paid', 'packing', 'shipping', 'done'].includes(o.status);
  return [`🛍 <b>${title} #${o.no}</b>${paid ? ' — ✅ оплачен' : ''}`,
    `👤 ${esc(o.name)}, ${esc(o.phone)}`,
    `📍 ${esc(ZONES[o.zone] || o.zone)}${o.address ? ', ' + esc(o.address) : ''}`,
    ...o.items.map(i => `• ${esc(i.name)} × ${i.q} — ${money(i.price * i.q)}`),
    o.discount ? `🎟 Скидка${o.promo ? ' ' + esc(o.promo) : ''}: −${money(o.discount)}` : '',
    `🚚 Доставка: ${o.ship ? money(o.ship) : 'бесплатно'}`,
    `💰 <b>Итого: ${money(o.total)}</b> · ${esc(PAYS[o.pay] || o.pay)}`,
    o.comment ? `💬 ${esc(o.comment)}` : ''].filter(Boolean).join('\n');
}

function cleanOrder(b){
  const items = (Array.isArray(b.items) ? b.items : []).slice(0, 50).map(i => ({ id: +i.id || 0, q: Math.max(1, Math.min(99, +i.q || 1)), price: Math.max(0, +i.price || 0), name: str(i.name, 120) }));
  if (!items.length) throw new Error('empty order');
  const name = str(b.name, 80), phone = str(b.phone, 30);
  if (!name || phone.replace(/\D/g, '').length < 9) throw new Error('name and phone are required');
  const sum = items.reduce((a, i) => a + i.price * i.q, 0);
  const discount = Math.max(0, Math.min(sum, +b.discount || 0)), ship = Math.max(0, +b.ship || 0);
  return { name, phone, zone: str(b.zone, 20), address: str(b.address, 200), comment: str(b.comment, 300), pay: str(b.pay, 20), promo: str(b.promo, 20) || null,
    items, sum, discount, ship, total: sum - discount + ship };
}

export default {
  async fetch(req, env, ctx){
    if (req.method === 'OPTIONS') return new Response(null, { headers: cors });
    const url = new URL(req.url), path = url.pathname.replace(/\/+$/, '') || '/', M = req.method;
    try {
      if (path === '/' && M === 'GET') return json({ ok: true, service: 'kab-orders', telegram: !!env.BOT_TOKEN, chats: (await getJSON(env, 'chats', [])).length });

      if (path === '/settings' && M === 'GET') return json(await getJSON(env, 'settings', null));
      if (path === '/settings' && M === 'PUT'){
        if (!authed(req, env)) return fail('wrong PIN', 401);
        const b = await req.json();
        await putJSON(env, 'settings', { products: b.products || [], zones: b.zones || [], custom: b.custom || [], at: Date.now() });
        return json({ ok: true });
      }

      if (path === '/order' && M === 'POST'){
        const o = cleanOrder(await req.json());
        const no = (await getJSON(env, 'nextNo', 1048)); await putJSON(env, 'nextNo', no + 1);
        Object.assign(o, { no, at: Date.now(), status: 'new' });
        const orders = await getJSON(env, 'orders', []); orders.push(o); await putJSON(env, 'orders', orders.slice(-MAX_ORDERS));
        ctx.waitUntil(notify(env, orderText(o, 'Новый заказ')));
        return json(o, 201);
      }
      let m = path.match(/^\/order\/(\d+)\/paid$/);
      if (m && M === 'POST'){
        const orders = await getJSON(env, 'orders', []); const o = orders.find(x => x.no === +m[1]);
        if (!o) return fail('order not found', 404);
        if (o.status === 'new'){ o.status = 'paid'; await putJSON(env, 'orders', orders); ctx.waitUntil(notify(env, `✅ <b>Заказ #${o.no} оплачен</b> (${esc(PAYS[o.pay] || o.pay)}) — ${money(o.total)}`)); }
        return json(o);
      }

      if (path === '/orders' && M === 'GET'){ if (!authed(req, env)) return fail('wrong PIN', 401); return json(await getJSON(env, 'orders', [])); }
      if (path === '/orders' && M === 'DELETE'){ if (!authed(req, env)) return fail('wrong PIN', 401); await putJSON(env, 'orders', []); return json({ ok: true }); }
      m = path.match(/^\/orders\/(\d+)$/);
      if (m && M === 'PATCH'){
        if (!authed(req, env)) return fail('wrong PIN', 401);
        const { status } = await req.json(); if (!STATUS[status]) return fail('unknown status');
        const orders = await getJSON(env, 'orders', []); const o = orders.find(x => x.no === +m[1]);
        if (!o) return fail('order not found', 404);
        o.status = status; await putJSON(env, 'orders', orders);
        return json(o);
      }

      if (path === '/init' && M === 'GET'){
        if (url.searchParams.get('pin') !== pinOf(env)) return fail('add ?pin=YOUR_PIN to the link', 401);
        const hook = await tg(env, 'setWebhook', { url: `${url.origin}/tg`, secret_token: hookSecret(env), allowed_updates: ['message'] });
        const me = await tg(env, 'getMe', {});
        const link = me.ok ? `https://t.me/${me.result.username}?start=${encodeURIComponent(pinOf(env))}` : null;
        return json({ webhook: hook.ok ? 'connected' : hook.description, bot: me.ok ? '@' + me.result.username : me.description,
          next_step: link ? `Open ${link} in Telegram and press Start — orders will come to that chat. Every manager can do the same.` : 'Check BOT_TOKEN in the Worker settings.' });
      }
      if (path === '/tg' && M === 'POST'){
        if (req.headers.get('X-Telegram-Bot-Api-Secret-Token') !== hookSecret(env)) return fail('forbidden', 403);
        const u = await req.json(); const msg = u.message; if (!msg || !msg.text) return json({ ok: true });
        const chat = msg.chat.id, [cmd, arg] = msg.text.trim().split(/\s+/);
        if (cmd === '/start' || cmd === '/stop'){
          let chats = await getJSON(env, 'chats', []);
          if (cmd === '/stop'){ chats = chats.filter(c => c !== chat); await putJSON(env, 'chats', chats); await tg(env, 'sendMessage', { chat_id: chat, text: 'Уведомления о заказах отключены.' }); }
          else if (arg === pinOf(env)){ if (!chats.includes(chat)) chats.push(chat); await putJSON(env, 'chats', chats); await tg(env, 'sendMessage', { chat_id: chat, text: '✅ Готово! Новые заказы K.A.B cosmetics будут приходить сюда.\nОтключить: /stop' }); }
          else await tg(env, 'sendMessage', { chat_id: chat, text: 'Это бот уведомлений K.A.B cosmetics. Чтобы получать заказы, откройте ссылку подключения из админ-панели.' });
        }
        return json({ ok: true });
      }
      return fail('not found', 404);
    } catch (e){
      return fail(e.message || 'server error', 400);
    }
  }
};
