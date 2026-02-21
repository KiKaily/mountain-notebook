const Footer = () => {
  return (
    <footer className="h-screen w-full snap-start flex flex-col justify-end bg-card relative">
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
              Morning arrives without announcement — just a slow wash of gold across the wooden floor, warming stones that have held the cold all night.
            </p>
            <p className="text-sm md:text-base font-sans leading-loose text-foreground opacity-70 max-w-[260px] rotate-[0.3deg]">
              The kitchen smells of coffee and pine. A window left open lets the mountain air settle between the pages of an unread book.
            </p>
            <p className="text-xs font-sans leading-loose text-foreground opacity-50 max-w-[240px] rotate-[-0.5deg]">
              Some mornings the fog is so thick you forget there's a valley below. You stand at the door and breathe, and that is enough.
            </p>
            <div className="w-12 h-[1px] bg-foreground opacity-15" />
          </div>

          {/* Right text block */}
          <div className="space-y-6 md:mt-16">
            <div className="w-16 h-[1px] bg-foreground opacity-20" />
            <p className="text-sm md:text-base font-sans leading-loose text-foreground opacity-75 max-w-[280px]">
              Every evening the mountains rehearse their disappearance — edges softening, colours draining, until only silhouettes remain against the last light.
            </p>
            <p className="text-sm md:text-base font-sans leading-loose text-foreground opacity-60 max-w-[250px] rotate-[0.6deg]">
              The wood stove ticks and sighs. Outside, stars appear one by one, as if someone is remembering them into existence.
            </p>
            <p className="text-xs font-sans leading-loose text-foreground opacity-40 max-w-[220px] rotate-[-0.4deg]">
              This is the place where time goes to rest. Not lost — just unhurried, settling like dust in a shaft of afternoon light.
            </p>
            <div className="w-10 h-[1px] bg-foreground opacity-10" />
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t border-border px-8 md:px-16 py-8">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-1">
            <p className="text-xs font-sans text-foreground opacity-50 uppercase tracking-[0.2em]">
              Correspondence
            </p>
            <p className="text-sm font-serif text-foreground opacity-80">
              hello@mountainhouse.com
            </p>
          </div>

          <div className="space-y-1">
            <p className="text-xs font-sans text-foreground opacity-50 uppercase tracking-[0.2em]">
              Location
            </p>
            <p className="text-sm font-serif text-foreground opacity-80">
              Valle d'Aosta, Italy
            </p>
          </div>

          <div className="space-y-1">
            <p className="text-xs font-sans text-foreground opacity-50 uppercase tracking-[0.2em]">
              Telephone
            </p>
            <p className="text-sm font-serif text-foreground opacity-80">
              +39 0165 123 456
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
