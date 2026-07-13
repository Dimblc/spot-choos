"use client";

import { useRef } from "react";
import BlobButton from "@/components/ui/BlobButton";
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

      <div className="absolute bottom-[8%] left-1/2 -translate-x-1/2 z-20">
        <BlobButton href="/menu">СМОТРЕТЬ МЕНЮ</BlobButton>
      </div>
    </section>
  );
}
