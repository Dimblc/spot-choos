"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import ProjectButton from "@/components/ui/project-button";
import { navLinks } from "@/lib/data";

export default function Header() {
  const [navHidden, setNavHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const direction = currentScrollY > lastScrollY.current ? "down" : "up";

      if (direction === "down" && currentScrollY > 100) {
        setNavHidden(true);
      } else if (direction === "up") {
        setNavHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[999] flex items-center justify-between px-4 md:px-[2.5vw] py-3 md:py-[1vw] transition-all duration-500 ease-out ${
        navHidden ? "-translate-y-full opacity-0 pointer-events-none" : "translate-y-0 opacity-100"
      }`}
    >
      <Link href="/" className="font-modak text-red text-stroke-small text-[clamp(24px,4vw,48px)] leading-none hover:scale-105 transition-transform duration-300">
        Spot & Choo&apos;s
      </Link>

      <div className="hidden md:flex items-center gap-[0.8vw] flex-wrap justify-end">
        {navLinks.map((link) => (
          <ProjectButton
            key={link.href}
            href={link.href}
            variant="ghost"
            className="text-[clamp(10px,1.2vw,18px)] px-[1vw] py-[0.4vw] h-auto border-black/10"
          >
            {link.label}
          </ProjectButton>
        ))}
        <ProjectButton
          href="https://t.me/spotandchoos"
          external
          variant="red"
          className="text-[clamp(10px,1.2vw,18px)] px-[1.2vw] py-[0.4vw] h-auto"
        >
          Заказать
        </ProjectButton>
      </div>

      <div className="flex md:hidden items-center">
        <ProjectButton
          variant="ghost"
          className="px-3 py-3 h-auto border-black/10"
          aria-label={mobileOpen ? "Закрыть меню" : "Открыть меню"}
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          {mobileOpen ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden>
              <path d="M6 6L18 18M18 6L6 18" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden>
              <path d="M4 6H20M4 12H20M4 18H20" />
            </svg>
          )}
        </ProjectButton>
      </div>

      {mobileOpen && (
        <div className="absolute top-full left-0 w-full bg-beige/95 backdrop-blur border-b border-black/10 px-4 py-4 md:hidden flex flex-col gap-2 shadow-lg">
          {navLinks.map((link) => (
            <ProjectButton
              key={link.href}
              href={link.href}
              variant="ghost"
              className="justify-start text-[clamp(16px,4vw,24px)] px-4 py-3 h-auto border-black/10"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </ProjectButton>
          ))}
          <ProjectButton
            href="https://t.me/spotandchoos"
            external
            variant="red"
            className="justify-center text-[clamp(16px,4vw,24px)] px-4 py-3 h-auto mt-1"
            onClick={() => setMobileOpen(false)}
          >
            Заказать в Telegram
          </ProjectButton>
        </div>
      )}
    </nav>
  );
}
