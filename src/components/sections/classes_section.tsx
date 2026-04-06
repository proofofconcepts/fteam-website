import { CLASSES } from "@/data/classes";
import ClassCard from "@/components/ui/class_card";

export default function ClassesSection() {
  return (
    <section id="classes" className="bg-brand-dark py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent-gold mb-3">
            What We Offer
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-brand-white">
            Our Classes
          </h2>
          <p className="text-brand-muted mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            Whether you&apos;re stepping on the mats for the first time or
            training for competition, we have a class for you.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CLASSES.map((cls) => (
            <ClassCard key={cls.id} data={cls} />
          ))}
        </div>
      </div>
    </section>
  );
}
