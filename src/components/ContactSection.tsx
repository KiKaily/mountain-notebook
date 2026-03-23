import { useState } from "react";
import ScrollDownArrow from "./ScrollDownArrow";
import { useIsMobile } from "@/hooks/use-mobile";
import { useTranslation } from "react-i18next";

const ContactSection = () => {
  const { t } = useTranslation();
  const isMobile = useIsMobile();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT || "";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // If a Formspree endpoint is configured, POST the form from the site.
    if (FORMSPREE_ENDPOINT) {
      try {
        setSending(true);
        const response = await fetch(FORMSPREE_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
          }),
        });

        if (response.ok) {
          setSuccess(true);
          setFormData({ name: "", email: "", message: "" });
        } else {
          // fallback to mailto if the endpoint fails
          const subject = encodeURIComponent(`Contact from ${formData.name || "Website"}`);
          const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`);
          window.location.href = `mailto:info@projectelallavor.com?subject=${subject}&body=${body}`;
        }
      } catch (err) {
        const subject = encodeURIComponent(`Contact from ${formData.name || "Website"}`);
        const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`);
        window.location.href = `mailto:info@projectelallavor.com?subject=${subject}&body=${body}`;
      } finally {
        setSending(false);
        setTimeout(() => setSuccess(false), 4000);
      }
    } else {
      // No endpoint configured — fallback to mailto behavior
      const subject = encodeURIComponent(`Contact from ${formData.name || "Website"}`);
      const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`);
      window.location.href = `mailto:info@projectelallavor.com?subject=${subject}&body=${body}`;
      setTimeout(() => {
        setFormData({ name: "", email: "", message: "" });
      }, 3000);
    }
  };

  return (
    <section id="contact-section" data-section="contact" className="relative min-h-screen md:h-screen w-full md:snap-start flex flex-col md:flex-row overflow-hidden pb-16">
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
            {t('contact.title')}
          </h2>

          <p className="text-sm md:text-base font-sans leading-loose text-foreground opacity-80 max-w-xs">
            {t('contact.description')}
          </p>

          <form onSubmit={handleSubmit} className="space-y-4 mt-8">
            <div>
              <label className="text-xs font-sans tracking-widest uppercase text-foreground opacity-60">
                {t('contact.form.name')}
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full mt-1 px-3 py-2 bg-transparent border border-gray-500 text-foreground placeholder-foreground/40 focus:outline-none"
              />
            </div>

            <div>
              <label className="text-xs font-sans tracking-widest uppercase text-foreground opacity-60">
                {t('contact.form.email')}
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full mt-1 px-3 py-2 bg-transparent border border-gray-500 text-foreground placeholder-foreground/40 focus:outline-none"
              />
            </div>

            <div>
              <label className="text-xs font-sans tracking-widest uppercase text-foreground opacity-60">
                {t('contact.form.message')}
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full mt-1 px-3 py-2 bg-transparent border border-gray-500 text-foreground placeholder-foreground/40 focus:outline-none resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={sending}
              aria-busy={sending}
              className="mt-4 px-6 py-2 bg-primary text-primary-foreground font-serif tracking-wide hover:opacity-90 transition-opacity disabled:opacity-60"
            >
              {success ? t('contact.form.sent') : sending ? t('contact.form.sending') : t('contact.form.send')}
            </button>
          </form>

          <div className="w-12 h-[1px] bg-foreground opacity-15 mt-6" />
        </div>

        {/* Decorative notes removed */}
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
              {t('contact.info.email')}
            </p>
            <p className="text-base md:text-lg font-serif text-foreground opacity-90 mt-2">
              <a href="mailto:info@projectelallavor.com" className="underline hover:opacity-90">info@projectelallavor.com</a>
            </p>
          </div>

          <div>
            <p className="text-xs font-sans text-foreground opacity-50 uppercase tracking-[0.2em]">
              {t('contact.info.location')}
            </p>
            <p className="text-base md:text-lg font-serif text-foreground opacity-90 mt-2">
              <a href="https://maps.app.goo.gl/ExweY2uko9SgWDyt7" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-90">Sant Esteve de Palautordera, Montseny</a>
            </p>
          </div>

          <div>
            <p className="text-xs font-sans text-foreground opacity-50 uppercase tracking-[0.2em]">
              {t('contact.info.phone')}
            </p>
            <p className="text-base md:text-lg font-serif text-foreground opacity-90 mt-2">
              <a href="tel:+34666009107" className="underline hover:opacity-90">+34 666 00 91 07</a>
            </p>
          </div>

          <div className="w-12 h-[1px] bg-foreground opacity-15 mt-12" />

          <p className="text-xs md:text-sm font-sans leading-relaxed text-foreground opacity-60 max-w-xs">
            {t('contact.info.footer')}
          </p>
        </div>

        {/* Decorative notes removed */}
      </div>


      {/* footer legal */}
      <footer className="absolute bottom-4 w-full text-center text-xs font-sans text-foreground opacity-60">
        <p>
          <a href="/privacy" className="underline">{t('footer.links.privacy')}</a> &middot; <a href="/cookies" className="underline">{t('footer.links.cookies')}</a> &middot; <a href="/legal" className="underline">{t('footer.links.legal')}</a>
        </p>
      </footer>
      {/* No arrow in last section */}
    </section>
  );
};

export default ContactSection;
