"use client";

import { useRef } from "react";
import BlobButton from "@/components/ui/BlobButton";
import ProjectButton from "@/components/ui/project-button";
import { usePageLoaded } from "@/components/providers/GsapProvider";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { setHeroReady } = usePageLoaded();

  return (
    <section className="relative h-screen overflow-hidden flex items-center justify-center bg-black">
      <video
        ref={videoRef}
        src="/img-webp/herovideo.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        onCanPlay={() => setHeroReady()}
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/30 pointer-events-none" />

      <div className="absolute bottom-[8%] left-1/2 -translate-x-1/2 z-20 flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
        <BlobButton href="/menu">СМОТРЕТЬ МЕНЮ</BlobButton>
        <ProjectButton
          href="https://t.me/spotandchoos"
          external
          variant="red"
          className="text-[clamp(14px,1.3vw,20px)] px-8 py-4 h-auto whitespace-nowrap shadow-[0_10px_30px_-8px_rgba(249,24,20,0.6)]"
        >
          Заказать в Telegram
        </ProjectButton>
      </div>
    </section>
  );
}
