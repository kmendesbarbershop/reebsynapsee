import { FadeInUp } from "./FadeInUp";
import { Check, Target } from "lucide-react";

const benefits = [
  "Análise do seu funil de vendas atual",
  "Identificação dos principais pontos de perda",
  "Recomendações estratégicas personalizadas",
  "Sem compromisso de contratação",
];

export function FreeOfferCTA() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <FadeInUp>
          <div
            className="text-center"
            style={{
              border: "1px solid rgba(74,222,128,0.4)",
              boxShadow: "0 0 40px rgba(74,222,128,0.15)",
              background: "rgba(74,222,128,0.05)",
              borderRadius: "16px",
              padding: "60px 24px",
            }}
          >
            <span
              className="inline-flex items-center gap-2 text-xs font-bold tracking-wider px-4 py-2 rounded-full mb-6"
              style={{
                color: "#4ade80",
                border: "1px solid rgba(74, 222, 128, 0.4)",
                background: "rgba(74, 222, 128, 0.08)",
              }}
            >
              <Target size={14} />
              OFERTA EXCLUSIVA
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Diagnóstico gratuito</h2>
            <p className="text-muted-custom text-lg mb-8 max-w-xl mx-auto">
              Descubra onde você está perdendo vendas e como corrigir isso. Sem compromisso.
            </p>

            <ul className="text-left max-w-md mx-auto space-y-3 mb-10">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <Check
                    size={20}
                    style={{ color: "#4ade80", flexShrink: 0, marginTop: 2 }}
                  />
                  <span className="text-foreground text-base">{b}</span>
                </li>
              ))}
            </ul>

            <a
              href="#cta-final"
              className="btn-neon inline-block w-full sm:w-auto px-10 py-4 text-lg"
            >
              Quero meu diagnóstico gratuito →
            </a>
            <p
              className="text-sm font-medium mt-5"
              style={{ color: "#fbbf24" }}
            >
              ⏳ Apenas 5 vagas disponíveis por semana
            </p>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
