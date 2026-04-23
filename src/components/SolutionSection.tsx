import { FadeInUp } from "./FadeInUp";
import { Video, Music, Layout, BarChart2 } from "lucide-react";

const features = [
  {
    Icon: Video,
    title: "Vídeos publicitários com IA",
    desc: "Conteúdo visual produzido com inteligência artificial — mais rápido, mais criativo e feito para converter.",
    aiPowered: true,
  },
  {
    Icon: Music,
    title: "Jingles estratégicos e memoráveis",
    desc: "Áudio que gruda na cabeça do seu cliente e faz sua marca ser lembrada na hora certa.",
    aiPowered: false,
  },
  {
    Icon: Layout,
    title: "Landing pages de alta conversão",
    desc: "Páginas construídas com foco em uma única missão: transformar visitante em comprador.",
    aiPowered: false,
  },
  {
    Icon: BarChart2,
    title: "Campanhas de tráfego pago otimizadas",
    desc: "Anúncios no Meta e Google com segmentação inteligente e otimização contínua.",
    aiPowered: true,
  },
];

export function SolutionSection() {
  return (
    <section className="py-16 px-4">
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

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((f, i) => (
            <FadeInUp key={f.title} delay={0.15 + i * 0.08}>
              <div
                className="glass-card p-6 text-left h-full relative transition-all duration-300 hover:translate-y-[-2px]"
                style={{ border: "1px solid var(--card-border)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(74, 222, 128, 0.4)";
                  e.currentTarget.style.boxShadow = "0 0 24px rgba(74, 222, 128, 0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--card-border)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {f.aiPowered && (
                  <span
                    className="absolute top-3 right-3 text-[10px] font-bold tracking-wider px-2 py-1 rounded-full"
                    style={{
                      color: "#4ade80",
                      border: "1px solid rgba(74, 222, 128, 0.4)",
                      background: "rgba(74, 222, 128, 0.08)",
                    }}
                  >
                    IA POWERED
                  </span>
                )}
                <f.Icon size={28} style={{ color: "#4ade80" }} className="mb-3" />
                <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
                <p className="text-muted-custom text-sm">{f.desc}</p>
              </div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
}
