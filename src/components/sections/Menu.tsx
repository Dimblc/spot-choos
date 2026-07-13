import Image from "next/image";
import SplitText from "@/components/animations/SplitText";
import ScrollReveal from "@/components/animations/ScrollReveal";
import StickerReveal from "@/components/animations/StickerReveal";

export default function Menu() {
  return (
    <section id="menu" className="h-fit min-h-[160vh] w-full bg-red py-12 md:py-[9vw] pb-[2vh] md:pb-[3vh] px-4 md:px-[2.5vw] relative overflow-x-clip">
      <Image
        src="/img-webp/ico-9.png"
        alt="Spot & Choo's sticker"
        width={220}
        height={220}
        className="absolute left-0 md:left-[17vw] top-[75%] w-[90px] h-[90px] md:w-[200px] md:h-[200px] object-contain z-30 pointer-events-none rotate-6"
      />
      <Image
        src="/img-webp/ico-8.png"
        alt="Spot & Choo's sticker"
        width={220}
        height={220}
        className="absolute right-0 md:right-[1vw] top-[55%] w-[90px] h-[90px] md:w-[200px] md:h-[200px] object-contain z-30 pointer-events-none -rotate-6"
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 flex flex-col items-center leading-[1.2] select-none pointer-events-none" style={{ rotate: "6deg" }}>
        <span className="text-[clamp(120px,36vw,560px)] font-modak uppercase text-[#7a0a06] whitespace-nowrap">SPOT&amp;</span>
        <span className="text-[clamp(120px,36vw,560px)] font-modak uppercase text-[#7a0a06] whitespace-nowrap">CHOO&apos;S</span>
      </div>

      <div className="relative z-20 flex flex-col items-center">
        <Image
          src="/img-webp/menu-sticker.png"
          alt="Spot & Choo's sticker"
          width={300}
          height={300}
          className="absolute -right-4 md:right-[15vw] top-0 md:top-[-10vw] w-[120px] h-[120px] md:w-[260px] md:h-[260px] object-contain z-30 pointer-events-none -rotate-12"
        />
        <Image
          src="/img-webp/ico-2.png"
          alt="Spot & Choo's sticker"
          width={200}
          height={200}
          className="absolute -left-2 md:left-[3vw] top-4 md:top-[2vw] w-[100px] h-[100px] md:w-[200px] md:h-[200px] object-contain z-30 pointer-events-none rotate-12"
        />
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

        <ScrollReveal delay={0.2} className="relative mt-8 md:mt-[4vw] w-full max-w-[900px] mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-[4vw]">
            <div className="flex items-center gap-2 md:gap-[0.8vw]">
              <Image
                src="/img-webp/og.png"
                alt="450 ккал"
                width={224}
                height={224}
                className="w-[160px] h-[160px] md:w-[224px] md:h-[224px] object-contain shrink-0"
              />
              <div className="flex flex-col w-[200px] md:w-[340px]">
                <span className="font-modak text-beige text-[clamp(22px,3vw,42px)] uppercase leading-[1.1]">450 ккал</span>
                <span className="font-modak text-mustard text-[clamp(13px,1.4vw,22px)] uppercase leading-[1.1] mt-2 whitespace-nowrap">энергия в каждой порции</span>
              </div>
            </div>

            <div className="flex items-center gap-2 md:gap-[0.8vw]">
              <Image
                src="/img-webp/pr.png"
                alt="Много белка"
                width={196}
                height={196}
                className="w-[140px] h-[140px] md:w-[196px] md:h-[196px] object-contain shrink-0"
              />
              <div className="flex flex-col w-[200px] md:w-[280px]">
                <span className="font-modak text-beige text-[clamp(22px,3vw,42px)] uppercase leading-[1.1]">Много белка</span>
                <span className="font-modak text-mustard text-[clamp(13px,1.4vw,22px)] uppercase leading-[1.1] mt-2">для силы и насыщения</span>
              </div>
            </div>

            <div className="flex items-center gap-2 md:gap-[0.8vw]">
              <Image
                src="/img-webp/wq.png"
                alt="Свежие ингредиенты"
                width={196}
                height={196}
                className="w-[140px] h-[140px] md:w-[196px] md:h-[196px] object-contain shrink-0"
              />
              <div className="flex flex-col w-[200px] md:w-[340px]">
                <span className="font-modak text-beige text-[clamp(22px,3vw,42px)] uppercase leading-[1.1] whitespace-nowrap">Свежие ингредиенты</span>
                <span className="font-modak text-mustard text-[clamp(13px,1.4vw,22px)] uppercase leading-[1.1] mt-2 whitespace-nowrap">только качественные продукты</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <StickerReveal
        src="/img-webp/sticker-burger.png"
        alt="Бери два!"
        width={360}
        height={360}
        rotate="-12deg"
        className="absolute left-[2%] md:left-[5%] top-[44%] w-[34vw] max-w-[220px] md:w-[16vw] md:max-w-[320px] z-30"
      />

      <Image
        src="/img-webp/burger-with-ruki.png"
        alt="Spot & Choo's burger mascot"
        width={1530}
        height={1020}
        className="relative left-1/2 -translate-x-1/2 mt-4 md:mt-[1vw] -mb-[10%] w-[60.75vw] md:w-[80.25vw] max-w-[1032px] h-auto object-contain z-10"
        priority
        sizes="(max-width: 768px) 60.75vw, 80.25vw"
      />
    </section>
  );
}
