export interface ScheduleEntry {
  day: string;
  time: string;
  className: string;
  instructor: string;
  duration: string;
}

export const SCHEDULE: ScheduleEntry[] = [
  { day: "Monday", time: "6:00pm", className: "Beginner BJJ", instructor: "Head Instructor", duration: "60 min" },
  { day: "Tuesday", time: "7:00pm", className: "Advanced BJJ", instructor: "Head Instructor", duration: "90 min" },
  { day: "Wednesday", time: "6:00pm", className: "Beginner BJJ", instructor: "Head Instructor", duration: "60 min" },
  { day: "Wednesday", time: "8:00pm", className: "No-Gi Grappling", instructor: "Assistant Instructor", duration: "75 min" },
  { day: "Thursday", time: "7:00pm", className: "Advanced BJJ", instructor: "Head Instructor", duration: "90 min" },
  { day: "Friday", time: "6:00pm", className: "Beginner BJJ", instructor: "Head Instructor", duration: "60 min" },
  { day: "Saturday", time: "10:00am", className: "Kids BJJ", instructor: "Kids Instructor", duration: "45 min" },
  { day: "Saturday", time: "8:00pm", className: "No-Gi Grappling", instructor: "Assistant Instructor", duration: "75 min" },
];
