import { FadeInUp } from "./FadeInUp";

const pills = ["🤖 IA generativa", "🎯 Estratégia por dados", "🚀 Execução criativa"];

export function DifferentiatorSection() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <FadeInUp>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Criatividade + IA + Estratégia
          </h2>
        </FadeInUp>
        <FadeInUp delay={0.1}>
          <p className="text-muted-custom text-lg mb-10 max-w-2xl mx-auto">
            Unimos inteligência artificial com estratégia de marketing para criar campanhas mais rápidas, criativas e eficientes.
          </p>
        </FadeInUp>
        <FadeInUp delay={0.2}>
          <div className="flex flex-wrap justify-center gap-3">
            {pills.map((p) => (
              <span key={p} className="pill-badge text-sm px-5 py-2">{p}</span>
            ))}
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
