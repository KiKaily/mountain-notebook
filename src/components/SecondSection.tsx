import mountainLandscape from "@/assets/mountain-landscape.jpg";
import TypewriterText from "./TypewriterText";

const SecondSection = () => {
  return (
    <section className="h-screen w-full snap-start flex flex-col md:flex-row overflow-hidden">
      {/* Left: Image side */}
      <div className="flex-1 md:flex-[0_0_40%] h-[50vh] md:h-full relative">
        <img
          src={mountainLandscape}
          alt="Misty mountain landscape"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right: Paper/text side */}
      <div className="flex-1 flex flex-col justify-center items-start px-8 md:px-16 py-12 bg-card relative">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          }}
        />

        <div className="max-w-md relative z-10 space-y-6">
          <div className="w-24 h-[1px] bg-foreground opacity-30 mb-4" />

          <h2 className="text-xl md:text-2xl font-serif leading-relaxed text-foreground">
            <TypewriterText text="Where silence has texture and light has weight." delay={45} />
          </h2>

          <div className="space-y-5 mt-6">
            <p className="text-sm md:text-base font-sans leading-loose text-foreground opacity-80 max-w-xs">
              The valley holds its breath at dusk. Shadows stretch across meadows like ink on parchment, slow and deliberate.
            </p>

            <p className="text-sm md:text-base font-sans leading-loose text-foreground opacity-70 max-w-[260px] rotate-[0.5deg]">
              There is a language here that only the patient can learn — spoken in the creak of timber, the drip of snowmelt, the distant call of a hawk circling above.
            </p>

            <p className="text-sm md:text-base font-sans leading-loose text-foreground opacity-60 max-w-[300px]">
              We built this refuge not to escape the world, but to remember what the world once sounded like before it forgot how to be quiet.
            </p>

            <p className="text-xs font-sans leading-loose text-foreground opacity-40 max-w-[240px] rotate-[-0.8deg] mt-4">
              The fireplace knows every story. The floorboards keep the rhythm of footsteps from decades past. Walls that listen more than they speak.
            </p>
          </div>

          <div className="w-12 h-[1px] bg-foreground opacity-15 mt-6" />
        </div>
      </div>
    </section>
  );
};

export default SecondSection;
