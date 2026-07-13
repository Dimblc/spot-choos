"use client";

import { createContext, useContext, useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

interface PageContextType {
  isLoaded: boolean;
  heroReady: boolean;
  setHeroReady: () => void;
}

const PageContext = createContext<PageContextType>({ isLoaded: false, heroReady: false, setHeroReady: () => {} });

export function usePageLoaded() {
  return useContext(PageContext);
}

export default function GsapProvider({ children }: { children: React.ReactNode }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [heroReady, setHeroReadyState] = useState(false);
  const heroReadyRef = useRef(false);
  const minTimePassedRef = useRef(false);
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();
  // Only the homepage has a hero video worth waiting for.
  // On inner pages the loader should disappear almost immediately.
  const isHomeRef = useRef(pathname === "/");

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
    });
    lenisRef.current = lenis;
    lenis.stop();

    let rafId: number;

    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    lenis.on("scroll", ScrollTrigger.update);

    const isHome = isHomeRef.current;

    const minTimer = setTimeout(() => {
      minTimePassedRef.current = true;
      if (heroReadyRef.current || !isHome) {
        heroReadyRef.current = true;
        setHeroReadyState(true);
        setIsLoaded(true);
        lenis.start();
      }
    }, isHome ? 1000 : 400);

    const safetyTimer = setTimeout(() => {
      if (!minTimePassedRef.current) minTimePassedRef.current = true;
      heroReadyRef.current = true;
      setHeroReadyState(true);
      setIsLoaded(true);
      lenis.start();
    }, isHome ? 3500 : 1200);

    return () => {
      clearTimeout(minTimer);
      clearTimeout(safetyTimer);
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  useEffect(() => {
    if (!isLoaded || !lenisRef.current) return;
    lenisRef.current.scrollTo(0, { immediate: true });
    const id = setTimeout(() => {
      ScrollTrigger.refresh();
      lenisRef.current?.resize();
    }, 100);
    return () => clearTimeout(id);
  }, [pathname, isLoaded]);

  const setHeroReady = () => {
    heroReadyRef.current = true;
    setHeroReadyState(true);
    if (minTimePassedRef.current) {
      setIsLoaded(true);
      lenisRef.current?.start();
    }
  };

  return (
    <PageContext.Provider value={{ isLoaded, heroReady, setHeroReady }}>
      {children}
    </PageContext.Provider>
  );
}
