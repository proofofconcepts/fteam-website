export interface InstructorData {
  id: string;
  name: string;
  role: string;
  beltRank: string;
  bio: string;
  achievements: string[];
  imageSrc: string;
  imageAlt: string;
}

export const INSTRUCTORS: InstructorData[] = [
  {
    id: "instructor-1",
    name: "Luis Felipe Martins",
    role: "Instructor Principal y Fundador",
    beltRank: "Cinturón Negro",
    bio: "Con 25 años de experiencia en academias de jiu-jitsu en España e Irlanda, Felipe ha formado más de 20 cinturones negros. Su trayectoria competitiva a nivel mundial lo avala como uno de los referentes técnicos del BJJ en Valencia.",
    achievements: [
      "Campeón Mundial CBJJO",
      "Campeón Sudamericano",
      "Campeón Brasileño",
      "Campeón Sul-Brasileño IBJJF",
      "Más de 20 cinturones negros formados",
    ],
    imageSrc: "/images/instructor_1.jpg",
    imageAlt: "Luis Felipe Martins — Instructor Principal, Cinturón Negro",
  },
  {
    id: "instructor-2",
    name: "Candida Martins",
    role: "Instructora de Niños",
    beltRank: "Cinturón Azul",
    bio: "Especializada en la enseñanza del jiu-jitsu para niños, con más de 3 años de experiencia en la categoría kids. Crea un ambiente divertido, seguro y estructurado donde los más pequeños aprenden técnica y valores.",
    achievements: [
      "Cinturón Azul",
      "Más de 3 años entrenando categoría kids",
    ],
    imageSrc: "/images/instructor_2.jpg",
    imageAlt: "Candida Martins — Instructora de Niños, Cinturón Azul",
  },
  {
    id: "instructor-3",
    name: "Paco Blasco",
    role: "Instructor de Defensa Personal",
    beltRank: "Cinturón Morado",
    bio: "Especialista en defensa personal y aplicaciones de jiu-jitsu para las fuerzas y cuerpos de seguridad. Combina su experiencia en el tatami con técnicas de defensa policial.",
    achievements: [
      "Cinturón Morado",
      "Especialista en Defensa Policial",
    ],
    imageSrc: "/images/instructor_3.jpg",
    imageAlt: "Paco Blasco — Instructor de Defensa Personal, Cinturón Morado",
  },
];
