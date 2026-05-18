import { SITE_CONFIG } from "@/lib/constants";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient (replace with <Image> when a real photo is available) */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-black via-[#0d0d0d] to-[#1a0a0a]" />

      {/* Decorative pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #c9a84c 0, #c9a84c 1px, transparent 0, transparent 50%)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Red accent bar */}
      <div className="absolute left-0 top-0 h-full w-1 bg-accent-red" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="font-display text-accent-gold tracking-[0.3em] uppercase text-sm mb-6 font-semibold">
          Mislata, Valencia
        </p>

        <h1 className="font-display text-7xl sm:text-8xl md:text-9xl font-bold text-brand-white leading-none tracking-tight">
          BARAO
        </h1>
        <p className="font-display text-2xl sm:text-3xl font-bold text-brand-white tracking-widest uppercase mt-1">
          Jiu-Jitsu Mislata
        </p>

        <p className="mt-4 text-xl sm:text-2xl text-brand-muted font-light tracking-wide">
          {SITE_CONFIG.tagline}
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="bg-accent-red hover:bg-accent-red-hover text-white font-semibold px-10 py-4 rounded text-sm uppercase tracking-widest transition-colors"
          >
            Reserva tu Clase Gratis
          </a>
          <a
            href="#classes"
            className="border border-brand-muted-border hover:border-accent-gold text-brand-white font-semibold px-10 py-4 rounded text-sm uppercase tracking-widest transition-colors"
          >
            Ver Clases
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-brand-muted">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-brand-muted to-transparent" />
      </div>
    </section>
  );
}
