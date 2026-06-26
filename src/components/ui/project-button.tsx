"use client";

import Link from "next/link";
import { OriginButton, OriginButtonProps } from "@/components/ui/origin-button";
import { cn } from "@/lib/utils";

export type ProjectButtonVariant = "red" | "light" | "dark" | "ghost" | "blob";

const themeClasses: Record<ProjectButtonVariant, string> = {
  red: "[--ic-background:#f5e3cd] [--ic-card:#f91814] [--ic-card-foreground:#f5e3cd] [--ic-foreground:#1a1a1a] [--ic-border:#f91814] [--ic-ring:rgba(249,24,20,0.4)]",
  light: "[--ic-background:#1a1a1a] [--ic-card:#f5e3cd] [--ic-card-foreground:#1a1a1a] [--ic-foreground:#f91814] [--ic-border:#f5e3cd] [--ic-ring:rgba(249,24,20,0.4)]",
  dark: "[--ic-background:#f5e3cd] [--ic-card:transparent] [--ic-card-foreground:#f5e3cd] [--ic-foreground:#f91814] [--ic-border:#f5e3cd/30] [--ic-ring:rgba(249,24,20,0.4)]",
  ghost: "[--ic-background:#f5e3cd] [--ic-card:transparent] [--ic-card-foreground:#1a1a1a] [--ic-foreground:#f91814] [--ic-border:#1a1a1a/10] [--ic-ring:rgba(249,24,20,0.4)]",
  blob: "[--ic-background:#ffffff] [--ic-card:transparent] [--ic-card-foreground:#ffffff] [--ic-foreground:#1a1a1a] [--ic-border:transparent] [--ic-ring:rgba(249,24,20,0.4)]",
};

const linkBaseClasses =
  "relative inline-flex h-12 cursor-pointer touch-manipulation select-none items-center justify-center overflow-hidden rounded-xl px-8 font-medium text-[15px] tracking-[-0.02em] border-[0.5px] border-border bg-card text-card-foreground transition-[color] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

interface ProjectButtonProps extends OriginButtonProps {
  href?: string;
  external?: boolean;
  variant?: ProjectButtonVariant;
}

export default function ProjectButton({
  href,
  external,
  variant = "red",
  className,
  onClick,
  ...props
}: ProjectButtonProps) {
  const themeClass = cn(themeClasses[variant], "rounded-full font-modak uppercase", className);

  if (href) {
    const linkClass = cn(linkBaseClasses, themeClass);

    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
          onClick={onClick as React.MouseEventHandler<HTMLAnchorElement>}
          aria-label={props["aria-label"]}
        >
          <span className="relative z-10 inline-flex items-center justify-center gap-2">
            {props.children}
          </span>
        </a>
      );
    }

    return (
      <Link
        href={href}
        className={linkClass}
        onClick={onClick as React.MouseEventHandler<HTMLAnchorElement>}
        aria-label={props["aria-label"]}
      >
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
