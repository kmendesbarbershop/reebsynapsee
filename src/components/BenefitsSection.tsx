import { FadeInUp } from "./FadeInUp";

const items = [
  { emoji: "🎯", title: "Estratégia de marketing sob medida" },
  { emoji: "✍️", title: "Copywriting profissional focado em conversão" },
  { emoji: "🎬", title: "Produção de conteúdo de alta performance" },
  { emoji: "📊", title: "Gestão completa de campanhas" },
  { emoji: "🌐", title: "Landing pages que vendem" },
];

export function BenefitsSection() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <FadeInUp>
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">
            Tudo que você precisa. Em um só lugar.
          </h2>
        </FadeInUp>
        <div className="grid sm:grid-cols-2 gap-6">
          {items.map((item, i) => (
            <FadeInUp key={item.title} delay={0.1 + i * 0.08}>
              <div className="glass-card p-6 text-left flex items-start gap-4">
                <span className="text-3xl block">{item.emoji}</span>
                <h3 className="font-semibold text-lg">{item.title}</h3>
              </div>
            </FadeInUp>
          ))}
        </div>
        <FadeInUp delay={0.6}>
          <p className="text-muted-custom text-lg mt-12 max-w-2xl mx-auto">
            Pare de contratar peças separadas que não conversam entre si. Na Reeb Synapse,{" "}
            <span className="text-foreground font-semibold">tudo trabalha junto</span> — com um objetivo:{" "}
            <span className="text-neon font-semibold">fazer você vender mais.</span>
          </p>
        </FadeInUp>
      </div>
    </section>
  );
}
