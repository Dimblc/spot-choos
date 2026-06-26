# Spot & Choo's — Новосибирский бургер-бренд

Локальный аналог CRAV Burgers для Новосибирска.

## Стек
- Next.js 16 (App Router)
- React + TypeScript
- Tailwind CSS v4
- GSAP + ScrollTrigger + SplitText + MorphSVG
- `@gsap/react` (React-интеграция GSAP)
- framer-motion + motion (React-анимации: `ImageReveal`, `OriginButton`)
- Lenis (плавный скролл)

## Структура
См. `ai_docs/ARCHITECTURE.md` и `ai_docs/FILE_MAP.md`.

## Запуск
```bash
npm install
# Важно: папка с апострофом ломает npm-скрипты, используйте прямой вызов next:
node ./node_modules/next/dist/bin/next dev
```

## Секции сайта
- Hero
- About
- Menu
- Ingredients
- Locations (районы Новосибирска)
- Contact

## Дополнительные страницы
- `/menu` — меню по точкам
- `/about` — о бренде
- `/gallery` — галерея
- `/contact` — контакты и форма обратной связи
