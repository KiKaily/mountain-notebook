import { useParams, useNavigate } from "react-router-dom";
import { teamMembers } from "../lib/team";
import { findMemberBySlug, getSectionHash } from "@/lib/routes";
import { useTranslation } from "react-i18next";
import { getTeamProfileSections } from "@/lib/teamProfiles";

const TeamMemberPage = () => {
  const { id, memberSlug } = useParams<{ id?: string; memberSlug?: string }>();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const member = findMemberBySlug(memberSlug) || teamMembers.find((m) => m.id === Number(id));
  const profileSections = member
    ? getTeamProfileSections(member.id, i18n.language) ?? [
        {
          title: t("team.profile.presentation"),
          paragraphs: [t(member.bioKey)],
        },
      ]
    : [];
  const cvLinks: Partial<Record<number, string>> = {
    1: "/TamaraCV.pdf",
    2: "/NoelCV.pdf",
    3: "/JoseCV.pdf",
  };

  const handleBack = () => {
    navigate(`/${getSectionHash("team", i18n.language)}`, { replace: true });
    setTimeout(() => {
      const el = document.getElementById("team");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  if (!member) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg font-serif">{t('team.memberNotFound')}</p>
      </div>
    );
  }

  return (
    <section className="min-h-screen w-full flex flex-col bg-card relative overflow-hidden px-8 md:px-16 py-20">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={handleBack}
          className="text-sm font-sans text-primary underline hover:opacity-80 mb-8 inline-block"
        >
          ← {t('team.backToTeam')}
        </button>

        <div className="flex flex-col md:flex-row items-start gap-12">
          <div className="flex-shrink-0">
              <div className="w-56 aspect-[3/4] bg-cover bg-center border border-border"
                style={{
                  backgroundImage: `url(${member.hoverAvatar})`,
                }}
              />
          </div>

          <div className="flex-1 space-y-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-serif text-foreground leading-tight">
                  {member.name}
              </h1>
              <p className="text-sm font-sans text-foreground opacity-50 uppercase tracking-widest mt-2">
                {t(member.roleKey)}
              </p>
            </div>

            <div className="w-16 h-[1px] bg-foreground opacity-20" />

            <div className="space-y-6">
              {profileSections.map((section) => (
                <div key={section.title}>
                  <h2 className="text-lg font-serif text-foreground mb-3">{section.title}</h2>
                  <div className="space-y-4">
                    {section.paragraphs.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="text-base md:text-lg font-sans leading-relaxed text-foreground opacity-75"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="w-16 h-[1px] bg-foreground opacity-20" />

            <p className="text-sm font-sans leading-relaxed text-foreground opacity-60 italic">
              {t("team.profile.contactNote", { name: member.name })}
            </p>

            {cvLinks[member.id] && (
              <a
                href={cvLinks[member.id]}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-sans text-primary underline hover:opacity-80 block mt-8"
              >
                {t("team.profile.cvLink")}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamMemberPage;
