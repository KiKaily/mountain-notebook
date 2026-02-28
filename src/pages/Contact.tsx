import ContactSection from "@/components/ContactSection";

const ContactPage = () => {
  return (
    <main className="h-screen overflow-y-scroll md:snap-y md:snap-mandatory">
      <ContactSection />
      {/* ContactSection already includes legal footer */}
    </main>
  );
};

export default ContactPage;
