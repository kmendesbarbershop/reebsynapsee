import { FadeInUp } from "./FadeInUp";

const features = [
  { emoji: "🎬", title: "Vídeos publicitários com IA" },
  { emoji: "🎵", title: "Jingles estratégicos e memoráveis" },
  { emoji: "🌐", title: "Landing pages de alta conversão" },
  { emoji: "📊", title: "Campanhas de tráfego pago otimizadas" },
];

export function SolutionSection() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <FadeInUp>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Um sistema completo de conversão
          </h2>
        </FadeInUp>
        <FadeInUp delay={0.1}>
          <p className="text-muted-custom text-lg mb-12 max-w-2xl mx-auto">
            Na Reeb Synapse, criamos um ecossistema que transforma atenção em venda.
          </p>
        </FadeInUp>

        <div className="grid sm:grid-cols-2 gap-6">
          {features.map((f, i) => (
            <FadeInUp key={f.title} delay={0.15 + i * 0.08}>
              <div className="glass-card p-6 text-left">
                <span className="text-3xl mb-3 block">{f.emoji}</span>
                <h3 className="font-semibold text-lg">{f.title}</h3>
              </div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
}
