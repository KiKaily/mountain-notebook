import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Legal = () => {
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
          {t('legal.title')}
        </h1>

        <div className="space-y-6 text-foreground opacity-80 leading-relaxed">
          <p>
            {t('legal.content.intro')}
          </p>
          <p>
            <strong>{t('legal.content.titular')}</strong><br />
            <strong>NIF:</strong> {t('legal.content.nif')}<br />
            <strong>{t('legal.content.domicilio')}</strong><br />
            <strong>{t('legal.content.email')}</strong><br />
            <strong>{t('legal.content.sitio')}</strong>
          </p>

          <h2 className="text-2xl font-serif text-foreground mt-8 mb-4">1. {t('legal.sections.objeto')}</h2>
          <p>
            {t('legal.content.objeto')}
          </p>
          <p>
            {t('legal.content.objeto2')}
          </p>

          <h2 className="text-2xl font-serif text-foreground mt-8 mb-4">2. {t('legal.sections.condiciones')}</h2>
          <p>
            {t('legal.content.condiciones')}
          </p>
          <p>
            {t('legal.content.condiciones2')}
          </p>

          <h2 className="text-2xl font-serif text-foreground mt-8 mb-4">3. {t('legal.sections.propiedad')}</h2>
          <p>
            {t('legal.content.propiedad')}
          </p>
          <p>
            {t('legal.content.propiedad2')}
          </p>

          <h2 className="text-2xl font-serif text-foreground mt-8 mb-4">4. {t('legal.sections.responsabilidad')}</h2>
          <p>
            {t('legal.content.responsabilidad')}
          </p>
          <p>
            {t('legal.content.responsabilidad2')}
          </p>

          <h2 className="text-2xl font-serif text-foreground mt-8 mb-4">5. {t('legal.sections.enlaces')}</h2>
          <p>
            {t('legal.content.enlaces')}
          </p>
          <p>
            {t('legal.content.enlaces2')}
          </p>

          <h2 className="text-2xl font-serif text-foreground mt-8 mb-4">6. {t('legal.sections.proteccion')}</h2>
          <p>
            {t('legal.content.proteccion')}
          </p>

          <h2 className="text-2xl font-serif text-foreground mt-8 mb-4">7. {t('legal.sections.cookies')}</h2>
          <p>
            {t('legal.content.cookies')}
          </p>
          <p>
            {t('legal.content.cookies2')}
          </p>

          <h2 className="text-2xl font-serif text-foreground mt-8 mb-4">8. {t('legal.sections.legislacion')}</h2>
          <p>
            {t('legal.content.legislacion')}
          </p>

          <p className="text-sm opacity-60 mt-8">
            {t('legal.content.lastUpdate')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Legal;