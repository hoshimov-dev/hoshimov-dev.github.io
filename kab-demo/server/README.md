# K.A.B — сервер заказов (Cloudflare Workers, бесплатно)

Сервер принимает заказы с сайта с любого телефона, хранит их, отдаёт в админ-панель и присылает каждый заказ в Telegram.
Ещё он принимает отзывы о товарах: новый отзыв приходит в Telegram и появляется на сайте только после одобрения в админ-панели.
Код: [`worker.js`](worker.js). Токен бота и PIN хранятся в настройках Cloudflare, **не в коде**.

## Настройка (≈ 10 минут)

1. **Аккаунт.** Зарегистрируйтесь на <https://dash.cloudflare.com/sign-up> (бесплатно) и подтвердите почту.
2. **Создать Worker.** Слева «Workers & Pages» → «Create» → «Create Worker» → имя `kab-orders` → «Deploy».
3. **Вставить код.** Нажмите «Edit code», удалите весь пример, вставьте содержимое
   <https://raw.githubusercontent.com/hoshimov-dev/hoshimov-dev.github.io/main/kab-demo/server/worker.js> → «Deploy».
4. **Хранилище.** Слева «Storage & Databases» → «KV» → «Create» → имя `kab`.
   Затем откройте Worker `kab-orders` → «Settings» → «Bindings» → «Add» → «KV namespace»:
   Variable name **`KAB`**, namespace **`kab`** → сохранить.
5. **Секреты.** Worker → «Settings» → «Variables and Secrets» → «Add», тип **Secret**:
   - `BOT_TOKEN` — токен от @BotFather;
   - `ADMIN_PIN` — ваш PIN для входа в админку, **ровно 4 цифры** (без него будет `1234`).
   Сохранить / «Deploy».
6. **Адрес.** Скопируйте адрес Worker вида `https://kab-orders.ВАШ-ЛОГИН.workers.dev` и пришлите разработчику —
   его вписывают в `KAB.API` в `../data.js`, после чего сайт работает в рабочем режиме.
7. **Telegram.** В админ-панели → «Настройки» → «Подключить Telegram» → откройте ссылку со страницы → «Start».
   Так же может подключиться каждый менеджер. Отключить уведомления: команда `/stop` боту.

Проверка: откройте адрес Worker в браузере — должно быть `{"ok":true,...,"telegram":true}`.

## Обновление кода

Когда в `worker.js` появляется новая версия (например, отзывы), её нужно вставить в Cloudflare заново:
Worker `kab-orders` → «Edit code» → удалить старый код → вставить новый по ссылке из шага 3 → «Deploy».
Заказы, отзывы, настройки и подключённые чаты Telegram при этом сохраняются: они лежат в хранилище KV, а не в коде.

## Лимиты бесплатного тарифа

Бесплатного тарифа Workers и KV с запасом хватает небольшому магазину (сотни заказов в день).
Точные лимиты — на <https://developers.cloudflare.com/workers/platform/limits/>.
