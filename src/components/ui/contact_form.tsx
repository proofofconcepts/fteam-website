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
          Message Sent!
        </h3>
        <p className="text-brand-muted text-sm">
          We&apos;ll be in touch within 24 hours to confirm your free trial.
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
          placeholder="Your Name"
          required
          className={inputClass}
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          required
          className={inputClass}
        />
      </div>

      <input
        type="tel"
        name="phone"
        placeholder="Phone (optional)"
        className={inputClass}
      />

      <select name="interest" className={inputClass}>
        <option value="">I&apos;m interested in...</option>
        <option value="beginner">Beginner BJJ</option>
        <option value="advanced">Advanced BJJ</option>
        <option value="kids">Kids BJJ</option>
        <option value="nogi">No-Gi Grappling</option>
        <option value="general">General Enquiry</option>
      </select>

      <textarea
        name="message"
        placeholder="Anything else you'd like to know?"
        rows={4}
        className={inputClass}
      />

      {status === "error" && (
        <p className="text-sm text-red-400">
          Something went wrong. Please email us directly at{" "}
          <a href="mailto:teamfmbjj@gmail.com" className="underline">
            teamfmbjj@gmail.com
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="bg-accent-red hover:bg-accent-red-hover disabled:opacity-50 text-white font-semibold py-4 px-8 rounded text-sm uppercase tracking-widest transition-colors"
      >
        {status === "loading" ? "Sending..." : "Book Free Trial"}
      </button>
    </form>
  );
}
