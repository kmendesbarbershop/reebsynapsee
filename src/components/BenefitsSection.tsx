import { FadeInUp } from "./FadeInUp";
import { Zap, Volume2, Building2, TrendingUp } from "lucide-react";

const items = [
  {
    Icon: Zap,
    title: "Mais conversão",
    metric: "+40% em média",
    desc: "Mais vendas com o mesmo volume de tráfego.",
  },
  {
    Icon: Volume2,
    title: "Comunicação memorável",
    metric: "3x mais recall",
    desc: "Sua marca fica na mente do cliente por mais tempo.",
  },
  {
    Icon: Building2,
    title: "Estrutura profissional",
    metric: "Do zero ao ar",
    desc: "Sistema completo montado e pronto para vender.",
  },
  {
    Icon: TrendingUp,
    title: "Crescimento previsível",
    metric: "Escala real",
    desc: "Resultados que crescem conforme o investimento.",
  },
];

export function BenefitsSection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <FadeInUp>
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">
            Tudo que você precisa. Em um só lugar.
          </h2>
        </FadeInUp>
        <div className="grid md:grid-cols-2 gap-6">
          {items.map((item, i) => (
            <FadeInUp key={item.title} delay={0.1 + i * 0.08}>
              <div className="glass-card p-6 text-left h-full">
                <div className="flex items-center gap-3 mb-3">
                  <item.Icon size={24} style={{ color: "#4ade80" }} />
                  <h3 className="font-semibold text-base text-muted-custom">{item.title}</h3>
                </div>
                <p
                  className="text-2xl sm:text-3xl font-bold mb-2"
                  style={{ color: "#4ade80" }}
                >
                  {item.metric}
                </p>
                <p className="text-muted-custom text-sm">{item.desc}</p>
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
