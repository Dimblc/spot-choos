"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import BlobButton from "@/components/ui/BlobButton";
import BurgerEyes from "@/components/animations/BurgerEyes";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const [isAssembled, setIsAssembled] = useState(false);
  const [showTags, setShowTags] = useState(false);
  const [burgerPhotoVisible, setBurgerPhotoVisible] = useState(false);
  const [smiled, setSmiled] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 22,
    restDelta: 0.001,
  });

  // --- Текст: SPOOT вверх, CHOO'S вниз (0% → 12%) ---
  const topTextY = useTransform(smoothProgress, [0, 0.12], [0, -1200]);
  const bottomTextY = useTransform(smoothProgress, [0, 0.12], [0, 1200]);

  // === ИНГРЕДИЕНТЫ — прилетают (10% → 70%) ===

  // Нижняя булка (10% → 22%) — y: 800→0
  const bunBottomY = useTransform(smoothProgress, [0.1, 0.22], [800, 0]);
  const bunBottomScale = useTransform(smoothProgress, [0.2, 0.21, 0.22], [1, 1.1, 1]);

  // Котлета (22% → 34%) — y: 1000→0
  const pattyY = useTransform(smoothProgress, [0.22, 0.34], [1000, 0]);
  const pattyScale = useTransform(smoothProgress, [0.32, 0.33, 0.34], [1, 1.1, 1]);

  // Сыр (34% → 44%) — scale: 0.2→1, rotate: 45→0, изначально невидим
  const cheeseScale = useTransform(smoothProgress, [0.34, 0.44], [0.2, 1]);
  const cheeseRotate = useTransform(smoothProgress, [0.34, 0.44], [45, 0]);
  const cheeseImpact = useTransform(smoothProgress, [0.42, 0.43, 0.44], [1, 1.1, 1]);
  const cheeseOpacity = useTransform(smoothProgress, [0.32, 0.36], [0, 1]);

  // Бекон (44% → 54%) — x: 700→0, rotate: 25→0, изначально невидим
  const baconX = useTransform(smoothProgress, [0.44, 0.54], [700, 0]);
  const baconRotate = useTransform(smoothProgress, [0.44, 0.54], [25, 0]);
  const baconImpact = useTransform(smoothProgress, [0.52, 0.53, 0.54], [1, 1.1, 1]);
  const baconOpacity = useTransform(smoothProgress, [0.42, 0.46], [0, 1]);

  // Салат (54% → 64%) — x: -700→0, rotate: -15→0, изначально невидим
  const lettuceX = useTransform(smoothProgress, [0.54, 0.64], [-700, 0]);
  const lettuceRotate = useTransform(smoothProgress, [0.54, 0.64], [-15, 0]);
  const lettuceImpact = useTransform(smoothProgress, [0.62, 0.63, 0.64], [1, 1.1, 1]);
  const lettuceOpacity = useTransform(smoothProgress, [0.52, 0.56], [0, 1]);

  // Верхняя булка (64% → 74%) — y: -500→0, rotate: -20→0
  const topBunY = useTransform(smoothProgress, [0.64, 0.74], [-500, 0]);
  const topBunRotate = useTransform(smoothProgress, [0.64, 0.74], [-20, 0]);
  const topBunImpact = useTransform(smoothProgress, [0.72, 0.73, 0.74], [1, 1.1, 1]);

  // === СЖАТИЕ: продолжается во время всплеска, пока ингредиенты не скроются (74% → 90%) ===
  const compressScale = useTransform(smoothProgress, [0.74, 0.9], [1, 0.7]);
  const compressGap = useTransform(smoothProgress, [0.74, 0.9], [0, -60]);

  // --- Сырный всплеск (82% → 98%) ---
  const splashScale = useTransform(smoothProgress, [0.82, 0.95], [0, 5]);
  const splashOpacity = useTransform(
    smoothProgress,
    [0.82, 0.82, 0.94, 0.98],
    [0, 1, 1, 0]
  );
  const splashRotate = useTransform(smoothProgress, [0.82, 0.95], [0, 45]);

  // --- Фото целого бургера ---
  const burgerPhotoOpacity = useTransform(
    smoothProgress,
    [0.88, 0.95, 1],
    [0, 1, 1]
  );
  const burgerPhotoScale = useTransform(smoothProgress, [0.88, 0.96], [0.8, 1]);

  // --- Ингредиенты исчезают ---
  const ingredientsOpacity = useTransform(
    smoothProgress,
    [0.82, 0.88, 1],
    [1, 0, 0]
  );

  // --- Кнопка ---
  const buttonOpacity = useTransform(smoothProgress, [0.97, 1], [0, 1]);
  const buttonY = useTransform(smoothProgress, [0.97, 1], [100, 0]);

  // --- Теги ---
  const tags = [
    { text: "Бургеры с характером", rotate: -4, className: "top-[22%] left-[18%]", bg: "bg-red" },
    { text: "Вкус, который не молчит", rotate: 5, className: "top-[20%] right-[16%]", bg: "bg-mustard-dark" },
    { text: "Громко. Сочно. По-честному.", rotate: -3, className: "top-[55%] left-[14%]", bg: "bg-mustard-dark" },
    { text: "Сочно до последней крошки", rotate: 4, className: "top-[52%] right-[14%]", bg: "bg-red" },
  ];

  // --- Тень ---
  const shadowOpacity = useTransform(smoothProgress, [0.74, 0.86], [0, 0.3]);
  const shadowScale = useTransform(smoothProgress, [0.74, 0.86], [0.5, 1]);

  // --- Дыхание бургера + теги ---

  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      setIsAssembled(latest > 0.74 && latest < 0.82);
      if (latest > 0.97) {
        setShowTags(true);
        setBurgerPhotoVisible(true);
      } else {
        setShowTags(false);
        setBurgerPhotoVisible(false);
      }
    });
  }, [scrollYProgress]);

  return (
    <section ref={ref} className="relative h-[400vh]">
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col items-center justify-center">
        {/* === SPOOT === */}
        <motion.h1
          style={{ y: topTextY, x: "-50%" }}
          className="absolute top-[18%] left-1/2 z-10 text-[22vw] md:text-[16vw] font-modak uppercase text-mustard-dark text-stroke-180 leading-none whitespace-nowrap"
        >
          SPOOT
        </motion.h1>

        {/* === CHOO'S === */}
        <motion.h1
          style={{ y: bottomTextY, x: "-50%" }}
          className="absolute top-[58%] left-1/2 z-10 text-[22vw] md:text-[16vw] font-modak uppercase text-mustard-dark text-stroke-180 leading-none whitespace-nowrap"
        >
          CHOO&apos;S
        </motion.h1>

        {/* === ИНГРЕДИЕНТЫ === */}
        <motion.div
          style={{ opacity: ingredientsOpacity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none"
        >
          <motion.div
            animate={isAssembled ? { y: [0, -12, 0] } : { y: 0 }}
            transition={
              isAssembled
                ? { repeat: Infinity, duration: 2, ease: "easeInOut" }
                : { duration: 0.3 }
            }
            style={{ scale: compressScale }}
            className="w-[80vw] md:w-[45vw] lg:w-[40vw] max-w-[750px] flex flex-col-reverse items-center justify-center"
          >
            {/* Нижняя булка */}
            <motion.img
              src="/img-webp/107-no-bg-preview (carve.photos).png"
              alt="Нижняя булка"
              style={{ y: bunBottomY, scale: bunBottomScale, marginTop: compressGap }}
              className="w-full select-none"
              draggable={false}
            />

            {/* Котлета */}
            <motion.img
              src="/img-webp/105-no-bg-preview (carve.photos).png"
              alt="Котлета"
              style={{ y: pattyY, scale: pattyScale, marginTop: compressGap }}
              className="w-[88%] -mt-[3%] select-none"
              draggable={false}
            />

            {/* Сыр */}
            <motion.img
              src="/img-webp/cheese-no-bg-preview (carve.photos).png"
              alt="Сыр"
              style={{ scale: cheeseScale, rotate: cheeseRotate, opacity: cheeseOpacity, marginTop: compressGap }}
              className="w-[92%] -mt-[4%] select-none origin-center"
              draggable={false}
            />

            {/* Бекон */}
            <motion.img
              src="/img-webp/104-no-bg-preview (carve.photos).png"
              alt="Бекон"
              style={{ x: baconX, rotate: baconRotate, scale: baconImpact, opacity: baconOpacity, marginTop: compressGap }}
              className="w-[82%] -mt-[3%] select-none origin-center"
              draggable={false}
            />

            {/* Салат */}
            <motion.img
              src="/img-webp/103-no-bg-preview (carve.photos).png"
              alt="Салат"
              style={{ x: lettuceX, rotate: lettuceRotate, scale: lettuceImpact, opacity: lettuceOpacity, marginTop: compressGap }}
              className="w-[92%] -mt-[4%] select-none origin-center"
              draggable={false}
            />

            {/* Верхняя булка */}
            <motion.img
              src="/img-webp/102-no-bg-preview (carve.photos).png"
              alt="Верхняя булка"
              style={{
                y: topBunY,
                rotate: topBunRotate,
                scale: topBunImpact,
                marginTop: compressGap,
              }}
              className="w-full -mt-[3%] select-none origin-center"
              draggable={false}
            />
          </motion.div>
        </motion.div>

        {/* === ТЕНЬ ПОД БУРГЕРОМ === */}
        <motion.div
          style={{ opacity: shadowOpacity, scale: shadowScale, x: "-50%" }}
          className="absolute top-[68%] left-1/2 z-[19] w-[40vw] h-[3vh] rounded-[50%] bg-black blur-[20px] pointer-events-none"
        />

        {/* === ФОТО ЦЕЛОГО БУРГЕРА (с покачиванием + большая тень) === */}
        <motion.div
          style={{
            opacity: burgerPhotoOpacity,
            scale: burgerPhotoScale,
          }}
          animate={
            burgerPhotoVisible
              ? { y: [0, -10, 0] }
              : { y: 0 }
          }
          transition={
            burgerPhotoVisible
              ? { repeat: Infinity, duration: 3, ease: "easeInOut" }
              : { duration: 0.3 }
          }
          className="absolute top-[42%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-[25] w-[90vw] md:w-[54vw] lg:w-[47vw] max-w-[945px] pointer-events-none"
        >
          <img
            src="/img-webp/kaif.png"
            alt="Spot & Choo's burger"
            className="w-full h-auto object-contain select-none [filter:drop-shadow(0_50px_80px_rgba(0,0,0,0.25))]"
            draggable={false}
          />

          <BurgerEyes
            visible={burgerPhotoVisible}
            smiled={smiled}
          />
        </motion.div>

        {/* === ТЕГИ ВОКРУГ БУРГЕРА === */}
        <div className="absolute top-0 left-0 w-full h-full z-[26] pointer-events-none">
          {tags.map((tag, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0, opacity: 0 }}
              animate={showTags ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
              transition={{
                delay: showTags ? i * 0.15 : 0,
                type: "spring",
                stiffness: 200,
                damping: 12,
              }}
              className={`absolute ${tag.className} origin-center`}
            >
              <span
                className={`inline-block ${tag.bg} text-white font-modak uppercase text-[3vw] md:text-[1.4vw] px-[1.5vw] py-[0.8vw] rounded-full whitespace-nowrap shadow-lg`}
                style={{ rotate: `${tag.rotate}deg` }}
              >
                {tag.text}
              </span>
            </motion.div>
          ))}
        </div>

        {/* === СЫРНЫЙ ВСПЛЕСК (непрозрачный, круглая форма с деталями) === */}
        <motion.div
          style={{
            scale: splashScale,
            opacity: splashOpacity,
            rotate: splashRotate,
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-[120vh] h-[120vh] pointer-events-none"
        >
          <svg
            viewBox="0 0 300 300"
            className="w-full h-full"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Основная капля — круглая, непрозрачная */}
            <path
              fill="var(--color-mustard)"
              d="M150 12 C200 12, 245 38, 262 82 C278 120, 278 165, 262 200 C248 230, 220 250, 185 258 C155 265, 122 262, 95 250 C65 236, 42 212, 30 180 C18 148, 18 112, 32 80 C48 45, 80 20, 115 14 C128 12, 140 11, 150 12 Z"
            />
            {/* Брызги — верх */}
            <circle cx="135" cy="8" r="6" fill="var(--color-mustard)" />
            <circle cx="165" cy="5" r="4" fill="var(--color-mustard)" />
            <circle cx="180" cy="14" r="3" fill="var(--color-mustard)" />
            {/* Брызги — правый верх */}
            <circle cx="272" cy="70" r="5" fill="var(--color-mustard)" />
            <circle cx="282" cy="88" r="3" fill="var(--color-mustard)" />
            {/* Брызги — правый низ */}
            <circle cx="275" cy="210" r="6" fill="var(--color-mustard)" />
            <circle cx="285" cy="195" r="3" fill="var(--color-mustard)" />
            {/* Брызги — низ */}
            <circle cx="140" cy="278" r="5" fill="var(--color-mustard)" />
            <circle cx="168" cy="282" r="4" fill="var(--color-mustard)" />
            <circle cx="155" cy="290" r="3" fill="var(--color-mustard)" />
            {/* Брызги — левый низ */}
            <circle cx="22" cy="195" r="5" fill="var(--color-mustard)" />
            <circle cx="14" cy="210" r="3" fill="var(--color-mustard)" />
            {/* Брызги — левый верх */}
            <circle cx="20" cy="80" r="6" fill="var(--color-mustard)" />
            <circle cx="12" cy="95" r="3" fill="var(--color-mustard)" />
            {/* Маленькие капли на отлёте */}
            <circle cx="288" cy="120" r="3" fill="var(--color-mustard)" />
            <circle cx="290" cy="145" r="4" fill="var(--color-mustard)" />
            <circle cx="8" cy="130" r="3" fill="var(--color-mustard)" />
            <circle cx="6" cy="155" r="4" fill="var(--color-mustard)" />
            <circle cx="195" cy="292" r="3" fill="var(--color-mustard)" />
            <circle cx="110" cy="294" r="3" fill="var(--color-mustard)" />
            <circle cx="294" cy="175" r="2" fill="var(--color-mustard)" />
            <circle cx="4" cy="175" r="2" fill="var(--color-mustard)" />
          </svg>
        </motion.div>

        {/* === КНОПКА === */}
        <motion.div
          style={{ opacity: buttonOpacity, y: buttonY, x: "-50%" }}
          className="absolute bottom-[6%] left-1/2 z-40"
          onClick={() => setSmiled(true)}
        >
          <BlobButton href="/menu">СМОТРЕТЬ МЕНЮ</BlobButton>
        </motion.div>
      </div>
    </section>
  );
}
