import note1 from "@/assets/notes/note-1.svg";
import note3 from "@/assets/notes/note-3.svg";
import note4 from "@/assets/notes/note-4.svg";

// placeholder avatars for team members (stored under src/assets/team)
import avatar1 from "@/assets/team/member-1.svg";
import avatar2 from "@/assets/team/member-2.svg";
import avatar3 from "@/assets/team/member-3.svg";
import avatar4 from "@/assets/team/member-4.svg";
import avatar5 from "@/assets/team/member-5.svg";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  avatar: string; // path to image
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Tamara",
    role: "Directora i acompanyant referent",
    bio: "Arquitecta per formació, pastora de silencis per vocació. Dissenyà cada racó amb la respiració dels muntanyes en ment.",
    avatar: avatar1,
  },
  {
    id: 2,
    name: "Noel Cresencio González",
    role: "Acompanyant referent",
    bio: "Mestre ebenista amb 30 anys d'experiència. Les seves mans saben contar les històries de la fusta.",
    avatar: avatar2,
  },
  {
    id: 3,
    name: "José",
    role: "Tallerista de fustería i tecnologia",
    bio: "Els seus plats són poesia en forma de menjar. Utilitza només el que la terra li ofereix cada estació.",
    avatar: avatar3,
  },
  {
    id: 4,
    name: "Amanda",
    role: "Tallerista de costura i arts",
    bio: "Guía de muntanya certificat. Coneix cada sender com si fos el seu propi cor.",
    avatar: avatar4,
  },
  {
    id: 5,
    name: "Sarai",
    role: "Tallerista d'arts",
    bio: "Escriptora i historiadora. Recull les històries de les pedres, els arbres i les persones que visiten.",
    avatar: avatar5,
  },
];

const TeamSection = () => {
  return (
    <section className="min-h-screen w-full md:snap-start flex flex-col bg-card relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="px-8 md:px-16 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <div className="w-24 h-[1px] bg-foreground opacity-30 mb-8" />
            <h2 className="text-2xl md:text-3xl font-serif leading-relaxed text-foreground max-w-lg">
              Els Guardians de la Vall
            </h2>
            <p className="text-sm md:text-base font-sans leading-loose text-foreground opacity-70 max-w-md mt-6">
              Cada persona aquí porta el pes de les estacions, les seves mans de fer, i una escuta profunda per a la muntanya.
            </p>
          </div>

          {/* Team grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
            {teamMembers.map((member) => (
              <div key={member.id} className="flex flex-col space-y-3">
                {/* member avatar image or fallback initial */}
                <div className="w-full aspect-square bg-background border border-border flex items-center justify-center overflow-hidden">
                  {member.avatar ? (
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="object-cover w-full h-full"
                    />
                  ) : (
                    <span className="text-4xl font-serif text-foreground opacity-30">
                      {member.name[0]}
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="text-base font-serif text-foreground leading-tight">
                    {member.name}
                  </h3>
                  <p className="text-xs font-sans text-foreground opacity-60 uppercase tracking-widest mt-1">
                    {member.role}
                  </p>
                </div>

                <p className="text-xs md:text-sm font-sans leading-relaxed text-foreground opacity-70">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>

          <div className="w-16 h-[1px] bg-foreground opacity-20 mt-16" />
        </div>
      </div>

      {/* Decorative notes */}
      <img src={note1} alt="" className="pointer-events-none hidden md:block absolute left-12 bottom-8 w-32 opacity-85" />
      <img src={note3} alt="" className="pointer-events-none hidden lg:block absolute right-20 top-32 w-28 opacity-80" />
      <img src={note4} alt="" className="pointer-events-none hidden lg:block absolute right-12 bottom-20 w-36 opacity-75" />
    </section>
  );
};

export default TeamSection;
