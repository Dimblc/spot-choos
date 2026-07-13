import ProjectButton from "@/components/ui/project-button";
import { navLinks, socialLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-beige py-12 md:py-[4vw] px-4 md:px-[2.5vw]">
      <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-[4vw]">
        <div>
          <p className="font-modak text-[clamp(28px,4vw,48px)] leading-none">Spot & Choo&apos;s</p>
          <p className="text40 mt-2 md:mt-[1vw] text-beige/70">Новосибирск, с 2015 года</p>
        </div>
        <div className="flex flex-col gap-2 md:gap-[0.5vw]">
          <p className="text40 text-beige/50 uppercase">Навигация</p>
          {navLinks.map((link) => (
            <ProjectButton
              key={link.href}
              href={link.href}
              variant="dark"
              className="justify-start text40 h-auto px-0 py-0 border-none font-normal normal-case tracking-normal"
            >
              {link.label}
            </ProjectButton>
          ))}
        </div>
        <div className="flex flex-col gap-2 md:gap-[0.5vw]">
          <p className="text40 text-beige/50 uppercase">Ссылки</p>
          {socialLinks.map((link) => (
            <ProjectButton
              key={link.href}
              href={link.href}
              external
              variant="dark"
              className="justify-start text40 h-auto px-0 py-0 border-none font-normal normal-case tracking-normal"
            >
              {link.label}
            </ProjectButton>
          ))}
        </div>
      </div>
      <div className="mt-8 md:mt-[4vw] pt-4 md:pt-[2vw] border-t border-beige/20 text-center text40 text-beige/60">
        © {new Date().getFullYear()} Spot & Choo&apos;s — Smashed patties · toasted buns · est. 2015
      </div>
    </footer>
  );
}
