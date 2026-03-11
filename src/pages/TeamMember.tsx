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
          className="text-sm font-sans text-primary underline hover:opacity-80 mb-8 inline-block"
        >
          ← Tornar a l'equip
        </button>

        <div className="flex flex-col md:flex-row items-start gap-12">
          <div className="flex-shrink-0">
            <div className="w-56 aspect-[3/4] bg-cover bg-center border border-border rounded"
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
                {member.role}
              </p>
            </div>

            <div className="w-16 h-[1px] bg-foreground opacity-20" />

            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-serif text-foreground mb-3">Presentació</h2>
                <p className="text-base md:text-lg font-sans leading-relaxed text-foreground opacity-75">
                  {member.bio}
                </p>
              </div>

              <div>
                <h2 className="text-lg font-serif text-foreground mb-3">L'acompanyament a La Llavor</h2>
                <p className="text-base md:text-lg font-sans leading-relaxed text-foreground opacity-75">
                  {member.name} acompanya les criatures des de la seva experiència i saber, creant espais segurs per a l'exploració i el creixement. Cada activitat és una oportunitat per a aprendre del que la natura i la comunitat ofereixen.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-serif text-foreground mb-3">Taller o especialitat</h2>
                <p className="text-base md:text-lg font-sans leading-relaxed text-foreground opacity-75">
                  {member.role} — És aquí on {member.name} desplegà la seva passió i expertesa amb les criatures, combinant joc, creativitat i aprenentatge práctico.
                </p>
              </div>
            </div>

            <div className="w-16 h-[1px] bg-foreground opacity-20" />

            <p className="text-sm font-sans leading-relaxed text-foreground opacity-60 italic">
              Si desitges conèixer més sobre l'acompanyament de {member.name} i la nostra pedagogia, no dubtis en contactar-nos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamMemberPage;
