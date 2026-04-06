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
    name: "Head Instructor",
    role: "Head Instructor & Founder",
    beltRank: "Black Belt",
    bio: "With over 20 years of Brazilian Jiu-Jitsu experience, our head instructor brings world-class technique and a passion for teaching to every class. Trained under some of the best in the sport.",
    achievements: [
      "Black Belt — 20+ years experience",
      "Multiple national champion",
      "IBJJF competitor",
    ],
    imageSrc: "/images/instructor_1.jpg",
    imageAlt: "Head Instructor",
  },
  {
    id: "instructor-2",
    name: "Assistant Instructor",
    role: "No-Gi & Competition Coach",
    beltRank: "Brown Belt",
    bio: "Specialising in No-Gi grappling and competition preparation. An active competitor who brings current competition knowledge directly to the mats.",
    achievements: [
      "Brown Belt",
      "National No-Gi champion",
      "Active ADCC qualifier",
    ],
    imageSrc: "/images/instructor_2.jpg",
    imageAlt: "Assistant Instructor",
  },
  {
    id: "instructor-3",
    name: "Kids Instructor",
    role: "Youth Programme Coach",
    beltRank: "Purple Belt",
    bio: "Dedicated to building the next generation of jiu-jitsu practitioners. Creates a fun, safe, and structured environment where kids can thrive on and off the mats.",
    achievements: [
      "Purple Belt",
      "Certified youth sports coach",
      "5+ years coaching kids",
    ],
    imageSrc: "/images/instructor_3.jpg",
    imageAlt: "Kids Programme Instructor",
  },
];
