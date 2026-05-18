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
    name: "Instructor Principal",
    role: "Instructor Principal y Fundador",
    beltRank: "Cinturón Negro",
    bio: "Con más de 20 años de experiencia en jiu-jitsu brasileño, nuestro instructor principal aporta una técnica de alto nivel y una pasión por la enseñanza en cada clase. Formado junto a algunos de los mejores del deporte.",
    achievements: [
      "Cinturón Negro — más de 20 años de experiencia",
      "Múltiple campeón nacional",
      "Competidor IBJJF",
    ],
    imageSrc: "/images/instructor_1.jpg",
    imageAlt: "Instructor Principal",
  },
  {
    id: "instructor-2",
    name: "Instructor Asistente",
    role: "Entrenador de No-Gi y Competición",
    beltRank: "Cinturón Marrón",
    bio: "Especializado en grappling No-Gi y preparación para competición. Competidor activo que lleva el conocimiento actualizado de la competición directamente al tatami.",
    achievements: [
      "Cinturón Marrón",
      "Campeón nacional de No-Gi",
      "Clasificado para ADCC",
    ],
    imageSrc: "/images/instructor_2.jpg",
    imageAlt: "Instructor Asistente",
  },
  {
    id: "instructor-3",
    name: "Instructor Juvenil",
    role: "Entrenador de Programa Juvenil",
    beltRank: "Cinturón Morado",
    bio: "Dedicado a formar a la próxima generación de practicantes de jiu-jitsu. Crea un ambiente divertido, seguro y estructurado donde los niños pueden crecer dentro y fuera del tatami.",
    achievements: [
      "Cinturón Morado",
      "Entrenador de deporte juvenil certificado",
      "Más de 5 años entrenando niños",
    ],
    imageSrc: "/images/instructor_3.jpg",
    imageAlt: "Instructor Juvenil",
  },
];
