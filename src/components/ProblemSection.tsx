import { FadeInUp } from "./FadeInUp";
import { TrendingDown, Megaphone, Repeat } from "lucide-react";
import { GlowCard } from "@/components/ui/spotlight-card";

const painPoints = [
  {
    Icon: TrendingDown,
    title: "Post bonito, criativo caro",
    desc: "Investimento alto que não vira cliente no fim do mês.",
  },
  {
    Icon: Megaphone,
    title: "Atenção sem estrutura",
    desc: "Plateia aplaudindo um negócio que não sabe vender.",
  },
  {
    Icon: Repeat,
    title: "Tráfego e influenciador",
    desc: "Barulho sem sistema por trás. E barulho não paga boleto.",
  },
];

export function ProblemSection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <FadeInUp>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
            Vamos ser honestos com você.
          </h2>
        </FadeInUp>
        <FadeInUp delay={0.1}>
          <p className="text-muted-custom text-lg mb-12 text-center max-w-2xl mx-auto">
            Quantas vezes você investiu em marketing e não soube explicar por que
            não vendeu? Post bonito, criativo caro, influenciador, tráfego pago —
            tudo isso sem estrutura é só barulho.
          </p>
        </FadeInUp>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {painPoints.map((p, i) => (
            <FadeInUp key={p.title} delay={0.15 + i * 0.08}>
              <GlowCard
                glowColor="red"
                customSize={true}
                className="w-full h-full min-h-[140px] flex flex-col gap-2 border-l-4 alert-pulse"
              >
                <p.Icon size={28} style={{ color: "#ff8800" }} />
                <h3 className="font-semibold text-lg">{p.title}</h3>
                <p className="text-muted-custom text-sm">{p.desc}</p>
              </GlowCard>
            </FadeInUp>
          ))}
        </div>

        <FadeInUp delay={0.4}>
          <p className="text-2xl sm:text-3xl font-bold text-neon text-center">
            E barulho não paga boleto.
          </p>
        </FadeInUp>
        <FadeInUp delay={0.5}>
          <p className="text-muted-custom text-lg mt-6 text-center max-w-2xl mx-auto">
            Todo negócio quer atenção. Mas atenção sem estrutura é só plateia
            aplaudindo um negócio que não sabe vender.{" "}
            <span className="text-foreground font-semibold">
              A Reeb Synapse conecta essa atenção a um sistema que vende de verdade.
            </span>
          </p>
        </FadeInUp>
      </div>
    </section>
  );
}
