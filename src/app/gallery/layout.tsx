import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spot & Choo's — Галерея",
  description: "Фотогалерея Spot&Choo's: бургер-джоинты, еда, мерч, мероприятия.",
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
