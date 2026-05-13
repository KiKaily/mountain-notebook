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
      <div className="order-2 md:order-1 flex-1 flex flex-col justify-center items-center px-8 md:px-16 py-12 bg-card relative min-h-screen md:min-h-0">
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
                style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: '2.5rem' }}
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
          className="relative z-10 flex w-full max-w-2xl flex-col items-center space-y-8 text-center"
          style={isMobile
            ? { marginTop: '13.5rem' }
            : { marginTop: '8.5rem' }}
        >
          {!isMobile && (
            <img
              src={seedLogo}
              alt="La Llavor"
              className="w-36 md:w-48 h-auto opacity-90 mix-blend-multiply"
              style={{ width: '11.4rem', marginBottom: '-0.75rem' }}
            />
          )}
          <h1
            className="text-xl md:text-2xl font-serif leading-relaxed tracking-wide text-foreground relative"
            style={{
              minHeight: '2.5em',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: isMobile ? '-2.3rem' : undefined,
              fontSize: isMobile ? 'clamp(0.99rem, 4.8vw, 1.2rem)' : undefined,
              letterSpacing: isMobile ? '0.015em' : undefined,
              whiteSpace: isMobile ? 'nowrap' : undefined,
              width: isMobile ? 'calc(100vw - 4rem)' : '100%',
              textAlign: 'center',
            }}
          >
            <TypewriterText text={t('hero.title2')} delay={50} startDelay={500} className={isMobile ? 'whitespace-nowrap' : ''} />
            <span aria-hidden="true" className="invisible absolute left-0 top-0 w-full">
              {t('hero.title2')}
            </span>
          </h1>
          <div className="mt-0.5 text-sm md:text-base font-serif text-foreground/80 max-w-xl leading-snug text-center">
            <TypewriterText text={t('hero.subtitle')} delay={30} startDelay={900} />
          </div>

          <div
            className="mt-3 flex w-full max-w-xl flex-wrap items-center justify-center gap-x-8 gap-y-4"
            style={{ marginTop: isMobile ? '0.75rem' : '1.25rem' }}
          >
            <a href={getSectionHash("second", i18n.language)} className="inline-block font-serif text-primary text-lg rotate-[-7deg] hover:underline" style={{ fontWeight: 600 }}>
              <TypewriterText text={t('hero.menu.birth')} delay={35} startDelay={1500} />
            </a>
            <a
              href="/projecte-pedagogic.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block min-w-[13rem] whitespace-nowrap font-serif text-primary text-lg rotate-[4deg] hover:underline"
              style={{ fontWeight: 600 }}
            >
              <TypewriterText text={t('hero.menu.pedagogicalProject')} delay={35} startDelay={1500} />
            </a>
            <a href={getSectionHash("team", i18n.language)} className="inline-block font-serif text-primary text-lg rotate-[-2deg] hover:underline" style={{ fontWeight: 600 }}>
              <TypewriterText text={t('hero.menu.team')} delay={35} startDelay={1500} />
            </a>
            <a href={getSectionHash("contact", i18n.language)} className="inline-block font-serif text-primary text-lg rotate-[6deg] hover:underline" style={{ fontWeight: 600 }}>
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
            top: isMobile ? undefined : '2.5rem',
            width: isMobile ? '100%' : '27rem',
            maxWidth: isMobile ? '100vw' : '73.5vw',
            height: 'auto',
            paddingLeft: isMobile ? 0 : '0.5rem',
            paddingRight: isMobile ? 0 : '0.5rem',
            marginTop: isMobile ? '2.75rem' : 0,
            marginBottom: isMobile ? '0rem' : 0,
          }}
        >
          <div style={{position: 'relative', width: '100%'}}>
            <img src={tape} alt="Portes obertes 18 d'abril" className="w-full h-auto" style={{opacity: 0.9}} />
            <div
              className="absolute inset-0 flex items-center justify-start"
              style={{ pointerEvents: 'none', width: '100%', height: '100%' }}
            >
              {(() => {
                const horizontalPadding = isMobile ? 10 : 22;
                const textWidth = isMobile ? '83%' : '82%';
                const [fitRef, fontSizeRaw] = useFitText({ minFontSize: isMobile ? 6 : 9, maxFontSize: isMobile ? 12 : 16.5, padding: horizontalPadding });
                const fontSize = fontSizeRaw * 0.88;
                return (
                  <span
                    ref={fitRef}
                    className="font-serif text-[#2d2d2d] font-bold tracking-wide text-center"
                    style={{
                      width: textWidth,
                      marginLeft: isMobile ? '5%' : '5%',
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
            left: isMobile ? undefined : '0.7rem',
            top: isMobile ? undefined : '6rem',
            width: isMobile ? '100%' : '28.5rem', // 22rem * 1.3
            maxWidth: isMobile ? '100vw' : '104vw', // 80vw * 1.3
            height: 'auto',
            transform: isMobile ? undefined : 'rotate(-2deg)',
            paddingLeft: isMobile ? 0 : '0.65rem',
            paddingRight: isMobile ? 0 : '0.65rem',
            marginTop: isMobile ? '-0.2rem' : 0,
            marginBottom: isMobile ? '0.65rem' : 0,
          }}
        >
          <div style={{position: 'relative', width: '100%'}}>
            <img src={tape} alt="Cinta contacte" className="w-full h-auto" style={{opacity: 0.9}} />
            {(() => {
              const horizontalPadding = isMobile ? 10 : 20;
              const textWidth = isMobile ? '83%' : '82%';
              const [fitRef, fontSizeRaw] = useFitText({ minFontSize: isMobile ? 9 : 13, maxFontSize: isMobile ? 18 : 22, padding: horizontalPadding });
              const fontSize = fontSizeRaw * 0.88;
              return (
                <div
                  ref={fitRef}
                  className="absolute top-1/2 font-serif text-[#2d2d2d] font-bold tracking-wide text-center"
                  style={{
                    left: isMobile ? '5%' : '5%',
                    transform: 'translate(0, -50%)',
                    width: textWidth,
                    lineHeight: 1.1,
                    fontSize,
                    letterSpacing: '0.04em',
                    background: 'transparent',
                    padding: `0 ${horizontalPadding}px`,
                    textDecoration: 'none',
                    pointerEvents: 'auto',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'clip',
                    boxSizing: 'border-box',
                    maxWidth: '100%',
                  }}
                >
                  {(() => {
                    const fullText = t('hero.signupHere');
                    let linkText;
                    if (i18n.language === 'ca') {
                      linkText = 'contacte aquí';
                    } else if (i18n.language === 'es') {
                      linkText = 'contacta aquí';
                    } else {
                      linkText = 'here';
                    }
                    const escapedLinkText = linkText.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                    let textBeforeLink = fullText.replace(new RegExp(`([,;:])?\\.?\\s*${escapedLinkText}\\.?$`), '$1');
                    textBeforeLink = textBeforeLink.replace(/\\s*$/, '');
                    if (/[,;:]$/.test(textBeforeLink)) {
                      textBeforeLink = textBeforeLink + ' ';
                    } else if (textBeforeLink && !/\\s$/.test(textBeforeLink)) {
                      textBeforeLink = textBeforeLink + ' ';
                    }
                    return (
                      <>
                        <span>{textBeforeLink}</span>
                        <a
                          href="#contact"
                          className="underline hover:text-primary transition-colors"
                          style={{
                            textDecoration: 'underline',
                            color: '#2d2d2d',
                          }}
                        >
                          {linkText}
                        </a>
                      </>
                    );
                  })()}
                </div>
              );
            })()}
          </div>
        </div>

        {/* Third tape - Activity signup */}
        <div
          className="z-10 select-none flex items-center"
          style={{
            position: isMobile ? 'static' : 'absolute',
            left: isMobile ? undefined : '1.2rem',
            top: isMobile ? undefined : '9rem',
            width: isMobile ? '100%' : '26rem',
            maxWidth: isMobile ? '100vw' : '95vw',
            height: 'auto',
            transform: isMobile ? undefined : 'rotate(1deg)',
            paddingLeft: isMobile ? 0 : '0.5rem',
            paddingRight: isMobile ? 0 : '0.5rem',
            marginTop: isMobile ? '0.5rem' : 0,
            marginBottom: isMobile ? '1rem' : 0,
          }}
        >
          <div style={{position: 'relative', width: '100%'}}>
            <img src={tape} alt="Cinta activitats" className="w-full h-auto" style={{opacity: 0.9}} />
            {(() => {
              const horizontalPadding = isMobile ? 10 : 18;
              const textWidth = isMobile ? '83%' : '82%';
              const [fitRef, fontSizeRaw] = useFitText({ minFontSize: isMobile ? 8 : 12, maxFontSize: isMobile ? 16 : 20, padding: horizontalPadding });
              const fontSize = fontSizeRaw * 0.88;
              return (
                <div
                  ref={fitRef}
                  className="absolute top-1/2 font-serif text-[#2d2d2d] font-bold tracking-wide text-center"
                  style={{
                    left: isMobile ? '5%' : '5%',
                    transform: 'translate(0, -50%)',
                    width: textWidth,
                    lineHeight: 1.1,
                    fontSize,
                    letterSpacing: '0.04em',
                    background: 'transparent',
                    padding: `0 ${horizontalPadding}px`,
                    textDecoration: 'none',
                    pointerEvents: 'auto',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'clip',
                    boxSizing: 'border-box',
                    maxWidth: '100%',
                  }}
                >
                  {(() => {
                    const fullText = t('hero.activitySignup');
                    let linkText;
                    if (i18n.language === 'ca' || i18n.language === 'es') {
                      linkText = 'clica aquí';
                    } else {
                      linkText = 'here';
                    }
                    const escapedLinkText = linkText.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                    let textBeforeLink = fullText.replace(new RegExp(`([,;:])?\\.?\\s*${escapedLinkText}\\.?$`), '$1');
                    textBeforeLink = textBeforeLink.replace(/\\s*$/, '');
                    if (/[,;:]$/.test(textBeforeLink)) {
                      textBeforeLink = textBeforeLink + ' ';
                    } else if (textBeforeLink && !/\\s$/.test(textBeforeLink)) {
                      textBeforeLink = textBeforeLink + ' ';
                    }
                    return (
                      <>
                        <span>{textBeforeLink}</span>
                        <a
                          href="https://forms.gle/XriMMtsZzKEjLFF3A"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline hover:text-primary transition-colors"
                          style={{
                            textDecoration: 'underline',
                            color: '#2d2d2d',
                          }}
                        >
                          {linkText}
                        </a>
                      </>
                    );
                  })()}
                </div>
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
