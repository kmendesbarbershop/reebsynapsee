import { useState } from "react";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a1a0a]/90 backdrop-blur-md border-b border-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="#" className="group flex items-center gap-2.5" aria-label="Reeb Synapse">
          <span className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-neon/20 to-transparent ring-1 ring-neon/40 shadow-[0_0_20px_rgba(74,222,128,0.35)] transition-all duration-300 group-hover:shadow-[0_0_28px_rgba(74,222,128,0.6)]">
            <span className="absolute inset-0 rounded-lg bg-neon/10 blur-md opacity-60 group-hover:opacity-100 transition-opacity" />
            <span className="relative text-neon font-black text-base tracking-tighter">R</span>
          </span>
          <span className="flex items-baseline gap-1.5 leading-none">
            <span className="text-xl sm:text-2xl font-black tracking-tight text-neon drop-shadow-[0_0_12px_rgba(74,222,128,0.55)]">
              REEB
            </span>
            <span className="hidden xs:inline-block h-4 w-px bg-neon/40" />
            <span className="text-base sm:text-lg font-light tracking-[0.25em] uppercase text-foreground/95">
              Synapse
            </span>
          </span>
        </a>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="sm:hidden text-foreground" aria-label="Menu">
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>

        <a href="#cta-final" className="hidden sm:inline-block btn-neon px-5 py-2 text-sm">
          Fale conosco
        </a>
      </div>

      {open && (
        <div className="sm:hidden px-4 pb-4">
          <a href="#cta-final" className="btn-neon block text-center px-5 py-2 text-sm" onClick={() => setOpen(false)}>
            Fale conosco
          </a>
        </div>
      )}
    </nav>
  );
}
