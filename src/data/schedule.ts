// ── Legacy flat list (kept for backward compatibility) ──────────────────────

export interface ScheduleEntry {
  day: string;
  time: string;
  className: string;
  instructor: string;
  duration: string;
}

export const SCHEDULE: ScheduleEntry[] = [
  { day: "Monday",    time: "7:00pm",  className: "Beginner BJJ",     instructor: "Head Instructor",      duration: "90 min" },
  { day: "Tuesday",   time: "5:00pm",  className: "Kids BJJ",          instructor: "Kids Instructor",      duration: "60 min" },
  { day: "Tuesday",   time: "6:00pm",  className: "No-Gi Grappling",   instructor: "Assistant Instructor", duration: "60 min" },
  { day: "Tuesday",   time: "7:00pm",  className: "Advanced BJJ",      instructor: "Head Instructor",      duration: "90 min" },
  { day: "Wednesday", time: "7:00pm",  className: "Beginner BJJ",      instructor: "Head Instructor",      duration: "90 min" },
  { day: "Thursday",  time: "5:00pm",  className: "Kids BJJ",          instructor: "Kids Instructor",      duration: "60 min" },
  { day: "Thursday",  time: "6:00pm",  className: "No-Gi Grappling",   instructor: "Assistant Instructor", duration: "60 min" },
  { day: "Thursday",  time: "7:00pm",  className: "Advanced BJJ",      instructor: "Head Instructor",      duration: "90 min" },
  { day: "Friday",    time: "7:00pm",  className: "Beginner BJJ",      instructor: "Head Instructor",      duration: "90 min" },
  { day: "Saturday",  time: "11:00am", className: "Open Mat",          instructor: "Head Instructor",      duration: "60 min" },
];

// ── Weekly grid schedule ─────────────────────────────────────────────────────

export type ClassType = "kids" | "mixed" | "nogi" | "openmat";

export interface WeeklyClass {
  timeStart: string;
  timeEnd: string;
  name: string;
  type: ClassType;
  capacity: number;
}

export interface DaySchedule {
  day: "Sun" | "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat";
  classes: WeeklyClass[];
}

export const CLASS_STYLES: Record<ClassType, { textColor: string; borderColor: string }> = {
  kids:    { textColor: "text-red-400",   borderColor: "border-l-red-500" },
  mixed:   { textColor: "text-blue-400",  borderColor: "border-l-blue-500" },
  nogi:    { textColor: "text-green-400", borderColor: "border-l-green-500" },
  openmat: { textColor: "text-sky-400",   borderColor: "border-l-sky-500" },
};

export const WEEKLY_SCHEDULE: DaySchedule[] = [
  { day: "Sun", classes: [] },
  {
    day: "Mon",
    classes: [
      { timeStart: "7:00pm", timeEnd: "8:30pm", name: "Mixed Classes", type: "mixed", capacity: 20 },
    ],
  },
  {
    day: "Tue",
    classes: [
      { timeStart: "5:00pm", timeEnd: "6:00pm", name: "Kids Classes",  type: "kids",  capacity: 20 },
      { timeStart: "6:00pm", timeEnd: "7:00pm", name: "No Gi Classes", type: "nogi",  capacity: 20 },
      { timeStart: "7:00pm", timeEnd: "8:30pm", name: "Mixed Classes", type: "mixed", capacity: 20 },
    ],
  },
  {
    day: "Wed",
    classes: [
      { timeStart: "7:00pm", timeEnd: "8:30pm", name: "Mixed Classes", type: "mixed", capacity: 20 },
    ],
  },
  {
    day: "Thu",
    classes: [
      { timeStart: "5:00pm", timeEnd: "6:00pm", name: "Kids Classes",  type: "kids",  capacity: 20 },
      { timeStart: "6:00pm", timeEnd: "7:00pm", name: "No Gi Classes", type: "nogi",  capacity: 20 },
      { timeStart: "7:00pm", timeEnd: "8:30pm", name: "Mixed Classes", type: "mixed", capacity: 20 },
    ],
  },
  {
    day: "Fri",
    classes: [
      { timeStart: "7:00pm", timeEnd: "8:30pm", name: "Mixed Classes", type: "mixed", capacity: 20 },
    ],
  },
  {
    day: "Sat",
    classes: [
      { timeStart: "11:00am", timeEnd: "12:00pm", name: "Open Mat", type: "openmat", capacity: 30 },
    ],
  },
];
