
import { NavLink } from "@/components/NavLink";
import { teamMembers } from "../lib/team";
import { useTranslation } from "react-i18next";
import { getTeamMemberPath } from "@/lib/routes";


const TeamSection = () => {
  const { t, i18n } = useTranslation();

  return (
    <section id="team" className="min-h-screen w-full md:snap-start flex flex-col bg-card relative overflow-hidden">
      {/* SVG overlay removed */}

      <div className="px-8 md:px-16 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <div className="w-24 h-[1px] bg-foreground opacity-30 mb-8" />
              <h2 className="text-3xl md:text-4xl font-serif text-foreground leading-tight mb-8">
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
              <h3 className="text-lg font-serif text-foreground mb-6">{t('team.coreTitle')}</h3>
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
                        {t(member.roleKey)}
                      </p>
                      <p className="text-sm font-sans leading-relaxed text-foreground opacity-70 mt-3">
                        {t(member.bioKey)}
                      </p>
                      <div className="mt-3">
                        <NavLink
                          to={getTeamMemberPath(i18n.language, member)}
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
              <h3 className="text-lg font-serif text-foreground mb-6">{t('team.helpersTitle')}</h3>
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
                        {t(member.roleKey)}
                      </p>
                      <p className="text-xs font-sans leading-relaxed text-foreground opacity-70 mt-2">
                        {t(member.bioKey)}
                      </p>
                      <div className="mt-2">
                        <NavLink
                          to={getTeamMemberPath(i18n.language, member)}
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

      {/* Decorative notes removed */}
    </section>
  );
};

export default TeamSection;
