export type Location = {
  slug: string;
  name: string;
  nameRu: string;
  address: string;
  district: string;
  phone: string;
  phoneDisplay: string;
  telegram: string;
  hours: string[];
  image: string;
  hasGallery: boolean;
};

export const locations: Location[] = [
  {
    slug: "original",
    name: "Original",
    nameRu: "Академгородок",
    address: "ул. Ильича, 10",
    district: "Академгородок",
    phone: "+79833121420",
    phoneDisplay: "+7-983-312-1-420",
    telegram: "https://t.me/spotandchoos",
    hours: ["вс–чт  12:00 – 23:00", "пт–сб  12:00 – 00:00"],
    image: "https://cdn.prod.website-files.com/64d8af984c758e0313a895b7/65c4903be67f3562ff9b38e9_photo_2023-08-11%2013.19.11.jpeg",
    hasGallery: true,
  },
  {
    slug: "kom45",
    name: "KOM45",
    nameRu: "Центр",
    address: "ул. Коммунистическая, 45",
    district: "Центр",
    phone: "+79833020420",
    phoneDisplay: "+7-983-302-0-420",
    telegram: "https://t.me/spotandchooskom45",
    hours: ["вс–чт  12:00 – 23:00", "пт–сб  12:00 – 00:00"],
    image: "https://cdn.prod.website-files.com/64d8af984c758e0313a895b7/64fe8de0e6e4f3a42a8c5614_photo_2023-08-04%2019.25_5.png",
    hasGallery: true,
  },
  {
    slug: "lite",
    name: "Lite",
    nameRu: "У площади Ленина",
    address: "ул. Ленина, 3",
    district: "Центр",
    phone: "+79132030420",
    phoneDisplay: "+7-913-203-0-420",
    telegram: "https://t.me/Spotandchooslite",
    hours: ["вс–сб  12:00 – 22:00"],
    image: "https://cdn.prod.website-files.com/64d8af984c758e0313a895b7/64fe9aba2994b2723af306aa_photo_2023-08-04%2020.47_2.png",
    hasGallery: true,
  },
  {
    slug: "nstu",
    name: "NSTU",
    nameRu: "НГТУ — левый берег",
    address: "ул. Блюхера, 32/1",
    district: "Левый берег (общежитие НГТУ №6)",
    phone: "+79139040420",
    phoneDisplay: "+7-913-904-0-420",
    telegram: "https://t.me/spotAndchoosLeft",
    hours: ["вс–чт  12:00 – 22:00", "пт–сб  12:00 – 23:00"],
    image: "https://cdn.prod.website-files.com/64d8af984c758e0313a895b7/65c48b708470ab07c3b4ef0b_photo_2023-08-04%2013.22.43.jpeg",
    hasGallery: true,
  },
  {
    slug: "koltsovo",
    name: "Koltsovo",
    nameRu: "Кольцово",
    address: "ул. Ак. Сандахчиева, 5",
    district: "Кольцово",
    phone: "+79130141420",
    phoneDisplay: "+7-913-014-1-420",
    telegram: "https://t.me/spotandchoosKoltsovo",
    hours: ["вс–сб  12:00 – 22:00"],
    image: "https://cdn.prod.website-files.com/64d8af984c758e0313a895b7/68382c27a3f01c1fe7be41a7_photo_2025-05-29%2014.42.21.jpeg",
    hasGallery: false,
  },
];

export const contactForm = {
  action: "https://docs.google.com/forms/d/e/1FAIpQLSeYJNCKyEuw5jDRNpTG5f7anBlP539ON-egLDksBT6LaZEMag/formResponse",
  method: "POST" as const,
  entries: {
    name: "entry.421480503",
    email: "entry.529909056",
    message: "entry.1779812662",
  },
};

export const menuImages: Record<string, string> = {
  original: "https://www.spotandchoos.com/images/menu/menu-academ.jpg",
  kom45: "https://www.spotandchoos.com/images/menu/menu-kom45.jpg",
  lite: "https://www.spotandchoos.com/images/menu/menu-lenina.jpg",
  nstu: "https://www.spotandchoos.com/images/menu/menu-ngtu.jpg",
  koltsovo: "https://www.spotandchoos.com/images/menu/menu-koltsovo.jpg",
};

export const navLinks = [
  { href: "/menu", label: "Меню" },
  { href: "/about", label: "О нас" },
  { href: "/gallery", label: "Галерея" },
  { href: "/contact", label: "Контакты" },
];

export const homeActions = [
  { href: "https://m.loyaltyplant.com/3177", label: "Скачать Приложение", color: "red", external: true },
  { href: "/gallery", label: "Галерея", color: "dark" },
];

export const socialLinks = [
  { href: "https://t.me/spotandchoos", label: "Telegram" },
  { href: "https://soundcloud.com/spot-choo/sets", label: "SoundCloud" },
  { href: "https://m.loyaltyplant.com/3177", label: "Приложение" },
];

export const aboutSections = [
  {
    title: "История",
    text: [
      "Spot&Choo's — симбиоз высшей еды и уличной культуры. То, что началось как сторонний хасл двух друзей детства, выросло в узнаваемый бренд. Наша любовь — качественный рэп, грязные бургеры, уличная одежда, кипящее масло и тянущийся сыыыр.",
      "Всё это основатели Spot и Choo впитали в США и Австралии, вернулись домой в Академгородок и приступили к созданию бургер-джоинта. Пацана сложили воедино всё, что любят, нашли братьев и сестёр по духу, и предложили городу самый приветливый сервис, крутой стритфуд, красивых мальчишек и девчонок в фирмовых кепочках, и, конечно, громкий рэп.",
    ],
    image: "https://cdn.prod.website-files.com/64d8af984c758e0313a895b7/64f919928c3a23a8bd09356c_Rectangle.png",
  },
  {
    title: "Концепция",
    text: [
      "Концепция Spot&Choo's ясна: дать гостю новый опыт. На входе тебя встретит команда друзей, а наша атмосфера заставит вернуться вечером за бутылочкой пива с луковыми кольцами.",
      "С тщательным вниманием к деталям, мы создаём каждый бургер, используя только самые свежие и качественные ингредиенты. Наши талантливые повара создают такие вкусовые сочетания, что тебе захочется ещё, и ещё, и ещё. Мы удовлетворим тебя, и нам без разницы — вегетарианец ты, мясоед или просто зашел взять кофе.",
    ],
    image: "https://cdn.prod.website-files.com/64d8af984c758e0313a895b7/65c41530901dafa49738ee29_photo_2023-08-02-12.18-1.png",
    reverse: true,
  },
  {
    title: "Локации",
    text: [
      "Мы начались с OG Spot&Choo's в Академгородке на ул. Ильича, 10 и продолжились в других районах Новосибирска.",
      "Сейчас ты можешь найти большой S&C KOM45 с диджеями по пятницам и субботам (Коммунистическая, 45), маленький S&C Lite (Ленина, 3), точку S&C NSTU (Блюхера, 32/1) и новый джоинт в Кольцово (ул. Ак. Сандахчиева, 5).",
    ],
    image: "https://cdn.prod.website-files.com/64d8af984c758e0313a895b7/64fe82272994b2723ad670ee_IMG_1280-1000-%201.png",
  },
  {
    title: "Ждём",
    text: [
      "Если ты любишь стрит-культуру, отборный хип-хоп, уличную еду и дружить, то ты скорее всего уже завязываешь шнурки на пороге и слушаешь наш плейлист. А мы уже включили гриль, охладили пиво и сделали погромче.",
      "Приходи получать опыт Spot&Choo's, есть, пить, слушать и болтать!",
      "C YA, FELLAS & SISTAS!",
    ],
    image: "https://cdn.prod.website-files.com/64d8af984c758e0313a895b7/64fe8227598ee130df747fcd_R1-07944-0011%201.png",
    reverse: true,
  },
];

export const galleryCategories = [
  {
    id: "random",
    title: "Рандом",
    images: [
      "https://cdn.prod.website-files.com/64d8af984c758e0313a895b7/64fe8227598ee130df747fcd_R1-07944-0011%201.png",
      "https://cdn.prod.website-files.com/64d8af984c758e0313a895b7/64fe82272994b2723ad670ee_IMG_1280-1000-%201.png",
      "https://cdn.prod.website-files.com/64d8af984c758e0313a895b7/68dea01b830ab225481bcbe2_photo_2025-09-26%2017.25.14.jpeg",
      "https://cdn.prod.website-files.com/64d8af984c758e0313a895b7/68dea596c0be7f294032396b_photo_2025-09-26%2020.18.38.jpeg",
      "https://cdn.prod.website-files.com/64d8af984c758e0313a895b7/64fe82235a21476b345ede9e_DSCF5357%201.png",
      "https://cdn.prod.website-files.com/64d8af984c758e0313a895b7/64fe82266c52fe1a5113623a_photo_2023-08-09%2011.10%201.png",
      "https://cdn.prod.website-files.com/64d8af984c758e0313a895b7/68dea4e9985dc919c77ece80_photo_2025-09-29%2020.51.00.jpeg",
      "https://cdn.prod.website-files.com/64d8af984c758e0313a895b7/68dea5fb26604a25cf582c51_psv2.jpeg",
    ],
  },
  {
    id: "joints",
    title: "Бургер джоинты",
    images: [
      "https://cdn.prod.website-files.com/64d8af984c758e0313a895b7/64fe8de1530203a7390bcde8_photo_2023-08-04%2019.33%201.png",
      "https://cdn.prod.website-files.com/64d8af984c758e0313a895b7/64fe8de0e6e4f3a42a8c5614_photo_2023-08-04%2019.25_5.png",
      "https://cdn.prod.website-files.com/64d8af984c758e0313a895b7/64fe8de19732cbbaa5b851ed_photo_2023-08-04%2019.26.png",
      "https://cdn.prod.website-files.com/64d8af984c758e0313a895b7/65c48d6ef63a923b7d7bfc8c_photo_2023-08-04%2021.52.15.jpeg",
      "https://cdn.prod.website-files.com/64d8af984c758e0313a895b7/65c48da03e997ad9df3d8cc4_photo_2023-08-04%2020.47.51.jpeg",
      "https://cdn.prod.website-files.com/64d8af984c758e0313a895b7/65c48b708470ab07c3b4ef0b_photo_2023-08-04%2013.22.43.jpeg",
      "https://cdn.prod.website-files.com/64d8af984c758e0313a895b7/65c48b8c0ac6070929bd9db0_photo_2023-08-04%2013.22.32.jpeg",
      "https://cdn.prod.website-files.com/64d8af984c758e0313a895b7/65c49022e82613df1ca544b3_photo_2023-08-11%2013.19.15.jpeg",
      "https://cdn.prod.website-files.com/64d8af984c758e0313a895b7/64fe91e7b2b752f61f5179bc_photo_2023-08-11%2013.19_2.png",
    ],
  },
  {
    id: "breakfast",
    title: "Завтрак Клуб",
    images: [
      "https://cdn.prod.website-files.com/64d8af984c758e0313a895b7/64fe8224e214f2e7629f5e4b_DSCF5046%201.png",
      "https://cdn.prod.website-files.com/64d8af984c758e0313a895b7/64fe8226e214f2e7629f609d_photo_2023-08-04%2008.12%201.png",
      "https://cdn.prod.website-files.com/64d8af984c758e0313a895b7/64fe8223e214f2e7629f5db1_IMG_9524%201.png",
    ],
  },
  {
    id: "food",
    title: "Еда",
    images: [
      "https://cdn.prod.website-files.com/64d8af984c758e0313a895b7/64fe82259732cbbaa5ac9269_photo_2023-08-02%2012.35%201.png",
      "https://cdn.prod.website-files.com/64d8af984c758e0313a895b7/64fe82246abe46916d786381_IMG_9487%201.png",
      "https://cdn.prod.website-files.com/64d8af984c758e0313a895b7/64fe82265d5f5e6865d4eb07_photo_2023-08-09%2011.09%201.png",
      "https://cdn.prod.website-files.com/64d8af984c758e0313a895b7/68dea570995ac80891964c80_IMG_9421.jpg",
      "https://cdn.prod.website-files.com/64d8af984c758e0313a895b7/68dea5c5747f24ec280d97e7_photo_2025-09-27%2009.43.32.jpeg",
    ],
  },
  {
    id: "merch",
    title: "Мерч и штучки",
    images: [
      "https://cdn.prod.website-files.com/64d8af984c758e0313a895b7/64fe8228e214f2e7629f61b8_R1-07944-0026%201.png",
      "https://cdn.prod.website-files.com/64d8af984c758e0313a895b7/64fe8222f21d29c63fd81e9e_DSCF5055%201.png",
    ],
  },
  {
    id: "wrapped",
    title: "2015–2025 wrapped",
    images: [
      "https://cdn.prod.website-files.com/64d8af984c758e0313a895b7/64fe8227598ee130df747fcd_R1-07944-0011%201.png",
      "https://cdn.prod.website-files.com/64d8af984c758e0313a895b7/64fe82272994b2723ad670ee_IMG_1280-1000-%201.png",
      "https://cdn.prod.website-files.com/64d8af984c758e0313a895b7/64fe8224e214f2e7629f5e4b_DSCF5046%201.png",
      "https://cdn.prod.website-files.com/64d8af984c758e0313a895b7/64fe82235a21476b345ede9e_DSCF5357%201.png",
    ],
  },
];
