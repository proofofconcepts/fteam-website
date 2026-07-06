export interface ClassData {
  id: string;
  title: string;
  level: string;
  description: string;
  schedule: string;
  duration: string;
  icon: string;
}

export const CLASSES: ClassData[] = [
  {
    id: "kimono",
    title: "BJJ Kimono",
    level: "Todos los niveles",
    description:
      "Aprende las posiciones, barridos y sumisiones del jiu-jitsu brasileño con kimono. Ideal para todos los niveles.",
    schedule: "Lun / Mié — 9:30am y 7:00pm · Mar / Jue — 9:30am y 7:00pm",
    duration: "60 min",
    icon: "🥋",
  },
  {
    id: "nogi",
    title: "Sin Kimono (NOGI)",
    level: "Todos los niveles",
    description:
      "Grappling sin kimono. Énfasis en takedowns, leg locks y scrambles dinámicos. Abierto a todos los niveles.",
    schedule: "Lun / Mié — 10:30am · Mar / Jue — 8:00pm",
    duration: "60 min",
    icon: "💪",
  },
  {
    id: "kids-small",
    title: "Infantil 4–7 años",
    level: "Niños",
    description:
      "Clases adaptadas para los más pequeños. Desarrollan coordinación, confianza y valores a través del jiu-jitsu.",
    schedule: "Lun / Mié — 5:15pm",
    duration: "45 min",
    icon: "⭐",
  },
  {
    id: "kids-mid",
    title: "Infantil 7–10 años",
    level: "Niños",
    description:
      "Programa estructurado para niños en edad escolar. Técnica, disciplina y compañerismo en un ambiente seguro.",
    schedule: "Lun / Mié — 6:00pm",
    duration: "45 min",
    icon: "🌟",
  },
  {
    id: "kids-teen",
    title: "Infantil 10–14 años",
    level: "Adolescentes",
    description:
      "Para preadolescentes y adolescentes. Mayor intensidad técnica y preparación competitiva si lo desean.",
    schedule: "Mar — 5:15pm · Jue — 5:15pm y 6:00pm",
    duration: "45 min",
    icon: "🏆",
  },
  {
    id: "openmat",
    title: "Open Mat",
    level: "Todos los niveles",
    description:
      "Rueda libre supervisada. Practica con compañeros de todos los niveles en un ambiente relajado.",
    schedule: "Vie — 7:00pm · Sab — 9:30am",
    duration: "90 min",
    icon: "🤼",
  },
  {
    id: "clase-basica",
    title: "Clase Básica",
    level: "Todos los niveles",
    description:
      "Fundamentos y técnicas de jiu-jitsu brasileño para todas las edades y niveles. Aprende lo esencial del arte marcial.",
    schedule: "Lun / Mié — 8:00pm · Mar / Vie — 6:00pm",
    duration: "60 min",
    icon: "📖",
  },
];
