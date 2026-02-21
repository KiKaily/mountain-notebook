import HeroSection from "@/components/HeroSection";
import SecondSection from "@/components/SecondSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="h-screen overflow-y-scroll snap-y snap-mandatory">
      <HeroSection />
      <SecondSection />
      <Footer />
    </main>
  );
};

export default Index;
