"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { usePageLoaded } from "@/components/providers/GsapProvider";

export default function LoadingScreen() {
  const { isLoaded } = usePageLoaded();
  const containerRef = useRef<HTMLDivElement>(null);
  const layersRef = useRef<HTMLDivElement[]>([]);
  const particlesRef = useRef<HTMLDivElement[]>([]);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const tl = gsap.timeline();

    if (prefersReducedMotion) {
      gsap.set(layersRef.current, { opacity: 1, y: 0 });
      gsap.set(particlesRef.current, { opacity: 0 });
    } else {
      // Сборка бургера: слои появляются снизу
      tl.fromTo(
        layersRef.current,
        { opacity: 0, y: 80, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: "back.out(1.5)",
          stagger: 0.18,
        }
      );

      // Конфетти
      particlesRef.current.forEach((p) => {
        gsap.fromTo(
          p,
          {
            opacity: 0,
            y: -20,
            x: 0,
            scale: 0,
          },
          {
            opacity: 1,
            y: gsap.utils.random(-120, -60),
            x: gsap.utils.random(-60, 60),
            scale: 1,
            rotation: gsap.utils.random(-180, 180),
            duration: gsap.utils.random(0.8, 1.4),
            ease: "power2.out",
            repeat: -1,
            yoyo: true,
            delay: gsap.utils.random(0, 0.5),
          }
        );
      });
    }

    // Прогресс-бар
    gsap.to(progressRef.current, {
      width: "100%",
      duration: 2.2,
      ease: "power2.inOut",
    });

    return () => {
      tl.kill();
      gsap.killTweensOf(layersRef.current);
      gsap.killTweensOf(particlesRef.current);
      gsap.killTweensOf(progressRef.current);
    };
  }, []);

  useEffect(() => {
    if (!isLoaded || !containerRef.current) return;

    gsap.to(containerRef.current, {
      opacity: 0,
      scale: 1.05,
      duration: 0.6,
      ease: "power2.inOut",
      onComplete: () => {
        if (containerRef.current) {
          containerRef.current.style.display = "none";
        }
      },
    });
  }, [isLoaded]);

  const addLayer = (el: HTMLDivElement | null) => {
    if (el && !layersRef.current.includes(el)) layersRef.current.push(el);
  };

  const addParticle = (el: HTMLDivElement | null) => {
    if (el && !particlesRef.current.includes(el)) particlesRef.current.push(el);
  };

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 h-dvh w-full flex flex-col items-center justify-center bg-red z-[99999]"
    >
      <div className="relative w-[75vw] max-w-[340px] h-[50vw] max-h-[260px] flex items-end justify-center mb-[8vw]">
        {/* Конфетти */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              ref={addParticle}
              className="absolute rounded-full w-2 h-2 md:w-3 md:h-3"
              style={{
                left: `${10 + (i % 6) * 16}%`,
                top: "40%",
                backgroundColor: ["#ffd750", "#fff", "#60A905"][i % 3],
              }}
            />
          ))}
        </div>

        {/* Слои бургера */}
        <div className="relative w-full flex flex-col items-center">
          <div
            ref={addLayer}
            className="w-[60%] h-[18%] bg-[#FF9D3F] rounded-t-[50%] rounded-b-[20%] border-[6px] border-[#4C0016] z-50"
          />
          <div
            ref={addLayer}
            className="w-[70%] h-[8%] bg-[#77C41E] rounded-[40%] -mt-[2%] z-40 border-[4px] border-[#4C0016]"
          />
          <div
            ref={addLayer}
            className="w-[62%] h-[6%] bg-[#FFC614] rounded-[30%] -mt-[1%] z-30 border-[4px] border-[#4C0016]"
          />
          <div
            ref={addLayer}
            className="w-[72%] h-[14%] bg-[#8B4513] rounded-[30%] -mt-[1%] z-20 border-[6px] border-[#4C0016]"
          />
          <div
            ref={addLayer}
            className="w-[68%] h-[16%] bg-[#EF6F2E] rounded-t-[20%] rounded-b-[40%] z-10 border-[6px] border-[#4C0016]"
          />
        </div>
      </div>

      <div className="font-modak text60 text-white/90 uppercase tracking-wider text-center">
        Готовим бургеры...
      </div>

      <div className="w-full absolute bottom-0 left-0 h-[2vw] md:h-[1vw] bg-white/15 overflow-hidden">
        <div ref={progressRef} className="h-full bg-mustard w-0" />
      </div>
    </div>
  );
}
