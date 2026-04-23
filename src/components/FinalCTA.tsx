import { FadeInUp } from "./FadeInUp";

export function FinalCTA() {
  return (
    <section id="cta-final" className="py-32 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <FadeInUp>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Toda empresa que cresce online tem uma coisa em comum:
          </h2>
        </FadeInUp>
        <FadeInUp delay={0.1}>
          <p className="text-2xl sm:text-3xl font-bold text-neon mb-10">
            Não depende de sorte. Depende de sistema.
          </p>
        </FadeInUp>
        <FadeInUp delay={0.2}>
          <p className="text-muted-custom text-lg mb-10 max-w-2xl mx-auto">
            Você pode continuar tentando sozinho. Ou pode ter um time completo trabalhando para você vender todos os dias.{" "}
            <span className="text-foreground font-semibold">A escolha é sua. Mas o tempo não espera.</span>
          </p>
        </FadeInUp>
        <FadeInUp delay={0.3}>
          <a href="#cta-final" className="btn-neon inline-block px-12 py-5 text-xl">
            QUERO PARAR DE PERDER VENDAS 👉
          </a>
        </FadeInUp>
      </div>
    </section>
  );
}
