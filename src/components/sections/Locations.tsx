"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitText from "@/components/animations/SplitText";
import { locations } from "@/lib/data";

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
        { opacity: 0, y: 40, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.2)",
          stagger: 0.12,
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
    <section id="locations" className="h-fit w-full bg-mustard py-12 md:py-[8vw] px-4 md:px-[2.5vw] relative overflow-hidden">
      <h2 className="text-center heading300 uppercase text-white text-stroke-mustard font-modak">
        <SplitText
          text={"ГОТОВИМ.\nЖАРИМ.\nСОБИРАЕМ."}
          tag="span"
          splitType="chars"
          delay={30}
          duration={0.7}
          from={{ opacity: 0, y: 60, rotation: 6 }}
          to={{ opacity: 1, y: 0, rotation: 0 }}
          className="inline-block"
        />
      </h2>

      <div className="mt-8 md:mt-[4vw] flex flex-col gap-4 md:gap-[2vw] items-center">
        <p className="text-center text40 text-black/80 font-modak uppercase">НАШИ ТОЧКИ</p>
        {locations.map((loc) => (
          <div
            key={loc.slug}
            ref={addItem}
            className="text-center opacity-0"
          >
            <h3 className="font-modak text-[clamp(22px,4vw,40px)] text-black">{loc.name}</h3>
            <p className="text40 text-black/70">{loc.address}</p>
            <a href={`tel:${loc.phone}`} className="text40 text-black/50 hover:text-red transition-colors">
              {loc.phoneDisplay}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
