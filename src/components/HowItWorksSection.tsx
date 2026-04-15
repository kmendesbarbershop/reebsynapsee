import { FadeInUp } from "./FadeInUp";

const steps = [
  { emoji: "⚙️", title: "Planejamento estratégico", desc: "Análise profunda do seu negócio, público e oportunidades." },
  { emoji: "🎨", title: "Criação dos ativos", desc: "Vídeos, jingles, landing pages — tudo sob medida." },
  { emoji: "📈", title: "Campanhas e otimização contínua", desc: "Lançamento, monitoramento e melhorias constantes." },
];

export function HowItWorksSection() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <FadeInUp>
          <h2 className="text-3xl sm:text-4xl font-bold mb-16 text-center">Como funciona</h2>
        </FadeInUp>

        <div className="relative">
          {/* Vertical glowing line */}
          <div className="absolute left-[18px] sm:left-[22px] top-2 bottom-2 timeline-line" />

          <div className="space-y-12">
            {steps.map((s, i) => (
              <FadeInUp key={s.title} delay={0.1 + i * 0.15}>
                <div className="flex gap-6 items-start relative">
                  <div className="flex-shrink-0 mt-1.5">
                    <div className="timeline-dot" />
                  </div>
                  <div>
                    <span className="text-2xl mb-1 block">{s.emoji}</span>
                    <h3 className="font-semibold text-lg">{s.title}</h3>
                    <p className="text-muted-custom text-sm mt-1">{s.desc}</p>
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
