export function Footer() {
  return (
    <footer className="py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-3">
          <span className="text-lg font-bold tracking-widest">
            <span className="text-neon">REEB</span>{" "}
            <span className="text-foreground">SYNAPSE</span>
          </span>
        </div>
        <p className="text-muted-custom text-sm mb-6">Onde a atenção vira venda.</p>

        <div
          className="h-px w-full max-w-2xl mx-auto mb-6"
          style={{ background: "rgba(74, 222, 128, 0.2)" }}
        />

        <p className="text-xs text-muted-custom">
          © 2025 Reeb Synapse. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
