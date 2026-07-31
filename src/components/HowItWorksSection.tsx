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
          {steps.map((s, i) => (
            <FadeInUp key={s.title} delay={0.1 + i * 0.08}>
              <div
                className="flex items-start gap-5 rounded-xl p-5 sm:p-6"
                style={{
                  background: s.highlight
                    ? "linear-gradient(90deg, #1c1c1c, #121212)"
                    : "var(--surface)",
                  border: s.highlight
                    ? "1px solid var(--lime)"
                    : "1px solid var(--card-border)",
                  boxShadow: s.highlight ? "0 0 24px rgba(182,255,0,0.18)" : "none",
                  opacity: s.highlight ? 1 : 0.55,
                }}
              >
                <div
                  className="w-12 h-12 shrink-0 rounded-xl flex items-center justify-center"
                  style={{
                    background: s.highlight ? "var(--lime)" : "rgba(182,255,0,0.10)",
                  }}
                >
                  <s.Icon
                    size={22}
                    style={{ color: s.highlight ? "#0a0a0a" : "var(--neon)" }}
                  />
                </div>
                <div className="text-left">
                  <p
                    className="text-xs font-bold tracking-widest mb-1"
                    style={{ color: s.highlight ? "var(--lime)" : "var(--muted-text)" }}
                  >
                    ETAPA {s.num}
                  </p>
                  <h3 className="font-semibold text-lg mb-1">{s.title}</h3>
                  <p className="text-muted-custom text-sm">{s.desc}</p>
                </div>
              </div>
            </FadeInUp>
          ))}
        </div>

        <FadeInUp delay={0.6}>
          <p className="text-muted-custom text-sm mt-8 text-center max-w-2xl mx-auto">
            As etapas 3 a 5 são apresentadas depois do diagnóstico, quando fizer
            sentido pro seu momento. Nada de empurrar sistema que você ainda não precisa.
          </p>
        </FadeInUp>
      </div>

      <style>{`
        @keyframes dashFlow {
          0% { background-position: 0% 0%; }
          100% { background-position: 200% 0%; }
        }
      `}</style>
    </section>
  );
}
