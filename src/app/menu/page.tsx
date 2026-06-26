"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProjectButton from "@/components/ui/project-button";
import { locations, menuImages } from "@/lib/data";

export default function MenuPage() {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const [lightboxCaption, setLightboxCaption] = useState("");

  return (
    <>
      <Header />
      <main className="min-h-screen bg-beige pt-[20vw] md:pt-[8vw] px-4 md:px-[2.5vw] pb-12 md:pb-[6vw]">
        <div className="mb-8 md:mb-[4vw]">
          <div className="text40 uppercase text-black/50 font-modak">Spot & Choo&apos;s</div>
          <h1 className="heading180 text-red text-stroke-180 font-modak uppercase">
            Меню
          </h1>
          <p className="text40 text-black/60 mt-4 md:mt-[2vw] max-w-[560px]">
            Выбери свою точку — открой меню целиком тапом по картинке или сделай предзаказ в Telegram.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-[1.5vw] mt-8 md:mt-[4vw]">
          {locations.map((loc) => (
            <div
              key={loc.slug}
              className="bg-white rounded-[2vw] md:rounded-[1.5vw] border-2 border-red/20 hover:border-red transition-colors p-4 md:p-[1.5vw] flex flex-col gap-3 md:gap-[1vw]"
            >
              <div>
                <div className="font-modak text-red text-[clamp(14px,1.2vw,18px)] uppercase">{loc.nameRu}</div>
                <div className="font-modak text-[clamp(18px,1.8vw,28px)] leading-none uppercase text-black">
                  {loc.address}
                </div>
                <a href={`tel:${loc.phone}`} className="text-[clamp(14px,1.8vw,22px)] text-black/50 hover:text-red transition-colors">
                  {loc.phoneDisplay}
                </a>
              </div>

              <div
                className="relative w-full aspect-[4/3] rounded-[1.2vw] md:rounded-[0.8vw] overflow-hidden border-2 border-red/20 hover:border-red cursor-zoom-in group"
                onClick={() => {
                  setLightboxSrc(menuImages[loc.slug]);
                  setLightboxCaption(`Меню — ${loc.name}, ${loc.address}`);
                }}
              >
                <Image
                  src={menuImages[loc.slug]}
                  alt={`Меню — ${loc.name}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                />
                <div className="absolute top-[0.6vw] right-[0.6vw] bg-white/90 backdrop-blur border border-red/20 rounded-full px-[0.7vw] py-[0.3vw] text-[clamp(12px,1.4vw,18px)] uppercase font-modak text-red">
                  Tap to zoom
                </div>
              </div>

              <ProjectButton
                href={loc.telegram}
                external
                variant="red"
                className="inline-flex items-center justify-center gap-2 md:gap-[0.5vw] text-[clamp(14px,1.2vw,18px)] px-4 md:px-[1.5vw] py-3 md:py-[0.8vw] h-auto"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 md:w-[1vw] md:h-[1vw]">
                  <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z" />
                </svg>
                Заказать в Telegram
              </ProjectButton>
            </div>
          ))}
        </div>
      </main>
      <Footer />

      {lightboxSrc && (
        <div
          className="fixed inset-0 z-[1000] bg-black/92 flex items-center justify-center p-[20px] cursor-zoom-out"
          onClick={() => setLightboxSrc(null)}
        >
          <ProjectButton
            className="absolute top-[16px] right-[16px] w-[44px] h-[44px] !rounded-full bg-white/15 border-white/30 text-white text-[24px] p-0 [--ic-background:#ffffff] [--ic-card:transparent] [--ic-card-foreground:#ffffff] [--ic-foreground:#f91814] [--ic-border:#ffffff/30] [--ic-ring:rgba(255,255,255,0.4)]"
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
          <div className="absolute bottom-[20px] left-1/2 -translate-x-1/2 text-white text40 uppercase font-modak bg-black/50 px-[14px] py-[8px] rounded-full">
            {lightboxCaption}
          </div>
        </div>
      )}
    </>
  );
}
