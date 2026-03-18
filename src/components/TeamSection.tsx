import note1 from "@/assets/notes/note-1.svg";
import note2 from "@/assets/notes/note-2.svg";
import note3 from "@/assets/notes/note-3.svg";
import note4 from "@/assets/notes/note-4.svg";
import note5 from "@/assets/notes/note-5.svg";

import { NavLink } from "@/components/NavLink";
import { teamMembers } from "../lib/team";
import { useTranslation } from "react-i18next";


const TeamSection = () => {
  const { t } = useTranslation();

  return (
    <section id="team" className="min-h-screen w-full md:snap-start flex flex-col bg-card relative overflow-hidden">
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
              {t('team.title')}
            </h2>
            <p className="text-sm md:text-base font-sans leading-loose text-foreground opacity-70 max-w-md mt-6">
              {t('team.description')}
            </p>
          </div>

          {/* Team grid */}
          <div className="space-y-12">
            {/* Core Team */}
            <div>
              <h3 className="text-lg font-serif text-foreground mb-6">Equip Referent</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {teamMembers.filter(m => m.category === 'core').map((member) => (
                  <div key={member.id} className="flex space-x-6">
                    {/* member avatar image */}
                    <div
                      className="w-32 aspect-[3/4] bg-cover bg-center border border-border flex-shrink-0"
                      style={{
                        backgroundImage: `url(${member.avatar})`,
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundImage = `url(${member.hoverAvatar})`}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundImage = `url(${member.avatar})`}
                    />

                    <div className="flex-1">
                      <h3 className="text-lg font-serif text-foreground leading-tight">
                        {member.name}
                      </h3>
                      <p className="text-sm font-sans text-foreground opacity-60 uppercase tracking-widest mt-1">
                        {member.role}
                      </p>
                      <p className="text-sm font-sans leading-relaxed text-foreground opacity-70 mt-3">
                        {member.bio}
                      </p>
                      <div className="mt-3">
                        <NavLink
                          to={`/team/${member.id}`}
                          className="text-sm font-sans text-primary underline hover:opacity-80"
                        >
                          {t('team.viewMore')}
                        </NavLink>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Helpers */}
            <div>
              <h3 className="text-lg font-serif text-foreground mb-6">Col·laboradors</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {teamMembers.filter(m => m.category === 'helper').map((member) => (
                  <div key={member.id} className="flex flex-col items-center space-y-3">
                    {/* member avatar image */}
                    <div
                      className="w-24 aspect-[3/4] bg-cover bg-center border border-border"
                      style={{
                        backgroundImage: `url(${member.avatar})`,
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundImage = `url(${member.hoverAvatar})`}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundImage = `url(${member.avatar})`}
                    />

                    <div className="text-center">
                      <h3 className="text-base font-serif text-foreground leading-tight">
                        {member.name}
                      </h3>
                      <p className="text-xs font-sans text-foreground opacity-60 uppercase tracking-widest mt-1">
                        {member.role}
                      </p>
                      <p className="text-xs font-sans leading-relaxed text-foreground opacity-70 mt-2">
                        {member.bio}
                      </p>
                      <div className="mt-2">
                        <NavLink
                          to={`/team/${member.id}`}
                          className="text-xs font-sans text-primary underline hover:opacity-80"
                        >
                          {t('team.viewMore')}
                        </NavLink>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          <div className="w-16 h-[1px] bg-foreground opacity-20 mt-16" />
        </div>
      </div>

      {/* Decorative notes */}
      <img src={note1} alt="" className="pointer-events-none hidden md:block absolute left-12 bottom-8 w-32 opacity-85" />
      <img src={note3} alt="" className="pointer-events-none hidden lg:block absolute right-20 top-32 w-28 opacity-80" />
      <img src={note4} alt="" className="pointer-events-none hidden lg:block absolute right-12 bottom-20 w-36 opacity-75" />
      {/* <img src={note2} alt="" className="pointer-events-none hidden xl:block absolute left-32 top-16 w-24 opacity-70" />
      <img src={note5} alt="" className="pointer-events-none hidden xl:block absolute right-40 bottom-32 w-30 opacity-65" /> */}
    </section>
  );
};

export default TeamSection;
