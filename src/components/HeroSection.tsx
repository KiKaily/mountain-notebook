import mountainVideo from "@/assets/la-llavor-video.mp4";
import seedLogo from "@/assets/la_llavor_logo.png";
import tape from "@/assets/tape.png";

import TypewriterText from "./TypewriterText";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";
import { useEffect, useRef, useState } from "react";
import { getSectionHash } from "@/lib/routes";

const HeroSection = () => {
  const { t, i18n } = useTranslation();
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [showVideoFallback, setShowVideoFallback] = useState(false);
  const heroPosterPath = "/hero-video-thumbnail.jpg";

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.play().catch(() => {
      // Some browsers delay autoplay until enough data is available.
    });
  }, []);

  useEffect(() => {
    if (isVideoReady) return;
    const timeout = setTimeout(() => {
      setShowVideoFallback(true);
    }, 8000);
    return () => clearTimeout(timeout);
  }, [isVideoReady]);

  const handleManualPlay = () => {
    if (!videoRef.current) return;
    videoRef.current.play().then(() => {
      setIsVideoReady(true);
    }).catch(() => {
      // If play still fails, keep the fallback UI visible.
    });
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="min-h-screen md:h-screen w-full md:snap-start flex flex-col md:flex-row overflow-hidden">
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
          <h1 className="text-2xl md:text-3xl font-serif leading-relaxed tracking-wide text-foreground">
            <TypewriterText text={t('hero.title2')} delay={50} startDelay={500} />
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
              <span
                className="font-serif text-[#2d2d2d] font-bold tracking-wide text-center"
                style={{
                  width: '84%',
                  lineHeight: 1.1,
                  whiteSpace: 'nowrap',
                  fontSize: 'clamp(0.7rem, 2vw, 1.05rem)',
                  letterSpacing: '0.04em',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  background: 'transparent',
                  padding: '0 0.7em',
                }}
              >
                Portes obertes el 18 d'abril
              </span>
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
              clica aquí per apuntar-te
            </a>
          </div>
        </div>
      </div>

      {/* Right: Video side */}
      <div className="order-1 md:order-2 md:flex-[0_0_40%] h-screen md:h-full relative">
        <div
          className={`absolute inset-0 z-10 transition-opacity duration-500 ${isVideoReady ? "opacity-0 pointer-events-none" : "opacity-100"}`}
          style={{
            backgroundColor: "hsl(var(--muted))",
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.12), rgba(0, 0, 0, 0.12)), url(${heroPosterPath})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-black/10 text-white">
            <img src={seedLogo} alt="La Llavor" className="w-16 md:w-20 h-auto opacity-90" />
            {!showVideoFallback ? (
              <>
                <div className="h-8 w-8 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                <p className="text-xs md:text-sm font-sans uppercase tracking-[0.2em] opacity-90">
                  {t('common.loadingVideo')}
                </p>
              </>
            ) : (
              <button
                onClick={handleManualPlay}
                className="px-4 py-2 bg-white/85 text-foreground text-xs md:text-sm font-sans uppercase tracking-[0.15em]"
              >
                {t('common.playVideo')}
              </button>
            )}
          </div>
        </div>
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          loop
          preload="auto"
          poster={heroPosterPath}
          muted={isMuted}
          defaultMuted
          playsInline
          onLoadedData={(event) => {
            setIsVideoReady(true);
            event.currentTarget.play().catch(() => {
              // Ignore autoplay rejection; muted playback is attempted again on interaction.
            });
          }}
          onCanPlay={() => setIsVideoReady(true)}
          onError={() => setShowVideoFallback(true)}
        >
          <source src={mountainVideo} type="video/mp4" />
        </video>
        {isMuted && (
          <button
            onClick={toggleMute}
            className="absolute bottom-8 right-8 bg-primary text-primary-foreground px-4 py-2 rounded-full font-serif text-sm hover:opacity-90 transition-opacity shadow-lg"
          >
            🔊 Activar so
          </button>
        )}
      </div>
      {/* Painter tape note — moved inside the left text area so it scrolls with content. */}
    </section>
  );
};

export default HeroSection;
