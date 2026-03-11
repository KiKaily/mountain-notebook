import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Cookies = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <section className="min-h-screen w-full flex flex-col bg-card relative overflow-hidden px-8 md:px-16 py-20">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => navigate("/")}
          className="text-sm font-sans text-primary underline hover:opacity-80 mb-8 inline-block"
        >
          ← {t('nav.backToHome')}
        </button>

        <h1 className="text-3xl md:text-4xl font-serif text-foreground leading-tight mb-8">
          {t('cookies.title')}
        </h1>

        <div className="space-y-6 text-foreground opacity-80 leading-relaxed">
          <p>
            {t('cookies.content.intro')}
          </p>

          <h2 className="text-2xl font-serif text-foreground mt-8 mb-4">{t('cookies.sections.what')}</h2>
          <p>
            {t('cookies.content.what')}
          </p>

          <h2 className="text-2xl font-serif text-foreground mt-8 mb-4">{t('cookies.sections.types')}</h2>
          <p>
            {t('cookies.content.types')}
          </p>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li><strong>{t('cookies.content.essential')}</strong> {t('cookies.content.essentialDesc')}</li>
            <li><strong>{t('cookies.content.analytics')}</strong> {t('cookies.content.analyticsDesc')}</li>
            <li><strong>{t('cookies.content.functional')}</strong> {t('cookies.content.functionalDesc')}</li>
          </ul>

          <h2 className="text-2xl font-serif text-foreground mt-8 mb-4">{t('cookies.sections.manage')}</h2>
          <p>
            {t('cookies.content.manage')}
          </p>

          <h2 className="text-2xl font-serif text-foreground mt-8 mb-4">{t('cookies.sections.contact')}</h2>
          <p>
            {t('cookies.content.contact')}
          </p>

          <p className="text-sm opacity-60 mt-8">
            {t('cookies.content.lastUpdate')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Cookies;