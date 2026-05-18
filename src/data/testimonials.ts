export interface TestimonialData {
  id: string;
  name: string;
  rating: number;
  text: string;
  memberSince: string;
}

export const TESTIMONIALS: TestimonialData[] = [
  {
    id: "t1",
    name: "Carlos M.",
    rating: 5,
    text: "Empecé sin ninguna experiencia y los entrenadores me hicieron sentir bienvenido desde el primer día. El programa de iniciación está estructurado de forma brillante. La mejor decisión que he tomado.",
    memberSince: "Miembro desde 2023",
  },
  {
    id: "t2",
    name: "María L.",
    rating: 5,
    text: "Barao JiuJitsu tiene la mejor comunidad de cualquier gimnasio en el que he entrenado. Todos se ayudan mutuamente a mejorar. Las clases de No-Gi son increíbles y el nivel de los entrenadores es de primer nivel.",
    memberSince: "Miembro desde 2022",
  },
  {
    id: "t3",
    name: "Javier P.",
    rating: 5,
    text: "Mi hijo lleva un año en las clases de niños y la transformación en su confianza y disciplina ha sido increíble. El instructor juvenil es fantástico con ellos.",
    memberSince: "Padre, miembro desde 2024",
  },
  {
    id: "t4",
    name: "Ana R.",
    rating: 5,
    text: "Tenía dudas sobre probar el BJJ siendo mujer, pero Barao JiuJitsu es increíblemente acogedor e inclusivo. El enfoque técnico significa que cualquiera puede progresar sin importar el tamaño o la fuerza.",
    memberSince: "Miembro desde 2023",
  },
];
