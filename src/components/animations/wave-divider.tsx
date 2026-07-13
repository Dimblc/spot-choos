"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

interface WaveDividerProps {
  fill?: string;
  className?: string;
  flip?: boolean;
}

export default function WaveDivider({ fill = "#ff1616", className = "", flip = false }: WaveDividerProps) {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (!pathRef.current) return;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const anim = gsap.to(pathRef.current, {
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      attr: {
        d: "M0,140 C300,40 500,220 800,120 C1100,0 1250,260 1440,120 L1440,320 L0,320 Z",
      },
    });

    return () => {
      anim.kill();
    };
  }, []);

  return (
    <div className={`leading-[0] h-[300px] overflow-hidden -mt-20 md:-mt-28 ${className}`}>
      <svg
        className="block w-full h-full"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        style={flip ? { transform: "scaleY(-1)" } : undefined}
      >
        <path
          ref={pathRef}
          id="wavePath"
          fill={fill}
          d="M0,120 C300,0 500,260 800,160 C1100,40 1250,220 1440,100 L1440,320 L0,320 Z"
        />
      </svg>
    </div>
  );
}
