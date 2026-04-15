export function Footer() {
  return (
    <footer className="border-t border-card py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-4">
          <span className="block text-sm font-bold tracking-widest text-foreground">REEB</span>
          <span className="block text-xs font-semibold tracking-wider text-neon">Synapse</span>
        </div>
        <p className="text-muted-custom text-sm mb-6">Onde a atenção vira venda.</p>
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
