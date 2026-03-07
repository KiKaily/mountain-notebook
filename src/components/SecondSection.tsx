import mountainLandscape from "@/assets/la-llavor1.jpg";
import note1 from "@/assets/notes/note-1.svg";
import note3 from "@/assets/notes/note-3.svg";
import note4 from "@/assets/notes/note-4.svg";
import note6 from "@/assets/notes/note-6.svg";
import TypewriterText from "./TypewriterText";

const SecondSection = () => {
  return (
    <section className="min-h-screen md:h-screen w-full md:snap-start flex flex-col md:flex-row overflow-hidden">
      {/* Left: Image side */}
      <div className="md:flex-[0_0_40%] h-screen md:h-full relative">
        <img
          src={mountainLandscape}
          alt="Paisatge de muntanya amb boira"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right: Paper/text side */}
      <div className="flex-1 flex flex-col justify-center items-start px-8 md:px-16 py-12 bg-card relative min-h-screen md:min-h-0">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          }}
        />

        <div className="max-w-md relative z-10 space-y-6">
          <div className="w-24 h-[1px] bg-foreground opacity-30 mb-4" />

          <h2 className="text-xl md:text-2xl font-serif leading-relaxed text-foreground">
            <TypewriterText text="On el silenci té textura i la llum té pes." delay={45} />
          </h2>

          <div className="space-y-5 mt-6">
            <p className="text-sm md:text-base font-sans leading-loose text-foreground opacity-80 max-w-xs">
              La vall conté la respiració al capvespre. Les ombres s'estenen pels prats com tinta sobre pergamí, lentes i deliberades.
            </p>

            <p className="text-sm md:text-base font-sans leading-loose text-foreground opacity-70 max-w-[260px] rotate-[0.5deg]">
              Hi ha un llenguatge aquí que només els pacients poden aprendre — parlat en el cruixit de la fusta, el degoteig de la neu fosa, la crida llunyana d'un falcó que volta per sobre.
            </p>

            <p className="text-sm md:text-base font-sans leading-loose text-foreground opacity-60 max-w-[300px]">
              Vam construir aquest refugi no per fugir del món, sinó per recordar com sonava el món abans que oblidés com ser silenciós.
            </p>

            <p className="text-xs font-sans leading-loose text-foreground opacity-40 max-w-[240px] rotate-[-0.8deg] mt-4">
              La llar de foc coneix cada història. Les posts del terra guarden el ritme de petjades de dècades passades. Parets que escolten més del que parlen.
            </p>
          </div>

          <div className="w-12 h-[1px] bg-foreground opacity-15 mt-6" />
        </div>

        {/* Decorative handwritten notes */}
        <img src={note1} alt="" className="pointer-events-none hidden md:block absolute left-8 bottom-32 w-24 opacity-90" />
        <img src={note3} alt="" className="pointer-events-none hidden md:block absolute right-6 top-20 w-20 opacity-85" />
        <img src={note4} alt="" className="pointer-events-none hidden lg:block absolute left-40 top-40 w-28 opacity-85" />
        <img src={note6} alt="" className="pointer-events-none hidden lg:block absolute right-20 bottom-40 w-32 opacity-80" />
        <img src={note1} alt="" className="pointer-events-none hidden xl:block absolute left-16 top-60 w-18 opacity-75" />
        <img src={note3} alt="" className="pointer-events-none hidden xl:block absolute right-32 bottom-20 w-22 opacity-70" />
      </div>
    </section>
  );
};

export default SecondSection;
