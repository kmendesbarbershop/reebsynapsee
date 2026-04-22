export function Footer() {
  return (
    <footer className="border-t border-card py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-5 flex flex-col items-center gap-3">
          <div className="relative flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-neon/25 to-transparent ring-1 ring-neon/50 shadow-[0_0_30px_rgba(74,222,128,0.45)]">
            <span className="absolute inset-0 rounded-xl bg-neon/10 blur-lg opacity-70" />
            <span className="relative text-neon font-black text-2xl tracking-tighter">R</span>
          </div>
          <div className="flex items-baseline gap-2 leading-none">
            <span className="text-3xl font-black tracking-tight text-neon drop-shadow-[0_0_14px_rgba(74,222,128,0.6)]">
              REEB
            </span>
            <span className="h-5 w-px bg-neon/40" />
            <span className="text-xl font-light tracking-[0.3em] uppercase text-foreground">
              Synapse
            </span>
          </div>
        </div>
        <p className="text-muted-custom text-sm mb-6 italic">Onde a atenção vira venda.</p>
        <div className="flex justify-center gap-6 mb-6">
          <a href="#" className="text-muted-custom hover:text-neon transition-colors text-sm">Instagram</a>
          <a href="#" className="text-muted-custom hover:text-neon transition-colors text-sm">WhatsApp</a>
          <a href="#" className="text-muted-custom hover:text-neon transition-colors text-sm">LinkedIn</a>
        </div>
        <p className="text-xs text-muted-custom">© 2025 Reeb Synapse</p>
      </div>
    </footer>
  );
}
