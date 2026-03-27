import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { getAnalyticsConsent, setAnalyticsConsent } from "@/lib/analytics";

const CookieBanner = () => {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      setVisible(getAnalyticsConsent() === null);
    } catch (e) {
      // localStorage might be unavailable in SSR; ignore.
      setVisible(false);
    }
  }, []);

  const handleChoice = (analytics: boolean) => {
    setAnalyticsConsent(analytics);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 border-t border-border/60 bg-card/95 p-4 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <p className="max-w-3xl text-xs font-sans leading-relaxed text-foreground">
          {t("cookies.banner.description")}{" "}
          <Link to="/cookies" className="underline underline-offset-2">
            {t("cookies.banner.more")}
          </Link>
        </p>
        <div className="flex flex-col gap-2 sm:flex-row">
          <button
            onClick={() => handleChoice(false)}
            className="rounded border border-border px-4 py-2 text-xs font-sans tracking-wide text-foreground transition-opacity hover:opacity-80"
          >
            {t("cookies.banner.reject")}
          </button>
          <button
            onClick={() => handleChoice(true)}
            className="rounded bg-primary px-4 py-2 text-xs font-serif tracking-wide text-primary-foreground transition-opacity hover:opacity-90"
          >
            {t("cookies.banner.accept")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
