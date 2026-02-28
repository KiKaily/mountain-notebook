import HeroSection from "@/components/HeroSection";
import SecondSection from "@/components/SecondSection";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
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
