# FILE_MAP — Spot & Choo's

## Корень проекта
| Файл | Назначение |
|------|------------|
| `AGENTS.md` | Инструкции AI |
| `AI_INDEX.md` | Индекс документации |
| `README.md` | Краткое описание проекта и запуск |
| `package.json` | Зависимости и скрипты |
| `next.config.ts` | Конфиг Next.js (`reactStrictMode`, `images.remotePatterns`, форматы) |
| `tsconfig.json` | Конфиг TypeScript |
| `postcss.config.mjs` | Конфиг PostCSS (Tailwind v4) |
| `eslint.config.mjs` | Конфиг ESLint (flat config) |
| `.env.local.example` | Шаблон env-переменных |
| `.gitignore` | Исключения git |
| `embolden_font.py` | Утилита для утолщения глифов ComicCAT через fontTools |

## Документация `ai_docs/`
| Файл | Назначение |
|------|------------|
| `PROJECT_OVERVIEW.md` | Описание проекта |
| `ARCHITECTURE.md` | Архитектура |
| `FILE_MAP.md` | Этот файл |
| `FUNCTIONS_MAP.md` | Функции и компоненты |
| `DATABASE.md` | БД (статические данные в `src/lib/data.ts`) |
| `API.md` | API |
| `DEPLOYMENT.md` | Деплой |
| `CODING_RULES.md` | Правила кода |
| `DECISIONS.md` | Решения |
| `CHANGELOG_AI.md` | История изменений от AI |
| `OPEN_TASKS.md` | Задачи |

## Исходный код `src/`
| Файл | Назначение |
|------|------------|
| `app/layout.tsx` | Корневой layout, шрифты (Modak + PoppingCute + Manrope), стили |
| `app/page.tsx` | Главная страница (лендинг) |
| `app/globals.css` | Tailwind v4 + `@theme` цвета + `font-body` + текстовые обводки + vw-типографика + CSS keyframes (wobble, pulse-soft, draw-wave, float-soft) + `.anim-*` утилиты |
| `app/menu/page.tsx` | Страница меню — использует `MenuPageContent` |
| `app/about/page.tsx` | Страница о бренде — использует `AboutPageContent` |
| `app/contact/page.tsx` | Страница контактов с карточками точек и формой (`metadata`) |
| `app/gallery/page.tsx` | Галерея с категориями, горизонтальным скроллом и лайтбоксом (`"use client"`) |
| `app/api/health/route.ts` | Health-check endpoint (`GET → {status:"ok"}`) |
| `app/sitemap.ts` | Sitemap для SEO |
| `app/robots.ts` | Robots.txt для SEO |
| `components/ui/BlobButton.tsx` | Blob-кнопка (SVG-morph на hover), на `next/link` |
| `components/ui/origin-button.tsx` | Базовая `<button>` с hover-заливкой из точки курсора (`motion/react`) |
| `components/ui/project-button.tsx` | Обёртка: `<a>` для внешних, `<Link>` для внутренних, `<OriginButton>` для `onClick`/`submit` |
| `components/ui/image-tiles.tsx` | Framer-motion композиция из 3 локальных фото (ImageReveal) |
| `components/ui/remote-image.tsx` | `next/image` с onError-fallback + проп `quality` (по умолчанию 90) |
| `components/layout/Header.tsx` | Фиксированная шапка, hide-on-scroll, мобильное меню |
| `components/layout/Footer.tsx` | Подвал |
| `components/layout/LoadingScreen.tsx` | Экран загрузки (логотип + «Загрузка...»), скрывается по `usePageLoaded` |
| `components/sections/Hero.tsx` | Hero: зацикленное видео `herovideo.mp4` (`autoPlay muted loop`), кнопка `BlobButton`, `onCanPlay → setHeroReady` |
| `components/sections/About.tsx` | About (главная): заголовок, SplitText, ImageReveal, стикеры |
| `components/sections/AboutPageContent.tsx` | About (страница `/about`): премиум-раздел — hero, 3 карточки, баннер, CTA, декор SVG, микроанимации |
| `components/sections/Menu.tsx` | Menu (главная): красный фон, заголовок, 3 карточки-статистики, бургер |
| `components/sections/MenuPageContent.tsx` | Menu (страница `/menu`): премиум-раздел — hero, преимущества, карточки филиалов, карта покрытия, CTA, лайтбокс |
| `components/sections/Ingredients.tsx` | Ingredients: заголовок + абзац (SplitText + ScrollReveal) |
| `components/sections/Locations.tsx` | Locations: жёлтый градиент, doodle-декор, 12-кол. сетка 3+2, PNG-стикеры, штамп, starburst, GSAP fade-up |
| `components/animations/SplitText.tsx` | Появление текста по символам/словам/строкам (GSAP SplitText + ScrollTrigger) |
| `components/animations/ScrollReveal.tsx` | Scroll-trigger slide-up + scale обёртка |
| `components/animations/StickerReveal.tsx` | Эффект отклеивания стикера при скролле |
| `components/animations/wave-divider.tsx` | SVG-волна с GSAP-морфингом между About и Menu |
| `components/providers/GsapProvider.tsx` | GSAP + Lenis + `usePageLoaded` context + `usePathname` refresh + safety-timeout лоадера |
| `lib/utils.ts` | Утилита `cn` |
| `lib/data.ts` | Статические данные (`locations` с локальными фото, `menuImages`, `navLinks`, `socialLinks`, `aboutSections`, `galleryCategories`, `contactForm`) |
| `styles/theme.css` | Z-index переменные (класс `.loading` удалён) |
| `styles/sticker.css` | CSS для стикер-эффекта |
| `types/gsap-split-text.d.ts` | TypeScript-декларация для `gsap/SplitText` |

## Удалённые файлы (больше не существуют)
| Файл | Когда удалён |
|------|--------------|
| `components/sections/Contact.tsx` | 2026-06-26 (не импортировался) |
| `components/animations/PopText.tsx` | 2026-06-26 (заменён на SplitText) |
| `components/animations/JellyWave.tsx` | 2026-06-26 (не импортировался) |
| `components/animations/BurgerEyes.tsx` | 2026-06-27 (не импортировался, мёртвый код) |
| `components/ui/Button.tsx`, `components/ui/Sticker.tsx` | 2026-06-25 |
| `components/animations/StickerPeel.tsx`, `components/ui/svg-follow-scroll.tsx` | 2026-06-25 |
| `hooks/useLenis.ts`, `hooks/useScrollReveal.ts` | 2026-06-25 (папка `src/hooks/` пуста) |

## Скрипты `scripts/`
| Файл | Назначение |
|------|------------|
| `generate-placeholders.py` | Генерация placeholder-изображений через Pillow |
| `process-real-images.py` | Конвертация реальных фото из Downloads в WebP |

## Ассеты `public/`
| Папка | Назначение |
|-------|------------|
| `fonts/` | Локальные шрифты (`PoppingCute.ttf`, `ComicCAT.otf`, `ComicCAT_original.otf`) |
| `img-webp/` | WebP/PNG-ассеты и видео |
| `img-webp/about/` | Фото для `/about` (`founders.png`, `team.png`, `entrance.png`, `banner.png`) |
| `img-webp/menu/` | Изображения для `/menu` (`mascot.png`, `logo-round.png`) |
| `img-webp/stickers/` | PNG-стикеры для карточек Locations (`sticker-original.png`, …) |
| `img-webp/locations/` | Фото точек из Downloads (не используются — фото берутся из `img-webp/`) |
| `img/` | Пусто (ранее `plane.png`, удалён) |

## Изображения `public/img-webp/`
| Файл | Описание |
|------|----------|
| `Kawaii_cheeseburger.mp4` | Старое видео для scroll-driven Hero (не используется) |
| `herovideo.mp4` | Видео для Hero (зацикленное, 45 МБ) |
| `burger-with-ruki.png` | Бургер с руками (Menu, главная) |
| `foto1.webp`, `foto2.webp`, `foto3.webp` | Фото для About (ImageReveal) |
| `sticker.png` | Стикер-бургер (About, StickerReveal) |
| `fries-sticker.png` | Стикер картошки (About) |
| `og.png`, `pr.png`, `wq.png` | Иконки-стикеры для карточек статистики (Menu) |
| `kaif.png` | Резервный ассет |
| `102..107-no-bg-preview (carve.photos).png` | Резервные ассеты (ингредиенты без фона) |
| `cheese-no-bg-preview (carve.photos).png` | Резервный ассет |

## Внешние изображения (не в `public/`)
| Источник | Где используется |
|----------|------------------|
| `spotandchoos.com/images/menu/*.jpg` | `/menu` — карточки меню по точкам |
| `cdn.prod.website-files.com/...` | `/about`, `/gallery`, локации — фото заведений и атмосфера |

Все внешние изображения проходят через `RemoteImage` (`components/ui/remote-image.tsx`) с onError-fallback. Домены настроены в `next.config.ts` → `images.remotePatterns`.
