"use client";

import { useState } from "react";
import ProjectButton from "@/components/ui/project-button";
import { contactForm } from "@/lib/data";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "sending") return;

    const form = e.currentTarget;
    const formData = new FormData(form);
    setStatus("sending");

    try {
      // Google Forms не отдаёт CORS-заголовки, поэтому отправляем в режиме no-cors:
      // ответ прочитать нельзя, но заявка успешно записывается в таблицу.
      await fetch(contactForm.action, {
        method: contactForm.method,
        mode: "no-cors",
        body: formData,
      });
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div
        role="status"
        className="flex flex-col items-center gap-4 bg-white rounded-[24px] border-2 border-red/20 px-6 py-10 text-center"
      >
        <span className="font-modak text-red uppercase text-[clamp(20px,2vw,32px)]">
          Спасибо!
        </span>
        <p className="text40 text-black/70 text-pretty">
          Сообщение отправлено. Мы прочитаем его и ответим на указанный email.
        </p>
        <ProjectButton
          variant="ghost"
          className="text-[clamp(14px,1.2vw,18px)] px-6 py-2 h-auto border-black/10"
          onClick={() => setStatus("idle")}
        >
          Написать ещё
        </ProjectButton>
      </div>
    );
  }

  return (
    <form
      className="flex flex-col gap-4 md:gap-[2vw]"
      onSubmit={handleSubmit}
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
      {status === "error" && (
        <p role="alert" className="text40 text-red text-center">
          Не получилось отправить. Попробуйте ещё раз или напишите нам в Telegram.
        </p>
      )}
      <ProjectButton
        type="submit"
        variant="red"
        className="self-center text-[clamp(16px,1.5vw,24px)] px-8 md:px-[4vw] py-3 md:py-[1vw] h-auto"
        disabled={status === "sending"}
      >
        {status === "sending" ? "Отправляем..." : "Отправить"}
      </ProjectButton>
    </form>
  );
}
