import Image from "next/image";
import { InstructorData } from "@/data/instructors";

interface InstructorCardProps {
  data: InstructorData;
}

function PlaceholderAvatar({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  return (
    <div className="w-full aspect-square bg-brand-muted-border flex items-center justify-center">
      <span className="font-display text-5xl font-bold text-brand-muted">
        {initials}
      </span>
    </div>
  );
}

export default function InstructorCard({ data }: InstructorCardProps) {
  return (
    <div className="bg-brand-card border border-brand-muted-border rounded-lg overflow-hidden group">
      {data.imageSrc ? (
        <Image
          src={data.imageSrc}
          alt={data.imageAlt}
          width={0}
          height={0}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="w-full h-auto"
        />
      ) : (
        <PlaceholderAvatar name={data.name} />
      )}

      <div className="p-6">
        <span className="inline-block text-xs font-semibold uppercase tracking-widest text-accent-gold border border-accent-gold px-2 py-0.5 rounded mb-3">
          {data.beltRank}
        </span>

        <h3 className="font-display text-xl font-bold text-brand-white">
          {data.name}
        </h3>
        <p className="text-accent-red text-sm font-medium mb-3">{data.role}</p>
        <p className="text-brand-muted text-sm leading-relaxed mb-4">
          {data.bio}
        </p>

        <ul className="flex flex-col gap-1">
          {data.achievements.map((achievement) => (
            <li key={achievement} className="flex items-start gap-2 text-xs text-brand-muted">
              <span className="text-accent-gold mt-0.5 flex-shrink-0">▸</span>
              {achievement}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
