import { FadeInUp } from "./FadeInUp";
import { Check, Target } from "lucide-react";
import { GlowCard } from "@/components/ui/spotlight-card";

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
          <GlowCard
            glowColor="green"
            customSize={true}
            className="w-full max-w-2xl mx-auto p-10 flex flex-col items-center text-center gap-6"
          >
            <span
              className="inline-flex items-center gap-2 text-xs font-bold tracking-wider px-4 py-2 rounded-full"
              style={{
                color: "#B6FF00",
                border: "1px solid rgba(182, 255, 0, 0.4)",
                background: "rgba(182, 255, 0, 0.08)",
              }}
            >
              <Target size={14} />
              OFERTA EXCLUSIVA
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold">Diagnóstico gratuito</h2>
            <p className="text-muted-custom text-lg max-w-xl mx-auto">
              Descubra onde você está perdendo vendas e como corrigir isso. Sem compromisso.
            </p>

            <ul className="text-left max-w-md mx-auto space-y-3 w-full">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <Check
                    size={20}
                    style={{ color: "#B6FF00", flexShrink: 0, marginTop: 2 }}
                  />
                  <span className="text-foreground text-base">{b}</span>
                </li>
              ))}
            </ul>

            <a
              href="https://wa.me/5591982540570?text=Olá!%20Quero%20meu%20diagnóstico%20gratuito%20para%20descobrir%20onde%20estou%20perdendo%20vendas."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-neon inline-block w-full sm:w-auto px-10 py-4 text-lg"
            >
              Quero meu diagnóstico gratuito
            </a>
          </GlowCard>
        </FadeInUp>
      </div>
    </section>
  );
}
