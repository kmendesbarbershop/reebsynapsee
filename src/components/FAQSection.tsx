import * as React from "react";
import { FadeInUp } from "./FadeInUp";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Já contratei social media antes e não vendeu nada. Por que seria diferente agora?",
    a: "Porque social media sozinho não é sistema. A maioria posta e espera. A Reeb entra pelo diagnóstico — a gente só constrói o que vai gerar resultado real pro seu negócio, não conteúdo por conteúdo.",
  },
  {
    q: "Eu não entendo nada de tecnologia. Isso vai funcionar pra mim?",
    a: "Você não precisa entender. O sistema foi construído lado a lado com o fundador — não terceirizado pra estagiário. A gente traduz tecnologia em resultado, você só acompanha.",
  },
  {
    q: "Isso é um chatbot?",
    a: "Não. É um Agente de IA humanizado — treinado no tom do seu negócio, que atende seu cliente 24h sem parecer robô.",
  },
  {
    q: "Quanto tempo até eu ver resultado?",
    a: "A fase de Autoridade (presença digital que gera confiança) tem prazo de 40 dias. O diagnóstico gratuito já te mostra, de cara, onde você tá perdendo venda hoje.",
  },
  {
    q: "Quanto custa?",
    a: "Depende de onde seu negócio está agora — é exatamente isso que o diagnóstico gratuito revela antes de falar de valores.",
  },
];

export function FAQSection() {
  const [open, setOpen] = React.useState<number | null>(0);

  return (
    <section id="faq" className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <FadeInUp>
          <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center">
            Perguntas frequentes
          </h2>
        </FadeInUp>

        <div className="flex flex-col gap-3">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <FadeInUp key={item.q} delay={0.05 * i}>
                <div
                  className="rounded-xl overflow-hidden"
                  style={{
                    background: "var(--surface)",
                    border: `1px solid ${isOpen ? "var(--lime)" : "var(--card-border)"}`,
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-4 text-left px-5 py-4"
                  >
                    <span className="font-semibold text-foreground text-base">
                      {item.q}
                    </span>
                    {isOpen ? (
                      <Minus size={18} style={{ color: "var(--lime)", flexShrink: 0 }} />
                    ) : (
                      <Plus size={18} style={{ color: "var(--neon)", flexShrink: 0 }} />
                    )}
                  </button>
                  {isOpen && (
                    <p className="text-muted-custom text-sm leading-relaxed px-5 pb-5">
                      {item.a}
                    </p>
                  )}
                </div>
              </FadeInUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}
