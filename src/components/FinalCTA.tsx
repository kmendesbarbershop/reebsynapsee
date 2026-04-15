import { FadeInUp } from "./FadeInUp";

export function FinalCTA() {
  return (
    <section id="cta-final" className="py-32 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <FadeInUp>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 leading-tight">
            Se você já tem atenção, está na hora de transformar isso em venda.
          </h2>
        </FadeInUp>
        <FadeInUp delay={0.15}>
          <a href="#cta-final" className="btn-neon inline-block px-12 py-5 text-xl">
            Começar agora
          </a>
        </FadeInUp>
      </div>
    </section>
  );
}
