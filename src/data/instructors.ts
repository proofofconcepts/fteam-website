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
  {
    id: "instructor-4",
    name: "Nahuel Mata Lopez",
    role: "Instructor de Niños",
    beltRank: "Cinturón Azul",
    bio: "Especializado en la enseñanza del jiu-jitsu para todas las categorías de niños, con pasión por crear un ambiente seguro, divertido y estructurado. Con más de 5 años de experiencia, desarrolla en los más pequeños coordinación, disciplina y confianza a través del arte marcial.",
    achievements: [
      "Cinturón Azul",
      "Más de 5 años entrenando categorías kids",
      "Experto en progresión técnica por edades",
    ],
    imageSrc: "/images/instructor_4.jpg",
    imageAlt: "Nahuel Mata Lopez — Instructor de Niños, Cinturón Azul",
  },
  {
    id: "instructor-5",
    name: "Rosario di Dio",
    role: "Instructor de NoGI",
    beltRank: "Cinturón Azul",
    bio: "Especialista en grappling sin kimono con dominio en takedowns, leg locks y scrambles dinámicos. Su enfoque técnico en NoGI combina potencia y precisión, haciendo que las clases sean desafiantes e instructivas para todos los niveles.",
    achievements: [
      "Cinturón Azul",
      "Competidor de NoGI a nivel nacional",
      "Especialista en técnicas de piernas y takedowns",
    ],
    imageSrc: "/images/instructor_5.jpg",
    imageAlt: "Rosario di Dio — Instructor de NoGI, Cinturón Azul",
  },
  {
    id: "instructor-6",
    name: "Esteban Vallejo",
    role: "Instructor de Clase Básica",
    beltRank: "Cinturón Azul",
    bio: "Dedicado a enseñar los fundamentos del jiu-jitsu brasileño de forma clara y progresiva. Su paciencia y capacidad pedagógica hacen que técnicas complejas sean accesibles para estudiantes de todas las edades y niveles, construyendo bases sólidas para futuros aprendizajes.",
    achievements: [
      "Cinturón Azul",
      "Certificado en enseñanza de fundamentos",
      "Más de 3 años en docencia de técnica básica",
    ],
    imageSrc: "/images/instructor_6.jpg",
    imageAlt: "Esteban Vallejo — Instructor de Clase Básica, Cinturón Azul",
  },
];
