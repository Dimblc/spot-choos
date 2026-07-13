"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface StickerRevealProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  rotate?: string;
}

export default function StickerReveal({ src, alt, width = 300, height = 300, className = "", rotate = "0deg" }: StickerRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      gsap.set(container, { "--peel-progress": "0%" });
      return;
    }

    gsap.set(container, { "--peel-progress": "40%" });

    const ctx = gsap.context(() => {
      gsap.fromTo(
        container,
        { "--peel-progress": "40%" },
        {
          "--peel-progress": "0%",
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: "top 90%",
            end: "top 40%",
            scrub: 1,
          },
        }
      );
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div className={className}>
      <div
        ref={containerRef}
        className="sticker-container"
        style={{ ["--sticker-width" as string]: `${width}px`, ["--peel-progress" as string]: "40%", ["--sticker-rotate" as string]: rotate } as React.CSSProperties}
      >
        <div className="sticker-main">
          <img src={src} alt={alt} width={width} height={height} className="sticker-image" />
        </div>
        <div className="flap">
          <img src={src} alt={alt} width={width} height={height} className="flap-image" />
          <img src={src} alt={alt} width={width} height={height} className="flap-back" />
        </div>
      </div>
    </div>
  );
}
