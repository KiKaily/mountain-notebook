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
              {member.id === 2 ? (
                <>
                  <div>
                    <h2 className="text-lg font-serif text-foreground mb-3">Presentació</h2>
                    <p className="text-base md:text-lg font-sans leading-relaxed text-foreground opacity-75">
                      Acompanyant Infantil, Terapeuta d’Integració Psico-corporal i Psicomotricista Preventiu Aucouturier.
                    </p>
                  </div>
                  <div>
                    <h2 className="text-lg font-serif text-foreground mb-3">L'acompanyament a La Llavor</h2>
                    <p className="text-base md:text-lg font-sans leading-relaxed text-foreground opacity-75">
                      Noel Cresencio González acompanya les criatures des de la seva experiència i saber, creant vincles segurs per a la relació, l'exploració i el creixement de cada infant. Cada moment és una oportunitat per a aprendre del que el grup i la vida ofereixen.
                    </p>
                  </div>
                  <div>
                    <h2 className="text-lg font-serif text-foreground mb-3">Especialitat</h2>
                    <p className="text-base md:text-lg font-sans leading-relaxed text-foreground opacity-75">
                      Acompanyament relacional, al joc lliure i als processos de projectes personals i grupals, enriquint i cuidant. Creativitat i aprenentatge pràctic. Vídeo, digital, jocs de taula, anglès, matemàtiques aplicades, cos i moviment.
                    </p>
                  </div>
                  <div>
                    <h2 className="text-lg font-serif text-foreground mb-3">Recorregut</h2>
                    <p className="text-base md:text-lg font-sans leading-relaxed text-foreground opacity-75">
                      Vaig créixer en un entorn d'educació viva a casa. La meva mare, Begoña González, al costat del meu padrí Cristóbal Gutiérrez, va fundar La Caseta a Barcelona (1996) i l'escola viva El Roure (2001). El meu pare, Gustavo Cresencio, és mestre de tai-chi, chi-kung, arts marcials i creixement personal. Vaig estudiar a l'escola estatal, un any en El Roure, i als 14 anys em vaig traslladar a Anglaterra per a estudiar en Brockwood Park School, internat internacional fundat en 1969 pel filòsof i mestre espiritual JidduKrishnamurti.<br /><br />
                      En 2008-2010 em vaig formar en cinema, fotografia i interpretació en Filmosofía (Granada). Les meves principals formacions inclouen:<br /><br />
                      · Psicoterapeuta en Integració Psico-Corporal en la ETIP amb Marc Costa i Agustín Prieto (2013-2018).<br />
                      · Psicomotricista en Pràctica Preventiva Aucouturier en la AEC amb Iolanda Vives (2011-2012).<br />
                      · Educació viva amb Jordi Mateu (2013) i amb Begoña González (2014 i 2024).<br /><br />
                      També em vaig especialitzar en comunicació conscient amb Chema Irusta i Begoña González; acompanyament emocional, agressivitat i conflictes en Senda amb Verónica Antón; i Seitai en Espaidó amb Magda Berneda.<br /><br />
                      Des de 2011 vaig treballar 14 anys a l'escola Congrés-Indians, en la franja de migdia i fent costat a l'equip docent en la jornada lectiva. A més, vaig ser assistent terapeuta psicomotriu de Verónica Antón en Senda (2014-2015).<br /><br />
                      En 2018 vaig cofundar Kun Koro, i en 2024 vaig llançar Rcrear amb Cristina, un estudi creatiu de disseny gràfic i comunicació honesta.<br /><br />
                      L'any 2026 vaig arribar a La Llavor, un regal de la vida i de Tamara, amb qui ens coneixíem de Congrès-Indians i que va apostar per mi. =)
                    </p>
                  </div>
                </>
              ) : member.id === 1 ? (
                <>
                  ...existing code...
                </>
              ) : member.id === 3 ? (
                <>
                  <div>
                    <h2 className="text-lg font-serif text-foreground mb-3">Presentació</h2>
                    <p className="text-base md:text-lg font-sans leading-relaxed text-foreground opacity-75">
                      Acompanyant en projectes d'Educació Viva i Educador Emocional en el Lleure. Format en diferents pedagogies educatives i en Enginyeria. El seu camí vital forma part del seu procés d'aprenentatge.
                    </p>
                  </div>
                  <div>
                    <h2 className="text-lg font-serif text-foreground mb-3">L'acompanyament a la Llavor</h2>
                    <p className="text-base md:text-lg font-sans leading-relaxed text-foreground opacity-75">
                      Creació d'espais d'aprenentatge vivencials i segurs, acompanyant a través del que s'està donant en cada moment i de l'observació dels diferents processos dels infants a tots els nivells.
                    </p>
                  </div>
                  <div>
                    <h2 className="text-lg font-serif text-foreground mb-3">Taller o especialitat</h2>
                    <p className="text-base md:text-lg font-sans leading-relaxed text-foreground opacity-75">
                      A la fusteria a mida que els infants crean van construint-se internament posant les bases de la seva seguretat a l'hora d'afrontar projectes o reptes més grans. Explorar, provar i equivocar-se forma part d'aquest aprenentatge.
                    </p>
                  </div>
                </>
              ) : (
                <>...existing code...</>
              )}
            </div>

            <div className="w-16 h-[1px] bg-foreground opacity-20" />

            <p className="text-sm font-sans leading-relaxed text-foreground opacity-60 italic">
              Si desitges conèixer més sobre l'acompanyament de {member.name} i la nostra pedagogia, no dubtis en contactar-nos.
            </p>

            {/* CV links at the very bottom for Tamara and Noel */}
            {member.id === 1 && (
              <a
                href="/public/TamaraCV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-sans text-primary underline hover:opacity-80 block mt-8"
              >
                Per veure el CV complert, clica aquí
              </a>
            )}
            {member.id === 2 && (
              <a
                href="/public/NoelCV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-sans text-primary underline hover:opacity-80 block mt-8"
              >
                Per veure el CV complert, clica aquí
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamMemberPage;
