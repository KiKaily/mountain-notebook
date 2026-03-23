// import mountainVideo from "@/assets/la-llavor-video.mp4";
import seedLogo from "@/assets/la_llavor_logo.png";
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

  // No hooks needed for simple muted autoplay video and Instagram embed

  // Helper to scroll to next section
  const scrollToNext = () => {
    const next = document.getElementById("second-section");
    if (next) next.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen md:h-screen w-full md:snap-start flex flex-col md:flex-row overflow-hidden relative">
      {/* Left: Paper/text side */}
      <div className="order-2 md:order-1 flex-1 flex flex-col justify-center items-start px-8 md:px-16 py-12 bg-card relative min-h-screen md:min-h-0">
        {/* Paper texture overlay */}
        {/* SVG overlay removed */}

        <div className="absolute top-16 right-8 md:top-20 md:right-8 z-20 flex items-center">
          <LanguageSwitcher />
        </div>

        <div className="max-w-md relative z-10 space-y-8 mt-32 md:mt-36">
          <img
            src={seedLogo}
            alt="La Llavor"
            className="w-24 md:w-32 h-auto opacity-90 mix-blend-multiply"
          />
          <h1
            className="text-2xl md:text-3xl font-serif leading-relaxed tracking-wide text-foreground relative"
            style={{ minHeight: '2.5em', display: 'flex', alignItems: 'center' }}
          >
            <TypewriterText text={t('hero.title2')} delay={50} startDelay={500} />
            <span aria-hidden="true" className="invisible absolute left-0 top-0 w-full">
              {t('hero.title2')}
            </span>
          </h1>

          <div className="space-y-6 mt-8 flex flex-col items-start relative" style={{ height: "6rem" }}>
            {/* Scattered links with typed labels */}
            <a href={getSectionHash("second", i18n.language)} className="font-serif text-primary text-lg absolute left-0 top-0 rotate-[-7deg] hover:underline" style={{ fontWeight: 600 }}>
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
          className="absolute z-10 select-none flex items-center"
          style={{
            left: '2.5rem',
            top: '4.5rem',
            width: '22rem',
            maxWidth: '90vw',
            height: 'auto',
            paddingLeft: '0.5rem',
            paddingRight: '0.5rem',
          }}
        >
          <div style={{position: 'relative', width: '100%'}}>
            <img src={tape} alt="Portes obertes 18 d'abril" className="w-full h-auto" style={{opacity: 0.9}} />
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{ pointerEvents: 'none', width: '100%', height: '100%' }}
            >
              {(() => {
                // El padding horizontal debe coincidir con el del tape
                const horizontalPadding = 12; // px, igual a 0.7em aprox
                const [fitRef, fontSize] = useFitText({ minFontSize: 10, maxFontSize: 22, padding: horizontalPadding });
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
          className="absolute z-10 select-none flex items-center"
          style={{
            left: '2.5rem',
            top: '7.2rem',
            width: '22rem',
            maxWidth: '90vw',
            height: 'auto',
            transform: 'rotate(-2deg)',
            paddingLeft: '0.5rem',
            paddingRight: '0.5rem',
          }}
        >
          <div style={{position: 'relative', width: '100%'}}>
            <img src={tape} alt="Clica aquí per apuntar-te" className="w-full h-auto" style={{opacity: 0.9}} />
            <a
              href="https://forms.gle/kmRUNsSKacXLsDG96"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-1/2 left-1/2 flex items-center justify-center font-serif text-[#2d2d2d] font-bold tracking-wide text-center"
              style={{
                transform: 'translate(-52%, -50%)',
                width: '84%',
                lineHeight: 1.1,
                whiteSpace: 'nowrap',
                fontSize: 'clamp(0.7rem, 2vw, 1.05rem)',
                letterSpacing: '0.04em',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                background: 'transparent',
                padding: '0 0.7em',
                textDecoration: 'underline',
                pointerEvents: 'auto',
              }}
            >
              {t('hero.signupHere')}
            </a>
          </div>
        </div>
      </div>

      {/* Right: Video side */}
      <div className="order-1 md:order-2 md:flex-[0_0_40%] h-screen md:h-full relative flex flex-col gap-6 items-center justify-center">
        {/* Primer video: local, muted, autoplay, sin controles ni botón de sonido, ocupa todo el alto */}
        <video
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
        {/* Mobile: Arrow at bottom of video */}
        {isMobile && (
          <ScrollDownArrow
            onClick={scrollToNext}
            className="bottom-24" // move up
            style={{ zIndex: 40 }}
            label={t('hero.scrollDown')}
            big // custom prop for big arrow
          />
        )}
      </div>
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
