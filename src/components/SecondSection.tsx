import { NavLink } from "@/components/NavLink";
import { useTranslation } from "react-i18next";
import { getReadMorePath } from "@/lib/routes";

const SecondSection = () => {
  const { t, i18n } = useTranslation();
  // Video replaced by Instagram reel embed

  // No video logic needed for Instagram embed

  return (
    <section id="second-section" className="min-h-screen md:h-screen w-full md:snap-start flex flex-col md:flex-row overflow-hidden">
      {/* Left: Instagram Reel embed instead of video */}
      <div className="md:flex-[0_0_40%] h-screen md:h-full relative flex items-center justify-center bg-black">
        {/* Instagram embed with attempt to hide UI overlays */}
        <style>{`
          /* Hide Instagram header and action bar if possible */
          .insta-embed-no-ui iframe {
            height: 100% !important;
          }
          .insta-embed-no-ui iframe::-webkit-scrollbar { display: none; }
        `}</style>
        <div className="insta-embed-no-ui w-full h-full">
          <iframe
            src="https://www.instagram.com/reel/DHqRqzbIik9/embed"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="Instagram Reel"
            className="w-full h-full border-none"
            style={{ minHeight: '340px', maxHeight: '100%', background: 'black' }}
          ></iframe>
        </div>
      </div>

      {/* Right: Paper/text side */}
      <div className="flex-1 flex flex-col justify-center items-start px-8 md:px-16 py-12 bg-card relative min-h-screen md:min-h-0">
        {/* SVG overlay removed */}

        <div className="max-w-3xl relative z-10 space-y-6">
          <div className="w-24 h-[1px] bg-foreground opacity-30 mb-4" />

          <h2 className="text-2xl md:text-3xl font-serif leading-relaxed text-foreground">
            {t('second.title')}
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
              to={getReadMorePath(i18n.language)}
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
