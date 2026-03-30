declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID?.trim() || "";
const COOKIE_CONSENT_KEY = "llavor_cookie_consent";
const LEGACY_COOKIE_KEY = "llavor_cookies_accepted";

export const ANALYTICS_CONSENT_EVENT = "llavor:analytics-consent-changed";

let analyticsInitialized = false;

const canUseBrowserApis = () => typeof window !== "undefined" && typeof document !== "undefined";

const ensureGtag = () => {
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || ((...args: unknown[]) => {
    window.dataLayer.push(args);
  });
};

export const getAnalyticsConsent = (): boolean | null => {
  if (!canUseBrowserApis()) return null;

  try {
    const storedConsent = window.localStorage.getItem(COOKIE_CONSENT_KEY);
    if (storedConsent) {
      const parsed = JSON.parse(storedConsent) as { analytics?: boolean };
      if (typeof parsed.analytics === "boolean") {
        return parsed.analytics;
      }
    }

    return window.localStorage.getItem(LEGACY_COOKIE_KEY) === "1" ? true : null;
  } catch {
    return null;
  }
};

export const setAnalyticsConsent = (analytics: boolean) => {
  if (!canUseBrowserApis()) return;

  try {
    window.localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify({ analytics }));

    if (analytics) {
      window.localStorage.setItem(LEGACY_COOKIE_KEY, "1");
    } else {
      window.localStorage.removeItem(LEGACY_COOKIE_KEY);
    }

    window.dispatchEvent(new CustomEvent(ANALYTICS_CONSENT_EVENT, { detail: { analytics } }));
  } catch {
    // Ignore storage failures.
  }
};

export const initializeAnalytics = () => {
  if (!canUseBrowserApis() || analyticsInitialized || !MEASUREMENT_ID) {
    return false;
  }

  ensureGtag();

  const scriptSource = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
  if (!document.querySelector(`script[src="${scriptSource}"]`)) {
    const script = document.createElement("script");
    script.async = true;
    script.src = scriptSource;
    document.head.appendChild(script);
  }

  window.gtag?.("js", new Date());
  window.gtag?.("config", MEASUREMENT_ID, {
    anonymize_ip: true,
    send_page_view: false,
  });

  analyticsInitialized = true;
  return true;
};

const canTrack = () => canUseBrowserApis() && Boolean(MEASUREMENT_ID) && getAnalyticsConsent() === true;

export const trackPageView = (pagePath: string) => {
  if (!canTrack()) return;

  initializeAnalytics();
  window.gtag?.("event", "page_view", {
    page_location: window.location.href,
    page_path: pagePath,
    page_title: document.title,
    language: document.documentElement.lang || undefined,
  });
};

export const trackEvent = (eventName: string, params: Record<string, unknown> = {}) => {
  if (!canTrack()) return;

  initializeAnalytics();
  window.gtag?.("event", eventName, params);
};