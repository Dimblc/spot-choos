import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { aboutSections } from "@/lib/data";

export const metadata = {
  title: "Spot & Choo's — О нас",
  description: "История, концепция и локации Spot&Choo's",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-beige pt-[20vw] md:pt-[8vw] px-4 md:px-[2.5vw] pb-12 md:pb-[6vw]">
        <h1 className="heading180 text-red text-stroke-180 font-modak uppercase text-center mb-4 md:mb-[4vw]">
          О нас
        </h1>

        <div className="flex flex-col gap-8 md:gap-[4vw] max-w-[1200px] mx-auto">
          {aboutSections.map((section, i) => (
            <div
              key={i}
              className={`flex flex-col md:flex-row gap-6 md:gap-[3vw] items-center ${
                section.reverse ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="flex-1">
                <h2 className="font-modak text-red text-[clamp(24px,3vw,42px)] uppercase mb-4 md:mb-[2vw]">
                  {section.title}
                </h2>
                {section.text.map((p, j) => (
                  <p key={j} className="text40 text-black leading-[1.6] mb-4 md:mb-[1vw] last:mb-0">
                    {p}
                  </p>
                ))}
              </div>
              <div className="flex-1 w-full">
                <div className="relative w-full aspect-[4/3] rounded-[2vw] md:rounded-[1.5vw] border-2 border-red/20 overflow-hidden">
                  <Image
                    src={section.image}
                    alt={section.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
