import { useEffect, useState } from "react";

const COOKIE_KEY = "llavor_cookies_accepted";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(COOKIE_KEY);
      if (!stored) {
        setVisible(true);
      }
    } catch (e) {
      // localStorage might be unavailable in SSR; ignore.
      setVisible(false);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(COOKIE_KEY, "1");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 bg-card bg-opacity-95 text-foreground p-4 flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0 z-50">
      <p className="text-xs font-sans">
        Aquest lloc utilitza galetes per millorar la vostra experiència. Si continueu navegant, accepteu l'ús de galetes.
      </p>
      <button
        onClick={accept}
        className="mt-2 md:mt-0 px-4 py-2 bg-primary text-primary-foreground text-xs font-serif tracking-wide hover:opacity-90 transition-opacity rounded"
      >
        D'acord
      </button>
    </div>
  );
};

export default CookieBanner;
