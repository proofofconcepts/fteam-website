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
    name: "Ciarán M.",
    rating: 5,
    text: "Started with zero experience and the coaches made me feel completely welcome from day one. The beginner programme is structured brilliantly. Best decision I've made.",
    memberSince: "Member since 2022",
  },
  {
    id: "t2",
    name: "Sarah K.",
    rating: 5,
    text: "Team FM has the best community of any gym I've trained at. Everyone helps each other improve. The No-Gi classes are incredible and the level of coaching is world-class.",
    memberSince: "Member since 2021",
  },
  {
    id: "t3",
    name: "Liam O'B.",
    rating: 5,
    text: "My son has been doing the kids classes for a year and the transformation in his confidence and discipline has been unreal. The kids instructor is fantastic with them.",
    memberSince: "Parent, member since 2023",
  },
  {
    id: "t4",
    name: "Aoife R.",
    rating: 5,
    text: "I was nervous about trying BJJ as a woman but Team FM is incredibly welcoming and inclusive. The technique focus means anyone can succeed regardless of size or strength.",
    memberSince: "Member since 2022",
  },
];
