import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  ANALYTICS_CONSENT_EVENT,
  getAnalyticsConsent,
  initializeAnalytics,
  trackPageView,
} from "@/lib/analytics";

const AnalyticsTracker = () => {
  const location = useLocation();
  const [analyticsEnabled, setAnalyticsEnabled] = useState(() => getAnalyticsConsent() === true);
  const lastTrackedPath = useRef<string | null>(null);

  useEffect(() => {
    if (analyticsEnabled) {
      initializeAnalytics();
      lastTrackedPath.current = `${location.pathname}${location.search}${location.hash}`;
    }

    const handleConsentChange = () => {
      const nextEnabled = getAnalyticsConsent() === true;
      setAnalyticsEnabled(nextEnabled);

      if (nextEnabled) {
        initializeAnalytics();
        lastTrackedPath.current = `${location.pathname}${location.search}${location.hash}`;
      } else {
        lastTrackedPath.current = null;
      }
    };

    window.addEventListener(ANALYTICS_CONSENT_EVENT, handleConsentChange);
    return () => {
      window.removeEventListener(ANALYTICS_CONSENT_EVENT, handleConsentChange);
    };
  }, [analyticsEnabled, location.hash, location.pathname, location.search]);

  useEffect(() => {
    if (!analyticsEnabled) return;

    const currentPath = `${location.pathname}${location.search}${location.hash}`;
    if (lastTrackedPath.current === currentPath) return;

    trackPageView(currentPath);
    lastTrackedPath.current = currentPath;
  }, [analyticsEnabled, location.hash, location.pathname, location.search]);

  return null;
};

export default AnalyticsTracker;