import { INSTRUCTORS } from "@/data/instructors";
import InstructorCard from "@/components/ui/instructor_card";

export default function InstructorsSection() {
  return (
    <section
      id="instructors"
      className="bg-brand-dark py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent-gold mb-3">
            Aprende de los Mejores
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-brand-white">
            Nuestros Instructores
          </h2>
          <p className="text-brand-muted mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            Nuestros entrenadores están comprometidos con tu crecimiento, desde
            tu primera clase hasta tu primera competición.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INSTRUCTORS.map((instructor) => (
            <InstructorCard key={instructor.id} data={instructor} />
          ))}
        </div>
      </div>
    </section>
  );
}
