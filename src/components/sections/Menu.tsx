import Image from "next/image";
import SplitText from "@/components/animations/SplitText";
import ScrollReveal from "@/components/animations/ScrollReveal";

export default function Menu() {
  return (
    <section id="menu" className="h-fit w-full bg-red py-12 md:py-[8vw] px-4 md:px-[2.5vw] relative overflow-hidden">
      <div className="relative z-20 flex flex-col items-center">
        <h2 className="text-center text-[clamp(32px,7vw,80px)] leading-[1] uppercase text-beige font-modak">
          <SplitText
            text="настоящий вкус."
            tag="span"
            splitType="chars"
            delay={35}
            duration={0.7}
            from={{ opacity: 0, y: 50, rotation: 4 }}
            to={{ opacity: 1, y: 0, rotation: 0 }}
            className="inline-block"
          />
          <br />
          <SplitText
            text="честный состав."
            tag="span"
            splitType="chars"
            delay={35}
            duration={0.7}
            from={{ opacity: 0, y: 50, rotation: 4 }}
            to={{ opacity: 1, y: 0, rotation: 0 }}
            className="inline-block"
          />
        </h2>

        <ScrollReveal delay={0.2} className="mt-4 md:mt-[2vw]">
          <p className="text-beige font-modak text40">
            450 kcal · High Protein · Fresh Ingredients
          </p>
        </ScrollReveal>
      </div>

      <ScrollReveal delay={0.3} className="relative z-10 w-[90vw] md:w-[70vw] max-w-[900px] mx-auto mt-8 md:mt-[4vw]">
        <Image
          src="/img-webp/burger-with-hands.webp"
          alt="Spot & Choo's burger mascot"
          width={900}
          height={600}
          className="w-full h-auto object-contain"
          priority
          sizes="(max-width: 768px) 90vw, 70vw"
        />
      </ScrollReveal>
    </section>
  );
}
