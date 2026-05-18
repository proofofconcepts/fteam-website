export interface ScheduleEntry {
  day: string;
  time: string;
  className: string;
  instructor: string;
  duration: string;
}

export const SCHEDULE: ScheduleEntry[] = [
  { day: "Lunes", time: "9:30am", className: "No-Gi", instructor: "Instructor", duration: "60 min" },
  { day: "Lunes", time: "5:30pm", className: "Kids 4–7 años", instructor: "Instructor", duration: "45 min" },
  { day: "Lunes", time: "6:15pm", className: "Kids 7–10 años", instructor: "Instructor", duration: "45 min" },
  { day: "Lunes", time: "7:00pm", className: "BJJ Kimono", instructor: "Instructor", duration: "90 min" },
  { day: "Martes", time: "9:30am", className: "BJJ Kimono", instructor: "Instructor", duration: "60 min" },
  { day: "Martes", time: "5:30pm", className: "Kids 10–14 años", instructor: "Instructor", duration: "90 min" },
  { day: "Martes", time: "7:00pm", className: "No-Gi", instructor: "Instructor", duration: "90 min" },
  { day: "Miércoles", time: "9:30am", className: "No-Gi", instructor: "Instructor", duration: "60 min" },
  { day: "Miércoles", time: "5:30pm", className: "Kids 4–7 años", instructor: "Instructor", duration: "45 min" },
  { day: "Miércoles", time: "6:15pm", className: "Kids 7–10 años", instructor: "Instructor", duration: "45 min" },
  { day: "Miércoles", time: "7:00pm", className: "BJJ Kimono", instructor: "Instructor", duration: "90 min" },
  { day: "Jueves", time: "9:30am", className: "BJJ Kimono", instructor: "Instructor", duration: "60 min" },
  { day: "Jueves", time: "5:30pm", className: "Kids 10–14 años", instructor: "Instructor", duration: "90 min" },
  { day: "Jueves", time: "7:00pm", className: "No-Gi", instructor: "Instructor", duration: "90 min" },
  { day: "Viernes", time: "9:30am", className: "Open Mat", instructor: "Instructor", duration: "60 min" },
  { day: "Viernes", time: "5:30pm", className: "Kids 10–14 años", instructor: "Instructor", duration: "90 min" },
  { day: "Viernes", time: "7:00pm", className: "Open Mat", instructor: "Instructor", duration: "90 min" },
];
