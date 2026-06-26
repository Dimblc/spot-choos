"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProjectButton from "@/components/ui/project-button";
import { galleryCategories } from "@/lib/data";

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState(galleryCategories[0].id);
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const [lightboxCaption, setLightboxCaption] = useState("");
  const sliderRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const active = galleryCategories.find((c) => c.id === activeCategory) ?? galleryCategories[0];

  const scroll = (dir: number) => {
    const el = sliderRefs.current[active.id];
    if (el) {
      el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
    }
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-beige pt-[20vw] md:pt-[8vw] pb-12 md:pb-[6vw]">
        <h1 className="heading180 text-red text-stroke-180 font-modak uppercase text-center mb-4 md:mb-[4vw]">
          Галерея
        </h1>

        <div className="flex gap-2 md:gap-[0.5vw] flex-wrap justify-center mb-8 md:mb-[4vw] px-4 md:px-[2.5vw]">
          {galleryCategories.map((cat) => (
            <ProjectButton
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              variant={activeCategory === cat.id ? "red" : "ghost"}
              className="text-[clamp(12px,1.5vw,24px)] px-4 md:px-[1.5vw] py-2 md:py-[0.6vw] h-auto"
            >
              {cat.title}
            </ProjectButton>
          ))}
        </div>

        <div className="px-4 md:px-[2.5vw]">
          <div className="relative">
            <div
              ref={(el) => { sliderRefs.current[active.id] = el; }}
              className="flex gap-3 md:gap-[1vw] overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 md:pb-[1vw]"
              style={{ scrollbarWidth: "none" }}
            >
              {active.images.map((src, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-[80vw] md:w-[30vw] snap-center cursor-pointer group"
                  onClick={() => { setLightboxSrc(src); setLightboxCaption(active.title); }}
                >
                  <div className="relative w-full aspect-[4/3] overflow-hidden rounded-[2vw] md:rounded-[1vw] border-2 border-red/20 group-hover:border-red transition-colors">
                    <Image
                      src={src}
                      alt={`${active.title} ${i + 1}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 80vw, 30vw"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
            <ProjectButton
              onClick={() => scroll(-1)}
              className="absolute left-2 md:left-0 top-1/2 -translate-y-1/2 w-10 h-10 md:w-[3vw] md:h-[3vw] min-w-10 min-h-10 md:min-w-[3vw] md:min-h-[3vw] !rounded-full p-0 text-[20px] md:text-[1.5vw] bg-white/80 border-red/20 text-red [--ic-background:#ffffff] [--ic-card:#ffffff] [--ic-card-foreground:#f91814] [--ic-foreground:#f91814] [--ic-border:rgba(249,24,20,0.2)] [--ic-ring:rgba(249,24,20,0.4)]"
              aria-label="Назад"
            >
              ‹
            </ProjectButton>
            <ProjectButton
              onClick={() => scroll(1)}
              className="absolute right-2 md:right-0 top-1/2 -translate-y-1/2 w-10 h-10 md:w-[3vw] md:h-[3vw] min-w-10 min-h-10 md:min-w-[3vw] md:min-h-[3vw] !rounded-full p-0 text-[20px] md:text-[1.5vw] bg-white/80 border-red/20 text-red [--ic-background:#ffffff] [--ic-card:#ffffff] [--ic-card-foreground:#f91814] [--ic-foreground:#f91814] [--ic-border:rgba(249,24,20,0.2)] [--ic-ring:rgba(249,24,20,0.4)]"
              aria-label="Вперёд"
            >
              ›
            </ProjectButton>
          </div>
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
