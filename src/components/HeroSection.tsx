import mountainVideo from "@/assets/mountain-house.mp4";
import seedLogo from "@/assets/seed-logo.png";
import TypewriterText from "./TypewriterText";

const HeroSection = () => {
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

        {/* Logo — like a notebook stamp */}
        <div className="absolute top-8 left-8 md:top-10 md:left-12 z-20 flex flex-col items-center gap-1">
          <img src={seedLogo} alt="La Llavor" className="w-12 h-12 md:w-16 md:h-16 opacity-80 mix-blend-multiply" />
          <span className="font-serif text-[10px] md:text-xs tracking-[0.3em] uppercase text-foreground opacity-50">
            la llavor
          </span>
        </div>

        <div className="max-w-md relative z-10 space-y-8 mt-24 md:mt-0">
          <div className="w-24 h-[1px] bg-foreground opacity-30 mb-6" />

          <h1 className="text-2xl md:text-3xl font-serif leading-relaxed tracking-wide text-foreground">
            <TypewriterText text="Un lloc on les muntanyes respiren i les pedres recorden." delay={50} />
          </h1>

          <div className="space-y-6 mt-8">
            <p className="text-sm md:text-base font-sans leading-loose text-foreground opacity-80 max-w-xs">
              Arrecerat entre cims antics, on la boira del matí travessa les valls com històries xiuxiuejades portades pel vent fred.
            </p>

            <p className="text-sm md:text-base font-sans leading-loose text-foreground opacity-60 max-w-[280px] rotate-[-1deg]">
              Cada pedra col·locada per mans que coneixien el pes de les estacions. Cada finestra emmarcant un quadre que mai es repeteix.
            </p>
          </div>

          <div className="w-16 h-[1px] bg-foreground opacity-20 mt-8" />
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
      {/* Painter tape note — announcement */}
      <div className="absolute top-8 right-4 md:top-10 md:left-[45%] md:right-[5%] z-30 flex justify-end md:justify-center pointer-events-none">
        <div
          className="pointer-events-auto px-8 py-2 md:px-12 md:py-3 rotate-[-1.5deg] relative"
          style={{
            background: 'hsl(35 30% 82% / 0.85)',
            boxShadow: '0 1px 4px hsl(0 0% 0% / 0.06)',
          }}
        >
          {/* Paper texture on tape */}
          <div className="absolute inset-0 opacity-[0.08] pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='60' height='60' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
            }}
          />
          <p className="font-serif text-xs md:text-sm tracking-[0.25em] uppercase text-foreground/70 whitespace-nowrap relative z-10">
            Portes obertes 7 març
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
