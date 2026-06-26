# API — Spot & Choo's

## Статус
API минимальное. Сайт преимущественно статичный. Форма обратной связи отправляет данные напрямую в Google Forms, а не через собственный backend.

## Существующие endpoints

### `GET /api/health`
- **Файл:** `src/app/api/health/route.ts`
- **Назначение:** проверка работоспособности
- **Ответ:** `{ status: "ok" }`

## Возможные будущие endpoints
- `GET /api/menu` — динамическое меню
- `GET /api/locations` — список точек
- `POST /api/contact` — собственный backend для формы обратной связи (сейчас используется Google Forms)
