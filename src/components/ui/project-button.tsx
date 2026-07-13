"use client";

import { useRef, useCallback, useState } from "react";
import Link from "next/link";
import { OriginButton, OriginButtonProps } from "@/components/ui/origin-button";
import { cn } from "@/lib/utils";

export type ProjectButtonVariant = "red" | "light" | "dark" | "ghost" | "blob";

const themeClasses: Record<ProjectButtonVariant, string> = {
  red: "bg-[#f91814] text-[#f5e3cd] border border-[#f91814] hover:text-[#f5e3cd]",
  light: "bg-[#f5e3cd] text-[#1a1a1a] border border-[#f5e3cd] hover:text-[#1a1a1a]",
  dark: "bg-transparent text-[#f5e3cd] border border-[#f5e3cd]/30 hover:text-[#1a1a1a]",
  ghost: "bg-transparent text-[#1a1a1a] border border-[#1a1a1a]/10 hover:text-black",
  blob: "bg-transparent text-white border border-transparent hover:text-[#1a1a1a]",
};

const linkBaseClasses =
  "relative inline-flex h-12 cursor-pointer touch-manipulation select-none items-center justify-center overflow-hidden rounded-xl px-8 font-medium text-[15px] tracking-[-0.02em] transition-[color] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

interface ProjectButtonProps extends OriginButtonProps {
  href?: string;
  external?: boolean;
  variant?: ProjectButtonVariant;
}

function getCoverDiameter(width: number, height: number, x: number, y: number) {
  return Math.ceil(
    2 *
      Math.max(
        Math.hypot(x, y),
        Math.hypot(width - x, y),
        Math.hypot(x, height - y),
        Math.hypot(width - x, height - y)
      )
  );
}

export default function ProjectButton({
  href,
  external,
  variant = "red",
  className,
  onClick,
  ...props
}: ProjectButtonProps) {
  const linkRef = useRef<HTMLAnchorElement>(null);
  const [origin, setOrigin] = useState({ x: 0, y: 0 });
  const [coverSize, setCoverSize] = useState(0);
  const [hovered, setHovered] = useState(false);

  const themeClass = cn(themeClasses[variant], "rounded-full font-modak uppercase", className);

  const updateOrigin = useCallback((x: number, y: number) => {
    const node = linkRef.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    setOrigin({ x, y });
    setCoverSize(getCoverDiameter(rect.width, rect.height, x, y));
  }, []);

  const handlePointerEnter = (e: React.PointerEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    updateOrigin(e.clientX - rect.left, e.clientY - rect.top);
    setHovered(true);
  };

  const handlePointerLeave = () => {
    setHovered(false);
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    updateOrigin(e.clientX - rect.left, e.clientY - rect.top);
    setHovered(true);
  };

  if (href) {
    const linkClass = cn(
      linkBaseClasses,
      themeClass
    );
    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      onClick?.(e as unknown as React.MouseEvent<HTMLButtonElement>);
    };

    const fillSpan = (
      <span
        aria-hidden
        className="pointer-events-none absolute rounded-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{
          height: coverSize,
          width: coverSize,
          left: origin.x,
          top: origin.y,
          transform: `translate(-50%, -50%) scale(${hovered && coverSize > 0 ? 1 : 0})`,
          backgroundColor: variant === "ghost" ? "#ffffff" : variant === "red" ? "#1a1a1a" : variant === "dark" ? "#f91814" : "#1a1a1a",
        }}
      />
    );

    if (external) {
      return (
        <a
          ref={linkRef}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
          onClick={handleLinkClick}
          onPointerEnter={handlePointerEnter}
          onPointerLeave={handlePointerLeave}
          onPointerDown={handlePointerDown}
          aria-label={props["aria-label"]}
        >
          {fillSpan}
          <span className="relative z-10 inline-flex items-center justify-center gap-2">
            {props.children}
          </span>
        </a>
      );
    }

    return (
      <Link
        ref={linkRef}
        href={href}
        className={linkClass}
        onClick={handleLinkClick}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
        onPointerDown={handlePointerDown}
        aria-label={props["aria-label"]}
      >
        {fillSpan}
        <span className="relative z-10 inline-flex items-center justify-center gap-2">
          {props.children}
        </span>
      </Link>
    );
  }

  return (
    <OriginButton
      {...props}
      className={themeClass}
      onClick={onClick}
    />
  );
}
