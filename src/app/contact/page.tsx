import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProjectButton from "@/components/ui/project-button";
import { contactForm, locations } from "@/lib/data";

export const metadata = {
  title: "Spot & Choo's — Контакты",
  description: "Адреса, телефоны и форма обратной связи",
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
              <div className="font-modak text-red text-[clamp(14px,1.2vw,18px)] uppercase">{loc.name}</div>
              <div className="font-modak text-[clamp(18px,1.6vw,26px)] uppercase text-black leading-none">
                {loc.address}
              </div>
              <div className="text40 text-black/50">{loc.district}</div>
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

        <div className="max-w-[600px] mx-auto">
          <h2 className="font-modak text-red text-[clamp(24px,2.5vw,40px)] uppercase text-center mb-4 md:mb-[2vw]">
            Обратная связь
          </h2>
          <form
            className="flex flex-col gap-4 md:gap-[2vw]"
            action={contactForm.action}
            method={contactForm.method}
            target="_blank"
            aria-label="Форма обратной связи"
          >
            <label className="flex flex-col gap-2">
              <span className="text40 text-black/70 font-modak uppercase">Ваше имя</span>
              <input
                type="text"
                name={contactForm.entries.name}
                placeholder="Введите имя"
                required
                className="w-full px-4 py-3 md:px-[2vw] md:py-[1vw] rounded-full border border-black/20 bg-white text-black text40 focus:outline-none focus:border-red"
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="text40 text-black/70 font-modak uppercase">Email</span>
              <input
                type="email"
                name={contactForm.entries.email}
                placeholder="example@mail.ru"
                required
                className="w-full px-4 py-3 md:px-[2vw] md:py-[1vw] rounded-full border border-black/20 bg-white text-black text40 focus:outline-none focus:border-red"
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="text40 text-black/70 font-modak uppercase">Сообщение</span>
              <textarea
                name={contactForm.entries.message}
                placeholder="Напишите нам..."
                rows={4}
                required
                className="w-full px-4 py-3 md:px-[2vw] md:py-[1vw] rounded-[2vw] border border-black/20 bg-white text-black text40 focus:outline-none focus:border-red"
              />
            </label>
            <ProjectButton
              type="submit"
              variant="red"
              className="self-center text-[clamp(16px,1.5vw,24px)] px-8 md:px-[4vw] py-3 md:py-[1vw] h-auto"
            >
              Отправить
            </ProjectButton>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}
