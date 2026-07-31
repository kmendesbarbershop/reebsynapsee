import { FadeInUp } from "./FadeInUp";
import { ArrowRight, ArrowDown } from "lucide-react";
import { RainingLettersBackground } from "@/components/ui/raining-letters";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 px-4 overflow-hidden">
      {/* Layer 1: dark green base background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 0,
          background:
            "radial-gradient(ellipse at center, rgba(20,20,20,0.6) 0%, rgba(0,0,0,0.85) 80%)",
        }}
        aria-hidden="true"
      />

      {/* Layer 2: Raining letters animation */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 1 }}>
        <RainingLettersBackground />
      </div>

      {/* Layer 3: Radial vignette so center is darker and text is readable */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 2,
          background:
            "radial-gradient(ellipse at center, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.6) 40%, transparent 80%)",
        }}
        aria-hidden="true"
      />

      {/* Hero content */}
      <div className="relative max-w-3xl mx-auto text-center" style={{ zIndex: 10 }}>
        <FadeInUp delay={0.1}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 font-[var(--font-heading)]">
            <span className="text-foreground">Sua Empresa Não Precisa de Mais Barulho.</span>
            <br />
            <span className="text-neon">Precisa de um Sistema Que Vende.</span>
          </h1>
        </FadeInUp>

        <FadeInUp delay={0.2}>
          <p className="text-lg sm:text-xl text-muted-custom mb-4 max-w-2xl mx-auto">
            Ajudamos negócios locais a venderem de forma mais consistente, começando
            pela presença digital que gera autoridade e confiança — em 40 dias.
          </p>
        </FadeInUp>

        <FadeInUp delay={0.25}>
          <p className="text-base font-bold mb-8" style={{ color: "var(--lime)" }}>
            Vídeos que prendem. Músicas que marcam. Páginas que vendem.
          </p>
        </FadeInUp>

        <FadeInUp delay={0.3}>
          <div className="flex flex-col items-center gap-4">
            <a
              href="https://wa.me/5591982540570?text=Olá!%20Quero%20parar%20de%20perder%20vendas%20e%20montar%20uma%20operação%20de%20marketing%20de%20verdade.%20Pode%20me%20ajudar%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-neon inline-flex items-center gap-2 px-8 py-4 text-lg"
            >
              QUERO PARAR DE PERDER VENDAS
              <ArrowRight size={20} />
            </a>
            <a
              href="#how-it-works"
              className="text-sm font-medium hover:underline transition-colors inline-flex items-center gap-1"
              style={{ color: "#B6FF00" }}
            >
              <ArrowDown size={14} />
              Ver como funciona
            </a>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
