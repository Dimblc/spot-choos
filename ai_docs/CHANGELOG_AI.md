# CHANGELOG_AI — Spot & Choo's

## 2026-06-26 — Codebase cleanup, accessibility, SEO and lint
- Удалён мёртвый код: `src/components/sections/Contact.tsx` (не импортировался), `src/components/animations/PopText.tsx` (не импортировался), `src/components/animations/JellyWave.tsx` (не импортировался).
- Удалены неиспользуемые ассеты: `public/img-webp/burger-hero.webp`, `tomato.webp`, `cheese.webp`, `meat.webp`, `lettuce.webp`, `public/img/plane.png`.
- `project-button.tsx`: переписан — теперь рендерит `<a>` для внешних ссылок и `<Link>` для внутренних, сохраняя нативное поведение ссылок (middle-click, SEO-краулинг). `<button>` через `OriginButton` используется только для `onClick`/`type="submit"`.
- `contact/page.tsx`: форма обратной связи обновлена с `<label>` элементами для доступности (вместо placeholder-only).
- `menu/layout.tsx` и `gallery/layout.tsx`: добавлены `metadata` (title, description) — страницы `/menu` и `/gallery` помечены `"use client"`, поэтому metadata вынесена в `layout.tsx`.
- `menu/page.tsx` и `gallery/page.tsx`: z-index лайтбоксов изменён с `z-[200]` на `z-[1000]`, чтобы быть выше Header (`z-[999]`).
- `data.ts`: исправлена опечатка в `socialLinks` — `https://t.me/spotandchoo` → `https://t.me/spotandchoos`.
- `data.ts`: `menuImages` перенесён из `menu/page.tsx` в `data.ts` для консистентности архитектуры.
- Добавлен ESLint: `.eslintrc.json` (`next/core-web-vitals`), `eslint` и `eslint-config-next` в devDependencies, скрипт `lint` в `package.json`.
- Добавлены `src/app/sitemap.ts` и `src/app/robots.ts` для SEO.
- Инициализирован git-репозиторий.

## 2026-06-25 — Hero and About visual refinements
- `Hero.tsx`: позиция фото бургера смещена вниз до `top-[45%]`, чтобы оно располагалось между строками `SPOT&` и `CHOO'S`.
- `Hero.tsx`: полностью переработан главный экран по референсному макету: убраны `SPOT&` и `CHOO'S`, добавлено большое красное слово `БУРГЕР` с белой обводкой, бургер в центре с SVG-глазами, изогнутые желтые лейблы `СВЕЖЕСТЬ В КАЖДОМ КУСОЧКЕ` и `ЯРКИЙ ВКУС`, нижний ряд с текстом слева/справа и желтым словом `НАСЛАЖДАЙСЯ` по центру.
- `Header.tsx`: добавлен проп `home`, при котором логотип на главной странице отображается по центру и скрываются десктоп-ссылки навигации; мобильное меню оставлено.
- `page.tsx`: на главной странице `Header` передан проп `home`.
- (Откат) `Hero.tsx`, `Header.tsx` и `page.tsx` возвращены к предыдущей версии: восстановлены `SPOT&` / `CHOO'S`, чёрное описание, лейбл `Smashed Fresh`; шапка возвращена к стандартному виду с красным логотипом слева и навигацией.
- `Hero.tsx`: исправлены смещения `SPOT&` (`md:top-[13%]`) и нижнего блока `CHOO'S` + описание (`md:bottom-[3%]`), чтобы они не выезжали за пределы Hero и не перекрывали секцию About.
- `About.tsx`: увеличен межстрочный интервал заголовка (`leading-[1.5]`), добавлен отступ снизу (`mb-6 md:mb-[3vw]`) и увеличен верхний внутренний отступ секции (`py-8 md:py-[5vw]`), чтобы текст не наезжал друг на друга.
- `About.tsx`: верхний внутренний отступ секции увеличен до `py-16 md:py-[12vw]`, чтобы весь контент (заголовок, кнопка, фото) был опущен гораздо ниже.
- (Откат) `Hero.tsx`: чёрное описание «Spot & Choo's — новосибирский бургер...» возвращено в Hero, в нижний блок с `CHOO'S`. Описание убрано из `About.tsx`.
- `Hero.tsx`: убран лейбл `Smashed Fresh`.
- `Hero.tsx`: исправлены позиции `SPOT&` (`md:top-[13%]`) и нижнего блока (`md:bottom-[3%]`), чтобы текст не уезжал за пределы секции.
- Создан компонент `src/components/animations/wave-divider.tsx` с SVG-переходом «волна».
- `page.tsx`: `WaveDivider` перемещён из-под Hero вниз секции `About` — между `About` и `Menu`, чтобы волна была под картинками.
- `About.tsx`: фон секции возвращён к бежевому (убран `bg-red`), цвет заголовка возвращён к красному (`text-red`).
- `Menu.tsx`: убран `JellyWave` наверху, так как теперь переход обеспечивает `WaveDivider` между `About` и `Menu`.
- `WaveDivider`: обновлён SVG-путь по предоставленному референсу; анимация переделана на GSAP-морфинг `attr.d` (`yoyo`, `sine.inOut`, бесконечно). Длительность уменьшена с 4 до 2.5 секунд.
- `image-tiles.tsx`: уменьшена высота контейнера с `h-[80vw]` до `h-[40vw] md:h-[42vw]`, убран нижний отступ (`mb-0`), чтобы убрать пустое пространство под фото.
- `About.tsx`: убран нижний внутренний отступ (`pb-0`).
- `WaveDivider`: добавлен отрицательный верхний отступ (`-mt-20 md:-mt-28`), чтобы волна поднялась ближе к фото.
- `WaveDivider`: увеличена амплитуда волны — пики подняты выше (y=0 / y=40), а впадины опущены ниже (y=260).
- Создан компонент `src/components/animations/StickerReveal.tsx` с анимацией появления стикера.
- `About.tsx`: добавлен `StickerReveal` в верхнем левом углу секции (путь к файлу стикера — `/img-webp/sticker.png`).
- `StickerReveal`: анимация переделана на эффект отклеивания стикера (peel) через CSS-переменную `--peel-progress` и GSAP `ScrollTrigger` (`start: top 80%`, `end: top 30%`, `scrub: 1`).
- `src/styles/sticker.css`: обновлены `.sticker-main` и `.flap` для использования `--peel-progress`, добавлена переменная `--peel-progress`.
- `About.tsx`: убрана обёртка с `scale-*`, заданы адаптивные размеры заголовка и ширины контейнера; уменьшена толщина обводки текста и межбуквенный интервал.
- `image-tiles.tsx` (`ImageReveal`): фото прижаты к верху контейнера (`items-start`), добавлена раскладка `origin-center`; отступ сверху контейнера оставлен `mt-8 md:mt-16`, а отступ снизу уменьшен до `mb-2 md:mb-4`.
- `About.tsx`: уменьшен нижний внутренний отступ секции до `pb-2 md:pb-4`, чтобы промежуток между фото и следующей секцией стал маленьким.
- Проверка: `next build` успешен; dev-сервер перезапущен и отвечает на `http://localhost:3000`.

## 2026-06-25 — Mobile adaptation, code cleanup and image optimization
- Настроен адаптив для всех секций и страниц: Header с мобильным меню, Hero, About, Menu, Ingredients, Locations, Contact, Footer, `/menu`, `/about`, `/gallery`, `/contact`.
- Переписан `ImageReveal` (`image-tiles.tsx`) на относительные смещения в процентах и адаптивные размеры; заменён обычный `<img>` на `next/image` с `fill` и `sizes`.
- Удалены неиспользуемые файлы: `src/components/ui/Button.tsx`, `src/components/ui/Sticker.tsx`, `src/components/animations/StickerPeel.tsx`, `src/components/ui/svg-follow-scroll.tsx`, `src/components/animations/wave-divider.tsx`, `src/hooks/useLenis.ts`, `src/hooks/useScrollReveal.ts`.
- Удалён неиспользуемый `menuItems` из `src/lib/data.ts`.
- В `next.config.ts` добавлены `images.remotePatterns` для `cdn.prod.website-files.com` и `spotandchoos.com`, включены форматы `avif` и `webp`.
- На страницах `/menu`, `/about`, `/gallery` внешние изображения заменены на `next/image` с `fill`.
- Исправлена утечка `requestAnimationFrame` в `GsapProvider` (`cancelAnimationFrame` в cleanup).
- Исправлена настройка шрифтов в `globals.css`: убрана переопределяющая строка, добавлен `@utility font-modak` с `var(--font-popping-cute)` и `var(--font-modak)`.
- Исправлен невалидный Tailwind-класс `z-999` в `Header.tsx` на `z-[999]`.
- Обновлена документация: `OPEN_TASKS.md`.
- Проверка: `next build` успешен.

## 2026-06-24 — SplitText component integrated for text animations
- Установлена зависимость `@gsap/react`.
- Создан компонент `src/components/animations/SplitText.tsx` на основе React Bits с использованием GSAP `SplitText` и `ScrollTrigger`.
- Добавлена TypeScript-декларация `src/types/gsap-split-text.d.ts` для модуля `gsap/SplitText`.
- Заменены основные заголовки секций с `PopText` на `SplitText`:
  - `About`: "juicy cheesy fully Loaded"
  - `Menu`: "food that feels good"
  - `Ingredients`: "Every Layer Packed With Flavor"
  - `Locations`: "QUALITY THAT TRAVELS WITH YOU"
  - `Contact`: "FIND US"
- Анимация появления текста: по символам (`splitType="chars"`) с `opacity: 0, y: 60, rotation: 6` → `opacity: 1, y: 0, rotation: 0`.
- `Locations.tsx`: удалено изображение самолёта (`/img/plane.png`) и неиспользуемый импорт `Image`.
- `src/app/page.tsx`: секция `Contact` ("FIND US") убрана с главной страницы. Отдельная страница `/contact` оставлена.
- `Hero.tsx`: надпись `CHOO'S` опущена с `bottom-[10%]` до `bottom-[6%]`. Описание бренда опущено с `bottom-[6%]` до `bottom-[3%]`, чтобы не перекрывать `CHOO'S`.
- `BlobButton.tsx`: возвращён оригинальный вариант на основе `next/link` с SVG-blob фоном и GSAP morph на hover. Убрана обёртка через `ProjectButton` / `OriginButton`, которая обрезала blob-форму до овала.
- `About.tsx`: заголовок секции изменён с "juicy cheesy fully Loaded" на "Сытно. Вкусно. По-домашнему.". Размер уменьшен до `text-[6vw]`, ширина контейнера `w-[95%]`, чтобы текст разбился на две строки: "СЫТНО. ВКУСНО." и "ПО-ДОМАШНЕМУ.".
- `About.tsx`: текст кнопки `BlobButton` изменён с "Order Now" на "Сделать заказ" (исправлена опечатка "Сделайть").
- `Menu.tsx`: заголовок секции изменён с "food that feels good" на "настоящий вкус. честный состав.". Размер уменьшен с `heading300` (15vw) до `text-[7vw]`, добавлен `leading-[1]`. Заголовок разбит на два отдельных `SplitText` с `<br />`, чтобы гарантированно было две строки: "настоящий вкус." и "честный состав.".
- `About.tsx`: межстрочный интервал заголовка увеличен с `leading-[.85]` до `leading-[1]`.
- Проверка: `next build` успешен.

## 2026-06-24 — Wave dividers removed
- Убраны все добавленные `WaveDivider`-переходы из `Menu.tsx`, `Ingredients.tsx`, `Locations.tsx`, `Contact.tsx`.
- Восстановлен `overflow-hidden` в `Menu` и `Locations`.
- В `Ingredients` возвращён `h-fit` вместо `min-h-[70vw]`.
- Компонент `src/components/animations/wave-divider.tsx` оставлен в проекте, но сейчас нигде не используется.
- `Hero.tsx`: изменения по заполнению нижней части Hero сохранены (описание бренда на `bottom-[6%]`, `BOLD FLAVOR` убран).
- Проверка: `next build` успешен.

## 2026-06-24 — Empty space between Hero and About removed
- `Hero.tsx`: описание бренда `Spot & Choo's — новосибирский бургер с характером...` перенесено из `About` в нижнюю часть Hero, заменив два нижних текстовых блока сбоку.
- `Hero.tsx`: удалены `textLeftRef` и `textRightRef` вместе с их GSAP-анимациями; добавлена анимация появления для нового центрированного описания.
- `About.tsx`: убран бейдж `TOP CLASSIC` и абзац с описанием (перенесён в Hero). Секция теперь начинается с заголовка `juicy cheesy fully Loaded`, кнопки `Order Now` и `ImageReveal`.
- `About.tsx`: верхний отступ секции уменьшен до `pt-[2vw]` (ранее `py-[6vw]`).
- Проверка: `next build` успешен.

## 2026-06-24 — OriginButton integrated across the site
- Установлена зависимость `motion` для компонента OriginButton.
- Создан компонент `src/components/ui/origin-button.tsx` (`OriginButton`) с hover-заливкой из точки курсора и `whileTap` эффектом.
- Создан обёрточный компонент `src/components/ui/project-button.tsx` (`ProjectButton`) с вариантами тем: `red`, `light`, `dark`, `ghost`, `blob` и навигацией через `useRouter` / `window.open`.
- Обновлены все нажимающиеся элементы сайта:
  - `src/components/ui/Button.tsx` — использует `ProjectButton` с вариантами `red` / `ghost`.
  - `src/components/ui/BlobButton.tsx` — сохранён blob-фон и GSAP-анимация, базовый элемент заменён на `ProjectButton` (`variant="blob"`).
  - `src/components/layout/Header.tsx` — навигационные ссылки заменены на `ProjectButton` (`variant="ghost"`).
  - `src/components/layout/Footer.tsx` — навигационные и социальные ссылки заменены на `ProjectButton` (`variant="dark"`, `external` для соцсетей).
  - `src/components/sections/Contact.tsx` и `src/app/contact/page.tsx` — кнопки отправки форм заменены на `ProjectButton` (`variant="red"`, `type="submit"`).
  - `src/app/contact/page.tsx` — ссылка Telegram в карточке локации заменена на `ProjectButton` (`variant="red"`, `external`).
  - `src/app/menu/page.tsx` — кнопка Telegram и кнопка закрытия лайтбокса заменены на `ProjectButton`.
  - `src/app/gallery/page.tsx` — кнопки категорий, стрелки слайдера и кнопка закрытия лайтбокса заменены на `ProjectButton`.
- Проверка: `next build` успешен.
- Обновлена документация: `CHANGELOG_AI.md`, `FUNCTIONS_MAP.md`, `FILE_MAP.md`.

## 2026-06-24 — Framer-motion image tiles in About section
- Установлена зависимость `framer-motion`.
- Создан компонент `src/components/ui/image-tiles.tsx` (`ImageReveal`) с spring-анимацией появления трёх фото и hover-эффектами.
- `src/components/sections/About.tsx` теперь использует `ImageReveal` вместо ручной галереи. Передаются локальные изображения: `foto1.webp`, `foto2.webp`, `foto3.webp`.
- Увеличен масштаб `ImageReveal` через wrapper: `scale-125 md:scale-150 lg:scale-[1.75]`, чтобы фото были крупнее на десктопе.
- `Hero.tsx`: фото бургера поднято с `top-[50%]` до `top-[40%]`, а затем до `top-[20%]` по запросу пользователя.
- Исправлен `PopText.tsx`: убран `hasAnimated.current` в `useEffect` для `waitForLoad`, чтобы анимация надписей перезапускалась при возврате на главную страницу через клиентскую навигацию.
- `Header.tsx`: добавлено скрытие всей шапки (логотип + навигационные кнопки) при скролле вниз и плавное появление при скролле вверх, как на cravburgers.shop.
- Создан компонент `src/components/ui/svg-follow-scroll.tsx` (`Skiper19`, `LinePath`) с SVG-путём, который рисуется по мере скролла через framer-motion.
- `Ingredients.tsx`: добавлен `LinePath` с mustard-линией (`#F4A804`), следующей за скроллом секции. Секция увеличена до `min-h-[150vh]`.
- `Ingredients.tsx`: секция Ingredients возвращена к оригинальному виду — убран `LinePath` и sticky-контейнер, восстановлены оригинальные позиции ингредиентов и `h-fit` высота секции.
- Обновлена документация: `ARCHITECTURE.md`, `FILE_MAP.md`, `FUNCTIONS_MAP.md`, `PROJECT_OVERVIEW.md`, `OPEN_TASKS.md`, `CHANGELOG_AI.md`.
- Проверка: `next build` успешен.

## 2026-06-24 — About section redesign
- `About.tsx`: убран маленький стикер `StickerPeel` с бургером в левом верхнем углу.
- `About.tsx`: убраны красные рамки (`border-[8px] border-red`) вокруг фото галереи.
- `About.tsx`: изменено соотношение сторон фото с `aspect-[3/4]` на `aspect-[4/3]`, увеличена ширина (`w-[34vw] max-w-[380px]`) и уменьшено перекрытие (`marginLeft: -3vw`) для соответствия референсу.
- `About.tsx`: удалён невалидный Tailwind utility `gap-[-4vw]`.
- Обновлена документация: `FUNCTIONS_MAP.md`, `OPEN_TASKS.md`, `CHANGELOG_AI.md`.
- Проверка: `next build` успешен.

## 2026-06-24 — AI docs updated + contact form fixed
- Обновлена AI-документация под актуальное состояние проекта:
  - `AI_INDEX.md` — актуальный статус и ссылка на dev-запуск.
  - `PROJECT_OVERVIEW.md` — актуальный стек (Modak + PoppingCute), добавлена информация о `/gallery` и внешних изображениях.
  - `ARCHITECTURE.md` — добавлена `/gallery`, `embolden_font.py`, внешние CDN и конфиг Google Forms.
  - `FILE_MAP.md` — добавлены `/gallery`, `PoppingCute.ttf`, внешние изображения.
  - `FUNCTIONS_MAP.md` — актуализированы описания компонентов, добавлены хрупкие места (vw-размеры, внешние изображения, `gap-[-4vw]`).
  - `OPEN_TASKS.md` — отмечены выполненные задачи (реальные данные, форма), добавлены новые задачи.
  - `CODING_RULES.md` — добавлены правила стиля, Tailwind v4 и GSAP.
  - `DEPLOYMENT.md` — убрано устаревшее предупреждение об отсутствии placeholder, добавлено про внешние изображения и форму.
  - `API.md` — добавлена информация о Google Forms.
- Починена форма обратной связи:
  - В `src/lib/data.ts` добавлен объект `contactForm` с action URL Google Forms и entry IDs (`entry.421480503`, `entry.529909056`, `entry.1779812662`).
  - `src/components/sections/Contact.tsx` — форма теперь использует `contactForm` (POST, target="_blank", required поля).
  - `src/app/contact/page.tsx` — форма также переведена на `contactForm` с POST и корректными entry IDs.
- Проверка: `next build` успешен.

## 2026-06-24 — Layout updated to match CRAV reference
- `Hero.tsx`: бургер поднят выше по z-index (`z-30`) и увеличен до `55vw`, чтобы перекрывать текст "THE BURGER" и "Spot & Choo's".
- `About.tsx`: одно фото заменено на галерею из 3 наклоненных фото (`foto1`, `foto2`, `foto3`) с перекрытием, как в референсе; добавлен стикер-талисман слева.
- `Menu.tsx`: вместо маленького стикера добавлен большой центрированный бургер с руками (`burger-with-hands.webp`) на красном фоне.
- `about/page.tsx` и `contact/page.tsx`: убраны дублирующие фото, оставлен текст-заглушка.
- Проверка: `next build` успешен, dev-сервер на `http://localhost:3000` работает.

## 2026-06-24 — Hero split-brand layout + Cyrillic font
- `Hero.tsx`: текст "Spot & Choo's" разделён на две части — "SPOT&" вверху и "CHOO'S" внизу.
- Бургер уменьшен до `40vw` и размещён между этими надписями (`z-30`, поверх текста).
- Убран конфликтующий текст "THE BURGER".
- Размеры надписей увеличены (`16vw` / `18vw`), позиции сдвинуты, чтобы не наезжать на боковые и нижние тексты.
- `CHOO'S` опущен с `bottom-[13%]` до `bottom-[10%]`, чтобы бургер лежал чётче между словами.
- `Mouse Memoirs` заменён на `Lobster` (Google Fonts) — поддерживает кириллицу и похож на Modak.
- Все `font-mouse-memoirs` заменены на `font-lobster`.
- Проверка: `next build` успешен.

## 2026-06-24 — Modak + Comic CAT
- Английский/латинский текст на `Modak`.
- Для кириллицы подключён локальный шрифт `Comic CAT` (`public/fonts/ComicCAT.otf`) через `next/font/local`.
- `Lobster` убран из связки.
- В CSS: `font-family: var(--font-modak), var(--font-comic-cat), "Arial", sans-serif`.
- Все классы используют `font-modak`.
- Проверка: `next build` успешен, шрифт отдаётся с `http://localhost:3000/fonts/ComicCAT.otf`.

## 2026-06-24 — Real photos added to the site
- Сконвертированы и добавлены реальные фото из `C:\Users\Admin\Downloads` в `public/img-webp/`:
  - `burger-hero.webp`, `lettuce.webp`, `meat.webp`, `tomato.webp`, `cheese.webp` — заменили placeholder-ингредиенты.
  - `burger-with-hands.webp` — новый стикер-ассет.
  - `foto1.webp`, `foto2.webp`, `foto3.webp` — фото для секций и страниц.
- Создан скрипт `scripts/process-real-images.py` для обработки фото (resize → WebP quality 85).
- Обновлены компоненты:
  - `Menu.tsx` — добавлен `StickerPeel` с `burger-with-hands.webp`.
  - `About.tsx` — добавлено фото `foto3.webp`.
  - `about/page.tsx` — добавлена галерея из `foto1.webp` и `foto2.webp`.
  - `contact/page.tsx` — добавлено фото `foto1.webp`.
- Обновлена AI-документация: `FILE_MAP.md`, `OPEN_TASKS.md`, `CHANGELOG_AI.md`.
- Проверка: `next build` проходит успешно, dev-сервер отдаёт страницы и изображения с кодом 200.

## 2026-06-24 — Fixed ScrollTrigger plugin registration
- `gsap.registerPlugin(ScrollTrigger)` перенесён на уровень модуля в `src/components/providers/GsapProvider.tsx` (был внутри `useEffect`).
- Это устранило браузерные предупреждения `Invalid property scrollTrigger ... Missing plugin?` при рендере страницы.

## 2026-06-23 — Body font changed to Mouse Memoirs
- В `src/app/globals.css` задан базовый шрифт `body` через `var(--font-mouse-memoirs)`.
- Важно: Mouse Memoirs не поддерживает кириллицу, поэтому русский текст падает на `Arial` fallback.

## 2026-06-23 — Placeholder images added
- Создан `scripts/generate-placeholders.py` для генерации placeholder-изображений через Pillow.
- Добавлены плейсхолдеры: `burger-hero.webp`, `tomato.webp`, `cheese.webp`, `meat.webp`, `lettuce.webp`, `plane.png`.
- Создан Python venv `.venv` для запуска генератора.
- Обновлены `.gitignore`, `ARCHITECTURE.md`, `FILE_MAP.md`, `OPEN_TASKS.md`.

## 2026-06-23 — Animations implemented
- Добавлен `GsapProvider` с регистрацией ScrollTrigger и инициализацией Lenis.
- Реализован `LoadingScreen` с анимацией сборки бургера и прогресс-баром.
- Реализован `PopText` с поддержкой `waitForLoad` и `scrollTrigger`.
- Добавлен `ScrollReveal` для fade-in секций при скролле.
- Реализованы анимации в секциях: Hero (pop-up + burger reveal + float), About, Menu, Ingredients (parallax), Locations, Contact.
- Реализован `JellyWave` и `StickerPeel` (scroll + hover).
- Реализован `BlobButton` morph на hover через GSAP `attr`.
- Обновлены AI-документы: `FUNCTIONS_MAP.md`, `ARCHITECTURE.md`, `FILE_MAP.md`.

## 2026-06-23 — Dev server launched
- Проверена работа проекта на `http://localhost:3000`.
- Выяснено, что `npm run dev` не работает из-за апострофа в пути к папке.
- Используется обход: `node ./node_modules/next/dist/bin/next dev`.
- Обновлены `DEPLOYMENT.md` и `DECISIONS.md`.

## 2026-06-23 — Project structure created
- Создана структура проекта на Next.js 16 + Tailwind v4 + GSAP + Lenis.
- Добавлены конфиги, стартовые страницы, компоненты секций и анимаций.
- Обновлены AI-документы: `PROJECT_OVERVIEW.md`, `ARCHITECTURE.md`, `FILE_MAP.md`, `OPEN_TASKS.md`.

## 2026-06-23 — Initial AI memory setup
- Создана структура AI-документации.
- Добавлены `AGENTS.md`, `AI_INDEX.md`, `ai_docs/*.md`.
- Проект пустой, стек не выбран.
