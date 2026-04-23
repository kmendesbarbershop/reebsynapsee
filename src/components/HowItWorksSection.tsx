import { FadeInUp } from "./FadeInUp";

const steps = [
  { emoji: "🔍", title: "Diagnóstico", desc: "Entendemos a fundo seu negócio, mercado e oportunidades." },
  { emoji: "🗺️", title: "Mapeamento", desc: "Desenhamos a estratégia e o caminho até a venda." },
  { emoji: "💬", title: "Comunicação", desc: "Criamos a mensagem certa para o público certo." },
  { emoji: "💰", title: "Conversão", desc: "Transformamos atenção em decisão de compra." },
];

export function HowItWorksSection() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <FadeInUp>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
            Um método simples. Um resultado claro.
          </h2>
        </FadeInUp>
        <FadeInUp delay={0.1}>
          <p className="text-muted-custom text-lg mb-16 text-center max-w-2xl mx-auto">
            A Reeb Synapse opera com 4 etapas comprovadas:
          </p>
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

        <FadeInUp delay={0.7}>
          <p className="text-center text-lg mt-16 max-w-2xl mx-auto">
            Enquanto outras agências criam conteúdo…{" "}
            <span className="text-neon font-semibold">Nós criamos decisão de compra.</span>
          </p>
        </FadeInUp>
      </div>
    </section>
  );
}
