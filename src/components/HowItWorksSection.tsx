import { FadeInUp } from "./FadeInUp";
import { Settings, Layers, TrendingUp } from "lucide-react";

const steps = [
  {
    num: "01",
    Icon: Settings,
    title: "Planejamento estratégico",
    desc: "Mergulhamos no seu negócio para entender público, concorrência e oportunidades reais.",
  },
  {
    num: "02",
    Icon: Layers,
    title: "Criação dos ativos",
    desc: "Produzimos vídeos, jingles e páginas com qualidade premium em tempo recorde.",
  },
  {
    num: "03",
    Icon: TrendingUp,
    title: "Campanhas e otimização contínua",
    desc: "Lançamos, medimos e otimizamos para que cada real investido gere o máximo retorno.",
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <FadeInUp>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
            Um método simples. Um resultado claro.
          </h2>
        </FadeInUp>
        <FadeInUp delay={0.1}>
          <p className="text-muted-custom text-lg mb-16 text-center max-w-2xl mx-auto">
            A Reeb Synapse opera com 3 etapas comprovadas:
          </p>
        </FadeInUp>

        <div className="relative grid md:grid-cols-3 gap-8">
          {/* Animated dashed connector — desktop only */}
          <div
            aria-hidden
            className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px"
            style={{
              backgroundImage:
                "repeating-linear-gradient(to right, #4ade80 0 8px, transparent 8px 16px)",
              backgroundSize: "200% 100%",
              animation: "dashFlow 3s linear infinite",
              opacity: 0.6,
            }}
          />

          {steps.map((s, i) => (
            <FadeInUp key={s.title} delay={0.15 + i * 0.12}>
              <div className="relative text-center px-2">
                <span
                  aria-hidden
                  className="absolute -top-6 left-1/2 -translate-x-1/2 text-7xl font-black select-none pointer-events-none"
                  style={{ color: "rgba(74, 222, 128, 0.08)" }}
                >
                  {s.num}
                </span>
                <div className="relative z-10 flex justify-center mb-4">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center"
                    style={{
                      background: "var(--surface)",
                      border: "1px solid rgba(74, 222, 128, 0.4)",
                      boxShadow: "0 0 20px rgba(74, 222, 128, 0.2)",
                    }}
                  >
                    <s.Icon size={24} style={{ color: "#4ade80" }} />
                  </div>
                </div>
                <h3 className="font-semibold text-lg mb-2 relative z-10">{s.title}</h3>
                <p className="text-muted-custom text-sm relative z-10">{s.desc}</p>
              </div>
            </FadeInUp>
          ))}
        </div>

        <FadeInUp delay={0.7}>
          <p className="text-center text-lg mt-16 max-w-2xl mx-auto">
            Enquanto outras agências criam conteúdo…{" "}
            <span className="text-neon font-semibold">Nós criamos decisão de compra.</span>
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
