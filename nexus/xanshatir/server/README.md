# Xan Shatir — сервер заказов (Cloudflare Workers, бесплатно)

Сервер принимает заказы со столов (NFC-меню) и с сайта доставки, хранит их, показывает в панели владельца и присылает каждый заказ и вызов официанта в Telegram.
Код: [`worker.js`](worker.js). Токен бота и PIN хранятся в настройках Cloudflare, **не в коде**.

Пока сервер не подключён, меню и панель работают в демо-режиме через временный канал ntfy.sh (заказы живут около 12 часов).

## Настройка (≈ 10 минут)

1. **Бот.** В Telegram откройте @BotFather → `/newbot` → придумайте имя (например, `Xan Shatir заказы`) → сохраните токен. Никому его не пересылайте.
2. **Worker.** В Cloudflare: «Workers & Pages» → «Create» → «Create Worker» → имя `xan-orders` → «Deploy».
3. **Код.** «Edit code» → удалите пример → вставьте содержимое
   <https://raw.githubusercontent.com/hoshimov-dev/hoshimov-dev.github.io/main/nexus/xanshatir/server/worker.js> → «Deploy».
4. **Хранилище.** «Storage & Databases» → «KV» → «Create» → имя `xan`.
   Затем Worker `xan-orders` → «Settings» → «Bindings» → «Add» → «KV namespace»: Variable name **`XAN`**, namespace **`xan`**.
5. **Секреты.** Worker → «Settings» → «Variables and Secrets» → «Add», тип **Secret**:
   - `BOT_TOKEN` — токен из шага 1;
   - `ADMIN_PIN` — PIN владельца для панели (без него будет `1234`).
6. **Адрес.** Скопируйте адрес Worker вида `https://xan-orders.ВАШ-ЛОГИН.workers.dev` и пришлите разработчику —
   его вписывают в `API` в `../live.js`, после чего меню, доставка и панель работают через сервер.
7. **Telegram.** Откройте панель → введите PIN → «Telegramni ulash / Подключить Telegram» → по ссылке со страницы откройте бота → «Start».
   Так же может подключиться каждый официант и курьер. Отключить: команда `/stop`.

Проверка: адрес Worker в браузере должен показать `{"ok":true,...,"telegram":true}`.

## Обновление кода

Новая версия `worker.js` вставляется так же, как в шаге 3. Заказы, история продаж и подключённые чаты сохраняются: они лежат в KV, а не в коде.

## Лимиты бесплатного тарифа

Бесплатный KV даёт около 1000 записей в день. Каждый заказ — это 3–5 записей (заказ, «принят», «в пути», «оплачен»),
то есть примерно 200 заказов в день. Если ресторан вырастет больше, нужен платный тариф Workers ($5 в месяц).
Точные лимиты: <https://developers.cloudflare.com/kv/platform/limits/>.
