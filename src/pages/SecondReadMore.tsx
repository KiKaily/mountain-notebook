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

          {/* New text after La Selva paragraph */}
          <p>
            La seva presència enriqueix l’ecosistema educatiu que habita aquest racó del Baix Montseny, aportant una mirada profunda de connexió amb el bosc i amb la natura. Tot i aquesta proximitat i col·laboració, cada projecte manté la seva identitat, el seu equip i el seu camí propi.
          </p>
          <p>
            Aquesta convivència respectuosa entre projectes diferents però afins ens recorda que educar també és crear comunitat, teixir vincles i obrir espais on diverses maneres d’acompanyar la infància poden dialogar i inspirar-se mútuament.
          </p>
          <p>
            A finals de gener de 2026 el projecte fa un gir important. La Tamara Depares assumeix la direcció i coordinació, consolida l’equip educatiu i dona estructura al ritme del dia a dia. A partir d’aquí, el projecte comença a agafar força, claredat i arrelament.
          </p>
          <p>
            El que va començar com una necessitat es transforma en una comunitat.
          </p>
          <p>
            Avui La Llavor és un espai viu al Baix Montseny on els infants poden explorar, investigar, jugar, equivocar-se, crear i construir el seu propi aprenentatge en contacte amb la natura i amb el ritme de la vida real. Un lloc on la curiositat és benvinguda, on les preguntes tenen valor i on cada infant és acompanyat amb respecte pel seu procés.
          </p>
          <p>
            Un lloc on el temps de la infància és cuidat amb presència, consciència i estima.
          </p>
          <p>
            Si vols conèixer amb més profunditat la mirada educativa que sosté aquest bateg, pots consultar aquí el nostre projecte pedagògic complet.
          </p>

          {/* Insert PDF button after new text */}
          <div className="mt-4">
            <a
              href="/projecte_pedagogic_la_llavor.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm font-sans text-primary underline hover:opacity-80 mt-4"
            >
              Per llegir el projecte educatiu complert en pdf, clica aquí.
            </a>
          </div>
        </div>

        <div className="w-16 h-[1px] bg-foreground opacity-20 mt-10" />
      </div>
    </section>
  );
};

export default SecondReadMore;
