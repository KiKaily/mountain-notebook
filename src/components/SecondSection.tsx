import mountainLandscape from "@/assets/la-llavor1.jpg";
import mountainVideo from "@/assets/la-llavor-video.mp4";
import { NavLink } from "@/components/NavLink";
import { useTranslation } from "react-i18next";

const SecondSection = () => {
  const { t } = useTranslation();

  return (
    <section id="second-section" className="min-h-screen md:h-screen w-full md:snap-start flex flex-col md:flex-row overflow-hidden">
      {/* Left: Video side */}
      <div className="md:flex-[0_0_40%] h-screen md:h-full relative">
        <video
          className="w-full h-full object-cover"
          src={mountainVideo}
          poster={mountainLandscape}
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      {/* Right: Paper/text side */}
      <div className="flex-1 flex flex-col justify-center items-start px-8 md:px-16 py-12 bg-card relative min-h-screen md:min-h-0">
        {/* SVG overlay removed */}

        <div className="max-w-3xl relative z-10 space-y-6">
          <div className="w-24 h-[1px] bg-foreground opacity-30 mb-4" />

          {/* Title changed to 'Naixement' */}
          <h2 className="text-2xl md:text-3xl font-serif leading-relaxed text-foreground">
            Naixement
          </h2>

          <div className="space-y-5 mt-6">
            <p className="text-xs md:text-sm font-sans leading-loose text-foreground opacity-80">
              {t('second.text1')}
            </p>

            <p className="text-xs md:text-sm font-sans leading-loose text-foreground opacity-70">
              {t('second.text2')}
            </p>

            <p className="text-xs md:text-sm font-sans leading-loose text-foreground opacity-60">
              {t('second.text3')}
            </p>

            <p className="text-xs md:text-sm font-sans leading-loose text-foreground opacity-90 mt-4">
              {t('second.text4')}
            </p>

            <NavLink
              to="/second-read-more"
              className="inline-block text-sm font-sans text-primary underline hover:opacity-80 mt-4"
            >
              {t('second.readMore')}
            </NavLink>
          </div>

          <div className="w-12 h-[1px] bg-foreground opacity-15 mt-6" />
        </div>

        {/* Decorative notes removed */}
      </div>
    </section>
  );
};

export default SecondSection;
