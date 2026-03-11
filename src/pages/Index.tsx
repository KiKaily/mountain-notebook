import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import HeroSection from "@/components/HeroSection";
import SecondSection from "@/components/SecondSection";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Index = () => {
<<<<<<< HEAD
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const targetId = hash.replace("#", "");
    const target = document.getElementById(targetId);
    if (!target) return;

    requestAnimationFrame(() => {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, [hash]);
=======
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
>>>>>>> 79a530b6a5330a8502d2355f97e168b8f12df213

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
