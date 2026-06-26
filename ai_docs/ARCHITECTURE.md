# ARCHITECTURE — Spot & Choo's

## Общая схема
Одностраничный лендинг (SPA-like) на Next.js App Router с дополнительными страницами `menu`, `about`, `contact`, `gallery`. Все секции — React Server Components по умолчанию; анимации выделены в клиентские компоненты (`"use client"`).

## Структура папок

```
Spot & Choo's/
├── AGENTS.md
├── AI_INDEX.md
├── README.md
├── package.json
├── next.config.ts
├── tsconfig.json
├── postcss.config.mjs
├── .env.local.example
├── .gitignore
├── ai_docs/
│   ├── ...
├── public/
│   ├── fonts/                    # Локальные шрифты (PoppingCute, ComicCAT)
│   ├── img/                      # PNG-ассеты (самолёт)
│   └── img-webp/                 # WebP-ассеты (бургер, ингредиенты, фото)
├── scripts/
│   ├── generate-placeholders.py   # генератор placeholder-изображений
│   └── process-real-images.py     # конвертация реальных фото в WebP
├── .venv/                         # Python venv для Pillow (в .gitignore)
└── src/
    ├── app/
    │   ├── layout.tsx            # корневой layout, шрифты, глобальные стили
    │   ├── page.tsx                # главная страница (лендинг)
    │   ├── globals.css             # Tailwind v4 + CSS-переменные
    │   ├── menu/page.tsx
    │   ├── about/page.tsx
    │   ├── contact/page.tsx
    │   ├── gallery/page.tsx
    │   └── api/health/route.ts
    ├── components/
    │   ├── ui/                     # Button, BlobButton, OriginButton, ProjectButton, Sticker
    │   ├── layout/                 # Header, Footer, LoadingScreen
    │   ├── sections/               # Hero, About, Menu, Ingredients, Locations, Contact
    │   ├── animations/             # PopText, ScrollReveal, JellyWave, StickerPeel
    │   └── providers/              # GsapProvider (Lenis + ScrollTrigger + pageLoaded context)
    ├── hooks/
    │   ├── useLenis.ts             # не используется напрямую
    │   └── useScrollReveal.ts      # не используется напрямую
    ├── lib/
    │   ├── utils.ts
    │   ├── data.ts                 # локации, меню, данные страниц, конфиг Google Forms
    │   └── (возможно: config/)     # внешние URL и ключи форм
    └── styles/
        ├── theme.css
        └── sticker.css
```

## Entry points
- `src/app/layout.tsx` — корневой layout.
- `src/app/page.tsx` — главная страница (лендинг).
- `src/app/menu/page.tsx`, `src/app/about/page.tsx`, `src/app/contact/page.tsx`, `src/app/gallery/page.tsx` — вспомогательные страницы.
- `src/app/api/health/route.ts` — health-check endpoint.
- `scripts/generate-placeholders.py` — генератор временных изображений.
- `scripts/process-real-images.py` — обработка реальных фото.

## Зависимости
- `next`, `react`, `react-dom`
- `gsap`, `lenis`
- `framer-motion` (для компонента `image-tiles`)
- `motion` (для компонента `origin-button`)
- `tailwindcss`, `@tailwindcss/postcss`
- TypeScript типы
- `Pillow` (только в `.venv` для генерации и обработки изображений)
- `fontTools` (только в `.venv` для `embolden_font.py`)

## Ассеты
- В `public/img-webp/` размещены реальные фото бургера, ингредиентов и атмосферные снимки.
- `public/img/plane.png` пока остаётся placeholder (самолёт доставки).
- `public/fonts/PoppingCute.ttf` — основной локальный шрифт для кириллицы; `ComicCAT.otf` и `ComicCAT_original.otf` — резерв/исходник.
- Скрипт `scripts/process-real-images.py` конвертирует исходные JPG из `C:\Users\Admin\Downloads` в WebP нужного размера.
- Для генерации оставшихся placeholder-изображений:
  ```bash
  .venv\Scripts\python.exe scripts\generate-placeholders.py
  ```

## Внешние данные и изображения
- Меню на `/menu` подгружается с `spotandchoos.com`.
- Галерея и фото на `/about` подгружаются с `cdn.prod.website-files.com` (Webflow).
- Форма обратной связи отправляется в Google Forms; конфигурация (action, entry IDs) в `src/lib/data.ts` в объекте `contactForm`.
