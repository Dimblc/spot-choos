# PROJECT_OVERVIEW — Spot & Choo's

## Назначение
Лендинг / сайт бургерной для новосибирского бренда Spot & Choo's. Аналог по стилю и анимациям сайта CRAV Burgers, но адаптирован под локальный рынок Новосибирска.

## Текущий статус
- Базовая структура проекта создана.
- Конфиги и стартовые страницы на месте.
- Компоненты-секции созданы и анимированы.
- Hero — зацикленное видео `herovideo.mp4` (`autoPlay muted loop`), без scroll-driven.
- Реальные фото бургеров, ингредиентов, точек, команды добавлены в `public/img-webp/`.
- Реальные данные по локациям, меню, галерее и странице «О нас» в `src/lib/data.ts`.
- Страница `/about` — премиум-раздел с hero, 3 карточками, баннером, CTA, декоративными SVG и микроанимациями (`AboutPageContent`).
- Страница `/menu` — премиум-раздел с hero, преимуществами, карточками филиалов, картой покрытия, CTA, лайтбоксом (`MenuPageContent`).
- Секция Locations (главная) — премиум-дизайн: жёлтый градиент, doodle-декор, 12-кол. сетка 3+2, PNG-стикеры, штамп, starburst.
- Добавлена страница `/gallery` с категориями фото.
- Форма обратной связи на `/contact` отправляет данные в Google Forms.
- Внешние изображения проходят через `RemoteImage` с onError-fallback и `quality` пропом.
- Лоадер защищён safety-timeout; скролл управляется через `lenis.stop()/start()`.
- При смене маршрута — `ScrollTrigger.refresh()` + `lenis.resize()`.
- Добавлен шрифт Manrope для основного текста; CSS keyframes для микроанимаций.

## Технологический стек
- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animation:** GSAP (ScrollTrigger, SplitText), Framer Motion (ImageReveal), CSS keyframes (wobble, pulse-soft, draw-wave, float-soft)
- **Smooth scroll:** Lenis
- **Fonts:** Google Fonts (Modak для латиницы, Manrope для основного текста), локальный `PoppingCute.ttf` для кириллицы

## Целевые пользователи
Жители Новосибирска, ищущие крафтовые бургеры с доставкой или самовывозом.

## Ключевые секции (главная)
1. Hero — зацикленное видео `herovideo.mp4`, кнопка «СМОТРЕТЬ МЕНЮ».
2. About — о бренде, заголовок, ImageReveal из 3 фото, стикеры.
3. Menu — красный экран, статистика, бургер с руками.
4. Ingredients — заголовок и описание качества.
5. Locations — премиум-секция «НАШИ ТОЧКИ»: жёлтый градиент, doodle-декор, 3+2 карточки, стикеры, штамп, starburst.

## Дополнительные страницы
- `/about` — премиум-раздел «О нас» (`AboutPageContent`): hero, 3 карточки, баннер, CTA.
- `/menu` — премиум-раздел меню (`MenuPageContent`): hero, преимущества, карточки филиалов, карта покрытия, лайтбокс.
- `/gallery` — галерея с категориями фото.
- `/contact` — контакты и форма обратной связи (Google Forms).

## Внешние изображения
Часть контента (меню, галерея, фото на `/about`) загружается с внешних CDN (`cdn.prod.website-files.com`, `spotandchoos.com`). В `next.config.ts` настроен `images.remotePatterns`. Все внешние изображения рендерятся через `RemoteImage` (`src/components/ui/remote-image.tsx`) с onError-fallback.
