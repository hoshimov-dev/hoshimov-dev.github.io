/* K.A.B cosmetics — demo data shared by the store (index.html) and the admin panel (admin.html).
   Everything lives in the visitor's browser (localStorage), so orders placed in the store show up in the admin. */

const KAB = {
  shop: {
    name: "K.A.B cosmetics",
    address: { ru: "Chirchiq bozor, Чирчик", uz: "Chirchiq bozor, Chirchiq" },
    hours: "9:00–17:00",
    telegram: "Kab_cosmetics",
    instagram: "k.a.b_cosmetics"
  },

  categories: [
    { id: "perfume", ru: "Парфюм",     uz: "Atirlar" },
    { id: "care",    ru: "Уход",       uz: "Parvarish" },
    { id: "makeup",  ru: "Макияж",     uz: "Makiyaj" },
    { id: "jewelry", ru: "Бижутерия",  uz: "Zargarlik" }
  ],

  // art: which illustration to draw, c: its two colours
  products: [
    { id: 1,  cat: "perfume", art: "perfume", c: ["#f7c6d4", "#d9708f"], price: 420000, stock: 12, badge: "hit",
      name: { ru: "Парфюм Rose Velvet", uz: "Rose Velvet atiri" }, sub: { ru: "Eau de Parfum", uz: "Eau de Parfum" },
      desc: { ru: "Бархатная роза, пион и тёплый мускус. Стойкость до 10 часов.", uz: "Baxmal atirgul, pion va iliq mushk. 10 soatgacha saqlanadi." },
      variants: [{ ru: "30 мл", uz: "30 ml", price: 290000 }, { ru: "50 мл", uz: "50 ml", price: 420000 }, { ru: "100 мл", uz: "100 ml", price: 650000 }] },
    { id: 2,  cat: "perfume", art: "perfume2", c: ["#3a2a2e", "#b08a5a"], price: 780000, stock: 5, badge: "premium",
      name: { ru: "Парфюм Oud Noir", uz: "Oud Noir atiri" }, sub: { ru: "Extrait de Parfum, 100 мл", uz: "Extrait de Parfum, 100 ml" },
      desc: { ru: "Глубокий уд, шафран и амбра. Вечерний аромат премиум-класса.", uz: "Chuqur ud, za'faron va ambra. Premium kechki atir." } },
    { id: 3,  cat: "perfume", art: "perfume", c: ["#fbf3e6", "#d8c3a0"], price: 290000, stock: 18, badge: "new",
      name: { ru: "Парфюм White Musk", uz: "White Musk atiri" }, sub: { ru: "Eau de Parfum, 50 мл", uz: "Eau de Parfum, 50 ml" },
      desc: { ru: "Чистый белый мускус и хлопок. Аромат на каждый день.", uz: "Toza oq mushk va paxta. Har kunlik atir." } },
    { id: 4,  cat: "perfume", art: "perfume2", c: ["#ffd9e2", "#e98aa5"], price: 255000, old: 300000, stock: 9, badge: "sale",
      name: { ru: "Парфюм Peony Blush", uz: "Peony Blush atiri" }, sub: { ru: "Eau de Toilette, 50 мл", uz: "Eau de Toilette, 50 ml" },
      desc: { ru: "Свежий пион, груша и лёгкая ваниль.", uz: "Yangi pion, nok va yengil vanil." } },

    { id: 5,  cat: "care", art: "jar", c: ["#eaf3f6", "#8ec5d6"], price: 145000, stock: 24, badge: "hit",
      name: { ru: "Увлажняющий крем", uz: "Namlovchi krem" }, sub: { ru: "С гиалуроновой кислотой, 50 мл", uz: "Gialuron kislotasi bilan, 50 ml" },
      desc: { ru: "Глубокое увлажнение на 24 часа. Подходит для всех типов кожи.", uz: "24 soat chuqur namlash. Barcha teri turlariga mos." } },
    { id: 6,  cat: "care", art: "serum", c: ["#fff0d6", "#f1a93b"], price: 165000, stock: 15,
      name: { ru: "Сыворотка с витамином C", uz: "C vitaminli zardob" }, sub: { ru: "Сияние кожи, 30 мл", uz: "Teri yorqinligi, 30 ml" },
      desc: { ru: "Выравнивает тон и придаёт коже сияние уже через 2 недели.", uz: "Teri rangini tekislaydi va 2 haftada yorqinlik beradi." } },
    { id: 7,  cat: "care", art: "bottle", c: ["#fde7ec", "#f2a7ba"], price: 89000, stock: 30,
      name: { ru: "Тоник с розовой водой", uz: "Atirgul suvli tonik" }, sub: { ru: "200 мл", uz: "200 ml" },
      desc: { ru: "Освежает, успокаивает и подготавливает кожу к уходу.", uz: "Terini tetiklashtiradi, tinchlantiradi va parvarishga tayyorlaydi." } },
    { id: 8,  cat: "care", art: "jar", c: ["#efe8f7", "#a68bd1"], price: 120000, stock: 11, badge: "new",
      name: { ru: "Ночная маска", uz: "Tungi niqob" }, sub: { ru: "Восстановление во сне, 75 мл", uz: "Uyquda tiklanish, 75 ml" },
      desc: { ru: "Питает и восстанавливает кожу, пока вы спите.", uz: "Uxlayotganingizda terini oziqlantiradi va tiklaydi." } },
    { id: 9,  cat: "care", art: "tube", c: ["#fff6da", "#f4c84b"], price: 135000, stock: 20,
      name: { ru: "Солнцезащитный крем SPF 50", uz: "Quyoshdan himoya kremi SPF 50" }, sub: { ru: "Лёгкая текстура, 50 мл", uz: "Yengil tekstura, 50 ml" },
      desc: { ru: "Не оставляет белых следов, подходит под макияж.", uz: "Oq iz qoldirmaydi, makiyaj ostiga mos." } },
    { id: 10, cat: "care", art: "bottle", c: ["#e9f5ef", "#7cc3a0"], price: 75000, stock: 0,
      name: { ru: "Мицеллярная вода", uz: "Mitsellyar suv" }, sub: { ru: "400 мл", uz: "400 ml" },
      desc: { ru: "Мягко снимает макияж даже с глаз.", uz: "Makiyajni, hatto ko'zdan ham, yumshoq tozalaydi." } },

    { id: 11, cat: "makeup", art: "lipstick", c: ["#f9d5dd", "#c2185b"], price: 69000, stock: 40, badge: "hit",
      name: { ru: "Матовая помада", uz: "Mat lab bo'yog'i" }, sub: { ru: "Стойкая, 5 оттенков", uz: "Turg'un, 5 ta rang" },
      desc: { ru: "Бархатный матовый финиш, не сушит губы.", uz: "Baxmal mat qoplama, labni quritmaydi." },
      shades: ["#c2185b", "#a4373f", "#d4766f", "#8e3b5a", "#e8a092"] },
    { id: 12, cat: "makeup", art: "tint", c: ["#ffe2e6", "#ef5a78"], price: 55000, stock: 26,
      name: { ru: "Тинт для губ", uz: "Lab tinti" }, sub: { ru: "Эффект «зацелованных» губ", uz: "Tabiiy lab effekti" },
      desc: { ru: "Лёгкий, как вода, держится весь день.", uz: "Suvdek yengil, kun bo'yi saqlanadi." },
      shades: ["#ef5a78", "#e2463b", "#c76b8f"] },
    { id: 13, cat: "makeup", art: "palette", c: ["#f6e3d7", "#b9826a"], price: 148000, old: 185000, stock: 8, badge: "sale",
      name: { ru: "Палетка теней Nude", uz: "Nude soyalar palitrasi" }, sub: { ru: "12 оттенков", uz: "12 ta rang" },
      desc: { ru: "Матовые и сияющие нюдовые оттенки на день и вечер.", uz: "Kunduzgi va kechki uchun mat va yaltiroq nude ranglar." } },
    { id: 14, cat: "makeup", art: "foundation", c: ["#f3dcc8", "#c99a74"], price: 155000, stock: 14,
      name: { ru: "Тональный крем", uz: "Tonal krem" }, sub: { ru: "Естественное покрытие, 30 мл", uz: "Tabiiy qoplama, 30 ml" },
      desc: { ru: "Невесомый, выравнивает тон, не забивает поры.", uz: "Vaznsiz, rangni tekislaydi, teshiklarni yopmaydi." },
      shades: ["#f3dcc8", "#e8c4a2", "#d6a77f", "#b98458"] },
    { id: 15, cat: "makeup", art: "mascara", c: ["#ece8ee", "#2b2430"], price: 79000, stock: 33, badge: "new",
      name: { ru: "Тушь для объёма", uz: "Hajm beruvchi tush" }, sub: { ru: "Не осыпается", uz: "To'kilmaydi" },
      desc: { ru: "Объём и разделение ресниц без комочков.", uz: "Kipriklarga hajm, bo'laklarsiz." } },

    { id: 16, cat: "jewelry", art: "necklace", c: ["#f5efe6", "#d9c7a6"], price: 210000, stock: 7, badge: "hit",
      name: { ru: "Колье с жемчугом", uz: "Marvaridli marjon" }, sub: { ru: "Люкс-бижутерия", uz: "Lyuks zargarlik" },
      desc: { ru: "Классика, которая подходит и к платью, и к рубашке.", uz: "Ko'ylakka ham, bluzkaga ham mos klassika." } },
    { id: 17, cat: "jewelry", art: "earrings", c: ["#fbf1e4", "#d4a64a"], price: 120000, stock: 15,
      name: { ru: "Серьги-капли", uz: "Tomchi sirg'alar" }, sub: { ru: "Позолота", uz: "Oltin suvi" },
      desc: { ru: "Лёгкие серьги с блеском, не тянут уши.", uz: "Yengil yaltiroq sirg'alar, quloqni tortmaydi." } },
    { id: 18, cat: "jewelry", art: "bracelet", c: ["#f2f0ee", "#b8b1a8"], price: 95000, stock: 19, badge: "new",
      name: { ru: "Браслет-цепь", uz: "Zanjir bilaguzuk" }, sub: { ru: "Серебристый тон", uz: "Kumush rang" },
      desc: { ru: "Минималистичный браслет на каждый день.", uz: "Har kunlik minimalist bilaguzuk." } },
    { id: 19, cat: "jewelry", art: "ring", c: ["#fdf3ea", "#d6b06a"], price: 85000, stock: 21,
      name: { ru: "Кольцо с фианитом", uz: "Fianitli uzuk" }, sub: { ru: "Размеры 16–19", uz: "O'lchamlar 16–19" },
      desc: { ru: "Аккуратное кольцо с ярким камнем.", uz: "Yorqin toshli nafis uzuk." },
      variants: [{ ru: "16", uz: "16", price: 85000 }, { ru: "17", uz: "17", price: 85000 }, { ru: "18", uz: "18", price: 85000 }, { ru: "19", uz: "19", price: 85000 }] },
    { id: 20, cat: "jewelry", art: "gift", c: ["#ffe3ea", "#e0789a"], price: 350000, stock: 6, badge: "gift",
      name: { ru: "Набор «Подарок для неё»", uz: "«Unga sovg'a» to'plami" }, sub: { ru: "Парфюм + крем + серьги", uz: "Atir + krem + sirg'a" },
      desc: { ru: "Готовый подарок в фирменной коробке с лентой.", uz: "Brend qutida lenta bilan tayyor sovg'a." } }
  ],

  zones: [
    { id: "chirchiq", ru: "Чирчик",                     uz: "Chirchiq",                   price: 20000, free: 300000, days: { ru: "сегодня", uz: "bugun" } },
    { id: "tashkent", ru: "Ташкент",                    uz: "Toshkent",                   price: 35000, free: 500000, days: { ru: "1 день", uz: "1 kun" } },
    { id: "region",   ru: "Ташкентская область",        uz: "Toshkent viloyati",          price: 30000, free: 500000, days: { ru: "1–2 дня", uz: "1–2 kun" } },
    { id: "country",  ru: "Другие регионы Узбекистана", uz: "O'zbekistonning boshqa hududlari", price: 40000, free: 0, days: { ru: "2–4 дня", uz: "2–4 kun" } },
    { id: "pickup",   ru: "Самовывоз: Chirchiq bozor",  uz: "Olib ketish: Chirchiq bozor", price: 0, free: 0, days: { ru: "9:00–17:00", uz: "9:00–17:00" } }
  ],

  payments: [
    { id: "payme", name: "Payme", online: true },
    { id: "click", name: "Click", online: true },
    { id: "uzum",  name: "Uzum Bank", online: true },
    { id: "cash",  ru: "Наличными при получении", uz: "Qabul qilganda naqd", online: false },
    { id: "card",  ru: "Переводом на карту",      uz: "Kartaga o'tkazma",    online: false }
  ],

  statuses: [
    { id: "new",       ru: "Новый",        color: "#e0789a" },
    { id: "paid",      ru: "Оплачен",      color: "#2e9e6b" },
    { id: "packing",   ru: "Собирается",   color: "#d49a2a" },
    { id: "shipping",  ru: "В пути",       color: "#3d7fd1" },
    { id: "done",      ru: "Выполнен",     color: "#6b6b6b" },
    { id: "cancelled", ru: "Отменён",      color: "#b5473a" }
  ],

  promo: { DEMO10: 10, KAB15: 15 }
};

/* ---------- money ---------- */
KAB.fmt = (n, lang = 'ru') => Math.round(n).toLocaleString('ru-RU').replace(/ |,/g, ' ') + (lang === 'uz' ? " so'm" : ' сум');

/* ---------- state kept in the browser ---------- */
KAB.KEY = 'kab_demo_v1';
KAB.load = () => {
  let s = null;
  try { s = JSON.parse(localStorage.getItem(KAB.KEY)); } catch (e) {}
  if (!s || s.v !== 1) s = KAB.fresh();
  return s;
};
KAB.save = s => { try { localStorage.setItem(KAB.KEY, JSON.stringify(s)); } catch (e) {} };
KAB.fresh = () => ({
  v: 1,
  products: KAB.products.map(p => ({ id: p.id, price: p.price, old: p.old || 0, stock: p.stock, hidden: false })),
  zones: KAB.zones.map(z => ({ id: z.id, price: z.price, free: z.free })),
  orders: KAB.seedOrders(),
  nextNo: 1048
});
// merge the editable fields from the admin (price, stock, visibility) into the catalogue
KAB.catalog = s => [...KAB.products, ...(s.custom || [])].map(p => {
  const o = s.products.find(x => x.id === p.id) || {};
  return { ...p, price: o.price ?? p.price, old: o.old ?? p.old ?? 0, stock: o.stock ?? p.stock, hidden: !!o.hidden };
});
KAB.zoneList = s => KAB.zones.map(z => ({ ...z, ...(s.zones.find(x => x.id === z.id) || {}) }));

/* a week of believable orders so the admin dashboard is not empty */
KAB.seedOrders = () => {
  const names = ['Дилноза', 'Malika', 'Гузаль', 'Sevara', 'Нигора', 'Kamola', 'Феруза', 'Madina', 'Шахноза', 'Zarina'];
  const pick = [[1, 1], [5, 2], [11, 1], [16, 1], [13, 1], [3, 1], [20, 1], [6, 1], [12, 2], [17, 1], [2, 1], [7, 1]];
  const pays = ['payme', 'click', 'cash', 'payme', 'uzum', 'card', 'click', 'cash'];
  const zs = ['chirchiq', 'chirchiq', 'tashkent', 'pickup', 'region', 'chirchiq', 'country', 'tashkent'];
  const st = ['done', 'done', 'done', 'shipping', 'done', 'packing', 'paid', 'new'];
  const out = []; const now = Date.now();
  for (let i = 0; i < 14; i++) {
    const items = [pick[i % pick.length], pick[(i * 5 + 3) % pick.length]].slice(0, 1 + (i % 2))
      .map(([id, q]) => { const p = KAB.products.find(x => x.id === id); return { id, q, price: p.price, name: p.name.ru }; });
    const sum = items.reduce((a, it) => a + it.price * it.q, 0);
    const z = KAB.zones.find(x => x.id === zs[i % zs.length]);
    const ship = z.free && sum >= z.free ? 0 : z.price;
    out.push({
      no: 1034 + i, at: now - (13 - i) * 11.5 * 3600e3 - (i % 3) * 3600e3, name: names[i % names.length],
      phone: '+998 9' + (i % 10) + ' ' + (100 + i * 37) + ' ' + (10 + i) + ' ' + (20 + i * 3), zone: z.id, address: z.id === 'pickup' ? '' : 'ул. Амира Темура, ' + (5 + i),
      pay: pays[i % pays.length], status: i >= 12 ? (i === 13 ? 'new' : 'paid') : st[i % st.length], items, sum, ship, discount: 0, total: sum + ship, comment: ''
    });
  }
  return out;
};

/* ---------- product illustrations (inline SVG, no photos needed for the demo) ---------- */
KAB.art = (type, c1, c2, id = 'a') => {
  const g = `<defs><linearGradient id="g${id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/></linearGradient>
    <linearGradient id="s${id}" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#fff" stop-opacity=".55"/><stop offset=".35" stop-color="#fff" stop-opacity="0"/></linearGradient>
    <linearGradient id="m${id}" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#b8956a"/><stop offset=".5" stop-color="#f3e2bf"/><stop offset="1" stop-color="#a7834f"/></linearGradient></defs>`;
  const shadow = `<ellipse cx="100" cy="182" rx="52" ry="7" fill="#000" opacity=".08"/>`;
  const shapes = {
    perfume: `<rect x="86" y="28" width="28" height="22" rx="4" fill="url(#m${id})"/><rect x="92" y="48" width="16" height="10" fill="#d9cdb8"/>
      <rect x="58" y="58" width="84" height="120" rx="16" fill="url(#g${id})"/><rect x="58" y="58" width="84" height="120" rx="16" fill="url(#s${id})"/>
      <rect x="74" y="104" width="52" height="30" rx="3" fill="#fff" opacity=".82"/><text x="100" y="124" font-family="Georgia,serif" font-size="12" text-anchor="middle" fill="#3b2b30">K.A.B</text>`,
    perfume2: `<rect x="80" y="30" width="40" height="30" rx="20" fill="url(#m${id})"/><rect x="93" y="58" width="14" height="10" fill="#cbbd9f"/>
      <circle cx="100" cy="124" r="56" fill="url(#g${id})"/><circle cx="100" cy="124" r="56" fill="url(#s${id})"/>
      <circle cx="100" cy="124" r="40" fill="none" stroke="#fff" stroke-opacity=".35" stroke-width="2"/><text x="100" y="129" font-family="Georgia,serif" font-size="13" text-anchor="middle" fill="#fff" fill-opacity=".9">K.A.B</text>`,
    jar: `<rect x="52" y="78" width="96" height="22" rx="8" fill="url(#m${id})"/><rect x="48" y="98" width="104" height="80" rx="18" fill="url(#g${id})"/>
      <rect x="48" y="98" width="104" height="80" rx="18" fill="url(#s${id})"/><rect x="66" y="124" width="68" height="28" rx="4" fill="#fff" opacity=".8"/>
      <text x="100" y="142" font-family="Georgia,serif" font-size="11" text-anchor="middle" fill="#3b2b30">K.A.B</text>`,
    serum: `<rect x="92" y="18" width="16" height="30" rx="8" fill="#2b2430"/><rect x="88" y="46" width="24" height="14" rx="3" fill="url(#m${id})"/>
      <path d="M72 70 Q72 60 82 60 L118 60 Q128 60 128 70 L128 168 Q128 178 118 178 L82 178 Q72 178 72 168Z" fill="url(#g${id})"/>
      <path d="M72 70 Q72 60 82 60 L118 60 Q128 60 128 70 L128 168 Q128 178 118 178 L82 178 Q72 178 72 168Z" fill="url(#s${id})"/>
      <rect x="80" y="110" width="40" height="34" rx="3" fill="#fff" opacity=".85"/><text x="100" y="131" font-family="Georgia,serif" font-size="11" text-anchor="middle" fill="#3b2b30">C</text>`,
    bottle: `<rect x="84" y="20" width="32" height="26" rx="5" fill="url(#m${id})"/><path d="M88 46 L112 46 L112 58 Q140 66 140 92 L140 170 Q140 180 130 180 L70 180 Q60 180 60 170 L60 92 Q60 66 88 58Z" fill="url(#g${id})"/>
      <path d="M88 46 L112 46 L112 58 Q140 66 140 92 L140 170 Q140 180 130 180 L70 180 Q60 180 60 170 L60 92 Q60 66 88 58Z" fill="url(#s${id})"/>
      <rect x="72" y="112" width="56" height="40" rx="4" fill="#fff" opacity=".82"/><text x="100" y="136" font-family="Georgia,serif" font-size="11" text-anchor="middle" fill="#3b2b30">K.A.B</text>`,
    tube: `<path d="M66 30 L134 30 L126 150 L74 150Z" fill="url(#g${id})"/><path d="M66 30 L134 30 L126 150 L74 150Z" fill="url(#s${id})"/>
      <rect x="64" y="22" width="72" height="10" rx="2" fill="#e8dcc8"/><rect x="78" y="150" width="44" height="30" rx="6" fill="url(#m${id})"/>
      <text x="100" y="86" font-family="Georgia,serif" font-size="13" text-anchor="middle" fill="#fff">SPF 50</text>`,
    lipstick: `<rect x="76" y="110" width="48" height="70" rx="6" fill="#1f1a1d"/><rect x="76" y="110" width="48" height="70" rx="6" fill="url(#s${id})"/>
      <rect x="80" y="84" width="40" height="30" rx="3" fill="url(#m${id})"/><path d="M86 84 L86 46 Q86 30 114 22 L114 84Z" fill="${c2}"/>
      <path d="M86 84 L86 46 Q86 30 114 22 L114 84Z" fill="url(#s${id})"/>`,
    tint: `<rect x="82" y="22" width="36" height="60" rx="18" fill="#1f1a1d"/><rect x="74" y="80" width="52" height="100" rx="14" fill="url(#g${id})"/>
      <rect x="74" y="80" width="52" height="100" rx="14" fill="url(#s${id})"/><text x="100" y="138" font-family="Georgia,serif" font-size="11" text-anchor="middle" fill="#fff">TINT</text>`,
    palette: `<rect x="34" y="52" width="132" height="110" rx="14" fill="#1f1a1d"/><rect x="42" y="60" width="116" height="94" rx="8" fill="#2c2528"/>
      ${['#f3d9c9', '#e7b9a0', '#c98e74', '#a06850', '#f0c2b6', '#d89a8c', '#b86f62', '#7c4a3f', '#f6e3cf', '#e2c19e', '#c7a07a', '#8d6a4e']
        .map((col, i) => `<circle cx="${58 + (i % 4) * 28}" cy="${78 + Math.floor(i / 4) * 28}" r="11" fill="${col}"/>`).join('')}`,
    foundation: `<rect x="86" y="24" width="28" height="30" rx="4" fill="#1f1a1d"/><rect x="68" y="52" width="64" height="128" rx="10" fill="url(#g${id})"/>
      <rect x="68" y="52" width="64" height="128" rx="10" fill="url(#s${id})"/><rect x="78" y="100" width="44" height="34" rx="3" fill="#fff" opacity=".7"/>
      <text x="100" y="121" font-family="Georgia,serif" font-size="10" text-anchor="middle" fill="#3b2b30">SKIN</text>`,
    mascara: `<rect x="90" y="18" width="20" height="74" rx="10" fill="url(#m${id})"/><rect x="88" y="88" width="24" height="94" rx="10" fill="${c2}"/>
      <rect x="88" y="88" width="24" height="94" rx="10" fill="url(#s${id})"/><text x="100" y="140" font-family="Georgia,serif" font-size="9" text-anchor="middle" fill="#fff" transform="rotate(-90 100 140)">VOLUME</text>`,
    necklace: `<path d="M40 40 Q100 190 160 40" fill="none" stroke="#cdbb98" stroke-width="2"/>
      ${Array.from({ length: 15 }, (_, i) => { const t = i / 14, x = 40 + 120 * t, y = 40 + 2 * (150 - 40) * t * (1 - t) * 1.0 + (1 - 4 * (t - .5) ** 2) * 18; return `<circle cx="${x}" cy="${y}" r="${i === 7 ? 13 : 8}" fill="#fff"/><circle cx="${x}" cy="${y}" r="${i === 7 ? 13 : 8}" fill="url(#g${id})" opacity=".55"/><circle cx="${x - 2.5}" cy="${y - 2.5}" r="2.5" fill="#fff"/>`; }).join('')}`,
    earrings: `${[70, 130].map(x => `<circle cx="${x}" cy="44" r="7" fill="none" stroke="url(#m${id})" stroke-width="4"/>
      <path d="M${x} 52 Q${x - 26} 112 ${x} 150 Q${x + 26} 112 ${x} 52Z" fill="url(#m${id})"/><path d="M${x} 72 Q${x - 14} 112 ${x} 134 Q${x + 14} 112 ${x} 72Z" fill="#fff" opacity=".5"/>`).join('')}`,
    bracelet: `<ellipse cx="100" cy="110" rx="62" ry="40" fill="none" stroke="url(#m${id})" stroke-width="10" stroke-dasharray="14 5"/>
      <ellipse cx="100" cy="110" rx="62" ry="40" fill="none" stroke="#fff" stroke-opacity=".5" stroke-width="2"/>`,
    ring: `<ellipse cx="100" cy="128" rx="44" ry="44" fill="none" stroke="url(#m${id})" stroke-width="10"/>
      <path d="M100 52 L122 76 L100 98 L78 76Z" fill="#fff"/><path d="M100 52 L122 76 L100 98 L78 76Z" fill="url(#g${id})" opacity=".35"/><path d="M100 52 L111 76 L100 98Z" fill="#fff" opacity=".7"/>`,
    gift: `<rect x="44" y="82" width="112" height="96" rx="8" fill="url(#g${id})"/><rect x="40" y="66" width="120" height="26" rx="6" fill="${c2}"/>
      <rect x="92" y="66" width="16" height="112" fill="#fff" opacity=".85"/><path d="M100 66 Q76 30 66 50 Q60 66 100 66 Q140 66 134 50 Q124 30 100 66Z" fill="#fff" opacity=".9"/>`
  };
  return `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">${g}${shadow}${shapes[type] || shapes.jar}</svg>`;
};

/* ---------- photos (free Unsplash licence, loaded straight from images.unsplash.com) ----------
   If a photo fails to load, KAB.fail swaps it for the drawn illustration, so nothing ever shows broken. */
KAB.IMG = {
  1: '1594035910387-fea47794261f', 2: '1592945403244-b3fbafd7f539', 3: '1541643600914-78b084683601', 4: '1587017539504-67cfbddac569',
  5: '1570194065650-d99fb4bedf0a', 6: '1620916566398-39f1143ab7be', 7: '1608248543803-ba4f8c70ae0b', 8: '1611930022073-b7a4ba5fcccd',
  9: '1556228578-8c89e6adf883', 10: '1598440947619-2c35fc9aa908', 11: '1586495777744-4413f21062fa', 12: '1625093742435-6fa192b6fb10',
  13: '1512496015851-a90fb38ba796', 14: '1631729371254-42c2892f0e6e', 15: '1596462502278-27bfdc403348', 16: '1599643478518-a784e5dc4c8f',
  17: '1535632066927-ab7c9ab60908', 18: '1611591437281-460bfbe1220a', 19: '1605100804763-247f67b3557e', 20: '1549465220-1a8b9238cd48'
};
KAB.products.forEach(p => p.img = KAB.IMG[p.id]);
KAB.SCENE = {
  hero: '1487412947147-5cebf100ffc2',
  cats: { perfume: '1541643600914-78b084683601', care: '1556228578-8c89e6adf883', makeup: '1522335789203-aabd1fc54bc9', jewelry: '1515562141207-7a88fb7ce338' },
  insta: ['1522337360788-8b13dee7a37e', '1571781926291-c477ebfd024b', '1512496015851-a90fb38ba796', '1599643478518-a784e5dc4c8f', '1594035910387-fea47794261f', '1586495777744-4413f21062fa'],
  gift: '1549465220-1a8b9238cd48'
};
KAB.photo = (id, w = 600, h = w, zoom = 0) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&h=${h}&q=78` + (zoom ? `&crop=focalpoint&fp-x=.5&fp-y=.5&fp-z=${zoom}` : '');
let artSeq = 0;
// <img> for a product, falling back to its illustration (data-* carry what to draw)
KAB.pic = (p, w = 600, zoom = 0, c2) => p.img
  ? `<img class="ph" src="${KAB.photo(p.img, w, w, zoom)}" alt="" loading="lazy" decoding="async" onerror="KAB.fail(this)" data-t="${p.art}" data-a="${p.c[0]}" data-b="${c2 || p.c[1]}">`
  : KAB.art(p.art, p.c[0], c2 || p.c[1], 'n' + (++artSeq));
// <img> for a scene photo; on failure the box just keeps its gradient background
KAB.scene = (id, w, h, cls = 'ph') => `<img class="${cls}" src="${KAB.photo(id, w, h)}" alt="" loading="lazy" decoding="async" onerror="this.remove()">`;
KAB.fail = img => { const d = img.dataset; img.outerHTML = KAB.art(d.t, d.a, d.b, 'x' + (++artSeq)); };

KAB.howto = {
  perfume: { ru: 'Нанесите 2–3 распыления на запястья, шею и за ушами с расстояния 15–20 см. Не растирайте — так аромат раскрывается лучше и держится дольше.',
             uz: "15–20 sm masofadan bilak, bo'yin va quloq orqasiga 2–3 marta seping. Ishqalamang — shunda atir yaxshiroq ochiladi va uzoqroq saqlanadi." },
  care:    { ru: 'Наносите на чистую кожу утром и вечером лёгкими похлопывающими движениями. Перед первым применением проверьте на небольшом участке кожи.',
             uz: "Ertalab va kechqurun toza teriga yengil urib surting. Birinchi qo'llashdan oldin terining kichik qismida sinab ko'ring." },
  makeup:  { ru: 'Наносите на подготовленную кожу после увлажняющего крема. Для стойкости зафиксируйте пудрой или спреем.',
             uz: "Namlovchi kremdan keyin tayyorlangan teriga surting. Uzoq saqlanishi uchun upa yoki sprey bilan mahkamlang." },
  jewelry: { ru: 'Храните в мешочке отдельно от других украшений. Снимайте перед душем и бассейном, избегайте контакта с парфюмом.',
             uz: "Boshqa taqinchoqlardan alohida xaltachada saqlang. Dush va basseyndan oldin yeching, atir tegishidan saqlang." }
};

/* ---------- order server (Cloudflare Worker, see server/worker.js) ----------
   Empty = demo mode: orders stay in this browser only.
   Set to the Worker address, e.g. 'https://kab-orders.<name>.workers.dev', and orders from any phone
   reach the admin panel on any device and the shop's Telegram. */
KAB.API = '';
KAB.call = async (path, { method = 'GET', body, pin } = {}) => {
  const r = await fetch(KAB.API.replace(/\/$/, '') + path, { method, headers: { 'Content-Type': 'application/json', ...(pin ? { 'X-Pin': pin } : {}) }, body: body === undefined ? undefined : JSON.stringify(body) });
  const data = await r.json().catch(() => null);
  if (!r.ok) throw Object.assign(new Error((data && data.error) || 'HTTP ' + r.status), { status: r.status });
  return data;
};
// apply admin settings from the server (prices, stock, visibility, zones, added products) to a local state object
KAB.applyRemote = (S, st) => {
  if (!st) return S;
  if (Array.isArray(st.custom)) S.custom = st.custom;
  // overlay saved values by id on the full list, so a partial or older save never drops products or zones
  const merge = (base, saved) => base.map(x => ({ ...x, ...((saved || []).find(y => y.id === x.id) || {}) }));
  const fresh = KAB.fresh();
  const extra = (S.custom || []).map(c => ({ id: c.id, price: c.price, old: c.old || 0, stock: c.stock, hidden: false }));
  S.products = merge([...fresh.products, ...extra], st.products);
  S.zones = merge(fresh.zones, st.zones);
  return S;
};
