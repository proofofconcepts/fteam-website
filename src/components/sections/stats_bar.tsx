const STATS = [
  { value: "3", label: "Expert Instructors" },
  { value: "100+", label: "Active Students" },
  { value: "20+", label: "Years Experience" },
  { value: "4", label: "Classes Offered" },
];

export default function StatsBar() {
  return (
    <section className="bg-accent-red py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-4xl font-bold text-white">
                {stat.value}
              </p>
              <p className="text-white/80 text-sm uppercase tracking-widest mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
