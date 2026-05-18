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
    schedule: "Lun / Mié — 7:00pm · Mar / Jue — 9:30am",
    duration: "60–90 min",
    icon: "🥋",
  },
  {
    id: "nogi",
    title: "No-Gi",
    level: "Todos los niveles",
    description:
      "Grappling sin kimono. Énfasis en takedowns, leg locks y scrambles dinámicos. Abierto a todos los niveles.",
    schedule: "Lun / Mié — 9:30am · Mar / Jue — 7:00pm",
    duration: "60–90 min",
    icon: "💪",
  },
  {
    id: "kids-small",
    title: "Kids 4–7 años",
    level: "Niños",
    description:
      "Clases adaptadas para los más pequeños. Desarrollan coordinación, confianza y valores a través del jiu-jitsu.",
    schedule: "Lun / Mié — 5:30pm",
    duration: "45 min",
    icon: "⭐",
  },
  {
    id: "kids-mid",
    title: "Kids 7–10 años",
    level: "Niños",
    description:
      "Programa estructurado para niños en edad escolar. Técnica, disciplina y compañerismo en un ambiente seguro.",
    schedule: "Lun / Mié — 6:15pm",
    duration: "45 min",
    icon: "🌟",
  },
  {
    id: "kids-teen",
    title: "Kids 10–14 años",
    level: "Adolescentes",
    description:
      "Para preadolescentes y adolescentes. Mayor intensidad técnica y preparación competitiva si lo desean.",
    schedule: "Mar / Jue / Vie — 5:30pm",
    duration: "90 min",
    icon: "🏆",
  },
  {
    id: "openmat",
    title: "Open Mat",
    level: "Todos los niveles",
    description:
      "Rueda libre supervisada. Practica con compañeros de todos los niveles en un ambiente relajado.",
    schedule: "Vie — 9:30am y 7:00pm",
    duration: "60–90 min",
    icon: "🤼",
  },
];
