import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProjectButton from "@/components/ui/project-button";
import ContactForm from "@/components/sections/ContactForm";
import LocationsMap from "@/components/sections/LocationsMap";
import { locations } from "@/lib/data";

export const metadata = {
  title: "Spot & Choo's — Контакты",
  description: "Адреса, телефоны, часы работы и форма обратной связи",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-beige pt-[20vw] md:pt-[8vw] px-4 md:px-[2.5vw] pb-12 md:pb-[6vw]">
        <h1 className="heading180 text-red text-stroke-180 font-modak uppercase text-center mb-4 md:mb-[4vw]">
          Контакты
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-[1.5vw] mb-8 md:mb-[4vw] max-w-[1200px] mx-auto">
          {locations.map((loc) => (
            <div
              key={loc.slug}
              className="bg-white rounded-[2vw] md:rounded-[1.5vw] border-2 border-red/20 p-4 md:p-[1.5vw] flex flex-col gap-2 md:gap-[1vw]"
            >
              <div className="font-modak text-red text-[clamp(14px,1.2vw,18px)] uppercase">{loc.nameRu}</div>
              <div className="font-modak text-[clamp(18px,1.6vw,26px)] uppercase text-black leading-none">
                {loc.address}
              </div>
              <div className="text40 text-black/50">{loc.district}</div>
              <div className="flex flex-col text40 text-black/60">
                {loc.hours.map((h) => (
                  <span key={h}>{h}</span>
                ))}
              </div>
              <a href={`tel:${loc.phone}`} className="text40 text-black/70 hover:text-red transition-colors">
                {loc.phoneDisplay}
              </a>
              <ProjectButton
                href={loc.telegram}
                external
                variant="red"
                className="text-[clamp(14px,1.2vw,18px)] px-4 md:px-[1.5vw] py-2 md:py-[0.5vw] h-auto"
              >
                Telegram →
              </ProjectButton>
            </div>
          ))}
        </div>

        <div className="max-w-[1200px] mx-auto mb-8 md:mb-[4vw]">
          <h2 className="font-modak text-red text-[clamp(24px,2.5vw,40px)] uppercase text-center mb-4 md:mb-[2vw]">
            Мы на карте
          </h2>
          <LocationsMap />
        </div>

        <div className="max-w-[600px] mx-auto">
          <h2 className="font-modak text-red text-[clamp(24px,2.5vw,40px)] uppercase text-center mb-4 md:mb-[2vw]">
            Обратная связь
          </h2>
          <ContactForm />
        </div>
      </main>
      <Footer />
    </>
  );
}
