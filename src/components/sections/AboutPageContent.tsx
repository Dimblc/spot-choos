"use client";

import Image from "next/image";
import ScrollReveal from "@/components/animations/ScrollReveal";
import BlobButton from "@/components/ui/BlobButton";

const RED = "#FF2D2D";
const BLACK = "#1B1B1B";
const BEIGE = "#F5E3CD";

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

function WavyLine({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 200 30" className={className} style={style} fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" aria-hidden>
      <path d="M4 15C30 4 50 26 76 15C102 4 124 26 150 15C176 4 190 20 196 15" className="anim-draw-wave" />
    </svg>
  );
}

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

function BlackStrokes({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 80 80" className={className} style={style} fill="none" stroke={BLACK} strokeWidth="4" strokeLinecap="round" aria-hidden>
      <path d="M10 20L60 20M10 40L50 40M10 60L65 60" opacity="0.5" />
    </svg>
  );
}

function BurgerEyes({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 100 90" className={className} style={style} fill="none" stroke={BLACK} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M14 70C14 60 18 56 26 56C26 46 34 40 50 40C66 40 74 46 74 56C82 56 86 60 86 70Z" fill="#fff" />
      <circle cx="38" cy="54" r="3.5" fill={BLACK} />
      <circle cx="62" cy="54" r="3.5" fill={BLACK} />
      <path d="M40 64C44 68 56 68 60 64" />
      <path d="M20 56C24 50 30 50 34 54M66 54C70 50 76 50 80 56" opacity="0.4" />
    </svg>
  );
}

function DrinkCup({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 80 100" className={className} style={style} fill="none" stroke={BLACK} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M16 24L20 92Q20 96 24 96L56 96Q60 96 60 92L64 24Z" fill="#fff" />
      <path d="M16 24h48" />
      <path d="M28 24C28 14 34 8 40 8C46 8 52 14 52 24" />
      <path d="M22 40h36M22 52h36M22 64h30" opacity="0.3" />
    </svg>
  );
}

function Fries({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 80 100" className={className} style={style} fill="none" stroke={BLACK} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M14 40L18 92Q18 96 22 96L58 96Q62 96 62 92L66 40Z" fill="#fff" />
      <path d="M14 40h52" />
      <path d="M24 40V12M32 40V6M40 40V10M48 40V14M56 40V18" />
      <path d="M28 52h32M28 64h28" opacity="0.3" />
    </svg>
  );
}

export default function AboutPageContent() {
  return (
    <section className="relative w-full overflow-hidden" style={{ background: BEIGE }}>
      <div className="mx-auto max-w-[1440px] px-4 md:px-[2.5vw] py-16 md:py-[7vw]">

        {/* First screen */}
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-[3vw] items-start">
            {/* Left */}
            <div className="md:col-span-6 flex flex-col gap-4 md:gap-[1.2vw]">
              <div className="relative">
                <Star className="absolute -top-3 -right-2 w-[24px] h-[24px] md:w-[36px] md:h-[36px] text-[#FF2D2D]/30 -rotate-12 anim-wobble" style={{ ["--wobble-from" as string]: "-12deg", ["--wobble-to" as string]: "4deg" } as React.CSSProperties} />
                <h1 className="font-modak uppercase text-[#FF2D2D] text-stroke-small text-[clamp(48px,10vw,128px)] leading-[0.9] tracking-tight">
                  О НАС
                </h1>
              </div>
              <h2 className="font-modak uppercase text-[#1B1B1B] text-[clamp(24px,3.8vw,48px)] leading-[1.1] mt-1">
                История нашего вкуса<br />и команды
              </h2>
              <div className="flex flex-col gap-3 md:gap-[1vw] font-body text-[#444] text-[clamp(14px,1.3vw,17px)] leading-[1.6] max-w-[540px] mt-1">
                <p>
                  Spot&amp;Choo&apos;s — симбиоз высшей еды и уличной культуры. То, что началось как сторонний хасл двух друзей детства, выросло в узнаваемый бренд.
                </p>
                <p>
                  Наша любовь — качественный рэп, грязные бургеры, уличная одежда, кипящее масло и тянущийся сыр.
                </p>
                <p>
                  Всё это основатели Spot и Choo впитали в США и Австралии, вернулись домой в Академгородок и приступили к созданию бургер-джоинта.
                </p>
              </div>

              {/* Info block */}
              <div className="flex flex-wrap gap-3 md:gap-[1vw] mt-4 md:mt-[1.5vw]">
                {[
                  { icon: "★", label: "Основаны в 2020" },
                  { icon: "◉", label: "Академгородок, Нск" },
                  { icon: "▲", label: "100+ бургеров ежедневно" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 font-body text-[#1B1B1B] text-[clamp(12px,1vw,14px)] shadow-[0_4px_12px_-4px_rgba(27,27,27,0.12)]">
                    <span className="text-[#FF2D2D] text-[14px]">{item.icon}</span>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right */}
            <div className="md:col-span-6 relative">
              <RedArrow className="absolute -top-6 -left-4 md:-top-8 md:-left-10 w-[60px] h-[44px] md:w-[100px] md:h-[68px] z-30 -rotate-[8deg] anim-float-soft" />
              <BlackStrokes className="absolute -bottom-4 -right-2 md:-bottom-6 md:-right-6 w-[50px] h-[50px] md:w-[70px] md:h-[70px] z-30 rotate-12" />
              <Sparkle className="absolute top-[30%] -right-5 w-[20px] h-[20px] md:w-[34px] md:h-[34px] text-[#FF2D2D]/40 z-30 anim-pulse-soft" />

              <div className="relative rounded-[32px] overflow-hidden shadow-[0_20px_50px_-15px_rgba(27,27,27,0.25)] bg-white group">
                <div className="absolute top-5 left-1/2 -translate-x-1/2 z-20 px-5 py-2 rounded-full bg-[#FF2D2D] text-white font-modak uppercase text-[clamp(14px,1.8vw,22px)] tracking-wider shadow-lg">
                  Spot &amp; Choo&apos;s
                </div>
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src="/img-webp/about/founders.png"
                    alt="Основатели Spot & Choo's"
                    fill
                    sizes="(max-width: 768px) 90vw, 700px"
                    quality={100}
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <p className="font-body text-[#666] text-[clamp(12px,1vw,15px)] text-center py-3 px-4">
                  Основатели Spot&amp;Choo&apos;s
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Second row — 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-[2vw] mt-10 md:mt-[3.5vw]">
          {/* Card 1 — team photo + caption */}
          <ScrollReveal className="h-full">
            <div className="h-full rounded-[28px] overflow-hidden shadow-[0_14px_36px_-12px_rgba(27,27,27,0.2)] bg-white group transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_44px_-14px_rgba(27,27,27,0.28)] flex flex-col">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src="/img-webp/about/team.png"
                  alt="Команда"
                  fill
                  sizes="(max-width: 768px) 90vw, 460px"
                  quality={100}
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <div className="p-6 md:p-8 flex flex-col gap-2 flex-1">
                <h3 className="font-modak uppercase text-[#1B1B1B] text-[clamp(22px,2.8vw,34px)] leading-tight">
                  Наш ресторан
                </h3>
                <p className="font-body text-[#555] text-[clamp(13px,1.2vw,16px)] leading-[1.6]">
                  Академгородок — место, где рождаются наши бургеры.
                </p>
                <p className="font-body text-[#888] text-[clamp(11px,0.95vw,14px)] mt-auto pt-2">
                  Наш первый дом
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 2 — text */}
          <ScrollReveal delay={0.1} className="h-full">
            <div className="h-full rounded-[28px] bg-white p-6 md:p-8 flex flex-col justify-center shadow-[0_14px_36px_-12px_rgba(27,27,27,0.2)] relative transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_44px_-14px_rgba(27,27,27,0.28)]">
              <Star className="absolute top-5 right-5 w-[22px] h-[22px] text-[#FF2D2D]/20 rotate-12 anim-wobble" style={{ ["--wobble-from" as string]: "8deg", ["--wobble-to" as string]: "-4deg" } as React.CSSProperties} />
              <h3 className="font-modak uppercase text-[#1B1B1B] text-[clamp(22px,2.8vw,34px)] leading-tight">
                Еда с характером
              </h3>
              <p className="mt-4 font-body text-[#555] text-[clamp(13px,1.2vw,16px)] leading-[1.6]">
                Мы готовим каждый бургер вручную только из свежих ингредиентов. Никаких компромиссов — только настоящий вкус.
              </p>
              <WavyLine className="mt-6 w-[140px] h-auto text-[#FF2D2D]" />
            </div>
          </ScrollReveal>

          {/* Card 3 — entrance + text */}
          <ScrollReveal delay={0.2} className="h-full">
            <div className="h-full rounded-[28px] overflow-hidden shadow-[0_14px_36px_-12px_rgba(27,27,27,0.2)] bg-white flex flex-col group transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_44px_-14px_rgba(27,27,27,0.28)]">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src="/img-webp/about/entrance.png"
                  alt="Вход в ресторан"
                  fill
                  sizes="(max-width: 768px) 90vw, 460px"
                  quality={100}
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <div className="p-6 md:p-8 flex flex-col gap-2 flex-1">
                <Heart className="w-[26px] h-[24px] -rotate-6" />
                <h3 className="font-modak uppercase text-[#1B1B1B] text-[clamp(22px,2.8vw,34px)] leading-tight">
                  Наше место
                </h3>
                <p className="font-body text-[#555] text-[clamp(13px,1.2vw,16px)] leading-[1.6]">
                  Атмосфера уюта, любовь к своему району и друзьям. Заходи — мы тебя ждём.
                </p>
                <p className="font-body text-[#888] text-[clamp(11px,0.95vw,14px)] mt-auto pt-2">
                  Место, где всё началось
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Bottom banner */}
        <ScrollReveal delay={0.15} className="mt-10 md:mt-[3.5vw]">
          <div className="relative rounded-[32px] overflow-hidden shadow-[0_18px_48px_-15px_rgba(27,27,27,0.25)] bg-white p-8 md:p-[3vw]">
            <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-6 md:gap-[2vw]">
              {/* Left — logo */}
              <div className="md:col-span-3 flex items-center justify-center">
                <div className="w-[100px] h-[100px] md:w-[140px] md:h-[140px] rounded-full bg-[#FF2D2D] flex items-center justify-center text-center shadow-[0_8px_24px_-6px_rgba(255,45,45,0.4)] anim-pulse-soft">
                  <span className="font-modak uppercase text-white text-[clamp(11px,1.1vw,16px)] leading-tight px-2">
                    Spot<br />&amp; Choo&apos;s
                  </span>
                </div>
              </div>

              {/* Center — slogan */}
              <div className="md:col-span-5 flex flex-col items-center text-center gap-3 md:gap-[1vw]">
                <h3 className="font-modak uppercase text-[#FF2D2D] text-stroke-small text-[clamp(24px,4vw,54px)] leading-[1] tracking-tight">
                  Это не просто еда.<br />Это культура.
                </h3>
                <p className="text-[#1B1B1B]/70 font-modak uppercase text-[clamp(12px,1.3vw,18px)] tracking-wider">
                  Музыка. Друзья. Улицы. Бургеры. Сообщество.
                </p>
              </div>

              {/* Right — illustrations */}
              <div className="md:col-span-4 flex items-center justify-center gap-3 md:gap-[1.2vw] flex-wrap">
                <BurgerEyes className="w-[48px] h-[44px] md:w-[68px] md:h-[60px] shrink-0 anim-float-soft" />
                <Fries className="w-[40px] h-[52px] md:w-[54px] md:h-[68px] shrink-0 anim-float-soft" style={{ animationDelay: "0.4s" } as React.CSSProperties} />
                <DrinkCup className="w-[36px] h-[48px] md:w-[50px] md:h-[64px] shrink-0 anim-float-soft" style={{ animationDelay: "0.8s" } as React.CSSProperties} />
                <Sparkle className="w-[18px] h-[18px] md:w-[26px] md:h-[26px] text-[#1B1B1B] shrink-0 anim-pulse-soft" />
                <Star className="w-[18px] h-[18px] md:w-[24px] md:h-[24px] text-[#FF2D2D] shrink-0 rotate-12 anim-wobble" style={{ ["--wobble-from" as string]: "12deg", ["--wobble-to" as string]: "-4deg" } as React.CSSProperties} />
                <RedArrow className="w-[40px] h-[28px] opacity-40 rotate-[12deg]" />
              </div>
            </div>

            <RedArrow className="absolute top-4 right-[20%] w-[50px] h-[34px] opacity-25 rotate-[12deg] hidden md:block anim-float-soft" />
            <Sparkle className="absolute bottom-6 left-[25%] w-[14px] h-[14px] text-[#FF2D2D]/30 hidden md:block anim-pulse-soft" />
          </div>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal delay={0.1} className="mt-8 md:mt-[3vw] flex justify-center">
          <BlobButton href="/menu">Попробовать наши бургеры →</BlobButton>
        </ScrollReveal>
      </div>
    </section>
  );
}
