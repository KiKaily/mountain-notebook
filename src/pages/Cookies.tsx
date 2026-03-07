import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Cookies = () => {
  const [lang, setLang] = useState<'ca' | 'es' | 'en'>('ca');
  const navigate = useNavigate();

  const content = {
    ca: {
      title: "Política de Galetes",
      back: "Tornar",
      content: `
        <h2>1. Què són les galetes?</h2>
        <p>Les galetes són petits fitxers de text que s'emmagatzemen al teu navegador quan visites el nostre lloc web. Ens ajuden a millorar la teva experiència de navegació.</p>

        <h2>2. Tipus de galetes que utilitzem</h2>
        <p>Utilitzem galetes estrictament necessàries per al funcionament del lloc web i galetes analítiques per entendre com utilitzes el nostre lloc.</p>

        <h2>3. Control de galetes</h2>
        <p>Pots controlar i gestionar les galetes a través de la configuració del teu navegador. Pots acceptar, rebutjar o eliminar les galetes en qualsevol moment.</p>

        <h2>4. Consentiment</h2>
        <p>En continuar navegant pel nostre lloc web, acceptes l'ús de galetes segons aquesta política.</p>

        <h2>5. Contacte</h2>
        <p>Per a més informació sobre les nostres galetes, contacta'ns a teamlallavor@gmail.com</p>
      `
    },
    es: {
      title: "Política de Cookies",
      back: "Volver",
      content: `
        <h2>1. ¿Qué son las cookies?</h2>
        <p>Las cookies son pequeños archivos de texto que se almacenan en tu navegador cuando visitas nuestro sitio web. Nos ayudan a mejorar tu experiencia de navegación.</p>

        <h2>2. Tipos de cookies que utilizamos</h2>
        <p>Utilizamos cookies estrictamente necesarias para el funcionamiento del sitio web y cookies analíticas para entender cómo utilizas nuestro sitio.</p>

        <h2>3. Control de cookies</h2>
        <p>Puedes controlar y gestionar las cookies a través de la configuración de tu navegador. Puedes aceptar, rechazar o eliminar las cookies en cualquier momento.</p>

        <h2>4. Consentimiento</h2>
        <p>Al continuar navegando por nuestro sitio web, aceptas el uso de cookies según esta política.</p>

        <h2>5. Contacto</h2>
        <p>Para más información sobre nuestras cookies, contáctanos en teamlallavor@gmail.com</p>
      `
    },
    en: {
      title: "Cookie Policy",
      back: "Back",
      content: `
        <h2>1. What are cookies?</h2>
        <p>Cookies are small text files that are stored in your browser when you visit our website. They help us improve your browsing experience.</p>

        <h2>2. Types of cookies we use</h2>
        <p>We use strictly necessary cookies for the website to function and analytical cookies to understand how you use our site.</p>

        <h2>3. Cookie control</h2>
        <p>You can control and manage cookies through your browser settings. You can accept, reject or delete cookies at any time.</p>

        <h2>4. Consent</h2>
        <p>By continuing to browse our website, you accept the use of cookies according to this policy.</p>

        <h2>5. Contact</h2>
        <p>For more information about our cookies, contact us at teamlallavor@gmail.com</p>
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

export default Cookies;