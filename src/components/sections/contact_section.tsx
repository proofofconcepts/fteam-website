import { SITE_CONFIG } from "@/lib/constants";
import ContactForm from "@/components/ui/contact_form";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-brand-black py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent-gold mb-3">
            Empieza tu Camino
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-brand-white">
            Contáctanos
          </h2>
          <p className="text-brand-muted mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            ¿Listo para probar tu primera clase? Rellena el formulario y te
            responderemos en 24 horas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: info + map */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-accent-gold mb-2">
                  Dirección
                </p>
                <address className="not-italic text-brand-white text-sm leading-relaxed">
                  {SITE_CONFIG.address}
                </address>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-accent-gold mb-2">
                  Teléfono
                </p>
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="text-brand-white text-sm hover:text-accent-gold transition-colors"
                >
                  {SITE_CONFIG.phone}
                </a>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-accent-gold mb-2">
                  Email
                </p>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="text-brand-white text-sm hover:text-accent-gold transition-colors"
                >
                  {SITE_CONFIG.email}
                </a>
              </div>
            </div>

            {/* Google Maps embed */}
            <div className="rounded-lg overflow-hidden border border-brand-muted-border h-64">
              <iframe
                src={SITE_CONFIG.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Barao JiuJitsu Mislata"
              />
            </div>
          </div>

          {/* Right: contact form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
