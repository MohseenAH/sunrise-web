import Navbar from "@/components/Navbar";
import AudienceSection from "@/components/sections/AudienceSection";
import CoursesSection from "@/components/sections/CoursesSection";
import Hero from "@/components/sections/Hero";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import WhyChooseSection from "@/components/sections/WhyChooseSection";
import PricingTimingSection from "@/components/sections/PricingTimingSection"
import ContactSection from "@/components/sections/ContactSection";
import FAQSection from "@/components/sections/FAQSection";
import Footer from "@/components/sections/Footer";
import FloatingButtons from "@/components/FloatingButtons";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <AudienceSection/>
    <CoursesSection/>
    <WhyChooseSection/>
    <TestimonialsSection/>
    <PricingTimingSection/>
    <ContactSection/>
    <FAQSection/>
    <Footer/>
    <FloatingButtons/>
    </>
  );
}