import { FadeInUp } from "./FadeInUp";
import BackgroundScene from "./ui/aurora-section-hero";
import { ArrowRight, ArrowDown } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 px-4 overflow-hidden">
      <BackgroundScene />
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <FadeInUp delay={0.1}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 font-[var(--font-heading)]">
            <span className="text-foreground">Chega de Marketing que Não Vende.</span>
            <br />
            <span className="text-neon">Aqui Você Constrói uma Operação de Vendas de Verdade.</span>
          </h1>
        </FadeInUp>

        <FadeInUp delay={0.2}>
          <p className="text-lg sm:text-xl text-muted-custom mb-4 max-w-2xl mx-auto">
            Estratégia, comunicação e conversão trabalhando juntas para fazer você vender mais — todos os dias.
          </p>
        </FadeInUp>

        <FadeInUp delay={0.25}>
          <p className="text-base font-bold mb-8" style={{ color: "#4ade80" }}>
            Vídeos que prendem. Músicas que marcam. Páginas que vendem.
          </p>
        </FadeInUp>

        <FadeInUp delay={0.3}>
          <div className="flex flex-col items-center gap-4">
            <a href="#cta-final" className="btn-neon inline-flex items-center gap-2 px-8 py-4 text-lg">
              QUERO PARAR DE PERDER VENDAS
              <ArrowRight size={20} />
            </a>
            <a
              href="#how-it-works"
              className="text-sm font-medium hover:underline transition-colors inline-flex items-center gap-1"
              style={{ color: "#4ade80" }}
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
