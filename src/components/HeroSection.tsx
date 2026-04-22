import { FadeInUp } from "./FadeInUp";
import BackgroundScene from "./ui/aurora-section-hero";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 px-4 overflow-hidden">
      <BackgroundScene />
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <FadeInUp>
          <span className="pill-badge inline-block mb-6">SISTEMA DE CONVERSÃO COM IA</span>
        </FadeInUp>

        <FadeInUp delay={0.1}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 font-[var(--font-heading)]">
            Transformamos <span className="text-neon">atenção</span> em vendas reais
          </h1>
        </FadeInUp>

        <FadeInUp delay={0.2}>
          <p className="text-lg sm:text-xl text-muted-custom mb-4 max-w-2xl mx-auto">
            Criamos vídeos com IA, jingles que grudam, landing pages que convertem e campanhas que geram vendas reais.
          </p>
        </FadeInUp>

        <FadeInUp delay={0.25}>
          <p className="text-sm text-neon font-medium mb-8">
            Vídeos que prendem. Músicas que marcam. Páginas que vendem.
          </p>
        </FadeInUp>

        <FadeInUp delay={0.3}>
          <a href="#cta-final" className="btn-neon inline-block px-8 py-4 text-lg">
            Quero vender mais
          </a>
          <p className="text-xs text-muted-custom mt-4">
            Diagnóstico gratuito · Resposta em até 5 minutos
          </p>
        </FadeInUp>
      </div>
    </section>
  );
}
