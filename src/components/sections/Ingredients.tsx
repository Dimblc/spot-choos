"use client";

import SplitText from "@/components/animations/SplitText";
import ScrollReveal from "@/components/animations/ScrollReveal";

export default function Ingredients() {
  return (
    <section id="ingredients" className="h-fit w-full px-4 md:px-[2.5vw] py-12 md:py-[8vw] relative">
      <h2 className="text-center heading300 uppercase text-red font-modak">
        <SplitText
          text={"СВЕЖЕСТЬ.\nКАЧЕСТВО.\nВКУС.\nНАСТРОЕНИЕ."}
          tag="span"
          splitType="chars"
          delay={35}
          duration={0.7}
          from={{ opacity: 0, y: 60, rotation: 6 }}
          to={{ opacity: 1, y: 0, rotation: 0 }}
          className="inline-block"
        />
      </h2>

      <ScrollReveal delay={0.2} className="w-[90%] md:w-[70%] lg:w-[45%] mx-auto mt-4 md:mt-[2vw] text-center">
        <p className="text-black text40 leading-[1.1]">
          Только свежие продукты: мраморная говядина, сыры из местных сыроварен, овощи с ферм и домашние булочки.
        </p>
      </ScrollReveal>
    </section>
  );
}
