import { FadeInUp } from "./FadeInUp";

export function ProblemSection() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <FadeInUp>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Vamos ser honestos.
          </h2>
        </FadeInUp>
        <FadeInUp delay={0.1}>
          <p className="text-muted-custom text-lg mb-6 max-w-2xl mx-auto">
            Quantas vezes você investiu em marketing e não soube explicar por que não vendeu?
          </p>
        </FadeInUp>
        <FadeInUp delay={0.15}>
          <p className="text-muted-custom text-lg mb-8 max-w-2xl mx-auto">
            Post, criativo, influenciador, tráfego pago… Tudo isso sem estratégia é só barulho.
          </p>
        </FadeInUp>
        <FadeInUp delay={0.2}>
          <p className="text-2xl sm:text-3xl font-bold text-neon">
            E barulho não paga boleto.
          </p>
        </FadeInUp>
      </div>
    </section>
  );
}
