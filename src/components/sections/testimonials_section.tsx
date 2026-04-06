import { TESTIMONIALS } from "@/data/testimonials";
import TestimonialCard from "@/components/ui/testimonial_card";

export default function TestimonialsSection() {
  return (
    <section className="bg-brand-black py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent-gold mb-3">
            What Our Students Say
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-brand-white">
            Testimonials
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard key={testimonial.id} data={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
