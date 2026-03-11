import HeroSection from "@/components/HeroSection";
import SecondSection from "@/components/SecondSection";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Index = () => {
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
