"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { locations } from "@/lib/data";
import RemoteImage from "@/components/ui/remote-image";

const ROW_ONE = locations.slice(0, 3);
const ROW_TWO = locations.slice(3, 5);

const STICKER_IMAGES: Record<string, string> = {
  original: "/img-webp/stickers/sticker-original.png",
  kom45: "/img-webp/stickers/sticker-kom45.png",
  lite: "/img-webp/stickers/sticker-lite.png",
  nstu: "/img-webp/stickers/sticker-nstu.png",
  koltsovo: "/img-webp/stickers/sticker-koltsovo.png",
};

const STROKE = "#2E2A24";
const YELLOW = "#FFD95A";

function Sparkle({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 100 100" className={className} style={style} fill="none" aria-hidden>
      <path d="M50 4C55 30 70 45 96 50 70 55 55 70 50 96 45 70 30 55 4 50 30 45 45 30 50 4Z" fill="currentColor" />
    </svg>
  );
}

function TinyStar({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 100 100" className={className} style={style} fill="none" aria-hidden>
      <path d="M50 6L60 38L94 38L66 58L76 92L50 72L24 92L34 58L6 38L40 38Z" fill="currentColor" stroke={STROKE} strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

function DoodleArrow({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 130 70" className={className} style={style} fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M5 35C35 5 75 60 120 22" />
      <path d="M120 22L104 18M120 22L114 38" />
    </svg>
  );
}

function WhiteUnderline({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 460 32" className={className} style={style} fill="none" aria-hidden>
      <path d="M4 18C80 4 180 4 250 12C320 20 380 16 456 6C452 14 454 22 456 26C380 30 320 30 250 22C180 14 80 14 4 24Z" fill="#FFFFFF" />
    </svg>
  );
}

function DottedPath({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 1200 300" className={className} style={style} fill="none" stroke={STROKE} strokeOpacity="0.14" strokeWidth="2.5" strokeLinecap="round" aria-hidden>
      <path d="M20 260C240 40 480 40 600 140C740 250 960 40 1180 180" strokeDasharray="1 12" />
    </svg>
  );
}

function BrushStroke({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 180 24" className={className} style={style} fill="none" aria-hidden>
      <path d="M4 12C40 2 80 2 120 8C145 12 165 14 176 10L176 16C165 20 145 18 120 14C80 8 40 8 4 18Z" fill="currentColor" />
    </svg>
  );
}

function RubberStamp({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <div className={className} style={{ transform: "rotate(-10deg)", ...style }} aria-hidden>
      <div className="rounded-[10px] border-[3px] border-[#FF4D3A] text-[#FF4D3A] px-5 py-2.5 font-modak uppercase tracking-[0.08em] leading-none text-[clamp(16px,2vw,26px)] [border-style:double] border-[5px] opacity-[0.75]">
        Spot &amp; Choo&apos;s
      </div>
    </div>
  );
}

function Starburst({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`} style={style} aria-hidden>
      <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full" fill="none" aria-hidden>
        <path d="M100 2L116 42L156 22L140 62L184 56L152 88L196 100L152 112L184 144L140 138L156 178L116 158L100 198L84 158L44 178L60 138L16 144L48 112L4 100L48 88L16 56L60 62L44 22L84 42Z" fill={YELLOW} stroke={STROKE} strokeWidth="2.5" strokeLinejoin="round" />
      </svg>
      <span className="relative z-10 text-center font-modak uppercase text-[#2E2A24] text-[clamp(10px,0.95vw,14px)] leading-tight px-6 max-w-[150px]">
        Мы любим то, что делаем <span style={{ color: "#FF4D3A" }}>&#10084;</span>
      </span>
    </div>
  );
}

function LocationCard({
  loc,
  index,
  addItem,
}: {
  loc: (typeof locations)[number];
  index: number;
  addItem: (el: HTMLDivElement | null) => void;
}) {
  return (
    <div
      ref={addItem}
      className="group relative bg-white rounded-[24px] shadow-[0_12px_30px_-10px_rgba(46,42,36,0.22)] p-7 md:p-8 w-full flex flex-col opacity-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:shadow-[0_22px_44px_-12px_rgba(46,42,36,0.3)]"
    >
      <div className="flex flex-col gap-1">
        <h3 className="font-modak uppercase text-[#2E2A24] text-[clamp(22px,2.4vw,32px)] leading-none">
          {loc.name}
        </h3>
        <p className="mt-2 text-[clamp(14px,1.3vw,17px)] text-[#2E2A24]/70 leading-snug">
          {loc.address}
        </p>
        <a
          href={`tel:${loc.phone}`}
          className="mt-1 text-[clamp(14px,1.3vw,17px)] text-[#2E2A24]/55 hover:text-[#FF4D3A] transition-colors duration-300"
        >
          {loc.phoneDisplay}
        </a>
      </div>

      <div className="relative mt-5 aspect-square w-full overflow-hidden rounded-[18px] bg-[#F5E3CD]/30">
        <RemoteImage
          src={loc.image}
          alt={`${loc.name} — ${loc.address}`}
          fill
          sizes="(max-width: 768px) 90vw, 600px"
          quality={100}
          loading="lazy"
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
        />
        <div className="absolute inset-0 rounded-[18px] ring-1 ring-inset ring-black/[0.06]" />
      </div>

      {STICKER_IMAGES[loc.slug] && (
        <Image
          src={STICKER_IMAGES[loc.slug]}
          alt=""
          width={120}
          height={120}
          quality={100}
          className="absolute -top-2 -right-1 w-[90px] h-[90px] md:w-[120px] md:h-[120px] object-contain drop-shadow-[1px_3px_5px_rgba(0,0,0,0.12)] pointer-events-none -rotate-[14deg] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:rotate-0 group-hover:scale-110 z-20"
        />
      )}
    </div>
  );
}

export default function Locations() {
  const itemsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      gsap.set(itemsRef.current, { opacity: 1 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        itemsRef.current,
        { opacity: 0, y: 50, scale: 0.94 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          ease: "back.out(1.2)",
          stagger: 0.1,
          scrollTrigger: {
            trigger: itemsRef.current[0],
            start: "top 85%",
            once: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const addItem = (el: HTMLDivElement | null) => {
    if (el && !itemsRef.current.includes(el)) itemsRef.current.push(el);
  };

  return (
    <section
      id="locations"
      className="relative w-full overflow-hidden px-4 md:px-[2.5vw] py-20 md:py-[8vw]"
      style={{ background: "linear-gradient(160deg, #FFD95A 0%, #F8C94D 55%, #F5C43E 100%)" }}
    >
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.35), transparent 55%), radial-gradient(circle at 75% 75%, rgba(255,217,90,0.4), transparent 50%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.025]"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundSize: "180px 180px",
        }}
      />

      <DottedPath className="absolute left-0 top-[36%] w-full h-auto z-0 pointer-events-none hidden md:block" />

      <Sparkle className="absolute top-[8%] left-[7%] w-[28px] h-[28px] md:w-[44px] md:h-[44px] text-white/85 z-0 pointer-events-none -rotate-12" />
      <Sparkle className="absolute top-[14%] right-[9%] w-[20px] h-[20px] md:w-[36px] md:h-[36px] text-[#FF4D3A]/70 z-0 pointer-events-none rotate-12" />
      <BrushStroke className="absolute bottom-[10%] right-[12%] w-[100px] md:w-[180px] h-auto text-white/50 z-0 pointer-events-none rotate-[6deg]" />

      <div className="relative z-10 mx-auto max-w-[1440px] flex flex-col items-center text-center">
        <div className="relative flex flex-col items-center">
          <h2 className="font-modak uppercase text-[#2E2A24] text-[clamp(42px,9vw,130px)] leading-[0.95] tracking-tight">
            НАШИ ТОЧКИ
          </h2>
          <WhiteUnderline className="mt-1 w-[280px] md:w-[460px] h-auto -mb-1" />

          <span className="mt-5 inline-block rounded-full bg-[#2E2A24] text-white font-modak uppercase tracking-[0.06em] px-6 md:px-8 py-2.5 md:py-3 text-[clamp(12px,1.5vw,19px)] shadow-[0_8px_22px_-8px_rgba(46,42,36,0.45)]">
            ВСЕГДА РЯДОМ, ВСЕГДА ВКУСНО!
          </span>
        </div>
      </div>

      <div className="relative z-10 mx-auto mt-14 md:mt-[5vw] max-w-[1440px] flex flex-col gap-6 md:gap-[2.5vw]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-[2vw] justify-items-center">
          {ROW_ONE.map((loc, i) => (
            <div key={loc.slug} className="md:col-span-4 w-full max-w-[400px]">
              <LocationCard loc={loc} index={i} addItem={addItem} />
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-start justify-center gap-6 md:gap-[2vw]">
          {ROW_TWO.map((loc, i) => (
            <div key={loc.slug} className="w-full max-w-[400px] md:w-[calc(33.333%-1.33vw)]">
              <LocationCard loc={loc} index={i + 3} addItem={addItem} />
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] mt-10 md:mt-[4vw] flex items-end justify-between px-2">
        <RubberStamp className="shrink-0" />
        <Starburst className="w-[100px] h-[100px] md:w-[160px] md:h-[160px] shrink-0" />
      </div>
    </section>
  );
}
