import mountainVideo from "@/assets/mountain-house.mp4";
import TypewriterText from "./TypewriterText";

const HeroSection = () => {
  return (
    <section className="h-screen w-full snap-start flex flex-col-reverse md:flex-row overflow-hidden">
      {/* Left: Paper/text side */}
      <div className="flex-1 flex flex-col justify-center items-start px-8 md:px-16 py-12 bg-card relative">
        {/* Paper texture overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          }}
        />

        <div className="max-w-md relative z-10 space-y-8">
          <div className="w-24 h-[1px] bg-foreground opacity-30 mb-6" />

          <h1 className="text-2xl md:text-3xl font-serif leading-relaxed tracking-wide text-foreground">
            <TypewriterText text="A place where the mountains breathe and the stones remember." delay={50} />
          </h1>

          <div className="space-y-6 mt-8">
            <p className="text-sm md:text-base font-sans leading-loose text-foreground opacity-80 max-w-xs">
              Nestled between ancient peaks, where morning fog drifts through valleys like whispered stories carried on cold wind.
            </p>

            <p className="text-sm md:text-base font-sans leading-loose text-foreground opacity-60 max-w-[280px] rotate-[-1deg]">
              Each stone placed by hands that knew the weight of seasons. Each window framing a painting that never repeats.
            </p>
          </div>

          <div className="w-16 h-[1px] bg-foreground opacity-20 mt-8" />
        </div>
      </div>

      {/* Right: Video side */}
      <div className="flex-1 md:flex-[0_0_40%] h-[50vh] md:h-full relative">
        <video
          className="w-full h-full object-cover"
          src={mountainVideo}
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
    </section>
  );
};

export default HeroSection;
