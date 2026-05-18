export interface FaqEntry {
  id: string;
  question: string;
  answer: string;
}

export const FAQ: FaqEntry[] = [
  {
    id: "faq-1",
    question: "¿Necesito experiencia previa para empezar?",
    answer:
      "En absoluto. Nuestras clases de iniciación están diseñadas específicamente para personas sin ninguna experiencia. Empezarás con los fundamentos junto a otros principiantes en un entorno seguro y de apoyo.",
  },
  {
    id: "faq-2",
    question: "¿Qué debo llevar a mi primera clase?",
    answer:
      "Para tu primera sesión, ropa deportiva cómoda (pantalón corto y camiseta o rashguard) es perfecta. Si decides continuar, te asesoraremos sobre cómo conseguir tu primer kimono. Tenemos kimonos de préstamo disponibles para las pruebas.",
  },
  {
    id: "faq-3",
    question: "¿Cómo reservo una clase de prueba gratuita?",
    answer:
      "Simplemente rellena el formulario de contacto a continuación o envíanos un email a bjjmislata@gmail.com. Te responderemos en 24 horas para confirmar un horario que te venga bien.",
  },
  {
    id: "faq-4",
    question: "¿Es seguro el BJJ?",
    answer:
      "El BJJ es una de las artes marciales más seguras cuando se practica correctamente. Hacemos hincapié en la técnica y el entrenamiento controlado por encima de la fuerza y la agresividad. Los principiantes siempre entrenan con compañeros experimentados que garantizan una experiencia segura.",
  },
  {
    id: "faq-5",
    question: "¿Cuánto tiempo se tarda en conseguir el cinturón azul?",
    answer:
      "Varía según la persona, pero normalmente entre 1 y 2 años de entrenamiento constante. Los cinturones en BJJ se ganan con dedicación y habilidad real, no solo con el tiempo. El camino en sí mismo es la recompensa.",
  },
  {
    id: "faq-6",
    question: "¿Ofrecéis opciones de membresía?",
    answer:
      "Sí. Ofrecemos membresías mensuales, bonos de clases y descuentos familiares. Contáctanos para conocer los precios actuales — estaremos encantados de encontrar un plan que se adapte a tu horario y presupuesto.",
  },
];
