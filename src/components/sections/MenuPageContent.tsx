"use client";

import { useState } from "react";
import Image from "next/image";
import ScrollReveal from "@/components/animations/ScrollReveal";
import ProjectButton from "@/components/ui/project-button";
import RemoteImage from "@/components/ui/remote-image";
import MenuList from "@/components/sections/MenuList";
import { locations, menuImages } from "@/lib/data";

const RED = "#FF2D2D";
const BLACK = "#1B1B1B";

function Star({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 100 100" className={className} style={style} fill="none" aria-hidden>
      <path d="M50 4L62 36L96 38L68 58L78 92L50 72L22 92L32 58L4 38L38 36Z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

function Sparkle({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 100 100" className={className} style={style} fill="none" aria-hidden>
      <path d="M50 2C55 30 70 45 98 50 70 55 55 70 50 98 45 70 30 55 2 50 30 45 45 30 50 2Z" fill="currentColor" />
    </svg>
  );
}

function RedArrow({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 120 80" className={className} style={style} fill="none" stroke={RED} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M6 40C36 8 66 60 110 24" />
      <path d="M110 24L92 20M110 24L106 42" />
    </svg>
  );
}

function Heart({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 100 90" className={className} style={style} fill="none" aria-hidden>
      <path d="M50 82C20 60 6 42 6 26C6 14 16 6 28 6C38 6 46 12 50 20C54 12 62 6 72 6C84 6 94 14 94 26C94 42 80 60 50 82Z" fill={RED} stroke={RED} strokeWidth="3" strokeLinejoin="round" />
    </svg>
  );
}

function Bolt({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 60 100" className={className} style={style} fill="none" aria-hidden>
      <path d="M36 2L8 54H28L22 98L52 40H32L36 2Z" fill={RED} stroke={RED} strokeWidth="3" strokeLinejoin="round" />
    </svg>
  );
}

function MapPin({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 22s8-7 8-13a8 8 0 1 0-16 0c0 6 8 13 8 13Z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}

function WavyLine({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 200 30" className={className} style={style} fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" aria-hidden>
      <path d="M4 15C30 4 50 26 76 15C102 4 124 26 150 15C176 4 190 20 196 15" className="anim-draw-wave" />
    </svg>
  );
}

const advantages = [
  { icon: "📍", title: "5 точек в городе", text: "Всегда рядом с тобой" },
  { icon: "⏰", title: "Предзаказ в Telegram", text: "Без очередей" },
  { icon: "🍔", title: "Свежие ингредиенты", text: "Каждый бургер вручную" },
  { icon: "⚡", title: "Быстрое приготовление", text: "За 15–20 минут" },
];

export default function MenuPageContent() {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const [lightboxCaption, setLightboxCaption] = useState("");

  const rowOne = locations.slice(0, 3);
  const rowTwo = locations.slice(3, 5);

  return (
    <section className="relative w-full overflow-hidden bg-beige">
      {/* Doodle decorations */}
      <Star className="absolute top-[8%] right-[6%] w-[28px] h-[28px] md:w-[44px] md:h-[44px] text-[#FF2D2D]/20 rotate-12 anim-wobble" style={{ ["--wobble-from" as string]: "12deg", ["--wobble-to" as string]: "-4deg" } as React.CSSProperties} />
      <Sparkle className="absolute top-[40%] left-[3%] w-[20px] h-[20px] md:w-[32px] md:h-[32px] text-[#FF2D2D]/30 anim-pulse-soft" />
      <Heart className="absolute top-[70%] right-[4%] w-[24px] h-[22px] md:w-[36px] md:h-[32px] opacity-30 -rotate-6 anim-float-soft" />
      <Bolt className="absolute top-[88%] left-[8%] w-[16px] h-[26px] md:w-[24px] md:h-[40px] opacity-25 rotate-12" />

      <div className="mx-auto max-w-[1440px] px-4 md:px-[2.5vw] py-12 md:py-[5vw]">

        {/* === HERO === */}
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-[3vw] items-center">
            {/* Left */}
            <div className="md:col-span-7 flex flex-col gap-4 md:gap-[1.5vw]">
              <div className="relative">
                <Sparkle className="absolute -top-3 -left-4 w-[24px] h-[24px] md:w-[40px] md:h-[40px] text-[#FF2D2D]/40 anim-pulse-soft" />
                <h1 className="font-modak uppercase text-[#FF2D2D] text-stroke-small text-[clamp(52px,11vw,150px)] leading-[0.9] tracking-tight">
                  МЕНЮ
                </h1>
              </div>
              <p className="font-body text-[#444] text-[clamp(15px,1.5vw,20px)] leading-[1.6] max-w-[520px]">
                Выбери ближайшую точку, открой полное меню одним нажатием или оформи заказ через Telegram.
              </p>
              <div className="flex flex-wrap gap-3 md:gap-[1vw] mt-2">
                <ProjectButton
                  href="#locations"
                  variant="red"
                  className="text-[clamp(13px,1.2vw,17px)] px-5 md:px-[1.5vw] py-3 md:py-[0.8vw] h-auto"
                >
                  📍 Найти ближайший ресторан
                </ProjectButton>
                <ProjectButton
                  href="https://t.me/spotandchoos"
                  external
                  variant="ghost"
                  className="text-[clamp(13px,1.2vw,17px)] px-5 md:px-[1.5vw] py-3 md:py-[0.8vw] h-auto border-[#FF2D2D]/20"
                >
                  📱 Заказать в Telegram
                </ProjectButton>
              </div>
            </div>

            {/* Right — mascot */}
            <div className="md:col-span-5 relative flex items-center justify-center">
              <RedArrow className="absolute -top-4 -right-2 w-[50px] h-[36px] md:w-[80px] md:h-[54px] z-30 rotate-[12deg] anim-float-soft" />
              <Star className="absolute -bottom-2 -left-2 w-[28px] h-[28px] md:w-[44px] md:h-[44px] text-[#FF2D2D]/30 -rotate-12 anim-wobble" style={{ ["--wobble-from" as string]: "-12deg", ["--wobble-to" as string]: "6deg" } as React.CSSProperties} />
              <Sparkle className="absolute top-[10%] -left-4 w-[20px] h-[20px] md:w-[32px] md:h-[32px] text-[#1B1B1B]/30 anim-pulse-soft" />
              <div className="relative w-full max-w-[420px] aspect-[3/2] anim-float-soft">
                <Image
                  src="/img-webp/menu/mascot.png"
                  alt="Spot & Choo's маскот"
                  fill
                  sizes="(max-width: 768px) 90vw, 500px"
                  quality={100}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* === ADVANTAGES === */}
        <ScrollReveal delay={0.1}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-[1.5vw] mt-8 md:mt-[3vw]">
            {advantages.map((adv) => (
              <div
                key={adv.title}
                className="bg-white rounded-[24px] p-5 md:p-[1.5vw] shadow-[0_10px_30px_-12px_rgba(27,27,27,0.15)] flex flex-col gap-2 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_36px_-12px_rgba(27,27,27,0.22)]"
              >
                <div className="flex items-center gap-2">
                  <span className="text-[20px] md:text-[28px]">{adv.icon}</span>
                  <h3 className="font-modak uppercase text-[#1B1B1B] text-[clamp(13px,1.4vw,20px)] leading-tight">
                    {adv.title}
                  </h3>
                </div>
                <p className="font-body text-[#777] text-[clamp(11px,1vw,14px)] leading-[1.5]">
                  {adv.text}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* === FULL TEXT MENU === */}
        <MenuList />

        {/* === CARDS ROW 1 === */}
        <div id="locations" className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-[2vw] mt-12 md:mt-[5vw]">
          {rowOne.map((loc, i) => (
            <MenuCard
              key={loc.slug}
              loc={loc}
              delay={i * 0.1}
              onZoom={(src, caption) => {
                setLightboxSrc(src);
                setLightboxCaption(caption);
              }}
            />
          ))}
        </div>

        {/* === COVERAGE MAP === */}
        <ScrollReveal delay={0.1}>
          <div className="relative my-12 md:my-[4vw] rounded-[32px] bg-white shadow-[0_14px_40px_-15px_rgba(27,27,27,0.18)] p-8 md:p-[3vw] flex flex-col items-center gap-4 md:gap-[1.5vw]">
            <div className="relative flex items-center justify-center">
              <div className="w-[80px] h-[80px] md:w-[120px] md:h-[120px] rounded-full bg-[#FF2D2D] flex items-center justify-center text-center shadow-[0_8px_24px_-6px_rgba(255,45,45,0.4)] anim-pulse-soft">
                <span className="font-modak uppercase text-white text-[clamp(9px,0.9vw,14px)] leading-tight px-2">
                  Spot<br />&amp; Choo&apos;s
                </span>
              </div>
              <svg viewBox="0 0 400 80" className="absolute left-full top-1/2 -translate-y-1/2 w-[120px] md:w-[240px] h-[40px] md:h-[60px] hidden sm:block" fill="none" aria-hidden>
                <path d="M4 40C60 10 120 60 180 30C240 10 320 60 396 30" stroke={RED} strokeWidth="3" strokeLinecap="round" strokeDasharray="2 10" className="anim-draw-wave" />
                <circle cx="396" cy="30" r="8" fill={RED} />
              </svg>
              <div className="sm:hidden flex items-center gap-1 mt-2">
                <div className="w-[3px] h-[3px] rounded-full bg-[#FF2D2D]/40" />
                <div className="w-[3px] h-[3px] rounded-full bg-[#FF2D2D]/40" />
                <div className="w-[8px] h-[8px] rounded-full bg-[#FF2D2D]" />
              </div>
            </div>
            <p className="font-modak uppercase text-[#1B1B1B] text-[clamp(16px,2.2vw,28px)] text-center leading-tight">
              Мы рядом в любом районе города.
            </p>
            <Star className="absolute top-4 right-6 w-[20px] h-[20px] md:w-[32px] md:h-[32px] text-[#FF2D2D]/15 rotate-12" />
            <Sparkle className="absolute bottom-5 left-8 w-[14px] h-[14px] md:w-[22px] md:h-[22px] text-[#1B1B1B]/20 anim-pulse-soft" />
          </div>
        </ScrollReveal>

        {/* === CARDS ROW 2 === */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-[2vw]">
          {rowTwo.map((loc, i) => (
            <MenuCard
              key={loc.slug}
              loc={loc}
              delay={i * 0.1}
              onZoom={(src, caption) => {
                setLightboxSrc(src);
                setLightboxCaption(caption);
              }}
            />
          ))}
          {/* Filler card — quote */}
          <ScrollReveal delay={0.2} className="h-full">
            <div className="h-full rounded-[28px] bg-[#FF2D2D] p-8 md:p-10 flex flex-col justify-center items-center text-center gap-4 shadow-[0_14px_36px_-12px_rgba(255,45,45,0.3)] relative overflow-hidden">
              <Star className="absolute top-5 right-5 w-[24px] h-[24px] text-white/20 rotate-12 anim-wobble" style={{ ["--wobble-from" as string]: "12deg", ["--wobble-to" as string]: "-4deg" } as React.CSSProperties} />
              <Heart className="w-[36px] h-[32px] -rotate-6" />
              <h3 className="font-modak uppercase text-white text-[clamp(20px,2.6vw,32px)] leading-tight">
                C YA,<br />FELLAS &amp; SISTAS!
              </h3>
              <p className="font-body text-white/80 text-[clamp(13px,1.2vw,16px)] leading-[1.6]">
                Приходи получать опыт Spot&amp;Choo&apos;s, есть, пить, слушать и болтать!
              </p>
              <WavyLine className="w-[120px] h-auto text-white/60" />
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* === LIGHTBOX === */}
      {lightboxSrc && (
        <div
          className="fixed inset-0 z-[1000] bg-black/92 flex items-center justify-center p-[20px] cursor-zoom-out"
          onClick={() => setLightboxSrc(null)}
        >
          <ProjectButton
            className="absolute top-[16px] right-[16px] w-[44px] h-[44px] !rounded-full bg-white/15 border-white/30 text-white text-[24px] p-0"
            onClick={() => setLightboxSrc(null)}
            aria-label="Закрыть"
          >
            ×
          </ProjectButton>
          <img
            src={lightboxSrc}
            alt={lightboxCaption}
            className="max-w-full max-h-full object-contain rounded-[8px]"
          />
          <div className="absolute bottom-[20px] left-1/2 -translate-x-1/2 text-white font-modak uppercase bg-black/50 px-[14px] py-[8px] rounded-full text-[clamp(12px,1.4vw,18px)]">
            {lightboxCaption}
          </div>
        </div>
      )}
    </section>
  );
}

function MenuCard({
  loc,
  delay,
  onZoom,
}: {
  loc: (typeof locations)[number];
  delay: number;
  onZoom: (src: string, caption: string) => void;
}) {
  return (
    <ScrollReveal delay={delay} className="h-full">
      <div className="h-full rounded-[28px] bg-white shadow-[0_12px_34px_-12px_rgba(27,27,27,0.18)] overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_44px_-14px_rgba(27,27,27,0.26)] group">
        {/* Top — info */}
        <div className="p-6 md:p-7 flex flex-col gap-1">
          <h3 className="font-modak uppercase text-[#FF2D2D] text-[clamp(14px,1.3vw,20px)] leading-none">
            {loc.nameRu}
          </h3>
          <div className="flex items-center gap-1.5 mt-1">
            <MapPin className="w-[16px] h-[16px] text-[#FF2D2D]/60 shrink-0" />
            <p className="font-modak text-[#1B1B1B] text-[clamp(16px,1.6vw,24px)] leading-tight">
              {loc.address}
            </p>
          </div>
          <a
            href={`tel:${loc.phone}`}
            className="font-body text-[#888] text-[clamp(13px,1.2vw,16px)] hover:text-[#FF2D2D] transition-colors mt-0.5"
          >
            {loc.phoneDisplay}
          </a>
        </div>

        {/* Middle — menu image */}
        <div
          className="relative w-full aspect-[4/3] overflow-hidden cursor-zoom-in mx-0"
          onClick={() => onZoom(menuImages[loc.slug], `Меню — ${loc.name}, ${loc.address}`)}
        >
          <RemoteImage
            src={menuImages[loc.slug]}
            alt={`Меню — ${loc.name}`}
            fill
            quality={100}
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="(max-width: 768px) 90vw, 400px"
            loading="lazy"
          />
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur rounded-full px-3 py-1.5 font-modak uppercase text-[#FF2D2D] text-[clamp(10px,1vw,14px)] shadow-sm">
            Нажми для увеличения
          </div>
        </div>

        {/* Bottom — buttons */}
        <div className="p-6 md:p-7 flex flex-col gap-2.5 mt-auto">
          <button
            onClick={() => onZoom(menuImages[loc.slug], `Меню — ${loc.name}, ${loc.address}`)}
            className="w-full rounded-full bg-[#1B1B1B] text-white font-modak uppercase text-[clamp(12px,1.2vw,16px)] py-3 px-4 transition-all duration-300 hover:bg-[#FF2D2D] hover:scale-[1.02] active:scale-[0.98] text-center"
          >
            🖼 Открыть меню
          </button>
          <ProjectButton
            href={loc.telegram}
            external
            variant="red"
            className="w-full justify-center text-[clamp(12px,1.2vw,16px)] px-4 py-3 h-auto"
          >
            📱 Заказать в Telegram
          </ProjectButton>
        </div>
      </div>
    </ScrollReveal>
  );
}
