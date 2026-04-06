export interface ClassData {
  id: string;
  title: string;
  level: "Beginner" | "Advanced" | "Kids" | "No-Gi";
  description: string;
  schedule: string;
  duration: string;
  icon: string;
}

export const CLASSES: ClassData[] = [
  {
    id: "beginner",
    title: "Beginner BJJ",
    level: "Beginner",
    description:
      "The perfect starting point. Learn positions, escapes, and fundamental submissions in a safe and welcoming environment. No experience needed.",
    schedule: "Mon / Wed / Fri — 6:00pm",
    duration: "60 min",
    icon: "🥋",
  },
  {
    id: "advanced",
    title: "Advanced BJJ",
    level: "Advanced",
    description:
      "For blue belts and above. Deep technique drilling, competition preparation, and focused live rolling with experienced training partners.",
    schedule: "Tue / Thu — 7:00pm",
    duration: "90 min",
    icon: "🏆",
  },
  {
    id: "kids",
    title: "Kids BJJ",
    level: "Kids",
    description:
      "Ages 5–14. Build confidence, discipline, and self-defence skills through fun, age-appropriate jiu-jitsu training.",
    schedule: "Sat — 10:00am",
    duration: "45 min",
    icon: "⭐",
  },
  {
    id: "nogi",
    title: "No-Gi Grappling",
    level: "No-Gi",
    description:
      "Submission grappling without the gi. Emphasises wrestling entries, leg locks, and dynamic scrambles. Open to all levels.",
    schedule: "Wed / Sat — 8:00pm",
    duration: "75 min",
    icon: "💪",
  },
];
