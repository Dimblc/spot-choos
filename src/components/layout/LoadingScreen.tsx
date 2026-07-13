"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { usePageLoaded } from "@/components/providers/GsapProvider";

export default function LoadingScreen() {
  const { isLoaded } = usePageLoaded();
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const loadingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    gsap.set(logoRef.current, { scale: 0.9, opacity: 0 });
    gsap.set(loadingRef.current, { opacity: 0 });

    const tl = gsap.timeline();

    tl.to(logoRef.current, {
      scale: 1,
      opacity: 1,
      duration: 0.7,
      ease: "power3.out",
    })
    .to(loadingRef.current, {
      opacity: 1,
      duration: 0.5,
      ease: "power2.out",
    }, "-=0.3")
    .to(logoRef.current, {
      scale: 0.96,
      duration: 0.35,
      ease: "power2.inOut",
    });

    return () => { tl.kill(); };
  }, []);

  useEffect(() => {
    if (!isLoaded || !containerRef.current) return;

    const tl = gsap.timeline();

    tl.to(logoRef.current, {
      scale: 1.05,
      duration: 0.3,
      ease: "power2.out",
    })
    .to(containerRef.current, {
      yPercent: -100,
      duration: 1,
      ease: "power4.inOut",
    }, "<")
    .to(containerRef.current, {
      opacity: 0,
      duration: 0.7,
      ease: "power2.inOut",
    }, "<")
    .set(containerRef.current, {
      display: "none",
    });

    return () => { tl.kill(); };
  }, [isLoaded]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 bg-[#0a0a0a] flex flex-col items-center justify-center z-[99999] gap-[20px]"
    >
      <div
        ref={logoRef}
        className="font-modak text-red text-stroke-small text-[clamp(36px,10.4vw,94px)] leading-none uppercase whitespace-nowrap select-none"
      >
        Spot &amp; Choo&apos;s
      </div>
      <div
        ref={loadingRef}
        className="text-white/60 font-modak uppercase text-[clamp(10px,1.2vw,14px)] tracking-[0.4em] select-none"
      >
        Загрузка...
      </div>
    </div>
  );
}
