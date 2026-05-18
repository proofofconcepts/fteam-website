import { SCHEDULE } from "@/data/schedule";

export default function ScheduleSection() {
  return (
    <section
      id="schedule"
      className="bg-brand-black py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent-gold mb-3">
            Organiza tu Semana
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-brand-white">
            Horario de Clases
          </h2>
        </div>

        <div className="overflow-x-auto rounded-lg border border-brand-muted-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-brand-card border-b border-brand-muted-border">
                <th className="text-left px-6 py-4 text-xs font-semibold uppercase tracking-widest text-accent-gold">
                  Día
                </th>
                <th className="text-left px-6 py-4 text-xs font-semibold uppercase tracking-widest text-accent-gold">
                  Hora
                </th>
                <th className="text-left px-6 py-4 text-xs font-semibold uppercase tracking-widest text-accent-gold">
                  Clase
                </th>
                <th className="text-left px-6 py-4 text-xs font-semibold uppercase tracking-widest text-accent-gold hidden sm:table-cell">
                  Instructor
                </th>
                <th className="text-left px-6 py-4 text-xs font-semibold uppercase tracking-widest text-accent-gold hidden md:table-cell">
                  Duración
                </th>
              </tr>
            </thead>
            <tbody>
              {SCHEDULE.map((entry, idx) => (
                <tr
                  key={idx}
                  className={`border-b border-brand-muted-border last:border-0 hover:bg-brand-card transition-colors ${
                    idx % 2 === 0 ? "bg-brand-black" : "bg-brand-dark"
                  }`}
                >
                  <td className="px-6 py-4 font-semibold text-brand-white">
                    {entry.day}
                  </td>
                  <td className="px-6 py-4 text-brand-muted">{entry.time}</td>
                  <td className="px-6 py-4 text-brand-white">{entry.className}</td>
                  <td className="px-6 py-4 text-brand-muted hidden sm:table-cell">
                    {entry.instructor}
                  </td>
                  <td className="px-6 py-4 text-brand-muted hidden md:table-cell">
                    {entry.duration}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-center text-brand-muted text-xs mt-6">
          Horario sujeto a cambios. Síguenos en{" "}
          <a
            href="https://www.instagram.com/baraojjcork/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-gold hover:underline"
          >
            Instagram
          </a>{" "}
          para actualizaciones.
        </p>
      </div>
    </section>
  );
}
