import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import HeroSection from "@/components/HeroSection";
import SecondSection from "@/components/SecondSection";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo === 'footer') {
      // Scroll to the ContactSection which contains the footer
      const contactSection = document.querySelector('[data-section="contact"]');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.state]);

  return (
    <main className="h-screen overflow-y-scroll md:snap-y md:snap-mandatory">
      <HeroSection />
      <SecondSection />
      <TeamSection />
      <ContactSection />
    </main>
  );
};

export default Index;
