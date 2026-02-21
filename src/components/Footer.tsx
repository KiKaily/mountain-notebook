const Footer = () => {
  return (
    <footer className="h-screen w-full snap-start flex flex-col justify-end bg-card relative">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="flex-1 flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-16 h-[1px] bg-foreground opacity-20 mx-auto" />
          <p className="font-serif text-lg text-foreground opacity-60 tracking-widest">
            fin
          </p>
          <div className="w-16 h-[1px] bg-foreground opacity-20 mx-auto" />
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
