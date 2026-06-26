"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";

const blobOriginal =
  "M310.777 0.20434C424.154 2.91791 540.733 50.9739 574.176 159.34C606.479 264.014 533.962 365.999 442.064 425.623C364.995 475.626 270.863 455.893 193.524 406.309C93.8313 342.395 -27.3608 259.503 5.48889 145.729C40.0621 25.9857 186.179 -2.77783 310.777 0.20434Z";

const blobHover =
  "M320.777 10.2043C434.154 12.9179 550.733 60.9739 584.176 169.34C616.479 274.014 523.962 355.999 432.064 415.623C354.995 465.626 260.863 445.893 183.524 396.309C83.8313 332.395 -37.3608 249.503 -4.51111 135.729C29.0621 15.9857 176.179 -12.7778 320.777 10.2043Z";

interface BlobButtonProps {
  href: string;
  children: React.ReactNode;
}

export default function BlobButton({ href, children }: BlobButtonProps) {
  const pathRef = useRef<SVGPathElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  const handleMouseEnter = () => {
    if (!pathRef.current || !svgRef.current) return;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    gsap.to(pathRef.current, {
      attr: { d: blobHover },
      duration: 0.5,
      ease: "back.out(1.5)",
    });
    gsap.to(svgRef.current, {
      scale: 1.05,
      duration: 0.4,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    if (!pathRef.current || !svgRef.current) return;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    gsap.to(pathRef.current, {
      attr: { d: blobOriginal },
      duration: 0.5,
      ease: "back.out(1.5)",
    });
    gsap.to(svgRef.current, {
      scale: 1,
      duration: 0.4,
      ease: "power2.out",
    });
  };

  return (
    <Link
      href={href}
      className="relative inline-block px-[4vw] py-[1.5vw] text-white font-bold text40 uppercase"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <svg
        ref={svgRef}
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
        viewBox="-10 -10 602 475"
        preserveAspectRatio="none"
      >
        <path
          ref={pathRef}
          stroke="#ffffff"
          strokeWidth="10"
          fill="#F91914"
          d={blobOriginal}
          className="transition-[fill] duration-200"
        />
      </svg>
      <span className="relative z-10">{children}</span>
    </Link>
  );
}
