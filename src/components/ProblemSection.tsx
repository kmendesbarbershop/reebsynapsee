import { FadeInUp } from "./FadeInUp";
import { TrendingDown, Megaphone, Repeat } from "lucide-react";

const painPoints = [
  {
    Icon: TrendingDown,
    title: "Tráfego sem conversão",
    desc: "Você paga por cliques que nunca viram clientes.",
  },
  {
    Icon: Megaphone,
    title: "Comunicação sem conexão",
    desc: "Sua mensagem não diferencia, não convence, não vende.",
  },
  {
    Icon: Repeat,
    title: "Campanhas sem estrutura",
    desc: "Anúncios no ar sem estratégia real de conversão.",
  },
];

export function ProblemSection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <FadeInUp>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
            Vamos ser honestos.
          </h2>
        </FadeInUp>
        <FadeInUp delay={0.1}>
          <p className="text-muted-custom text-lg mb-12 text-center max-w-2xl mx-auto">
            Quantas vezes você investiu em marketing e não soube explicar por que não vendeu?
          </p>
        </FadeInUp>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {painPoints.map((p, i) => (
            <FadeInUp key={p.title} delay={0.15 + i * 0.08}>
              <div
                className="glass-card p-6 h-full border-l-4 transition-all hover:translate-y-[-2px] alert-pulse"
              >
                <p.Icon size={28} style={{ color: "#ff8800" }} className="mb-3" />
                <h3 className="font-semibold text-lg mb-2">{p.title}</h3>
                <p className="text-muted-custom text-sm">{p.desc}</p>
              </div>
            </FadeInUp>
          ))}
        </div>

        <FadeInUp delay={0.4}>
          <p className="text-2xl sm:text-3xl font-bold text-neon text-center">
            E barulho não paga boleto.
          </p>
        </FadeInUp>
      </div>
    </section>
  );
}
