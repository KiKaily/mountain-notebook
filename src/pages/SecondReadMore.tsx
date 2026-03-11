import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const SecondReadMore = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleBack = () => {
    navigate("/#second-section");
  };

  return (
    <section className="min-h-screen w-full flex flex-col bg-card relative overflow-hidden px-8 md:px-16 py-20">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-3xl mx-auto relative z-10">
        <button
          onClick={handleBack}
          className="text-sm font-sans text-primary underline hover:opacity-80 mb-8 inline-block"
        >
          ← {t('second.backToSection')}
        </button>

        <div className="w-24 h-[1px] bg-foreground opacity-30 mb-6" />

        <h1 className="text-3xl md:text-4xl font-serif text-foreground leading-tight mb-8">
          {t('second.readMoreTitle')}
        </h1>

        <div className="space-y-6 text-sm md:text-base font-sans leading-loose text-foreground opacity-80">
          <p>{t('second.readMoreIntro')}</p>
          <p>{t('second.readMoreP1')}</p>
          <p>{t('second.readMoreP2')}</p>
          <p>{t('second.readMoreP3')}</p>
        </div>

        <div className="w-16 h-[1px] bg-foreground opacity-20 mt-10" />
      </div>
    </section>
  );
};

export default SecondReadMore;
