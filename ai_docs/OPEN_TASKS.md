# OPEN_TASKS — Spot & Choo's

## Срочные
- [x] Добавить реальные изображения в `public/img-webp/` (бургер, ингредиенты, фото).
- [x] Заполнить `src/lib/data.ts` реальным меню, адресами, данными страниц и галереей.
- [x] Починить форму обратной связи на `/contact` (отправка в Google Forms через `contactForm`).
- [x] Доработать адаптив под мобильные устройства (`max-md:`).
- [x] Починить зависание лоадера при ошибке видео (onError + safety-timeout).
- [x] Добавить fallback для внешних изображений (`RemoteImage`).
- [x] Удалить мёртвый код: `BurgerEyes.tsx`, неиспользуемый `homeActions`.
- [x] Синхронизировать AI-документацию с актуальным кодом.
- [x] Переписать секцию Locations с премиум-дизайном (Awwwards уровень).
- [x] Создать премиум-страницу `/about` (`AboutPageContent`).
- [x] Создать премиум-страницу `/menu` (`MenuPageContent`).
- [x] Заменить Hero на зацикленное видео `herovideo.mp4`.
- [x] Починить баги скролла (Lenis vs body.overflow, refresh при смене маршрута).
- [x] Починить лишнюю полосу прокрутки в Menu (`overflow-x-clip`).
- [x] Починить сломанные анимации после fix скролла (убрать `ScrollTrigger.kill()`).
- [x] Добавить шрифт Manrope для основного текста.
- [x] Добавить CSS keyframes для микроанимаций.

## В процессе
- [ ] Настроить `next.config.ts` → `images.qualities: [75, 100]` (сейчас warns в браузере при `quality=100`).

## Завершено
- [x] Удалить мёртвый код: `sections/Contact.tsx`, `PopText.tsx`, `JellyWave.tsx` (не импортировались).
- [x] Удалить неиспользуемые ассеты: `burger-hero.webp`, `tomato.webp`, `cheese.webp`, `meat.webp`, `lettuce.webp`, `plane.png`.
- [x] Исправить `ProjectButton`: рендерит `<a>`/`<Link>` для href-ссылок вместо `<button>` (нативное поведение ссылок, SEO).
- [x] Добавить `<label>` к форме обратной связи на `/contact` (доступность).
- [x] Добавить metadata на страницы `/menu` и `/gallery` (через `layout.tsx`).
- [x] Исправить z-index лайтбоксов (`z-[1000]` вместо `z-[200]`, выше Header `z-[999]`).
- [x] Исправить опечатку в `socialLinks`: `t.me/spotandchoo` → `t.me/spotandchoos`.
- [x] Перенести `menuImages` из `menu/page.tsx` в `src/lib/data.ts`.
- [x] Добавить ESLint (`.eslintrc.json`, `eslint-config-next`, скрипт `lint`).
- [x] Добавить `sitemap.ts` и `robots.ts`.
- [x] Настроить SEO-метатеги и Open Graph (базовые metadata + sitemap + robots).
- [x] Интегрировать `OriginButton` и применить ко всем кнопкам через `ProjectButton`.
- [x] Создание структуры проекта по аналогии с CRAV.
- [x] Реализовать анимацию лоадера (`LoadingScreen`) с сборкой бургера.
- [x] Подключить и настроить GSAP-анимации в секциях.
- [x] Запустить dev-сервер и проверить работу сайта.
- [x] Добавить реальные фото и заменить placeholder-ингредиенты.
- [x] Добавить страницу `/gallery` с категориями.
- [x] Подключить локальный шрифт `PoppingCute.ttf` для кириллицы.
- [x] Добавить форму обратной связи с отправкой в Google Forms.
- [x] Настроить `next/image` для внешних доменов.

## Бэклог
- [ ] Настроить `next.config.ts` → `images.qualities: [75, 100]` (убрать браузерные warns).
- [ ] Настроить деплой (Vercel / другой хостинг).
- [ ] Рассмотреть переименование папки проекта без апострофа для совместимости с `npm`.
- [ ] Уточнить лицензию GSAP SplitText для продакшена.
- [ ] Добавить Sentry/логирование для ошибок формы и внешних изображений.
- [ ] Удалить неиспользуемые ассеты: `public/img-webp/locations/`, `Kawaii_cheeseburger.mp4`, `public/img-webp/about/banner.png`.
- [ ] Зафиксировать текущую работу в git (есть незакоммиченные изменения — требуется разрешение пользователя).
