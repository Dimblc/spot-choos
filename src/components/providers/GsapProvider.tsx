"use client";

import { createContext, useContext, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

interface PageContextType {
  isLoaded: boolean;
}

const PageContext = createContext<PageContextType>({ isLoaded: false });

export function usePageLoaded() {
  return useContext(PageContext);
}

export default function GsapProvider({ children }: { children: React.ReactNode }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
    });

    let rafId: number;

    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    lenis.on("scroll", ScrollTrigger.update);

    // Даём лоадеру время на анимацию
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 2500);

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(rafId);
      lenis.destroy();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <PageContext.Provider value={{ isLoaded }}>
      {children}
    </PageContext.Provider>
  );
}
