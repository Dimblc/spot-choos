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

    const minTimer = setTimeout(() => {
      minTimePassedRef.current = true;
      if (heroReadyRef.current) {
        setIsLoaded(true);
        lenis.start();
      }
    }, 1200);

    const safetyTimer = setTimeout(() => {
      if (!minTimePassedRef.current) minTimePassedRef.current = true;
      heroReadyRef.current = true;
      setHeroReadyState(true);
      setIsLoaded(true);
      lenis.start();
    }, 8000);

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
