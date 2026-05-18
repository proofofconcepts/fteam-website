"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;
    if (!formspreeId) {
      setStatus("error");
      return;
    }

    const data = new FormData(e.currentTarget);
    try {
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-brand-card border border-accent-gold rounded-lg p-10 text-center">
        <p className="text-accent-gold text-4xl mb-4">✓</p>
        <h3 className="font-display text-2xl font-bold text-brand-white mb-2">
          ¡Mensaje Enviado!
        </h3>
        <p className="text-brand-muted text-sm">
          Nos pondremos en contacto en 24 horas para confirmar tu clase gratis.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full bg-brand-card border border-brand-muted-border rounded px-4 py-3 text-brand-white text-sm placeholder:text-brand-muted focus:outline-none focus:border-accent-red transition-colors";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          placeholder="Tu Nombre"
          required
          className={inputClass}
        />
        <input
          type="email"
          name="email"
          placeholder="Correo Electrónico"
          required
          className={inputClass}
        />
      </div>

      <input
        type="tel"
        name="phone"
        placeholder="Teléfono (opcional)"
        className={inputClass}
      />

      <select name="interest" className={inputClass}>
        <option value="">Me interesa...</option>
        <option value="kimono">BJJ Kimono</option>
        <option value="nogi">No-Gi</option>
        <option value="kids-small">Kids 4–7 años</option>
        <option value="kids-mid">Kids 7–10 años</option>
        <option value="kids-teen">Kids 10–14 años</option>
        <option value="openmat">Open Mat</option>
        <option value="general">Consulta General</option>
      </select>

      <textarea
        name="message"
        placeholder="¿Algo más que quieras preguntarnos?"
        rows={4}
        className={inputClass}
      />

      {status === "error" && (
        <p className="text-sm text-red-400">
          Algo salió mal. Escríbenos directamente a{" "}
          <a href="mailto:bjjmislata@gmail.com" className="underline">
            bjjmislata@gmail.com
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="bg-accent-red hover:bg-accent-red-hover disabled:opacity-50 text-white font-semibold py-4 px-8 rounded text-sm uppercase tracking-widest transition-colors"
      >
        {status === "loading" ? "Enviando..." : "Reservar Clase Gratis"}
      </button>
    </form>
  );
}
