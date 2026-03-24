
import { NavLink } from "@/components/NavLink";
import ScrollDownArrow from "./ScrollDownArrow";
import { useIsMobile } from "@/hooks/use-mobile";
import { teamMembers } from "../lib/team";
import { useTranslation } from "react-i18next";
import { getTeamMemberPath } from "@/lib/routes";


const TeamSection = () => {
  const { t, i18n } = useTranslation();
  const isMobile = useIsMobile();
  const prepareBackToTeamUrl = () => {
    if (typeof window === "undefined") return;
    const teamHash = getSectionHash("team", i18n.language);
    const nextUrl = `/${teamHash}`;
    if (`${window.location.pathname}${window.location.hash}` !== nextUrl) {
      window.history.replaceState(window.history.state, "", nextUrl);
    }
  };

  // Helper to scroll to next section
  const scrollToNext = () => {
    const next = document.getElementById("contact-section");
    if (next) next.scrollIntoView({ behavior: "smooth" });
  };

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
          {/* Arrow at bottom of section (desktop & mobile, except last section) */}
          <ScrollDownArrow
            onClick={scrollToNext}
            className="bottom-4 md:bottom-8"
            label={t('team.scrollDown')}
          />

          {/* Team grid */}
          <div className="space-y-12">
            {/* Core Team */}
            <div>
              <h3 className="text-lg font-serif text-foreground mb-6">{t('team.coreTitle')}</h3>
              <div className="flex flex-col gap-12">
                {/* Tamara */}
                {(() => {
                  const tamara = teamMembers.find(m => m.name.includes('Tamara'));
                  if (!tamara) return null;
                  return (
                    <div key={tamara.id} className={isMobile ? "flex flex-col items-start gap-4 py-8" : "flex flex-row items-start gap-8 md:gap-16 py-8 md:py-12"}>
                      <div
                        className={isMobile ? "w-40 aspect-[3/4] bg-cover bg-center border border-border flex-shrink-0 shadow-md" : "w-full max-w-[320px] md:w-56 aspect-[3/4] bg-cover bg-center border border-border flex-shrink-0 shadow-md"}
                        style={{
                          backgroundImage: `url(${tamara.avatar})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundImage = `url(${tamara.hoverAvatar})`}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundImage = `url(${tamara.avatar})`}
                      />
                      <div className={isMobile ? "w-full mt-4" : "flex-1 w-full max-w-2xl overflow-x-auto"}>
                        <h3 className="text-2xl md:text-3xl font-serif text-foreground leading-tight">{tamara.name}</h3>
                        <p className="text-base md:text-lg font-sans text-foreground opacity-60 uppercase tracking-widest mt-2">{t(tamara.roleKey)}</p>
                        <p className="text-base md:text-lg font-sans leading-relaxed text-foreground opacity-70 mt-4 break-words whitespace-pre-line">{t(tamara.bioKey)}</p>
                        <div className="mt-4">
                          <NavLink
                            to={getTeamMemberPath(i18n.language, tamara)}
                            onClick={prepareBackToTeamUrl}
                            className="text-base md:text-lg font-sans text-primary underline hover:opacity-80"
                          >
                            {t('team.viewMore')}
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  );
                })()}
                {/* Noel */}
                {(() => {
                  const noel = teamMembers.find(m => m.name.includes('Noel'));
                  if (!noel) return null;
                  return (
                    <div key={noel.id} className={isMobile ? "flex flex-col items-start gap-4 py-8" : "flex flex-row items-start gap-8 md:gap-16 py-8 md:py-12"}>
                      <div
                        className={isMobile ? "w-40 aspect-[3/4] bg-cover bg-center border border-border flex-shrink-0 shadow-md" : "w-full max-w-[320px] md:w-56 aspect-[3/4] bg-cover bg-center border border-border flex-shrink-0 shadow-md"}
                        style={{
                          backgroundImage: `url(${noel.avatar})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundImage = `url(${noel.hoverAvatar})`}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundImage = `url(${noel.avatar})`}
                      />
                      <div className={isMobile ? "w-full mt-4" : "flex-1 w-full max-w-2xl overflow-x-auto"}>
                        <h3 className="text-2xl md:text-3xl font-serif text-foreground leading-tight">{noel.name}</h3>
                        <p className="text-base md:text-lg font-sans text-foreground opacity-60 uppercase tracking-widest mt-2">{t(noel.roleKey)}</p>
                        <p className="text-base md:text-lg font-sans leading-relaxed text-foreground opacity-70 mt-4 break-words whitespace-pre-line">{t(noel.bioKey)}</p>
                        <div className="mt-4">
                          <NavLink
                            to={getTeamMemberPath(i18n.language, noel)}
                            onClick={prepareBackToTeamUrl}
                            className="text-base md:text-lg font-sans text-primary underline hover:opacity-80"
                          >
                            {t('team.viewMore')}
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  );
                })()}
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
                          onClick={prepareBackToTeamUrl}
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
