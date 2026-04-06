"use client";

import { useState } from "react";
import { FaqEntry } from "@/data/faq";

interface FaqItemProps {
  data: FaqEntry;
}

export default function FaqItem({ data }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-brand-muted-border rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-6 py-5 text-left bg-brand-card hover:bg-brand-muted-border transition-colors"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-brand-white text-sm pr-4">
          {data.question}
        </span>
        <span
          className={`text-accent-gold flex-shrink-0 transition-transform duration-300 text-lg leading-none ${
            isOpen ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>

      {isOpen && (
        <div className="px-6 py-5 bg-brand-dark border-t border-brand-muted-border">
          <p className="text-brand-muted text-sm leading-relaxed">
            {data.answer}
          </p>
        </div>
      )}
    </div>
  );
}
