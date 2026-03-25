// import mountainVideo from "@/assets/la-llavor-video.mp4";
import seedLogo from "@/assets/lallavor_logo.png";
import tape from "@/assets/tape.png";

import TypewriterText from "./TypewriterText";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";
import { useEffect, useRef, useState } from "react";
import ScrollDownArrow from "./ScrollDownArrow";
import { useIsMobile } from "@/hooks/use-mobile";
import { getSectionHash } from "@/lib/routes";
import { useFitText } from "@/hooks/useFitText";

const HeroSection = () => {
  const { t, i18n } = useTranslation();
  const isMobile = useIsMobile();
  const heroPosterPath = "/hero-video-thumbnail.jpg";

  // Mobile video play state
  const videoRef = useRef(null);
  const [showPlay, setShowPlay] = useState(false);
  const [videoReady, setVideoReady] = useState(false);

  // On mobile, check if video can autoplay, else show play button
  useEffect(() => {
    if (!isMobile) return;
    const video = videoRef.current;
    if (!video) return;
    // Try to play on mount
    const tryPlay = async () => {
      try {
        await video.play();
        setShowPlay(false);
      } catch (e) {
        setShowPlay(true);
      }
    };
    // Listen for pause events (e.g., browser blocks autoplay after 1s)
    const onPause = () => {
      if (!video.paused) return;
      setShowPlay(true);
    };
    video.addEventListener('pause', onPause);
    // Try to play on ready
    if (video.readyState >= 2) {
      tryPlay();
    } else {
      video.addEventListener('canplay', tryPlay, { once: true });
    }
    setVideoReady(true);
    return () => {
      video.removeEventListener('pause', onPause);
      video.removeEventListener('canplay', tryPlay);
    };
  }, [isMobile]);

  const handlePlay = () => {
    const video = videoRef.current;
    if (video) {
      video.play();
      setShowPlay(false);
    }
  };

  // No hooks needed for simple muted autoplay video and Instagram embed

  // Helper to scroll to next section
  const scrollToNext = () => {
    if (isMobile) {
      // On mobile, scroll to tapes/logo section
      const next = document.getElementById("tapes-section");
      if (next) next.scrollIntoView({ behavior: "smooth" });
    } else {
      const next = document.getElementById("second-section");
      if (next) next.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen md:h-screen w-full md:snap-start flex flex-col md:flex-row overflow-hidden relative">
      {/* Left: Paper/text side */}
      <div className="order-2 md:order-1 flex-1 flex flex-col justify-center items-start px-8 md:px-16 py-12 bg-card relative min-h-screen md:min-h-0">
        {/* Paper texture overlay */}
        {/* SVG overlay removed */}


        {/* Mobile: logo at top left with margin, language switcher at top right, all content lower */}
        {isMobile ? (
          <>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', zIndex: 30 }}>
              <img
                src={seedLogo}
                alt="La Llavor"
                className="w-36 h-auto opacity-90 mix-blend-multiply"
                style={{ marginLeft: '1.25rem', marginTop: '2.5rem' }}
              />
              <div style={{ position: 'absolute', top: '2.5rem', right: '1.25rem' }}>
                <LanguageSwitcher />
              </div>
            </div>
          </>
        ) : (
          <div className="absolute top-16 right-8 md:top-20 md:right-8 z-20 flex items-center">
            <LanguageSwitcher />
          </div>
        )}

        <div
          className="max-w-md relative z-10 space-y-8"
          style={isMobile
            ? { marginTop: '10.5rem', marginLeft: '1.25rem' }
            : { marginTop: '3.5rem' }}
        >
          {!isMobile && (
            <img
              src={seedLogo}
              alt="La Llavor"
              className="w-36 md:w-48 h-auto opacity-90 mix-blend-multiply"
            />
          )}
          <h1
            className="text-xl md:text-2xl font-serif leading-relaxed tracking-wide text-foreground relative"
            style={{ minHeight: '2.5em', display: 'flex', alignItems: 'center', marginTop: isMobile ? '-1.5rem' : undefined }}
          >
            <TypewriterText text={t('hero.title2')} delay={50} startDelay={500} />
            <span aria-hidden="true" className="invisible absolute left-0 top-0 w-full">
              {t('hero.title2')}
            </span>
          </h1>

          <div className="space-y-6 mt-8 flex flex-col items-start relative" style={{ height: "6rem" }}>
            {/* Scattered links with typed labels */}
            <a href={getSectionHash("second", i18n.language)} className="font-serif text-primary text-lg absolute left-0 top-0 rotate-[-7deg] hover:underline" style={{ fontWeight: 600, marginTop: isMobile ? '-1.5rem' : undefined }}>
              <TypewriterText text={t('hero.menu.birth')} delay={35} startDelay={1500} />
            </a>
            <a href="/projecte_pedagogic_la_llavor.pdf" target="_blank" rel="noopener noreferrer" className="font-serif text-primary text-lg absolute left-32 top-2 rotate-[4deg] hover:underline min-w-[13rem]" style={{ fontWeight: 600 }}>
              <TypewriterText text={t('hero.menu.pedagogicalProject')} delay={35} startDelay={1500} />
            </a>
            <a href={getSectionHash("team", i18n.language)} className="font-serif text-primary text-lg absolute left-16 top-10 rotate-[-2deg] hover:underline" style={{ fontWeight: 600 }}>
              <TypewriterText text={t('hero.menu.team')} delay={35} startDelay={1500} />
            </a>
            <a href={getSectionHash("contact", i18n.language)} className="font-serif text-primary text-lg absolute left-44 md:left-64 top-12 rotate-[6deg] hover:underline" style={{ fontWeight: 600 }}>
              <TypewriterText text={t('hero.menu.contact')} delay={35} startDelay={1500} />
            </a>
          </div>
        </div>

        {/* Decorative notes removed */}

        {/* Painter tape note with text overlay, aligned with logo, smaller, padded, and 90% opacity */}
        <div
          className="z-10 select-none flex items-center"
          style={{
            position: isMobile ? 'static' : 'absolute',
            left: isMobile ? undefined : '1rem',
            // Lower first tape further in mobile, increase gap from nav
            top: isMobile ? '15.5rem' : '2.5rem',
            width: isMobile ? '100%' : '36rem',
            maxWidth: isMobile ? '100vw' : '98vw',
            height: 'auto',
            paddingLeft: isMobile ? 0 : '0.5rem',
            paddingRight: isMobile ? 0 : '0.5rem',
            marginBottom: isMobile ? '1.5rem' : 0,
          }}
        >
          <div style={{position: 'relative', width: '100%'}}>
            <img src={tape} alt="Portes obertes 18 d'abril" className="w-full h-auto" style={{opacity: 0.9}} />
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{ pointerEvents: 'none', width: '100%', height: '100%' }}
            >
              {(() => {
                // Make desktop text a bit smaller
                const horizontalPadding = isMobile ? 8 : 24;
                const [fitRef, fontSize] = useFitText({ minFontSize: isMobile ? 10 : 13, maxFontSize: isMobile ? 18 : 24, padding: horizontalPadding });
                return (
                  <span
                    ref={fitRef}
                    className="font-serif text-[#2d2d2d] font-bold tracking-wide text-center"
                    style={{
                      width: '84%',
                      lineHeight: 1.1,
                      fontSize,
                      letterSpacing: '0.04em',
                      background: 'transparent',
                      padding: `0 ${horizontalPadding}px`,
                      display: 'block',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'clip',
                      boxSizing: 'border-box',
                      maxWidth: '100%',
                    }}
                  >
                    {t('hero.openDay')}
                  </span>
                );
              })()}
            </div>
          </div>
        </div>

        {/* Second tape, bigger and closer */}
        <div
          className="z-10 select-none flex items-center"
          style={{
            position: isMobile ? 'static' : 'absolute',
            left: isMobile ? undefined : '1rem',
            // Lower second tape further in mobile, increase gap between tapes
            top: isMobile ? '19.5rem' : '8.5rem',
            width: isMobile ? '100%' : '22rem',
            maxWidth: isMobile ? '100vw' : '80vw',
            height: 'auto',
            transform: isMobile ? undefined : 'rotate(-2deg)',
            paddingLeft: isMobile ? 0 : '0.5rem',
            paddingRight: isMobile ? 0 : '0.5rem',
            marginBottom: isMobile ? '0.5rem' : 0,
          }}
        >
          <div style={{position: 'relative', width: '100%'}}>
            <img src={tape} alt="Clica aquí per apuntar-te" className="w-full h-auto" style={{opacity: 0.9}} />
            {(() => {
              // Make mobile tape text smaller
              const horizontalPadding = isMobile ? 6 : 16;
              const [fitRef, fontSize] = useFitText({ minFontSize: isMobile ? 7 : 10, maxFontSize: isMobile ? 12 : 18, padding: horizontalPadding });
              return (
                <a
                  ref={fitRef}
                  href="https://forms.gle/kmRUNsSKacXLsDG96"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-1/2 left-1/2 flex items-center justify-center font-serif text-[#2d2d2d] font-bold tracking-wide text-center"
                  style={{
                    transform: 'translate(-52%, -50%)',
                    width: '84%',
                    lineHeight: 1.1,
                    fontSize,
                    letterSpacing: '0.04em',
                    background: 'transparent',
                    padding: `0 ${horizontalPadding}px`,
                    textDecoration: 'underline',
                    pointerEvents: 'auto',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'clip',
                    boxSizing: 'border-box',
                    maxWidth: '100%',
                  }}
                >
                  {t('hero.signupHere')}
                </a>
              );
            })()}
          </div>
        </div>
      </div>

      {/* Right: Video side */}
      {/* Right: Video side (hidden on mobile) */}
      {!isMobile && (
        <div className="order-1 md:order-2 md:flex-[0_0_40%] h-screen md:h-full relative flex flex-col gap-6 items-center justify-center">
          {/* Show only on desktop */}
          <div className="relative w-full h-full">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              src="/video1llavor.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              poster={heroPosterPath}
              style={{ background: 'black' }}
            />
          </div>
        </div>
      )}
      {/* Painter tape note — moved inside the left text area so it scrolls with content. */}
      {/* Arrow at bottom of section (desktop & mobile, except last section) */}
      {/* Only show bottom arrow on desktop, not mobile */}
      {!isMobile && (
        <ScrollDownArrow
          onClick={scrollToNext}
          className="bottom-4 md:bottom-8"
          label={t('hero.scrollDown')}
        />
      )}
    </section>
  );
};

export default HeroSection;
