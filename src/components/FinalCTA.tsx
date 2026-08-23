import { FadeInUp } from "./FadeInUp";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section id="cta-final" className="relative py-24 px-4 overflow-hidden">
      {/* Faded background "REEB" */}
      <span
        aria-hidden
        className="pointer-events-none select-none absolute inset-0 flex items-center justify-center font-black tracking-tighter"
        style={{
          fontSize: "clamp(8rem, 30vw, 22rem)",
          color: "rgba(182, 255, 0, 0.10)",
          lineHeight: 1,
        }}
      >
        REEB
      </span>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <FadeInUp>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Toda empresa que cresce não depende de sorte.
          </h2>
        </FadeInUp>
        <FadeInUp delay={0.1}>
          <p className="text-2xl sm:text-3xl font-bold text-neon mb-6">
            Depende de sistema.
          </p>
        </FadeInUp>
        <FadeInUp delay={0.15}>
          <p
            className="text-base sm:text-lg font-medium mb-8"
            style={{ color: "var(--lime)" }}
          >
            Cada dia sem estrutura é um dia perdendo dinheiro.
          </p>
        </FadeInUp>
        <FadeInUp delay={0.2}>
          <p className="text-muted-custom text-lg mb-10 max-w-2xl mx-auto">
            Você pode continuar tentando sozinho. Ou pode ter um time completo trabalhando para você vender todos os dias.{" "}
            <span className="text-foreground font-semibold">A escolha é sua. Mas o tempo não espera.</span>
          </p>
        </FadeInUp>
        <FadeInUp delay={0.3}>
          <a
            href="https://wa.me/5591984339322?text=Olá!%20Quero%20começar%20agora%20e%20estruturar%20minha%20operação%20de%20vendas%20com%20a%20Reeb%20Synapse."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-neon inline-flex items-center gap-3 px-12 py-5 text-xl pulse-glow"
          >
            Começar agora
            <ArrowRight size={22} />
          </a>
        </FadeInUp>
      </div>

      <style>{`
        @keyframes ctaPulseGlow {
          0%, 100% { box-shadow: 0 0 10px rgba(182, 255, 0, 0.45); }
          50% { box-shadow: 0 0 30px rgba(182, 255, 0, 0.5); }
        }
        .pulse-glow {
          animation: ctaPulseGlow 2.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
