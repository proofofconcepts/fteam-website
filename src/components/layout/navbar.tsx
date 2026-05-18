"use client";

import { useState, useEffect } from "react";
import { SITE_CONFIG } from "@/lib/constants";

const NAV_LINKS = [
  { label: "Clases", href: "#classes" },
  { label: "Horario", href: "#schedule" },
  { label: "Instructores", href: "#instructors" },
  { label: "FAQ", href: "#faq" },
  { label: "Contacto", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-brand-black/95 backdrop-blur-sm border-b border-brand-muted-border shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#hero"
            className="font-display text-2xl font-bold tracking-wider text-brand-white hover:text-accent-gold transition-colors"
          >
            BARAO BJJ
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-brand-muted hover:text-brand-white transition-colors uppercase tracking-wide"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-accent-red hover:bg-accent-red-hover text-white text-sm font-semibold px-5 py-2.5 rounded transition-colors uppercase tracking-wide"
            >
              Clase Gratis
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-brand-white p-2"
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span
                className={`block h-0.5 bg-current transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`block h-0.5 bg-current transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-0.5 bg-current transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-brand-black/98 border-t border-brand-muted-border">
          <div className="px-4 py-6 flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-brand-muted hover:text-brand-white transition-colors text-sm uppercase tracking-wide py-1"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="bg-accent-red hover:bg-accent-red-hover text-white text-sm font-semibold px-5 py-3 rounded text-center transition-colors uppercase tracking-wide mt-2"
            >
              Clase Gratis
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
