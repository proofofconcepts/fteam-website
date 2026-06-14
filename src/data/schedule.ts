export interface ScheduleEntry {
  day: string;
  time: string;
  className: string;
  instructor: string;
  duration: string;
}

export const SCHEDULE: ScheduleEntry[] = [
  // Lunes
  { day: "Lunes", time: "6:15pm", className: "Niños 7–12 años", instructor: "Instructor", duration: "45 min" },
  { day: "Lunes", time: "7:00pm", className: "No-Gi", instructor: "Instructor", duration: "60 min" },
  // Martes
  { day: "Martes", time: "9:30am", className: "BJJ Kimono", instructor: "Instructor", duration: "60 min" },
  { day: "Martes", time: "6:00pm", className: "Kimono Básico", instructor: "Instructor", duration: "60 min" },
  { day: "Martes", time: "7:00pm", className: "BJJ Kimono", instructor: "Instructor", duration: "60 min" },
  // Miércoles
  { day: "Miércoles", time: "6:15pm", className: "Niños 7–12 años", instructor: "Instructor", duration: "45 min" },
  { day: "Miércoles", time: "7:00pm", className: "No-Gi", instructor: "Instructor", duration: "60 min" },
  // Jueves
  { day: "Jueves", time: "9:30am", className: "BJJ Kimono", instructor: "Instructor", duration: "60 min" },
  { day: "Jueves", time: "6:15pm", className: "Niños 7–12 años", instructor: "Instructor", duration: "45 min" },
  { day: "Jueves", time: "7:00pm", className: "BJJ Kimono", instructor: "Instructor", duration: "60 min" },
  { day: "Jueves", time: "7:00pm", className: "Open Mat", instructor: "Instructor", duration: "90 min" },
  // Viernes
  { day: "Viernes", time: "6:00pm", className: "Kimono Básico", instructor: "Instructor", duration: "60 min" },
  // Sábado
  { day: "Sábado", time: "9:30am", className: "Open Mat", instructor: "Instructor", duration: "90 min" },
];
