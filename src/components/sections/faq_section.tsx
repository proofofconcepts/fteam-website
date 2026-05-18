import { FAQ } from "@/data/faq";
import FaqItem from "@/components/ui/faq_item";

export default function FaqSection() {
  return (
    <section id="faq" className="bg-brand-dark py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent-gold mb-3">
            ¿Tienes Dudas?
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-brand-white">
            Preguntas Frecuentes
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          {FAQ.map((entry) => (
            <FaqItem key={entry.id} data={entry} />
          ))}
        </div>
      </div>
    </section>
  );
}
