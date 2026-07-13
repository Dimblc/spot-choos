import Image from "next/image";
import ImageReveal from "@/components/ui/image-tiles";
import SplitText from "@/components/animations/SplitText";
import StickerReveal from "@/components/animations/StickerReveal";

export default function About() {
  return (
    <section id="about" className="h-fit text-center pt-[calc(4rem+7vh)] md:pt-[calc(12vw+7vh)] pl-4 md:pl-[2.5vw] pr-4 md:pr-0 pb-0 overflow-clip relative">
      <StickerReveal
        src="/img-webp/sticker.png"
        alt="Burger sticker"
        className="hidden md:block absolute md:top-100 md:left-[3vw] md:w-[260px] md:h-[260px] z-20"
        width={300}
        height={300}
      />

      <div className="w-[95%] mx-auto text-center -mt-[18vw] md:-mt-[16vw] mb-4 md:mb-[2vw]">
        <h1 className="text-stroke-180 leading-[1] text-mustard-dark text-[22vw] md:text-[16vw] uppercase font-modak tracking-wider whitespace-nowrap">
          SPOT&amp;
        </h1>
        <h1 className="text-stroke-180 leading-[1] text-mustard-dark text-[22vw] md:text-[16vw] uppercase font-modak tracking-wider whitespace-nowrap">
          CHOO&apos;S
        </h1>
      </div>

      <div className="relative w-[95%] mx-auto flex items-center justify-center gap-4 md:gap-[2vw] mb-6 md:mb-[3vw]">
        <Image
          src="/img-webp/ico-7.png"
          alt="Spot & Choo's sticker"
          width={200}
          height={200}
          className="w-[80px] h-[80px] md:w-[180px] md:h-[180px] object-contain shrink-0 -rotate-10 z-20"
        />
        <h2 className="text-stroke-small text-center leading-[1.5] text-red text-[clamp(26px,6vw,64px)] uppercase font-modak tracking-wider">
          <SplitText
            text="Сытно. Вкусно. По-домашнему."
            tag="span"
            splitType="chars"
            delay={35}
            duration={0.7}
            from={{ opacity: 0, y: 40, rotation: 4 }}
            to={{ opacity: 1, y: 0, rotation: 0 }}
            className="inline-block"
          />
        </h2>
      </div>

      <div className="relative flex justify-center items-center mt-0">
        <ImageReveal
          leftImage="/img-webp/foto1.webp"
          middleImage="/img-webp/foto2.webp"
          rightImage="/img-webp/foto3.webp"
        />

        <StickerReveal
          src="/img-webp/fries-sticker.png"
          alt="Fries sticker"
          width={300}
          height={450}
          className="absolute right-[2vw] md:right-[3vw] bottom-[2vw] md:bottom-[15vw] w-[110px] h-[165px] md:w-[360px] md:h-[540px] z-20 pointer-events-none"
        />
      </div>
    </section>
  );
}
