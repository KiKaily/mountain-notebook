const Footer = () => {
  return (
    <footer className="min-h-screen md:h-screen w-full md:snap-start flex flex-col justify-end bg-card relative">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="flex-1 flex items-center px-8 md:px-16 py-12">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          {/* Left text block */}
          <div className="space-y-6">
            <div className="w-24 h-[1px] bg-foreground opacity-30" />
            <p className="text-sm md:text-base font-sans leading-loose text-foreground opacity-80 max-w-xs">
              El matí arriba sense avisar — només un rentat lent d'or pel terra de fusta, escalfant pedres que han aguantat el fred tota la nit.
            </p>
            <p className="text-sm md:text-base font-sans leading-loose text-foreground opacity-70 max-w-[260px] rotate-[0.3deg]">
              La cuina fa olor de cafè i pi. Una finestra oberta deixa que l'aire de muntanya s'instal·li entre les pàgines d'un llibre sense llegir.
            </p>
            <p className="text-xs font-sans leading-loose text-foreground opacity-50 max-w-[240px] rotate-[-0.5deg]">
              Alguns matins la boira és tan espessa que oblides que hi ha una vall a sota. Et poses a la porta i respires, i això és suficient.
            </p>
            <div className="w-12 h-[1px] bg-foreground opacity-15" />
          </div>

          {/* Right text block */}
          <div className="space-y-6 md:mt-16">
            <div className="w-16 h-[1px] bg-foreground opacity-20" />
            <p className="text-sm md:text-base font-sans leading-loose text-foreground opacity-75 max-w-[280px]">
              Cada vespre les muntanyes assagen la seva desaparició — les vores s'estoven, els colors es drenen, fins que només queden siluetes contra l'última llum.
            </p>
            <p className="text-sm md:text-base font-sans leading-loose text-foreground opacity-60 max-w-[250px] rotate-[0.6deg]">
              L'estufa de llenya fa tic-tac i sospira. A fora, els estels apareixen un per un, com si algú els recordés perquè existeixin.
            </p>
            <p className="text-xs font-sans leading-loose text-foreground opacity-40 max-w-[220px] rotate-[-0.4deg]">
              Aquest és el lloc on el temps va a descansar. No perdut — simplement sense pressa, posant-se com la pols en un raig de llum de tarda.
            </p>
            <div className="w-10 h-[1px] bg-foreground opacity-10" />
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t border-border px-8 md:px-16 py-8">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-1">
            <p className="text-xs font-sans text-foreground opacity-50 uppercase tracking-[0.2em]">
              Correu electrònic
            </p>
            <p className="text-sm font-serif text-foreground opacity-80">
              teamlallavor@gmail.com
            </p>
          </div>

          <div className="space-y-1">
            <p className="text-xs font-sans text-foreground opacity-50 uppercase tracking-[0.2em]">
              Ubicació
            </p>
            <p className="text-sm font-serif text-foreground opacity-80">
              Sant Esteve de Palautordera, Montseny
            </p>
          </div>

          <div className="space-y-1">
            <p className="text-xs font-sans text-foreground opacity-50 uppercase tracking-[0.2em]">
              Telèfon
            </p>
            <p className="text-sm font-serif text-foreground opacity-80">
              +34 666 00 91 07
            </p>
          </div>
        </div>
      </div>
      {/* legal / policy links */}
      <div className="relative z-10 border-t border-border px-8 md:px-16 py-4">
        <div className="max-w-4xl mx-auto flex flex-wrap gap-4 text-xs text-foreground opacity-60">
          <a href="/privacy" className="underline hover:opacity-80">
            Política de privacitat
          </a>
          <a href="/cookies" className="underline hover:opacity-80">
            Política de galetes
          </a>
          <a href="/terms" className="underline hover:opacity-80">
            Condicions d'ús
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
