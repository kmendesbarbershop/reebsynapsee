import { FadeInUp } from "./FadeInUp";

const cards = [
  { emoji: "📉", title: "Tráfego sem conversão" },
  { emoji: "📢", title: "Comunicação sem conexão" },
  { emoji: "🔁", title: "Campanhas sem estrutura" },
];

export function ProblemSection() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <FadeInUp>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Você aparece. Mas não vende como poderia.
          </h2>
        </FadeInUp>
        <FadeInUp delay={0.1}>
          <p className="text-muted-custom text-lg mb-12 max-w-2xl mx-auto">
            Posta, anuncia, aparece… mas as vendas não acompanham o esforço. Falta estrutura, comunicação e estratégia.
          </p>
        </FadeInUp>

        <div className="grid sm:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <FadeInUp key={c.title} delay={0.15 + i * 0.1}>
              <div className="glass-card p-6 text-center">
                <span className="text-3xl mb-3 block">{c.emoji}</span>
                <p className="font-semibold">{c.title}</p>
              </div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
}
