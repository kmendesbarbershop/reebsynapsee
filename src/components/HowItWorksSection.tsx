import { FadeInUp } from "./FadeInUp";
import { Search, BadgeCheck, MessageSquare, Target, TrendingUp } from "lucide-react";

const steps = [
  {
    num: "01",
    Icon: Search,
    title: "Diagnóstico",
    desc: "Mapeamento gratuito de onde você está perdendo venda hoje.",
    highlight: true,
  },
  {
    num: "02",
    Icon: BadgeCheck,
    title: "Autoridade",
    desc: "Conteúdo e presença que geram confiança em até 40 dias.",
    highlight: true,
  },
  {
    num: "03",
    Icon: MessageSquare,
    title: "Atendimento Inteligente",
    desc: "Agente de IA humanizado, respondendo seu cliente 24h.",
    highlight: false,
  },
  {
    num: "04",
    Icon: Target,
    title: "Aquisição",
    desc: "Tráfego pago pra atrair cliente qualificado, não curioso.",
    highlight: false,
  },
  {
    num: "05",
    Icon: TrendingUp,
    title: "Escala",
    desc: "Landing page, CRM e gestão avançada conforme o negócio cresce.",
    highlight: false,
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <FadeInUp>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
            O Sistema Synapse de Conversão
          </h2>
        </FadeInUp>
        <FadeInUp delay={0.1}>
          <p className="text-muted-custom text-lg mb-12 text-center max-w-2xl mx-auto">
            Cada negócio entra por aqui. O resto vem conforme a necessidade real aparece.
          </p>
        </FadeInUp>

        <div className="flex flex-col gap-4">
          {steps.map((s, i) => {
            const active = i < 2;
            const isLast = i === steps.length - 1;
            return (
              <FadeInUp key={s.title} delay={0.1 + i * 0.08}>
                <div className="flex items-stretch gap-3 sm:gap-5">
                  {/* Circuit rail */}
                  <div
                    className="relative flex flex-col items-center shrink-0"
                    style={{ width: 22 }}
                    aria-hidden="true"
                  >
                    <div
                      className={`rounded-full ${active ? "synapse-node-pulse" : ""}`}
                      style={{
                        marginTop: 30,
                        width: 12,
                        height: 12,
                        background: active ? "var(--lime)" : "transparent",
                        border: active
                          ? "1px solid var(--lime)"
                          : "1px solid #3a3a3a",
                      }}
                    />
                    {!isLast && (
                      <div
                        style={{
                          flex: 1,
                          width: i === 0 ? 2 : 0,
                          minHeight: 24,
                          marginBottom: -16,
                          background: i === 0 ? "var(--lime)" : "transparent",
                          boxShadow:
                            i === 0 ? "0 0 8px rgba(182,255,0,0.55)" : "none",
                          borderLeft: i === 0 ? "none" : "2px dashed #3a3a3a",
                        }}
                      />
                    )}
                  </div>

                  <div
                    className="flex flex-1 items-start gap-4 sm:gap-5 rounded-xl p-5 sm:p-6"
                    style={{
                      background: "var(--surface)",
                      border: "1px solid #262626",
                    }}
                  >
                    <div
                      className="w-12 h-12 shrink-0 rounded-xl flex items-center justify-center"
                      style={{ background: "rgba(182,255,0,0.10)" }}
                    >
                      <s.Icon size={22} style={{ color: "var(--neon)" }} />
                    </div>
                    <div className="text-left">
                      <p
                        className="text-xs font-bold tracking-widest mb-1"
                        style={{ color: "var(--muted-text)" }}
                      >
                        ETAPA {s.num}
                      </p>
                      <h3 className="font-semibold text-lg mb-1">{s.title}</h3>
                      <p className="text-muted-custom text-sm">{s.desc}</p>
                    </div>
                  </div>
                </div>
              </FadeInUp>
            );
          })}
        </div>

        <FadeInUp delay={0.6}>
          <p className="text-muted-custom text-sm mt-8 text-center max-w-2xl mx-auto">
            Cada etapa é ativada conforme a necessidade real do seu negócio.
          </p>
        </FadeInUp>
      </div>

      <style>{`
        @keyframes synapseNodePulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(182,255,0,0.45); }
          50% { box-shadow: 0 0 10px 4px rgba(182,255,0,0.55); }
        }
        .synapse-node-pulse {
          animation: synapseNodePulse 1.8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
