import { describe, it, expect } from "vitest";
import { SCHEDULE, type ScheduleEntry } from "@/data/schedule";

const VALID_DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const TIME_REGEX = /^\d{1,2}:\d{2}(am|pm)$/;

describe("SCHEDULE data", () => {
  describe("structure", () => {
    it("is a non-empty array", () => {
      expect(Array.isArray(SCHEDULE)).toBe(true);
      expect(SCHEDULE.length).toBeGreaterThan(0);
    });

    it("every entry has all required fields", () => {
      for (const entry of SCHEDULE) {
        expect(entry).toHaveProperty("day");
        expect(entry).toHaveProperty("time");
        expect(entry).toHaveProperty("className");
        expect(entry).toHaveProperty("instructor");
        expect(entry).toHaveProperty("duration");
      }
    });

    it("every field is a non-empty string", () => {
      for (const entry of SCHEDULE) {
        expect(typeof entry.day).toBe("string");
        expect(entry.day.trim()).not.toBe("");

        expect(typeof entry.time).toBe("string");
        expect(entry.time.trim()).not.toBe("");

        expect(typeof entry.className).toBe("string");
        expect(entry.className.trim()).not.toBe("");

        expect(typeof entry.instructor).toBe("string");
        expect(entry.instructor.trim()).not.toBe("");

        expect(typeof entry.duration).toBe("string");
        expect(entry.duration.trim()).not.toBe("");
      }
    });
  });

  describe("field values", () => {
    it("every entry has a valid day of the week", () => {
      for (const entry of SCHEDULE) {
        expect(VALID_DAYS).toContain(entry.day);
      }
    });

    it("every entry has a valid 12-hour time format (e.g. 6:00pm, 10:00am)", () => {
      for (const entry of SCHEDULE) {
        expect(entry.time).toMatch(TIME_REGEX);
      }
    });

    it("every entry duration includes a numeric minute value", () => {
      for (const entry of SCHEDULE) {
        expect(entry.duration).toMatch(/\d+\s*min/);
      }
    });
  });

  describe("data integrity", () => {
    it("contains no duplicate entries (same day + time)", () => {
      const keys = SCHEDULE.map((e) => `${e.day}|${e.time}`);
      const unique = new Set(keys);
      expect(unique.size).toBe(keys.length);
    });

    it("entries are grouped or ordered by day", () => {
      const daysSeen: string[] = [];
      for (const entry of SCHEDULE) {
        if (!daysSeen.includes(entry.day)) {
          daysSeen.push(entry.day);
        }
      }
      // Each day should appear as a contiguous block — no day should appear
      // after a different day has already started and finished.
      const uniqueDaysInOrder = SCHEDULE.reduce<string[]>((acc, entry) => {
        if (acc[acc.length - 1] !== entry.day) acc.push(entry.day);
        return acc;
      }, []);
      expect(new Set(uniqueDaysInOrder).size).toBe(uniqueDaysInOrder.length);
    });

    it("known classes are present", () => {
      const classNames = SCHEDULE.map((e) => e.className);
      expect(classNames).toContain("Beginner BJJ");
      expect(classNames).toContain("Advanced BJJ");
    });

    it("every instructor name is a non-empty string without leading or trailing whitespace", () => {
      for (const entry of SCHEDULE) {
        expect(entry.instructor).toBe(entry.instructor.trim());
        expect(entry.instructor.length).toBeGreaterThan(0);
      }
    });
  });

  describe("ScheduleEntry type contract", () => {
    it("a manually constructed entry satisfies the interface shape", () => {
      const entry: ScheduleEntry = {
        day: "Monday",
        time: "9:00am",
        className: "Open Mat",
        instructor: "Coach A",
        duration: "60 min",
      };
      expect(entry.day).toBe("Monday");
      expect(entry.time).toBe("9:00am");
      expect(entry.className).toBe("Open Mat");
      expect(entry.instructor).toBe("Coach A");
      expect(entry.duration).toBe("60 min");
    });
  });
});
