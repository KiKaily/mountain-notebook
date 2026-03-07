import { useState } from "react";
import note2 from "@/assets/notes/note-2.svg";
import note5 from "@/assets/notes/note-5.svg";
import note7 from "@/assets/notes/note-7.svg";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to actual backend/email service
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section data-section="contact" className="relative min-h-screen md:h-screen w-full md:snap-start flex flex-col md:flex-row overflow-hidden pb-16">
      {/* Left: Paper/form side */}
      <div className="flex-1 flex flex-col justify-center items-start px-8 md:px-16 py-12 bg-card relative min-h-screen md:min-h-0">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          }}
        />

        <div className="max-w-md relative z-10 space-y-6">
          <div className="w-24 h-[1px] bg-foreground opacity-30 mb-4" />

          <h2 className="text-xl md:text-2xl font-serif leading-relaxed text-foreground">
            Ens agradaria escoltar-te.
          </h2>

          <p className="text-sm md:text-base font-sans leading-loose text-foreground opacity-80 max-w-xs">
            Envïa una missatge i et respondrem quan abans puguem. La correspondent era lent, però més sincera.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4 mt-8">
            <div>
              <label className="text-xs font-sans tracking-widest uppercase text-foreground opacity-60">
                Nom
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full mt-1 px-3 py-2 bg-background border border-border text-foreground placeholder-foreground/40 focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>

            <div>
              <label className="text-xs font-sans tracking-widest uppercase text-foreground opacity-60">
                Correu electrònic
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full mt-1 px-3 py-2 bg-background border border-border text-foreground placeholder-foreground/40 focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>

            <div>
              <label className="text-xs font-sans tracking-widest uppercase text-foreground opacity-60">
                Missatge
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full mt-1 px-3 py-2 bg-background border border-border text-foreground placeholder-foreground/40 focus:outline-none focus:ring-1 focus:ring-primary resize-none"
              />
            </div>

            <button
              type="submit"
              className="mt-4 px-6 py-2 bg-primary text-primary-foreground font-serif tracking-wide hover:opacity-90 transition-opacity"
            >
              {submitted ? "Gràcies!" : "Enviar"}
            </button>
          </form>

          <div className="w-12 h-[1px] bg-foreground opacity-15 mt-6" />
        </div>

        {/* Decorative notes */}
        <img src={note2} alt="" className="pointer-events-none hidden md:block absolute right-8 top-40 w-28 opacity-85" />
        <img src={note5} alt="" className="pointer-events-none hidden lg:block absolute left-20 bottom-24 w-36 opacity-80" />
        <img src={note7} alt="" className="pointer-events-none hidden lg:block absolute right-32 bottom-32 w-40 opacity-75" />
        <img src={note1} alt="" className="pointer-events-none hidden xl:block absolute left-12 top-32 w-26 opacity-70" />
        <img src={note3} alt="" className="pointer-events-none hidden xl:block absolute right-16 bottom-16 w-34 opacity-65" />
      </div>

      {/* Right: Contact info side */}
      <div className="order-1 md:order-2 md:flex-[0_0_40%] h-screen md:h-full relative bg-background flex flex-col justify-center items-start px-8 md:px-12">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          }}
        />

        <div className="space-y-12 relative z-10">
          <div>
            <p className="text-xs font-sans text-foreground opacity-50 uppercase tracking-[0.2em]">
              Correu electrònic
            </p>
            <p className="text-base md:text-lg font-serif text-foreground opacity-90 mt-2">
              teamlallavor@gmail.com
            </p>
          </div>

          <div>
            <p className="text-xs font-sans text-foreground opacity-50 uppercase tracking-[0.2em]">
              Ubicació
            </p>
            <p className="text-base md:text-lg font-serif text-foreground opacity-90 mt-2">
              Sant Esteve de Palautordera, Montseny
            </p>
          </div>

          <div>
            <p className="text-xs font-sans text-foreground opacity-50 uppercase tracking-[0.2em]">
              Telèfon
            </p>
            <p className="text-base md:text-lg font-serif text-foreground opacity-90 mt-2">
              +34 666 00 91 07
            </p>
          </div>

          <div className="w-12 h-[1px] bg-foreground opacity-15 mt-12" />

          <p className="text-xs md:text-sm font-sans leading-relaxed text-foreground opacity-60 max-w-xs">
            Estem obertes per a consultes, visites i col·laboracions. La boira del matí és especialment bona per a converses profundes.
          </p>
        </div>

        {/* Decorative notes */}
        <img src={note2} alt="" className="pointer-events-none hidden md:block absolute right-8 top-40 w-28 opacity-85" />
        <img src={note5} alt="" className="pointer-events-none hidden lg:block absolute left-20 bottom-24 w-36 opacity-80" />
        <img src={note7} alt="" className="pointer-events-none hidden lg:block absolute right-32 bottom-32 w-40 opacity-75" />
        <img src={note4} alt="" className="pointer-events-none hidden xl:block absolute left-32 top-20 w-24 opacity-70" />
        <img src={note6} alt="" className="pointer-events-none hidden xl:block absolute right-24 bottom-12 w-30 opacity-65" />
      </div>


      {/* footer legal */}
      <footer className="absolute bottom-4 w-full text-center text-xs font-sans text-foreground opacity-60">
        <p>
          <a href="/privacy" className="underline">Privacitat</a> &middot; <a href="/cookies" className="underline">Política de cookies</a> &middot; <a href="/legal" className="underline">Avis legal</a>
        </p>
      </footer>
    </section>
  );
};

export default ContactSection;
