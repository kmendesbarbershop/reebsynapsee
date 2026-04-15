import { FadeInUp } from "./FadeInUp";

export function FreeOfferCTA() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <FadeInUp>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Diagnóstico gratuito</h2>
        </FadeInUp>
        <FadeInUp delay={0.1}>
          <p className="text-muted-custom text-lg mb-8">
            Descubra onde você está perdendo vendas e como corrigir isso. Sem compromisso.
          </p>
        </FadeInUp>
        <FadeInUp delay={0.2}>
          <a href="#cta-final" className="btn-neon inline-block px-8 py-4 text-lg">
            Quero meu diagnóstico gratuito
          </a>
          <p className="text-xs text-muted-custom mt-4">Vagas limitadas por semana</p>
        </FadeInUp>
      </div>
    </section>
  );
}
