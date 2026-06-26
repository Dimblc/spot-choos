# FUNCTIONS_MAP — Spot & Choo's

## UI компоненты `src/components/ui/`

### `OriginButton`
- **Файл:** `src/components/ui/origin-button.tsx`
- **Назначение:** Базовая кнопка с hover-заливкой из точки курсора (или центра при фокусе/клавиатуре), `whileTap` scale и поддержкой `prefers-reduced-motion`. Использует `motion/react`.
- **Пропсы:** все стандартные `button` пропсы + `loading`, `className`
- **Хрупкие места:** Зависит от CSS-переменных `--ic-*`, переопределяемых через `className`. При неправильной переопределённой цветовой схеме `text-background` на fill-стейте может стать нечитаемым.

### `ProjectButton`
- **Файл:** `src/components/ui/project-button.tsx`
- **Назначение:** Обёртка над `OriginButton` с темами проекта (`red`, `light`, `dark`, `ghost`, `blob`) и навигацией через `useRouter` / `window.open`. Используется для всех кнопок и кнопок-ссылок сайта.
- **Пропсы:** `href?`, `external?`, `variant?`, `children`, `className`, все пропсы `OriginButton`.
- **Хрупкие места:** Внутренняя навигация заменяет нативный `<a>` — средняя кнопка мыши / "Открыть в новой вкладке" не работают для внутренних ссылок. Для внешних ссылок используется `window.open`.

### `BlobButton`
- **Файл:** `src/components/ui/BlobButton.tsx`
- **Назначение:** CTA-кнопка с SVG-blob формой, morph на hover через GSAP `attr` (бесплатная альтернатива MorphSVG). Построена на `next/link` с SVG-blob фоном, без обрезки формы.
- **Пропсы:** `href`, `children`
- **Хрупкие места:** Два path должны иметь одинаковую структуру anchor-точек, иначе morph будет дергаться. Использует `next/link`, поэтому сохраняет нативное поведение ссылки.

### `ImageReveal` (`image-tiles.tsx`)
- **Файл:** `src/components/ui/image-tiles.tsx`
- **Назначение:** Анимированная композиция из трёх фото с spring-анимацией появления и hover-эффектами на framer-motion. Контейнер виден по умолчанию (`opacity: 1`), фото анимируются через scale/rotation/position.
- **Пропсы:** `leftImage`, `middleImage`, `rightImage`
- **Примечание:** Смещения заданы в процентах, размеры адаптивны (`vw`/`max-w`/`max-h`), используется `next/image` с `fill` и `sizes`.

## Layout компоненты `src/components/layout/`

### `Header`
- **Файл:** `src/components/layout/Header.tsx`
- **Назначение:** Фиксированная шапка с логотипом и навигацией. Вся шапка плавно скрывается при скролле вниз и появляется при скролле вверх. Для мобильных экранов добавлено бургер-меню. Навигационные ссылки используют `ProjectButton` (`variant="ghost"`).
- **Хрупкие места:** Кнопки-ссылки не имеют нативного поведения `<a>` (средняя кнопка мыши и т.д.).

### `Footer`
- **Файл:** `src/components/layout/Footer.tsx`
- **Назначение:** Подвал с контактами и ссылками. Навигационные и социальные ссылки используют `ProjectButton` (`variant="dark"`, соцсети с `external`).

### `LoadingScreen`
- **Файл:** `src/components/layout/LoadingScreen.tsx`
- **Назначение:** Экран загрузки с анимацией сборки бургера и прогресс-баром. Скрывается через `usePageLoaded` после 2.5s.
- **Хрупкие места:** Захардкоженное время загрузки; требует поддержки `prefers-reduced-motion` (уже есть).

## Секции `src/components/sections/`

### `Hero`
- **Файл:** `src/components/sections/Hero.tsx`
- **Назначение:** Главный экран с pop-up заголовками, появлением бургера, плавным парением. `CHOO'S` расположен на `bottom-[6%]`, описание бренда — на `bottom-[3%]`. Боковой текст `BOLD FLAVOR` удалён.
- **Связи:** Использует `PopText` (waitForLoad), `usePageLoaded`.

### `About`
- **Файл:** `src/components/sections/About.tsx`
- **Назначение:** Секция о бренде с заголовком, кнопкой `Сделать заказ` и анимированной галереей из 3 фото через `ImageReveal`. Описание бренда перенесено в `Hero`.
- **Связи:** `PopText`, `ScrollReveal`, `BlobButton`, `ImageReveal`.

### `Menu`
- **Файл:** `src/components/sections/Menu.tsx`
- **Назначение:** Красная секция с большим центрированным бургером. Вверху — `JellyWave` (переход от `About`).
- **Связи:** `PopText`, `ScrollReveal`, `JellyWave`.

### `Ingredients`
- **Файл:** `src/components/sections/Ingredients.tsx`
- **Назначение:** Летающие ингредиенты с parallax.
- **Связи:** `PopText`, `ScrollReveal`, GSAP ScrollTrigger.

### `Locations`
- **Файл:** `src/components/sections/Locations.tsx`
- **Назначение:** Районы Новосибирска. Самолёт-заглушка удалён.
- **Связи:** `SplitText`, `ScrollReveal`, `locations` из `data.ts`.

## Страницы `src/app/`

### `MenuPage`
- **Файл:** `src/app/menu/page.tsx`
- **Назначение:** Страница меню с карточками по точкам, лайтбоксом, кнопками Telegram и закрытия лайтбокса. Все кнопки используют `ProjectButton`. Карточки меню используют `next/image` с `fill` для внешних изображений.
- **Хрупкие места:** Изображения меню загружаются с внешнего домена (`spotandchoos.com`). Нет fallback на случай недоступности источника.

### `AboutPage`
- **Файл:** `src/app/about/page.tsx`
- **Назначение:** Страница «О нас» с секциями из `aboutSections`. Изображения используют `next/image` с `fill`.
- **Хрупкие места:** Изображения с `cdn.prod.website-files.com`; нет fallback на случай недоступности источника.

### `ContactPage`
- **Файл:** `src/app/contact/page.tsx`
- **Назначение:** Страница контактов с картами точек и формой обратной связи (Google Forms). Кнопки отправки формы и Telegram используют `ProjectButton`.
- **Связи:** `locations`, `contactForm` из `data.ts`.

### `GalleryPage`
- **Файл:** `src/app/gallery/page.tsx`
- **Назначение:** Галерея с категориями (`galleryCategories`), горизонтальным скроллом и лайтбоксом. Кнопки категорий, стрелки слайдера и закрытие лайтбокса используют `ProjectButton`. Карточки галереи используют `next/image` с `fill`.
- **Связи:** `galleryCategories` из `data.ts`.
- **Хрупкие места:** Внешние изображения; нет fallback на случай недоступности источника.

## Анимации `src/components/animations/`

### `SplitText`
- **Файл:** `src/components/animations/SplitText.tsx`
- **Назначение:** Анимация появления текста по символам/словам/строкам через GSAP `SplitText` + `ScrollTrigger`. Используется для основных заголовков секций.
- **Пропсы:** `text`, `className`, `delay`, `duration`, `ease`, `splitType`, `from`, `to`, `threshold`, `rootMargin`, `textAlign`, `tag`, `onLetterAnimationComplete`
- **Хрупкие места:** Использует платиновый плагин GSAP `SplitText`, который может работать только в dev-режиме без лицензии. Ожидает загрузки шрифтов перед разбиением.

### `ScrollReveal`
- **Файл:** `src/components/animations/ScrollReveal.tsx`
- **Назначение:** Обёртка для slide-up + scale анимации при скролле. Контент виден по умолчанию; анимация меняет только `y` и `scale` (без `opacity`).
- **Пропсы:** `children`, `className`, `delay`, `y`, `scale`, `duration`

### `StickerReveal`
- **Файл:** `src/components/animations/StickerReveal.tsx`
- **Назначение:** Эффект отклеивания стикера при скролле через CSS clip-path и GSAP ScrollTrigger.

### `WaveDivider`
- **Файл:** `src/components/animations/wave-divider.tsx`
- **Назначение:** SVG-волна с бесконечной GSAP-анимацией морфинга между секциями About и Menu.

### `BurgerEyes`
- **Файл:** `src/components/animations/BurgerEyes.tsx`
- **Назначение:** Анимированные глаза бургера, следящие за курсором, с морганием и улыбкой по клику.

## Провайдеры `src/components/providers/`

### `GsapProvider`
- **Файл:** `src/components/providers/GsapProvider.tsx`
- **Назначение:** Регистрирует GSAP ScrollTrigger, инициализирует Lenis, предоставляет контекст `usePageLoaded`.
- **Хрупкие места:** При смене маршрута Lenis и ScrollTrigger могут требовать пересоздания. Сейчас приложение преимущественно одностраничное, поэтому не критично.

### `usePageLoaded`
- **Файл:** `src/components/providers/GsapProvider.tsx`
- **Назначение:** Хук, возвращающий `isLoaded` — состояние завершения лоадера.

## Утилиты `src/lib/`

### `cn`
- **Файл:** `src/lib/utils.ts`
- **Назначение:** Объединение классов с фильтрацией falsy.

### `locations`, `menuImages`, `navLinks`, `socialLinks`, `aboutSections`, `galleryCategories`, `contactForm`
- **Файл:** `src/lib/data.ts`
- **Назначение:** Статические данные (локации Новосибирска, меню, навигация, страницы, галерея, конфигурация Google Forms).
- **Хрупкие места:** `contactForm.entries` завязаны на конкретные entry IDs Google Forms. При изменении формы нужно обновить IDs.
