export interface FaqEntry {
  id: string;
  question: string;
  answer: string;
}

export const FAQ: FaqEntry[] = [
  {
    id: "faq-1",
    question: "Do I need any experience to start?",
    answer:
      "Absolutely not. Our Beginner BJJ programme is designed specifically for people with zero experience. You'll start with the fundamentals alongside other beginners in a safe, supportive environment.",
  },
  {
    id: "faq-2",
    question: "What should I wear to my first class?",
    answer:
      "For your first session, comfortable sportswear (shorts and a t-shirt or rash guard) is perfect. If you decide to continue, we'll advise you on getting your first gi. We have loaners available for trials.",
  },
  {
    id: "faq-3",
    question: "How do I book a free trial class?",
    answer:
      "Simply fill in the contact form below or send us an email at teamfmbjj@gmail.com. We'll get back to you within 24 hours to confirm a time that works for you.",
  },
  {
    id: "faq-4",
    question: "Is BJJ safe?",
    answer:
      "BJJ is one of the safest martial arts when practised correctly. We emphasise technique and controlled training over strength and aggression. Beginners always train with experienced partners who ensure a safe experience.",
  },
  {
    id: "faq-5",
    question: "How long does it take to get a blue belt?",
    answer:
      "It varies per person but typically 1–2 years of consistent training. Belts in BJJ are earned through dedication and real skill — not just time. The journey itself is the reward.",
  },
  {
    id: "faq-6",
    question: "Do you offer membership options?",
    answer:
      "Yes. We offer monthly memberships, class packs, and family discounts. Contact us for current pricing — we're happy to find a plan that works for your schedule and budget.",
  },
];
