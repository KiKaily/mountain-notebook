import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Legal = () => {
  const [lang, setLang] = useState<'ca' | 'es' | 'en'>('ca');
  const navigate = useNavigate();

  const content = {
    ca: {
      title: "Avís Legal",
      back: "Tornar",
      content: `
        <h2>1. Informació general</h2>
        <p>La Llavor és un projecte educatiu situat a Sant Esteve de Palautordera, al cor del Montseny. Aquest avís legal regula l'ús del nostre lloc web.</p>

        <h2>2. Propietat intel·lectual</h2>
        <p>Tots els continguts del lloc web (textos, imatges, dissenys, etc.) són propietat de La Llavor o dels seus col·laboradors i estan protegits per les lleis de propietat intel·lectual.</p>

        <h2>3. Responsabilitat</h2>
        <p>La Llavor no es fa responsable dels danys que puguin derivar-se de l'ús del lloc web o dels seus continguts. L'usuari utilitza el lloc web sota la seva pròpia responsabilitat.</p>

        <h2>4. Enllaços</h2>
        <p>El nostre lloc web pot contenir enllaços a altres llocs web. No ens fem responsables del contingut o les polítiques de privacitat d'aquests llocs.</p>

        <h2>5. Contacte</h2>
        <p>Per a qualsevol consulta sobre aquest avís legal, contacta'ns a teamlallavor@gmail.com</p>
      `
    },
    es: {
      title: "Aviso Legal",
      back: "Volver",
      content: `
        <h2>1. Información general</h2>
        <p>La Llavor es un proyecto educativo ubicado en Sant Esteve de Palautordera, en el corazón del Montseny. Este aviso legal regula el uso de nuestro sitio web.</p>

        <h2>2. Propiedad intelectual</h2>
        <p>Todos los contenidos del sitio web (textos, imágenes, diseños, etc.) son propiedad de La Llavor o de sus colaboradores y están protegidos por las leyes de propiedad intelectual.</p>

        <h2>3. Responsabilidad</h2>
        <p>La Llavor no se hace responsable de los daños que puedan derivarse del uso del sitio web o de sus contenidos. El usuario utiliza el sitio web bajo su propia responsabilidad.</p>

        <h2>4. Enlaces</h2>
        <p>Nuestro sitio web puede contener enlaces a otros sitios web. No nos hacemos responsables del contenido o las políticas de privacidad de estos sitios.</p>

        <h2>5. Contacto</h2>
        <p>Para cualquier consulta sobre este aviso legal, contáctanos en teamlallavor@gmail.com</p>
      `
    },
    en: {
      title: "Legal Notice",
      back: "Back",
      content: `
        <h2>1. General Information</h2>
        <p>La Llavor is an educational project located in Sant Esteve de Palautordera, in the heart of Montseny. This legal notice regulates the use of our website.</p>

        <h2>2. Intellectual Property</h2>
        <p>All content on the website (texts, images, designs, etc.) is owned by La Llavor or its collaborators and is protected by intellectual property laws.</p>

        <h2>3. Liability</h2>
        <p>La Llavor is not responsible for damages that may arise from the use of the website or its contents. The user uses the website at their own risk.</p>

        <h2>4. Links</h2>
        <p>Our website may contain links to other websites. We are not responsible for the content or privacy policies of these sites.</p>

        <h2>5. Contact</h2>
        <p>For any questions about this legal notice, contact us at teamlallavor@gmail.com</p>
      `
    }
  };

  const handleBack = () => {
    navigate('/', { state: { scrollTo: 'footer' } });
  };

  return (
    <div className="min-h-screen bg-card p-8 md:p-16">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <button
            onClick={handleBack}
            className="text-sm font-sans text-foreground opacity-60 hover:opacity-80 underline"
          >
            ← {content[lang].back}
          </button>
          <div className="flex gap-2">
            <button
              onClick={() => setLang('ca')}
              className={`px-3 py-1 text-xs font-sans uppercase tracking-widest ${lang === 'ca' ? 'bg-primary text-primary-foreground' : 'text-foreground opacity-60 hover:opacity-80'}`}
            >
              CA
            </button>
            <button
              onClick={() => setLang('es')}
              className={`px-3 py-1 text-xs font-sans uppercase tracking-widest ${lang === 'es' ? 'bg-primary text-primary-foreground' : 'text-foreground opacity-60 hover:opacity-80'}`}
            >
              ES
            </button>
            <button
              onClick={() => setLang('en')}
              className={`px-3 py-1 text-xs font-sans uppercase tracking-widest ${lang === 'en' ? 'bg-primary text-primary-foreground' : 'text-foreground opacity-60 hover:opacity-80'}`}
            >
              EN
            </button>
          </div>
        </div>

        <h1 className="text-2xl md:text-3xl font-serif mb-8 text-foreground opacity-90">{content[lang].title}</h1>

        <div
          className="prose prose-sm md:prose-base max-w-none text-foreground opacity-90"
          dangerouslySetInnerHTML={{ __html: content[lang].content }}
        />
      </div>
    </div>
  );
};

export default Legal;