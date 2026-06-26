# PROJECT_OVERVIEW — Spot & Choo's

## Назначение
Лендинг / сайт бургерной для новосибирского бренда Spot & Choo's. Аналог по стилю и анимациям сайта CRAV Burgers, но адаптирован под локальный рынок Новосибирска.

## Текущий статус
- Базовая структура проекта создана.
- Конфиги и стартовые страницы на месте.
- Компоненты-секции созданы и анимированы.
- Реальные фото бургеров и ингредиентов добавлены в `public/img-webp/`.
- Реальные данные по локациям, меню, галерее и странице «О нас» в `src/lib/data.ts`.
- Добавлена страница `/gallery` с категориями фото.
- Форма обратной связи на главной и на `/contact` отправляет данные в Google Forms (конфигурация в `src/lib/data.ts`).
- Оставшиеся placeholder: самолёт доставки (`public/img/plane.png`) и некоторые внешние изображения, загружаемые с `cdn.prod.website-files.com` и `spotandchoos.com`.

## Технологический стек
- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animation:** GSAP (ScrollTrigger, SplitText, MorphSVG), Framer Motion (для компонента `ImageReveal` в секции About)
- **Smooth scroll:** Lenis
- **Fonts:** Google Fonts via `next/font` (Modak для латиницы), локальный `PoppingCute.ttf` для кириллицы

## Целевые пользователи
Жители Новосибирска, ищущие крафтовые бургеры с доставкой или самовывозом.

## Ключевые секции
1. Hero — главный экран с бургером.
2. About — о бренде, CTA на меню, галерея из 3 фото.
3. Menu — красный экран с предложениями.
4. Ingredients — летающие ингредиенты и качество.
5. Locations — районы Новосибирска (доставка/точки).
6. Contact — контакты и форма обратной связи.

## Внешние изображения
Часть контента (меню, галерея, фото на `/about`) загружается с внешних CDN (`cdn.prod.website-files.com`, `spotandchoos.com`). В `next.config.ts` не настроен `images.remotePatterns`, поэтому используется обычный `<img>` с отключением ESLint-правила `@next/next/no-img-element`.
