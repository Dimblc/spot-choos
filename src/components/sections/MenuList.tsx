"use client";

import { useState } from "react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { menuCategories, happyHours } from "@/lib/data";

const RED = "#FF2D2D";

export default function MenuList() {
  const [activeId, setActiveId] = useState(menuCategories[0].id);

  const active = menuCategories.find((c) => c.id === activeId) ?? menuCategories[0];

  return (
    <ScrollReveal>
      <div className="mt-12 md:mt-[5vw]" id="full-menu">
        <h2 className="font-modak uppercase text-[#FF2D2D] text-stroke-small text-[clamp(32px,5vw,64px)] leading-none text-center text-balance">
          Полное меню
        </h2>
        <p className="font-body text-[#777] text-[clamp(12px,1.1vw,15px)] text-center mt-3 text-pretty">
          Меню точки в Академгородке (ул. Ильича, 10). Цены в других точках могут отличаться.
        </p>

        {/* Category tabs */}
        <div
          role="tablist"
          aria-label="Категории меню"
          className="flex flex-wrap justify-center gap-2 md:gap-3 mt-6 md:mt-[2vw]"
        >
          {menuCategories.map((cat) => {
            const isActive = cat.id === activeId;
            return (
              <button
                key={cat.id}
                role="tab"
                aria-selected={isActive}
                aria-controls={`menu-panel-${cat.id}`}
                onClick={() => setActiveId(cat.id)}
                className={`rounded-full font-modak uppercase text-[clamp(12px,1.1vw,16px)] px-4 md:px-5 py-2 md:py-2.5 transition-all duration-300 border ${
                  isActive
                    ? "bg-[#FF2D2D] text-white border-[#FF2D2D] shadow-[0_8px_20px_-8px_rgba(255,45,45,0.5)]"
                    : "bg-white text-[#1B1B1B] border-black/10 hover:border-[#FF2D2D]/40 hover:text-[#FF2D2D]"
                }`}
              >
                {cat.title}
              </button>
            );
          })}
        </div>

        {/* Items */}
        <div
          role="tabpanel"
          id={`menu-panel-${active.id}`}
          aria-label={active.title}
          className="mt-6 md:mt-[2.5vw] max-w-[900px] mx-auto"
        >
          {active.note && (
            <p className="font-body text-[#2e7d32] text-[clamp(12px,1.1vw,15px)] text-center border border-dashed border-[#2e7d32]/40 rounded-[16px] px-4 py-3 mb-4 text-pretty">
              {active.note}
            </p>
          )}
          <ul className="flex flex-col gap-3 md:gap-4">
            {active.items.map((item) => (
              <li
                key={item.name}
                className="bg-white rounded-[20px] px-5 md:px-7 py-4 md:py-5 shadow-[0_8px_24px_-12px_rgba(27,27,27,0.14)] flex items-baseline justify-between gap-4"
              >
                <div className="min-w-0">
                  <h3 className="font-modak uppercase text-[#1B1B1B] text-[clamp(15px,1.5vw,21px)] leading-tight text-balance">
                    {item.name}
                  </h3>
                  {item.description && (
                    <p className="font-body text-[#777] text-[clamp(12px,1.05vw,15px)] leading-relaxed mt-1 text-pretty">
                      {item.description}
                    </p>
                  )}
                </div>
                <span
                  className="font-modak whitespace-nowrap shrink-0 text-[clamp(16px,1.6vw,24px)]"
                  style={{ color: RED }}
                >
                  {typeof item.price === "number" ? `${item.price} ₽` : item.price}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <p className="font-modak uppercase text-[#1B1B1B] text-[clamp(13px,1.3vw,18px)] text-center mt-8 md:mt-[3vw] bg-white rounded-full inline-flex px-6 py-3 mx-auto w-fit relative left-1/2 -translate-x-1/2 shadow-[0_8px_24px_-12px_rgba(27,27,27,0.16)] text-balance">
          {happyHours}
        </p>
      </div>
    </ScrollReveal>
  );
}
