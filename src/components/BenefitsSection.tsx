import { FadeInUp } from "./FadeInUp";

const items = [
  { emoji: "⚡", title: "Mais conversão" },
  { emoji: "🔊", title: "Comunicação memorável" },
  { emoji: "🏗️", title: "Estrutura profissional" },
  { emoji: "📈", title: "Crescimento previsível" },
];

export function BenefitsSection() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <FadeInUp>
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">O que você ganha</h2>
        </FadeInUp>
        <div className="grid sm:grid-cols-2 gap-6">
          {items.map((item, i) => (
            <FadeInUp key={item.title} delay={0.1 + i * 0.08}>
              <div className="glass-card p-6 text-center">
                <span className="text-3xl mb-3 block">{item.emoji}</span>
                <h3 className="font-semibold text-lg">{item.title}</h3>
              </div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
}
