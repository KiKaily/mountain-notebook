import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Privacy = () => {
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
          {t('privacy.title')}
        </h1>

        <div className="space-y-6 text-foreground opacity-80 leading-relaxed">
          <p>
            {t('privacy.content.intro')}
          </p>

          <h2 className="text-2xl font-serif text-foreground mt-8 mb-4">{t('privacy.sections.info')}</h2>
          <p>
            <strong>{t('privacy.content.info1')}</strong> {t('privacy.content.info2')}
          </p>
          <p>
            <strong>{t('privacy.content.cookies')}</strong> {t('privacy.content.cookiesText')}
          </p>

          <h2 className="text-2xl font-serif text-foreground mt-8 mb-4">{t('privacy.sections.usage')}</h2>
          <p>
            {t('privacy.content.usage')}
          </p>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li>{t('privacy.content.usage1')}</li>
            <li>{t('privacy.content.usage2')}</li>
            <li>{t('privacy.content.usage3')}</li>
          </ul>

          <h2 className="text-2xl font-serif text-foreground mt-8 mb-4">{t('privacy.sections.sharing')}</h2>
          <p>
            {t('privacy.content.sharing')}
          </p>

          <h2 className="text-2xl font-serif text-foreground mt-8 mb-4">{t('privacy.sections.security')}</h2>
          <p>
            {t('privacy.content.security')}
          </p>

          <h2 className="text-2xl font-serif text-foreground mt-8 mb-4">{t('privacy.sections.rights')}</h2>
          <p>
            {t('privacy.content.rights')}
          </p>

          <h2 className="text-2xl font-serif text-foreground mt-8 mb-4">{t('privacy.sections.changes')}</h2>
          <p>
            {t('privacy.content.changes')}
          </p>

          <h2 className="text-2xl font-serif text-foreground mt-8 mb-4">{t('privacy.sections.contact')}</h2>
          <p>
            {t('privacy.content.contact')} <a href="mailto:infolallavor@protonmail.com" className="underline text-primary">infolallavor@protonmail.com</a>.
          </p>

          <p className="text-sm opacity-60 mt-8">
            {t('privacy.content.lastUpdate')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Privacy;