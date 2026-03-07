import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Privacy = () => {
  const [lang, setLang] = useState<'ca' | 'es' | 'en'>('ca');
  const navigate = useNavigate();

  const content = {
    ca: {
      title: "Política de Privacitat",
      back: "Tornar",
      content: `
        <h2>1. Informació general</h2>
        <p>La Llavor respecta la teva privacitat i es compromet a protegir les teves dades personals. Aquesta política explica com recopilem, utilitzem i protegim la informació que ens proporciones.</p>

        <h2>2. Dades que recopilem</h2>
        <p>Recopilem informació que ens proporciones directament, com el teu nom, correu electrònic i missatges quan contactes amb nosaltres.</p>

        <h2>3. Ús de les dades</h2>
        <p>Utilitzem les teves dades per respondre les teves consultes, millorar els nostres serveis i comunicar-nos amb tu sobre el nostre projecte educatiu.</p>

        <h2>4. Protecció de dades</h2>
        <p>Implementem mesures de seguretat adequades per protegir les teves dades personals contra l'accés no autoritzat, alteració, divulgació o destrucció.</p>

        <h2>5. Contacte</h2>
        <p>Si tens preguntes sobre aquesta política, contacta'ns a teamlallavor@gmail.com</p>
      `
    },
    es: {
      title: "Política de Privacidad",
      back: "Volver",
      content: `
        <h2>1. Información general</h2>
        <p>La Llavor respeta tu privacidad y se compromete a proteger tus datos personales. Esta política explica cómo recopilamos, utilizamos y protegemos la información que nos proporcionas.</p>

        <h2>2. Datos que recopilamos</h2>
        <p>Recopilamos información que nos proporcionas directamente, como tu nombre, correo electrónico y mensajes cuando contactas con nosotros.</p>

        <h2>3. Uso de los datos</h2>
        <p>Utilizamos tus datos para responder tus consultas, mejorar nuestros servicios y comunicarnos contigo sobre nuestro proyecto educativo.</p>

        <h2>4. Protección de datos</h2>
        <p>Implementamos medidas de seguridad adecuadas para proteger tus datos personales contra el acceso no autorizado, alteración, divulgación o destrucción.</p>

        <h2>5. Contacto</h2>
        <p>Si tienes preguntas sobre esta política, contáctanos en teamlallavor@gmail.com</p>
      `
    },
    en: {
      title: "Privacy Policy",
      back: "Back",
      content: `
        <h2>1. General Information</h2>
        <p>La Llavor respects your privacy and is committed to protecting your personal data. This policy explains how we collect, use and protect the information you provide to us.</p>

        <h2>2. Data We Collect</h2>
        <p>We collect information you provide directly to us, such as your name, email address and messages when you contact us.</p>

        <h2>3. Use of Data</h2>
        <p>We use your data to respond to your inquiries, improve our services and communicate with you about our educational project.</p>

        <h2>4. Data Protection</h2>
        <p>We implement appropriate security measures to protect your personal data against unauthorized access, alteration, disclosure or destruction.</p>

        <h2>5. Contact</h2>
        <p>If you have questions about this policy, contact us at teamlallavor@gmail.com</p>
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

export default Privacy;