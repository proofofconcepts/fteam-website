"use client";

import { useState } from "react";
import { WEEKLY_SCHEDULE, CLASS_STYLES } from "@/data/schedule";

function getWeekBounds(offsetWeeks: number): { sunday: Date; saturday: Date } {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const sunday = new Date(today);
  sunday.setDate(today.getDate() - today.getDay() + offsetWeeks * 7);
  const saturday = new Date(sunday);
  saturday.setDate(sunday.getDate() + 6);
  return { sunday, saturday };
}

function formatDate(date: Date): string {
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

export default function ScheduleSection() {
  const [weekOffset, setWeekOffset] = useState(0);
  const { sunday, saturday } = getWeekBounds(weekOffset);

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const todayTime = today.getTime();
  const isCurrentWeek = weekOffset === 0;

  return (
    <section id="schedule" className="py-24 px-4 sm:px-6 lg:px-8 bg-brand-black">
      <div className="max-w-7xl mx-auto">

        {/* Section heading */}
        <div className="text-center mb-10">
          <div className="flex justify-center mb-3 text-brand-muted">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-brand-white">
            Schedule
          </h2>
        </div>

        {/* Week navigation bar */}
        <div className="flex items-center gap-3 bg-brand-dark border border-brand-muted-border rounded-t-xl px-5 py-3">
          <button
            onClick={() => setWeekOffset((o) => o - 1)}
            className="text-brand-muted hover:text-brand-white transition-colors text-xl leading-none px-1"
            aria-label="Previous week"
          >
            ‹
          </button>

          <div className="flex items-center gap-2 text-accent-gold font-medium text-sm">
            <span>{formatDate(sunday)} – {formatDate(saturday)}</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-brand-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>

          <button
            onClick={() => setWeekOffset((o) => o + 1)}
            className="text-brand-muted hover:text-brand-white transition-colors text-xl leading-none px-1"
            aria-label="Next week"
          >
            ›
          </button>

          {/* List / Grid toggle */}
          <div className="ml-auto flex border border-brand-muted-border rounded-lg overflow-hidden text-xs font-medium">
            <button className="flex items-center gap-1 px-3 py-1.5 text-brand-muted hover:bg-brand-card transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
              </svg>
              List
            </button>
            <button className="flex items-center gap-1 px-3 py-1.5 bg-brand-white text-brand-black">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
              Grid
            </button>
          </div>
        </div>

        {/* 7-column calendar grid */}
        <div className="overflow-x-auto rounded-b-xl border border-t-0 border-brand-muted-border">
          <div className="grid grid-cols-7 min-w-[700px]">
            {WEEKLY_SCHEDULE.map((dayData, i) => {
              const date = new Date(sunday);
              date.setDate(sunday.getDate() + i);
              const dateTime = date.getTime();
              const isToday = isCurrentWeek && dateTime === todayTime;
              const isPast = isCurrentWeek && dateTime < todayTime;

              return (
                <div
                  key={dayData.day}
                  className={`border-r border-brand-muted-border last:border-r-0 ${isPast ? "opacity-40" : ""}`}
                >
                  {/* Day header */}
                  <div className="text-center py-4 border-b border-brand-muted-border bg-brand-dark">
                    <div
                      className={`text-xl font-bold w-10 h-10 flex items-center justify-center rounded-full mx-auto ${
                        isToday
                          ? "bg-teal-500 text-white"
                          : "text-brand-white"
                      }`}
                    >
                      {date.getDate()}
                    </div>
                    <div
                      className={`text-[10px] font-semibold uppercase tracking-widest mt-1 ${
                        isToday ? "text-teal-400" : "text-brand-muted"
                      }`}
                    >
                      {dayData.day}
                    </div>
                  </div>

                  {/* Class cards */}
                  <div className="p-2 space-y-2 min-h-24 bg-brand-black">
                    {dayData.classes.map((cls, j) => {
                      const styles = CLASS_STYLES[cls.type];
                      return (
                        <div
                          key={j}
                          className={`bg-brand-card rounded-lg p-2 border-l-4 ${styles.borderColor} text-xs shadow-sm`}
                        >
                          <div className="text-brand-muted leading-tight">
                            {cls.timeStart} – {cls.timeEnd}
                          </div>
                          <div className={`font-semibold ${styles.textColor} mt-0.5 leading-tight`}>
                            {cls.name}
                          </div>
                          <div className="mt-1.5">
                            <span className="inline-block bg-blue-600 text-white px-2 py-0.5 rounded-full text-[10px] font-medium">
                              Bookings: 0/{cls.capacity}
                            </span>
                          </div>
                          <a
                            href="#contact"
                            className="mt-2 flex items-center justify-center gap-1 border border-brand-muted-border rounded-md py-1.5 text-brand-muted hover:text-brand-white hover:border-brand-white transition-colors"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            BOOK
                          </a>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <p className="text-center text-brand-muted text-xs mt-6">
          Schedule subject to change. Check our{" "}
          <a
            href="https://www.instagram.com/baraojjcork/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-gold hover:underline"
          >
            Instagram
          </a>{" "}
          for updates.
        </p>
      </div>
    </section>
  );
}
