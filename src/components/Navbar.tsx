import { useState } from "react";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a1a0a]/90 backdrop-blur-md border-b border-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <div className="leading-tight">
          <span className="block text-sm font-bold tracking-widest text-foreground">REEB</span>
          <span className="block text-xs font-semibold tracking-wider text-neon">Synapse</span>
        </div>

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
