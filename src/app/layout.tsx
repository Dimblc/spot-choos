import type { Metadata } from "next";
import { Modak, Manrope } from "next/font/google";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import GsapProvider from "@/components/providers/GsapProvider";
import LoadingScreen from "@/components/layout/LoadingScreen";
import "./globals.css";
import "@/styles/theme.css";
import "@/styles/sticker.css";

const modak = Modak({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-modak",
  display: "swap",
});

const poppingCute = localFont({
  src: "../../public/fonts/PoppingCute.ttf",
  variable: "--font-popping-cute",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Spot & Choo's | Бургеры в Новосибирске",
  description: "Легендарная бургерная Spot&Choo's. Смэш-бургеры на картофельной булочке. Меню / Адреса / Афиша / Галерея",
  keywords: "бургеры, лучшие бургеры в Новосибирске, Spot&choo's, burger joint, бургерная Новосибирск",
  openGraph: {
    title: "Spot & Choo's Burger Joint",
    description: "Легендарная бургерная Spot&Choo's. Смэш-бургеры на картофельной булочке.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={cn(modak.variable, poppingCute.variable, manrope.variable, "h-full antialiased")}>
      <body className="min-h-full flex flex-col bg-beige text-black">
        <GsapProvider>
          <LoadingScreen />
          {children}
        </GsapProvider>
      </body>
    </html>
  );
}
