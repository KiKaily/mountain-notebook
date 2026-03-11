import mountainVideo from "@/assets/la-llavor-video.mp4";
import seedLogo from "@/assets/seed-logo.png";
import note1 from "@/assets/notes/note-1.svg";
import note2 from "@/assets/notes/note-2.svg";
import note3 from "@/assets/notes/note-3.svg";
import note4 from "@/assets/notes/note-4.svg";
import note5 from "@/assets/notes/note-5.svg";
import note6 from "@/assets/notes/note-6.svg";
import note7 from "@/assets/notes/note-7.svg";
import tape from "@/assets/tape.png";
import TypewriterText from "./TypewriterText";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="min-h-screen md:h-screen w-full md:snap-start flex flex-col md:flex-row overflow-hidden">
      {/* Left: Paper/text side */}
      <div className="order-2 md:order-1 flex-1 flex flex-col justify-center items-start px-8 md:px-16 py-12 bg-card relative min-h-screen md:min-h-0">
        {/* Paper texture overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Logo and Language Switcher — positioned over the horizontal rule above titles */}
        <div className="absolute top-16 right-8 md:top-20 md:right-8 z-20 flex items-center space-x-4">
          <LanguageSwitcher />
          <img src={seedLogo} alt="La Llavor" className="w-12 h-12 md:w-16 md:h-16 opacity-90 mix-blend-multiply" />
        </div>

        <div className="max-w-md relative z-10 space-y-8 mt-32 md:mt-36">
          <div className="w-24 h-[1px] bg-foreground opacity-30 mb-6" />

          <h1 className="text-2xl md:text-3xl font-serif leading-relaxed tracking-wide text-foreground">
            <TypewriterText text={t('hero.title1')} delay={50} />
          </h1>
          <h1 className="text-2xl md:text-3xl font-serif leading-relaxed tracking-wide text-foreground">
            <TypewriterText text={t('hero.title2')} delay={50} />
          </h1>

          <div className="space-y-6 mt-8">
            <p className="text-sm md:text-base font-sans leading-loose text-foreground opacity-80 max-w-xs">
              {t('hero.description1')}
            </p>

            <p className="text-sm md:text-base font-sans leading-loose text-foreground opacity-60 max-w-[280px] rotate-[-1deg]">
              {t('hero.description2')}
            </p>
          </div>

          <div className="w-16 h-[1px] bg-foreground opacity-20 mt-8" />
        </div>

        {/* Decorative handwritten notes (transparent backgrounds). Kept off text and positioned inside the paper area so they scroll with content. */}
        <img src={note1} alt="" className="pointer-events-none hidden md:block absolute left-6 bottom-24 w-20 opacity-95" />
        <img src={note2} alt="" className="pointer-events-none hidden md:block absolute right-24 top-40 w-24 opacity-95" />
        <img src={note3} alt="" className="pointer-events-none hidden md:block absolute left-12 top-56 w-16 opacity-95" />
        <img src={note4} alt="" className="pointer-events-none hidden lg:block absolute right-32 bottom-40 w-28 opacity-90" />
        <img src={note5} alt="" className="pointer-events-none hidden lg:block absolute left-32 top-20 w-36 opacity-85" />

        {/* Painter tape note with text overlay, aligned with logo, smaller, padded, and 90% opacity */}
        <div
          className="absolute z-10 pointer-events-none select-none flex items-center"
          style={{
            left: '2.5rem',
            top: '4.5rem',
            width: '22rem', // smaller tape
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
                  width: '84%', // more margin
                  lineHeight: 1.1,
                  whiteSpace: 'nowrap',
                  fontSize: 'clamp(0.7rem, 2vw, 1.05rem)', // smaller max size
                  letterSpacing: '0.04em',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  background: 'transparent',
                  padding: '0 0.7em', // more horizontal padding
                }}
              >
                Portes obertes 18 d'abril
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Right: Video side */}
      <div className="order-1 md:order-2 md:flex-[0_0_40%] h-screen md:h-full relative">
        <video
          className="w-full h-full object-cover"
          src={mountainVideo}
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
      {/* Painter tape note — moved inside the left text area so it scrolls with content. */}
    </section>
  );
};

export default HeroSection;
