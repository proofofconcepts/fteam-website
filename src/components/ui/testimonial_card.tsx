import { TestimonialData } from "@/data/testimonials";

interface TestimonialCardProps {
  data: TestimonialData;
}

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-accent-gold text-sm">
          ★
        </span>
      ))}
    </div>
  );
}

export default function TestimonialCard({ data }: TestimonialCardProps) {
  return (
    <div className="bg-brand-card border border-brand-muted-border rounded-lg p-6 flex flex-col gap-4">
      <Stars count={data.rating} />
      <p className="text-brand-white text-sm leading-relaxed flex-1">
        &ldquo;{data.text}&rdquo;
      </p>
      <div>
        <p className="font-semibold text-brand-white text-sm">{data.name}</p>
        <p className="text-brand-muted text-xs">{data.memberSince}</p>
      </div>
    </div>
  );
}
