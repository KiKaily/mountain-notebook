import { useParams, useNavigate } from "react-router-dom";
import { teamMembers } from "../lib/team";

const TeamMemberPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const member = teamMembers.find((m) => m.id === Number(id));

  const handleBack = () => {
    navigate("/", { replace: true });
    setTimeout(() => {
      const el = document.getElementById("team");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  if (!member) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg font-serif">Membre no trobat</p>
      </div>
    );
  }

  return (
    <section className="min-h-screen w-full flex flex-col bg-card relative overflow-hidden px-8 md:px-16 py-20">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={handleBack}
          className="text-sm font-sans text-primary underline hover:opacity-80 mb-6 inline-block"
        >
          ← Tornar
        </button>

        <div className="flex flex-col md:flex-row items-start gap-8">
          <div className="w-40 h-40 bg-background border border-border flex items-center justify-center overflow-hidden">
            {member.avatar ? (
              <img
                src={member.avatar2}
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
            <h1 className="text-2xl font-serif text-foreground leading-tight">
              {member.name}
            </h1>
            <p className="text-sm font-sans text-foreground opacity-60 uppercase tracking-widest mt-1">
              {member.role}
            </p>
            <p className="text-base md:text-lg font-sans leading-relaxed text-foreground opacity-70 mt-4">
              {member.bio}
            </p>
            {/* Placeholder for expanded content */}
            <p className="text-sm font-sans text-foreground opacity-60 mt-8">
              Aquí podríem ampliar la informació sobre {member.name}. Afegirem més detalls, fotografies o històries particulars quan estiguin disponibles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamMemberPage;
