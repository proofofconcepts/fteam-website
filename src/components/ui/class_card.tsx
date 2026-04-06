import { ClassData } from "@/data/classes";

interface ClassCardProps {
  data: ClassData;
}

export default function ClassCard({ data }: ClassCardProps) {
  return (
    <div className="bg-brand-card border border-brand-muted-border rounded-lg p-6 flex flex-col gap-4 hover:border-accent-red transition-colors duration-300 group">
      <span className="text-4xl">{data.icon}</span>

      <div>
        <span className="text-xs font-semibold uppercase tracking-widest text-accent-gold">
          {data.level}
        </span>
        <h3 className="font-display text-xl font-bold text-brand-white mt-1 group-hover:text-accent-gold transition-colors">
          {data.title}
        </h3>
      </div>

      <p className="text-brand-muted text-sm leading-relaxed flex-1">
        {data.description}
      </p>

      <div className="pt-4 border-t border-brand-muted-border flex flex-col gap-1 text-xs text-brand-muted">
        <span>🕐 {data.duration}</span>
        <span>📅 {data.schedule}</span>
      </div>
    </div>
  );
}
