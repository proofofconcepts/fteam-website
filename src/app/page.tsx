import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/sections/hero_section";
import StatsBar from "@/components/sections/stats_bar";
import ClassesSection from "@/components/sections/classes_section";
import ScheduleSection from "@/components/sections/schedule_section";
import InstructorsSection from "@/components/sections/instructors_section";
import TestimonialsSection from "@/components/sections/testimonials_section";
import FaqSection from "@/components/sections/faq_section";
import ContactSection from "@/components/sections/contact_section";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <StatsBar />
        <ClassesSection />
        <ScheduleSection />
        <InstructorsSection />
        <TestimonialsSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
