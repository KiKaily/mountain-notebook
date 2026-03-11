import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="min-h-screen md:h-screen w-full md:snap-start flex flex-col justify-end bg-card relative">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="flex-1 flex items-center px-8 md:px-16 py-12">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          {/* Left text block */}
          <div className="space-y-6">
            <div className="w-24 h-[1px] bg-foreground opacity-30" />
            <p className="text-sm md:text-base font-sans leading-loose text-foreground opacity-80 max-w-xs">
              {t('footer.text1')}
            </p>
            <p className="text-sm md:text-base font-sans leading-loose text-foreground opacity-70 max-w-[260px] rotate-[0.3deg]">
              {t('footer.text2')}
            </p>
            <p className="text-xs font-sans leading-loose text-foreground opacity-50 max-w-[240px] rotate-[-0.5deg]">
              {t('footer.text3')}
            </p>
            <div className="w-12 h-[1px] bg-foreground opacity-15" />
          </div>

          {/* Right text block */}
          <div className="space-y-6 md:mt-16">
            <div className="w-16 h-[1px] bg-foreground opacity-20" />
            <p className="text-sm md:text-base font-sans leading-loose text-foreground opacity-75 max-w-[280px]">
              {t('footer.text4')}
            </p>
            <p className="text-sm md:text-base font-sans leading-loose text-foreground opacity-60 max-w-[250px] rotate-[0.6deg]">
              {t('footer.text5')}
            </p>
            <p className="text-xs font-sans leading-loose text-foreground opacity-40 max-w-[220px] rotate-[-0.4deg]">
              {t('footer.text6')}
            </p>
            <div className="w-10 h-[1px] bg-foreground opacity-10" />
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t border-border px-8 md:px-16 py-8">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-1">
            <p className="text-xs font-sans text-foreground opacity-50 uppercase tracking-[0.2em]">
              {t('footer.contact.email')}
            </p>
            <p className="text-sm font-serif text-foreground opacity-80">
              infolallavor@protonmail.com
            </p>
          </div>

          <div className="space-y-1">
            <p className="text-xs font-sans text-foreground opacity-50 uppercase tracking-[0.2em]">
              {t('footer.contact.location')}
            </p>
            <p className="text-sm font-serif text-foreground opacity-80">
              Sant Esteve de Palautordera, Montseny
            </p>
          </div>

          <div className="space-y-1">
            <p className="text-xs font-sans text-foreground opacity-50 uppercase tracking-[0.2em]">
              {t('footer.contact.phone')}
            </p>
            <p className="text-sm font-serif text-foreground opacity-80">
              +34 666 00 91 07
            </p>
          </div>
        </div>
      </div>
      {/* legal / policy links */}
      <div className="relative z-10 border-t border-border px-8 md:px-16 py-4">
        <div className="max-w-4xl mx-auto flex flex-wrap gap-4 text-xs text-foreground opacity-60">
          <a href="/privacy" className="underline hover:opacity-80">
            {t('footer.links.privacy')}
          </a>
          <a href="/legal" className="underline hover:opacity-80">
            {t('footer.links.legal')}
          </a>
          <a href="/cookies" className="underline hover:opacity-80">
            {t('footer.links.cookies')}
          </a>
          <a href="/terms" className="underline hover:opacity-80">
            {t('footer.links.terms')}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
