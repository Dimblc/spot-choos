# FILE_MAP — Spot & Choo's

## Корень проекта
| Файл | Назначение |
|------|------------|
| `AGENTS.md` | Инструкции AI |
| `AI_INDEX.md` | Индекс документации |
| `README.md` | Краткое описание проекта и запуск |
| `package.json` | Зависимости и скрипты |
| `next.config.ts` | Конфиг Next.js |
| `tsconfig.json` | Конфиг TypeScript |
| `postcss.config.mjs` | Конфиг PostCSS (Tailwind v4) |
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
| `DATABASE.md` | БД |
| `API.md` | API |
| `DEPLOYMENT.md` | Деплой |
| `CODING_RULES.md` | Правила кода |
| `DECISIONS.md` | Решения |
| `CHANGELOG_AI.md` | История изменений от AI |
| `OPEN_TASKS.md` | Задачи |

## Исходный код `src/`
| Файл | Назначение |
|------|------------|
| `app/layout.tsx` | Корневой layout, шрифты, стили |
| `app/page.tsx` | Главная страница (лендинг) |
| `app/globals.css` | Tailwind v4 + переменные + типографика |
| `app/menu/page.tsx` | Страница меню с карточками точек и лайтбоксом |
| `app/menu/layout.tsx` | Metadata для страницы меню |
| `app/about/page.tsx` | Страница о бренде с секциями |
| `app/contact/page.tsx` | Страница контактов с картами точек и формой |
| `app/gallery/page.tsx` | Галерея с категориями и лайтбоксом |
| `app/gallery/layout.tsx` | Metadata для страницы галереи |
| `app/api/health/route.ts` | Health-check endpoint |
| `app/sitemap.ts` | Sitemap для SEO |
| `app/robots.ts` | Robots.txt для SEO |
| `components/ui/BlobButton.tsx` | Blob-кнопка (SVG), построена на `next/link` |
| `components/ui/origin-button.tsx` | Базовая кнопка с hover-заливкой из точки курсора (`motion/react`) |
| `components/ui/project-button.tsx` | Обёртка над `OriginButton` с темами проекта и навигацией |
| `components/ui/image-tiles.tsx` | Framer-motion анимация трёх фото (ImageReveal) |
| `components/layout/Header.tsx` | Шапка |
| `components/layout/Footer.tsx` | Подвал |
| `components/layout/LoadingScreen.tsx` | Экран загрузки |
| `components/sections/Hero.tsx` | Hero-секция |
| `components/sections/About.tsx` | About-секция |
| `components/sections/Menu.tsx` | Menu-секция |
| `components/sections/Ingredients.tsx` | Ingredients-секция |
| `components/sections/Locations.tsx` | Locations-секция |
| `components/animations/ScrollReveal.tsx` | Scroll-trigger fade-in обёртка |
| `components/animations/SplitText.tsx` | Анимация появления текста по символам через GSAP SplitText |
| `components/animations/StickerReveal.tsx` | Эффект отклеивания стикера при скролле |
| `components/animations/wave-divider.tsx` | SVG-волна между секциями About и Menu |
| `components/providers/GsapProvider.tsx` | GSAP + Lenis + pageLoaded context |

| `lib/utils.ts` | Утилиты (cn) |
| `lib/data.ts` | Статические данные (локации, меню, about, gallery, конфиг формы) |
| `styles/theme.css` | Дополнительные переменные и z-index |
| `styles/sticker.css` | CSS для стикер-эффекта |
| `types/gsap-split-text.d.ts` | TypeScript-декларация для `gsap/SplitText` |

## Скрипты `scripts/`
| Файл | Назначение |
|------|------------|
| `generate-placeholders.py` | Генерация placeholder-изображений через Pillow |
| `process-real-images.py` | Конвертация реальных фото из Downloads в WebP для сайта |

## Ассеты `public/`
| Папка | Назначение |
|-------|------------|
| `fonts/` | Локальные шрифты (`PoppingCute.ttf`, `ComicCAT.otf`, `ComicCAT_original.otf`) |
| `img/` | PNG-изображения (самолёт) |
| `img-webp/` | WebP-изображения (бургер, ингредиенты, фото) |

## Изображения `public/`
| Файл | Описание |
|------|----------|
| `public/img-webp/burger-hero.webp` | Главный бургер на Hero |
| `public/img-webp/tomato.webp` | Томат для секции Ingredients |
| `public/img-webp/cheese.webp` | Сыр для секции Ingredients |
| `public/img-webp/meat.webp` | Котлета для секции Ingredients |
| `public/img-webp/lettuce.webp` | Салат для секции Ingredients |
| `public/img-webp/burger-with-hands.webp` | Бургер с руками для Menu и About |
| `public/img-webp/foto1.webp` | Фото стола в ресторане |
| `public/img-webp/foto2.webp` | Фото бургера на доске |
| `public/img-webp/foto3.webp` | Бургер в руке на красном фоне |
| `public/img/plane.png` | Самолёт доставки в секции Locations (placeholder) |

## Внешние изображения (не в `public/`)
| Источник | Где используется |
|----------|------------------|
| `spotandchoos.com/images/menu/*.jpg` | `/menu` — карточки меню по точкам |
| `cdn.prod.website-files.com/...` | `/about`, `/gallery`, локации — фото заведений и атмосфера |
