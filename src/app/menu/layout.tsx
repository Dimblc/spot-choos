import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spot & Choo's — Меню",
  description: "Меню Spot&Choo's по точкам: Академгородок, Центр, НГТУ, Кольцово. Предзаказ в Telegram.",
};

export default function MenuLayout({ children }: { children: React.ReactNode }) {
  return children;
}
