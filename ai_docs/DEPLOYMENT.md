# DEPLOYMENT — Spot & Choo's

## Локальный запуск
```bash
npm install
node ./node_modules/next/dist/bin/next dev
```
Сервер разработки запускается на `http://localhost:3000`.

## Важно: проблема с npm-скриптами
Папка проекта содержит апостроф (`Spot & Choo's`). Из-за этого стандартная команда `npm run dev` ломает путь к `next` и выдаёт ошибку `Cannot find module`.

**Решение:** запускать `next` напрямую через `node ./node_modules/next/dist/bin/next dev`.

## Альтернатива
Если нужно использовать `npm run dev`, переименуйте папку проекта без апострофа и амперсанда, например:
```
C:\Users\Admin\Desktop\SpotAndChoos
```

## Сборка
```bash
node ./node_modules/next/dist/bin/next build
node ./node_modules/next/dist/bin/next start
```

## Требования
- Node.js 18+
- npm / pnpm / yarn

## Среды
- `dev` — локальный запуск (`http://localhost:3000`)
- `staging` — TBD
- `prod` — TBD (рекомендуется Vercel для Next.js)

## CI/CD
Не настроено.

## Хрупкие места
- Апостроф в пути к проекту ломает npm-скрипты.
- Внешние изображения на `/menu`, `/about`, `/gallery` зависят от доступности `spotandchoos.com` и `cdn.prod.website-files.com`. Рекомендуется либо скачать их в `public/`, либо настроить `images.remotePatterns` в `next.config.ts`.
- Фото точек в Locations — локальные (`public/img-webp/{orig,kom45,lite,NSTU,Koltsovo}.png`), `quality=100` — требует настройки `images.qualities: [75, 100]` в `next.config.ts` (иначе браузерные warns).
- Форма обратной связи использует Google Forms; при изменении формы нужно обновить entry IDs в `src/lib/data.ts`.
- `herovideo.mp4` (45 МБ) — большое видео, может требовать оптимизации для продакшена.
- `overflow-x: hidden` в секциях создает лишний скролл-контейнер — использовать `overflow-x: clip`.
