import HeroSection from "@/components/HeroSection";
import SecondSection from "@/components/SecondSection";
import ContactSection from "@/components/ContactSection";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="h-screen overflow-y-scroll md:snap-y md:snap-mandatory">
      <HeroSection />
      <SecondSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
