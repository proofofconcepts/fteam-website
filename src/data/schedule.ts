export interface ScheduleEntry {
  day: string;
  time: string;
  className: string;
  instructor: string;
  duration: string;
}

export interface LegendItem {
  icon: string;
  label: string;
  description: string;
}

export const SCHEDULE: ScheduleEntry[] = [
  // Lunes
  { day: "Lunes", time: "9:30am", className: "Kimono", instructor: "Instructor", duration: "60 min" },
  { day: "Lunes", time: "10:30am", className: "Sin Kimono (NOGI)", instructor: "Instructor", duration: "60 min" },
  { day: "Lunes", time: "5:15pm", className: "Infantil 4 a 7 años", instructor: "Instructor", duration: "45 min" },
  { day: "Lunes", time: "6:00pm", className: "Infantil 7 a 10 años", instructor: "Instructor", duration: "45 min" },
  { day: "Lunes", time: "7:00pm", className: "Kimono", instructor: "Instructor", duration: "60 min" },
  { day: "Lunes", time: "8:00pm", className: "Clase Básica", instructor: "Instructor", duration: "60 min" },
  // Martes
  { day: "Martes", time: "9:30am", className: "Kimono", instructor: "Instructor", duration: "60 min" },
  { day: "Martes", time: "5:15pm", className: "Infantil 10 a 14 años", instructor: "Instructor", duration: "45 min" },
  { day: "Martes", time: "6:00pm", className: "Clase Básica", instructor: "Instructor", duration: "60 min" },
  { day: "Martes", time: "7:00pm", className: "Kimono", instructor: "Instructor", duration: "60 min" },
  { day: "Martes", time: "8:00pm", className: "Sin Kimono (NOGI)", instructor: "Instructor", duration: "60 min" },
  // Miércoles
  { day: "Miércoles", time: "9:30am", className: "Kimono", instructor: "Instructor", duration: "60 min" },
  { day: "Miércoles", time: "10:30am", className: "Sin Kimono (NOGI)", instructor: "Instructor", duration: "60 min" },
  { day: "Miércoles", time: "5:15pm", className: "Infantil 4 a 7 años", instructor: "Instructor", duration: "45 min" },
  { day: "Miércoles", time: "6:00pm", className: "Infantil 7 a 10 años", instructor: "Instructor", duration: "45 min" },
  { day: "Miércoles", time: "7:00pm", className: "Kimono", instructor: "Instructor", duration: "60 min" },
  { day: "Miércoles", time: "8:00pm", className: "Clase Básica", instructor: "Instructor", duration: "60 min" },
  // Jueves
  { day: "Jueves", time: "9:30am", className: "Kimono", instructor: "Instructor", duration: "60 min" },
  { day: "Jueves", time: "5:15pm", className: "Infantil 10 a 14 años", instructor: "Instructor", duration: "45 min" },
  { day: "Jueves", time: "6:00pm", className: "Infantil 7 a 14 años", instructor: "Instructor", duration: "45 min" },
  { day: "Jueves", time: "7:00pm", className: "Kimono", instructor: "Instructor", duration: "60 min" },
  { day: "Jueves", time: "8:00pm", className: "Sin Kimono (NOGI)", instructor: "Instructor", duration: "60 min" },
  // Viernes
  { day: "Viernes", time: "6:00pm", className: "Clase Básica", instructor: "Instructor", duration: "60 min" },
  { day: "Viernes", time: "7:00pm", className: "Open Mat", instructor: "Instructor", duration: "90 min" },
  // Sábado
  { day: "Sábado", time: "9:30am", className: "Open Mat", instructor: "Instructor", duration: "90 min" },
];

export const SCHEDULE_LEGEND: LegendItem[] = [
  { icon: "🥋", label: "Kimono", description: "Clase con kimono" },
  { icon: "💪", label: "Sin Kimono (NOGI)", description: "Clase sin kimono" },
  { icon: "📖", label: "Clase Básica", description: "Fundamentos y técnicas para todas las edades" },
  { icon: "🧒", label: "Infantil", description: "Clases por rango de edad" },
  { icon: "🤼", label: "Open Mat", description: "Entrenamiento libre" },
];

export const DAYS = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

export const TIMES = ["9:30am", "10:30am", "5:15pm", "6:00pm", "7:00pm", "8:00pm"];
