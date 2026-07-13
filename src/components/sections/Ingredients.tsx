"use client";

import Image from "next/image";
import SplitText from "@/components/animations/SplitText";
import StickerReveal from "@/components/animations/StickerReveal";

export default function Ingredients() {
  return (
    <section id="ingredients" className="h-fit min-h-[80vh] w-full px-0 pt-6 md:pt-[3vw] pb-12 md:pb-[8vw] relative">
      <img
        src="/img-webp/burgerfri.png"
        alt="Свежие ингредиенты"
        className="absolute top-[0%] right-0 w-[70vw] md:w-[56vw] max-w-[4320px] h-auto object-contain shrink-0 pr-4 md:pr-[2.5vw] translate-x-[-1%] -translate-y-[20%] z-0 pointer-events-none"
      />
      <h2 className="relative z-10 text-left text-[8vw] md:text-[9vw] leading-[1.1] uppercase text-red font-modak tracking-tight pl-4 md:pl-[2.5vw]">
          <SplitText
            text={"СВЕЖЕСТЬ.\nКАЧЕСТВО.\nВКУС.\nНАСТРОЕНИЕ."}
            tag="span"
            splitType="chars"
            delay={35}
            duration={0.7}
            from={{ opacity: 0, y: 60, rotation: 6 }}
            to={{ opacity: 1, y: 0, rotation: 0 }}
            textAlign="left"
            className="block"
          />
      </h2>

      <div className="flex flex-wrap items-center justify-center gap-[5.2vw] mt-4 md:mt-[2vw] px-4 md:px-[2.5vw] relative z-10">
        <div className="flex items-center gap-2 md:gap-[0.8vw]">
          <Image src="/img-webp/myaso.png" alt="Мраморная говядина" width={120} height={120} className="w-[60px] h-[60px] md:w-[120px] md:h-[120px] object-contain shrink-0" />
          <div className="flex flex-col">
            <span className="font-modak text-red text-[clamp(16px,2.4vw,36px)] uppercase leading-[1.1]">Мраморная</span>
            <span className="font-modak text-red text-[clamp(16px,2.4vw,36px)] uppercase leading-[1.1]">говядина</span>
          </div>
        </div>

        <div className="flex items-center gap-2 md:gap-[0.8vw]">
          <Image src="/img-webp/sir.png" alt="Натуральные сыры" width={120} height={120} className="w-[60px] h-[60px] md:w-[120px] md:h-[120px] object-contain shrink-0" />
          <div className="flex flex-col">
            <span className="font-modak text-red text-[clamp(16px,2.4vw,36px)] uppercase leading-[1.1]">Натуральные</span>
            <span className="font-modak text-red text-[clamp(16px,2.4vw,36px)] uppercase leading-[1.1]">сыры</span>
          </div>
        </div>

        <div className="flex items-center gap-2 md:gap-[0.8vw]">
          <Image src="/img-webp/list.png" alt="Овощи с ферм" width={120} height={120} className="w-[60px] h-[60px] md:w-[120px] md:h-[120px] object-contain shrink-0" />
          <div className="flex flex-col">
            <span className="font-modak text-red text-[clamp(16px,2.4vw,36px)] uppercase leading-[1.1]">Овощи</span>
            <span className="font-modak text-red text-[clamp(16px,2.4vw,36px)] uppercase leading-[1.1]">с ферм</span>
          </div>
        </div>

        <div className="flex items-center gap-2 md:gap-[0.8vw]">
          <Image src="/img-webp/bul.png" alt="Домашние булочки" width={120} height={120} className="w-[60px] h-[60px] md:w-[120px] md:h-[120px] object-contain shrink-0" />
          <div className="flex flex-col">
            <span className="font-modak text-red text-[clamp(16px,2.4vw,36px)] uppercase leading-[1.1]">Домашние</span>
            <span className="font-modak text-red text-[clamp(16px,2.4vw,36px)] uppercase leading-[1.1]">булочки</span>
          </div>
        </div>
      </div>

      <StickerReveal
        src="/img-webp/sticker-snack.png"
        alt="Sticker"
        width={300}
        height={300}
        rotate="8deg"
        className="absolute bottom-[23%] left-[73%] w-[30vw] max-w-[200px] md:w-[14vw] md:max-w-[280px] z-20"
      />

      <Image
        src="/img-webp/ico-sticker.png"
        alt="Sticker"
        width={240}
        height={240}
        className="absolute top-[38%] left-[33%] w-[26vw] max-w-[160px] md:w-[12vw] md:max-w-[220px] object-contain z-20 pointer-events-none -rotate-10"
      />
    </section>
  );
}
