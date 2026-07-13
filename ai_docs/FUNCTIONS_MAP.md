# FUNCTIONS_MAP — Spot & Choo's

## UI компоненты `src/components/ui/`

### `OriginButton`
- **Файл:** `src/components/ui/origin-button.tsx`
- **Назначение:** Базовая `<button>` с hover-заливкой из точки курсора (или центра при фокусе/клавиатуре), `whileTap` scale. Использует `motion/react`.
- **Пропсы:** все стандартные `button` пропсы + `loading`, `className`.
- **Хрупкие места:** Зависит от CSS-переменных `--ic-*`, переопределяемых через `className`.

### `ProjectButton`
- **Файл:** `src/components/ui/project-button.tsx`
- **Назначение:** Обёртка с темами проекта (`red`, `light`, `dark`, `ghost`, `blob`). При наличии `href` рендерит нативный `<a>` (для `external`) или `<Link>` (внутренняя навигация) — сохраняется средняя кнопка мыши и SEO-краулинг. Без `href` рендерит `<OriginButton>` для `onClick`/`type="submit"`.
- **Пропсы:** `href?`, `external?`, `variant?`, `children`, `className`, все пропсы `OriginButton`.
- **Хрупкие места:** Внутренняя заливка дублирует логику `OriginButton` для `<a>`/`<Link>` (собственный `getCoverDiameter` и pointer-обработчики).

### `BlobButton`
- **Файл:** `src/components/ui/BlobButton.tsx`
- **Назначение:** CTA-кнопка с SVG-blob формой, morph на hover через GSAP `attr`. Построена на `next/link` (нативное поведение ссылки). Учитывает `prefers-reduced-motion`.
- **Пропсы:** `href`, `children`.
- **Хрупкие места:** Два path должны иметь одинаковую структуру anchor-точек, иначе morph дёргается.

### `ImageReveal` (`image-tiles.tsx`)
- **Файл:** `src/components/ui/image-tiles.tsx`
- **Назначение:** Анимированная композиция из трёх локальных фото с spring-анимацией появления и hover-эффектами на framer-motion. `next/image` с `fill` и `sizes`.
- **Пропсы:** `leftImage`, `middleImage`, `rightImage`, `sticker?`.

### `RemoteImage` (`remote-image.tsx`)
- **Файл:** `src/components/ui/remote-image.tsx`
- **Назначение:** Обёртка над `next/image` с onError-fallback. При ошибке загрузки внешнего CDN показывает заглушку «Фото недоступно». Используется на страницах с внешними изображениями (`/menu`, `/about`, `/gallery`) и в секции Locations.
- **Пропсы:** `src`, `alt`, `fill?`, `className?`, `sizes?`, `loading?`, `priority?`, `quality?` (по умолчанию 90).
- **Хрупкие места:** Клиентский компонент (`"use client"`) — нужен `onError`. Заглушка позиционируется `absolute inset-0`, поэтому контейнер должен быть `relative`.

## Layout компоненты `src/components/layout/`

### `Header`
- **Файл:** `src/components/layout/Header.tsx`
- **Назначение:** Фиксированная шапка с логотипом и навигацией (`ProjectButton` `variant="ghost"`). Плавно скрывается при скролле вниз, появляется вверх. Мобильное бургер-меню.
- **Хрупкие места:** z-index `z-[999]` — лайтбоксы используют `z-[1000]`, чтобы перекрывать шапку.

### `Footer`
- **Файл:** `src/components/layout/Footer.tsx`
- **Назначение:** Подвал с навигацией и соцссылками (`ProjectButton` `variant="dark"`, соцсети с `external`).

### `LoadingScreen`
- **Файл:** `src/components/layout/LoadingScreen.tsx`
- **Назначение:** Экран загрузки с логотипом и надписью «Загрузка...». Анимация входа через GSAP, выход по `isLoaded` из `usePageLoaded` (увод вверх + fade).
- **Хрупкие места:** Раньше зависал, если Hero не сообщал о готовности; теперь защищён safety-timeout в `GsapProvider`.

## Секции `src/components/sections/`

### `Hero`
- **Файл:** `src/components/sections/Hero.tsx`
- **Назначение:** Зацикленное видео `herovideo.mp4` (`autoPlay muted loop playsInline`) на весь экран. Кнопка `BlobButton` «СМОТРЕТЬ МЕНЮ». `onCanPlay` вызывает `setHeroReady()` для снятия лоадера. Заголовок «SPOT & CHOO'S» убран.
- **Связи:** `BlobButton`, `usePageLoaded` (`setHeroReady`).

### `About` (главная)
- **Файл:** `src/components/sections/About.tsx`
- **Назначение:** Заголовок «SPOOT& / CHOO'S» + подзаголовок (SplitText) + `ImageReveal` (3 фото) + стикеры (`StickerReveal`).
- **Связи:** `ImageReveal`, `SplitText`, `StickerReveal`.

### `AboutPageContent` (страница `/about`)
- **Файл:** `src/components/sections/AboutPageContent.tsx` (`"use client"`)
- **Назначение:** Премиум-раздел «О нас» в стиле street food. Hero (заголовок + текст на Manrope + инфо-пилюли + фото основателей), 3 карточки (команда, философия, вход), нижний баннер (логотип + слоган + SVG-иллюстрации), CTA `BlobButton`. Декоративные SVG (стрелки, сердца, звёзды, спарклы, волнистые линии). Микроанимации CSS (`.anim-*`) + `ScrollReveal`.
- **Связи:** `ScrollReveal`, `BlobButton`, `next/image`, `font-body` (Manrope).

### `Menu` (главная)
- **Файл:** `src/components/sections/Menu.tsx`
- **Назначение:** Красная секция. Большой фоновый текст «SPOOT& / CHOO'S», заголовок (SplitText), 3 карточки-статистики, бургер с руками. `overflow-x-clip` (не `hidden`). Фото бургера уменьшено до `60.75vw / 80.25vw`.
- **Связи:** `SplitText`, `ScrollReveal`, локальные `next/image`.

### `MenuPageContent` (страница `/menu`)
- **Файл:** `src/components/sections/MenuPageContent.tsx` (`"use client"`)
- **Назначение:** Премиум-раздел меню. Hero (заголовок + CTA + маскот), 4 карточки преимуществ, 5 карточек филиалов (3+2) с фото меню и кнопками, карта покрытия (пунктирный маршрут), карточка-цитата, лайтбокс. Декоративные SVG + CSS-анимации.
- **Связи:** `ScrollReveal`, `ProjectButton`, `RemoteImage`, `locations`, `menuImages` из `data.ts`.

### `Ingredients`
- **Файл:** `src/components/sections/Ingredients.tsx`
- **Назначение:** Заголовок «СВЕЖЕСТЬ. КАЧЕСТВО. ВКУС. НАСТРОЕНИЕ.» (SplitText) + абзац описания (ScrollReveal). Летающих ингредиентов и parallax больше нет.
- **Связи:** `SplitText`, `ScrollReveal`.

### `Locations`
- **Файл:** `src/components/sections/Locations.tsx` (`"use client"`)
- **Назначение:** Премиум-секция «НАШИ ТОЧКИ». Жёлтый градиент `#FFD95A → #F5C43E`, paper-texture, радиальное освещение. 12-кол. сетка 3+2 карточки (белые, `rounded-[24px]`, описание сверху, фото снизу, PNG-стикер в углу). Декор: пунктирный path, стрелки, спарклы, звёзды, мазки. Низ: штамп «Spot & Choo's» + starburst «Мы любим то, что делаем ❤️». GSAP fade-up stagger.
- **Связи:** `locations` из `data.ts`, `RemoteImage`, `next/image`, GSAP `ScrollTrigger`.

## Страницы `src/app/`

### `MenuPage`
- **Файл:** `src/app/menu/page.tsx` (`"use client"`)
- **Назначение:** Карточки точек с фото меню, лайтбокс (tap-to-zoom), кнопки Telegram. Внешние изображения через `RemoteImage`.
- **Хрупкие места:** Изображения с `spotandchoos.com` — есть fallback через `RemoteImage`.

### `AboutPage`
- **Файл:** `src/app/about/page.tsx` (Server Component, `metadata`)
- **Назначение:** Секции из `aboutSections` с фото. Внешние изображения через `RemoteImage`.

### `ContactPage`
- **Файл:** `src/app/contact/page.tsx` (Server Component, `metadata`)
- **Назначение:** Карточки точек + форма обратной связи (Google Forms). `<label>` для доступности.
- **Связи:** `locations`, `contactForm` из `data.ts`.

### `GalleryPage`
- **Файл:** `src/app/gallery/page.tsx` (`"use client"`)
- **Назначение:** Категории (`galleryCategories`), горизонтальный скролл со стрелками, лайтбокс. Внешние изображения через `RemoteImage`.
- **Связи:** `galleryCategories` из `data.ts`.

## Анимации `src/components/animations/`

### `SplitText`
- **Файл:** `src/components/animations/SplitText.tsx`
- **Назначение:** Появление текста по символам/словам/строкам через GSAP `SplitText` + `ScrollTrigger`. Ожидает загрузки шрифтов перед разбиением.
- **Пропсы:** `text`, `className`, `delay`, `duration`, `ease`, `splitType`, `from`, `to`, `threshold`, `rootMargin`, `textAlign`, `tag`, `onLetterAnimationComplete`.
- **Хрупкие места:** Использует плагин GSAP `SplitText` — следите за лицензированием для продакшена.

### `ScrollReveal`
- **Файл:** `src/components/animations/ScrollReveal.tsx`
- **Назначение:** Scroll-trigger slide-up + scale обёртка. Учитывает `prefers-reduced-motion`.
- **Пропсы:** `children`, `className`, `delay`, `y`, `scale`, `duration`.

### `StickerReveal`
- **Файл:** `src/components/animations/StickerReveal.tsx`
- **Назначение:** Эффект отклеивания стикера при скролле через CSS-переменную `--peel-progress` и GSAP `ScrollTrigger`.

### `WaveDivider`
- **Файл:** `src/components/animations/wave-divider.tsx`
- **Назначение:** SVG-волна с бесконечным GSAP-морфингом `attr.d` между About и Menu. Учитывает `prefers-reduced-motion`.

## Провайдеры `src/components/providers/`

### `GsapProvider`
- **Файл:** `src/components/providers/GsapProvider.tsx`
- **Назначение:** Регистрирует `ScrollTrigger`, инициализирует Lenis, предоставляет контекст `usePageLoaded` (`isLoaded`, `heroReady`, `setHeroReady`). Блокирует скролл через `lenis.stop()` до готовности; safety-timeout 8с. При смене маршрута (`usePathname`) — `lenis.scrollTo(0)`, `ScrollTrigger.refresh()`, `lenis.resize()`.
- **Хрупкие места:** Не должен вызывать `ScrollTrigger.getAll().forEach(t => t.kill())` при смене маршрута — это убивает анимации SplitText/ScrollReveal.

### `usePageLoaded`
- **Файл:** `src/components/providers/GsapProvider.tsx`
- **Назначение:** Хук, возвращающий `{ isLoaded, heroReady, setHeroReady }`.

## Утилиты `src/lib/`

### `cn`
- **Файл:** `src/lib/utils.ts`
- **Назначение:** Объединение классов с фильтрацией falsy.

### `locations`, `menuImages`, `navLinks`, `socialLinks`, `aboutSections`, `galleryCategories`, `contactForm`
- **Файл:** `src/lib/data.ts`
- **Назначение:** Статические данные (5 точек Новосибирска, меню, навигация, соцсети, секции About, галерея, конфиг Google Forms).
- **Хрупкие места:** `contactForm.entries` завязаны на конкретные entry IDs Google Forms — при изменении формы нужно обновить IDs.
