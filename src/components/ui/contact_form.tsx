import { SITE_CONFIG } from "@/lib/constants";

export default function ContactForm() {
  const message = "Hola, quiero reservar mi clase gratis de prueba en Barao JiuJitsu Mislata.";
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(message)}`;

  return (
    <div className="flex flex-col gap-6">
      <div className="bg-brand-card border border-brand-muted-border rounded-lg p-8 text-center">
        <p className="text-brand-muted text-sm mb-6">
          ¿Listo para empezar? Envíanos un mensaje por WhatsApp y te confirmaremos tu clase gratis.
        </p>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-accent-red hover:bg-accent-red-hover text-white font-semibold py-4 px-8 rounded text-sm uppercase tracking-widest transition-colors"
        >
          💬 Reservar por WhatsApp
        </a>
      </div>

      <div className="bg-brand-card border border-brand-muted-border rounded-lg p-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-accent-gold mb-3">
          O Contáctanos Directamente
        </p>
        <div className="flex flex-col gap-3">
          <a
            href={`tel:${SITE_CONFIG.phone}`}
            className="text-brand-white text-sm hover:text-accent-gold transition-colors"
          >
            📞 {SITE_CONFIG.phone}
          </a>
          <a
            href={`mailto:${SITE_CONFIG.email}`}
            className="text-brand-white text-sm hover:text-accent-gold transition-colors"
          >
            ✉️ {SITE_CONFIG.email}
          </a>
        </div>
      </div>
    </div>
  );
}
