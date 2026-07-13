# ARCHITECTURE — Spot & Choo's

## Общая схема
Одностраничный лендинг (SPA-like) на Next.js App Router с дополнительными страницами `menu`, `about`, `contact`, `gallery`. Серверные компоненты по умолчанию; анимации и интерактив выделены в клиентские компоненты (`"use client"`).

## Структура папок

```
Spot & Choo's/
├── AGENTS.md
├── AI_INDEX.md
├── README.md
├── package.json
├── next.config.ts              # reactStrictMode + images.remotePatterns (3 домена) + avif/webp
├── tsconfig.json
├── postcss.config.mjs
├── eslint.config.mjs           # flat config
├── .env.local.example
├── .gitignore                  # включая dev-stderr.txt / dev-stdout.txt
├── embolden_font.py
├── ai_docs/
│   └── ...
├── public/
│   ├── fonts/                  # PoppingCute.ttf, ComicCAT.otf, ComicCAT_original.otf
│   ├── img-webp/               # видео Hero, стикеры, фото, иконки статистики
│   └── img/                    # пусто
├── scripts/
│   ├── generate-placeholders.py
│   └── process-real-images.py
├── .venv/                      # Python venv для Pillow (в .gitignore)
└── src/
    ├── app/
    │   ├── layout.tsx          # корневой layout, шрифты (Modak + PoppingCute + Manrope), глобальные стили
    │   ├── page.tsx            # главная (лендинг)
    │   ├── globals.css         # Tailwind v4 + @theme + font-body + обводки + vw-типографика + CSS keyframes + .anim-*
    │   ├── menu/page.tsx       # использует MenuPageContent
    │   ├── about/page.tsx      # использует AboutPageContent
    │   ├── contact/page.tsx    # Server Component + metadata
    │   ├── gallery/page.tsx    # "use client"
    │   ├── api/health/route.ts
    │   ├── sitemap.ts
    │   └── robots.ts
    ├── components/
    │   ├── ui/                 # BlobButton, origin-button, project-button, image-tiles, remote-image
    │   ├── layout/             # Header, Footer, LoadingScreen
    │   ├── sections/           # Hero, About, AboutPageContent, Menu, MenuPageContent, Ingredients, Locations
    │   ├── animations/         # SplitText, ScrollReveal, StickerReveal, wave-divider
    │   └── providers/          # GsapProvider (Lenis + ScrollTrigger + usePageLoaded + usePathname + safety-timeout)
    ├── hooks/                  # пусто
    ├── lib/
    │   ├── utils.ts            # cn
    │   └── data.ts             # locations (локальные фото), menuImages, navLinks, socialLinks, aboutSections, galleryCategories, contactForm
    ├── styles/
    │   ├── theme.css
    │   └── sticker.css
    └── types/
        └── gsap-split-text.d.ts
```

## Entry points
- `src/app/layout.tsx` — корневой layout.
- `src/app/page.tsx` — главная страница (лендинг): Header → Hero → About → WaveDivider → Menu → Ingredients → Locations → Footer.
- `src/app/{menu,about,contact,gallery}/page.tsx` — вспомогательные страницы.
- `src/app/api/health/route.ts` — health-check endpoint.
- `scripts/process-real-images.py` — обработка реальных фото.

## Зависимости
- `next`, `react`, `react-dom`
- `gsap`, `lenis`, `@gsap/react`
- `framer-motion` (ImageReveal), `motion` (OriginButton)
- `tailwindcss`, `@tailwindcss/postcss`
- TypeScript типы, `eslint`, `eslint-config-next`, `typescript-eslint`
- `Pillow`, `fontTools` (только в `.venv`)

## Ассеты
- `public/img-webp/herovideo.mp4` — зацикленное видео для Hero (45 МБ).
- `public/img-webp/Kawaii_cheeseburger.mp4` — старое видео (не используется).
- `public/img-webp/{orig,kom45,lite,NSTU,Koltsovo}.png` — фото 5 точек для Locations.
- `public/img-webp/stickers/sticker-{original,kom45,lite,nstu,koltsovo}.png` — PNG-стикеры для карточек Locations.
- `public/img-webp/about/{founders,team,entrance,banner}.png` — фото для `/about` (1448×1086).
- `public/img-webp/menu/{mascot,logo-round}.png` — изображения для `/menu` (1536×1024).
- `public/img-webp/{burger-with-ruki,foto1,foto2,foto3,sticker,fries-sticker}.png|.webp` — фото и стикеры (главная).
- `public/img-webp/{og,pr,wq}.png` — иконки для карточек статистики в Menu.
- `public/fonts/PoppingCute.ttf` — основной локальный шрифт для кириллицы.

## Внешние данные и изображения
- Меню на `/menu` подгружается с `www.spotandchoos.com/images/menu/*.jpg`.
- Галерея, фото на `/about` и фото локаций — с `cdn.prod.website-files.com` (Webflow).
- Все внешние изображения рендерятся через `RemoteImage` (`components/ui/remote-image.tsx`) — обёртку над `next/image` с onError-fallback («Фото недоступно»).
- Домены настроены в `next.config.ts` → `images.remotePatterns` (`cdn.prod.website-files.com`, `www.spotandchoos.com`, `spotandchoos.com`).
- Форма обратной связи отправляется в Google Forms; конфигурация (`action`, `entry IDs`) в `src/lib/data.ts` в объекте `contactForm`.

## Лоадер
- `GsapProvider` держит `lenis.stop()` до готовности Hero (`setHeroReady`) + минимального таймера 1.2с.
- Safety-timeout 8с принудительно снимает лоадер, даже если Hero не сообщил о готовности.
- `Hero.tsx` вызывает `setHeroReady()` при `onCanPlay` видео.
- При смене маршрута (`usePathname`) — `lenis.scrollTo(0, { immediate: true })`, `ScrollTrigger.refresh()`, `lenis.resize()`.

## Шрифты
- **Modak** (Google Fonts) — `--font-modak`, для латиницы.
- **PoppingCute** (локальный `public/fonts/PoppingCute.ttf`) — `--font-popping-cute`, для кириллицы.
- **Manrope** (Google Fonts) — `--font-manrope`, для основного текста (`font-body`) на `/about` и `/menu`.
- Утилиты: `font-modak` (PoppingCute → Modak → sans), `font-body` (Manrope → system-ui).

## CSS-анимации (globals.css)
- `@keyframes wobble` — покачивание (стрелки, звёзды).
- `@keyframes pulse-soft` — пульсация (логотип, спарклы).
- `@keyframes draw-wave` — рисование линии (волнистые, пунктирные).
- `@keyframes float-soft` — плавание (иллюстрации, маскот).
- Утилиты: `.anim-wobble`, `.anim-pulse-soft`, `.anim-draw-wave`, `.anim-float-soft`.
- `@media (prefers-reduced-motion: reduce)` — отключает все CSS-анимации.
