import { SCHEDULE, SCHEDULE_LEGEND, DAYS, TIMES } from "@/data/schedule";

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
                  Horario
                </th>
                {DAYS.map((day) => (
                  <th
                    key={day}
                    className="text-center px-4 py-4 text-xs font-semibold uppercase tracking-widest text-accent-gold"
                  >
                    {day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TIMES.map((time, timeIdx) => (
                <tr
                  key={time}
                  className={`border-b border-brand-muted-border last:border-0 hover:bg-brand-card/50 transition-colors ${
                    timeIdx % 2 === 0 ? "bg-brand-black" : "bg-brand-dark"
                  }`}
                >
                  <td className="px-6 py-4 font-semibold text-brand-white whitespace-nowrap">
                    {time}
                  </td>
                  {DAYS.map((day) => {
                    const entry = SCHEDULE.find((e) => e.day === day && e.time === time);
                    return (
                      <td
                        key={`${day}-${time}`}
                        className="text-center px-4 py-4 text-sm text-brand-white"
                      >
                        {entry ? entry.className : "–"}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 rounded-lg border border-brand-muted-border bg-brand-card p-6">
          <h3 className="text-xs font-semibold uppercase tracking-widest text-accent-gold mb-6 text-center">
            Leyenda
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {SCHEDULE_LEGEND.map((item) => (
              <div key={item.label} className="flex flex-col items-center text-center">
                <div className="text-3xl mb-2">{item.icon}</div>
                <p className="text-sm font-semibold text-brand-white">{item.label}</p>
                <p className="text-xs text-brand-muted mt-1">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-brand-muted text-xs mt-6">
          Horario sujeto a cambios. Síguenos en{" "}
          <a
            href="https://www.instagram.com/bjjmislata/"
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
