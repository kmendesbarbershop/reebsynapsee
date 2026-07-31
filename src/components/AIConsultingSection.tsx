import { FadeInUp } from "./FadeInUp";
import { Check, Zap, Bot } from "lucide-react";
import { GlowCard } from "@/components/ui/spotlight-card";
import ceoImage from "@/assets/ceo-kleydir.jpg";

const benefits = [
  "Onde seu negócio está perdendo venda hoje",
  "Quais etapas do Sistema Synapse fazem sentido pra você agora",
  "Um próximo passo claro, no seu ritmo",
  "Sem compromisso de contratação",
];

export function AIConsultingSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-10">
        <FadeInUp>
          <span className="pill-badge inline-flex items-center gap-2 text-xs">
            <Bot size={14} />
            NOVO • IA NA PRÁTICA
          </span>
        </FadeInUp>

        <FadeInUp delay={0.1}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            Uma Conversa, Sem Compromisso, com Quem Já Passou Pelo Que Você Tá Passando
          </h2>
        </FadeInUp>

        <FadeInUp delay={0.15}>
          <p className="text-lg sm:text-xl font-semibold text-neon max-w-2xl">
            Bora conversar 15 minutos sobre onde você tá perdendo venda hoje?
          </p>
        </FadeInUp>

        <FadeInUp delay={0.25}>
          <GlowCard
            glowColor="green"
            customSize={true}
            className="w-full max-w-[600px] mx-auto p-8 sm:p-10 flex flex-col items-center text-center gap-6"
          >
            {/* Avatar */}
            <img
              src={ceoImage}
              alt="Kleydir Mendes — CEO da Reeb Synapse"
              className="w-24 h-24 rounded-full object-cover mx-auto"
              style={{ border: "3px solid var(--neon)", boxShadow: "0 0 16px rgba(0,71,255,0.4)" }}
            />
            <div>
              <p className="text-foreground font-bold text-lg">Kleydir Mendes</p>
              <p className="text-neon text-sm font-semibold">CEO da Reeb Synapse</p>
            </div>
            <p className="text-muted-custom text-base leading-relaxed max-w-md">
              Eu sou o Kleydir. Antes de fundar a Reeb Synapse, eu tinha uma
              barbearia. Sei o que é vender de forma inconsistente e não saber se
              vai bater a meta do mês. Foi resolvendo isso no meu próprio negócio
              que eu construí o Sistema Synapse.
            </p>

            {/* Benefits list */}
            <div className="w-full max-w-md text-left">
              <p className="text-foreground font-semibold text-sm mb-3">
                Você vai sair com:
              </p>
              <ul className="space-y-3">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <Check
                      size={20}
                      style={{ color: "#4D7CFF", flexShrink: 0, marginTop: 2 }}
                    />
                    <span className="text-foreground text-base">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <a
              href="https://wa.me/5591982540570?text=Olá!%20Quero%20minha%20consultoria%20gratuita%20com%20o%20Kleydir.%20Tenho%20interesse%20em%20entender%20onde%20estou%20perdendo%20vendas."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-neon inline-block w-full sm:w-auto px-8 py-4 text-base sm:text-lg text-center"
            >
              Quero minha consultoria gratuita
            </a>

            <p
              className="text-sm font-medium inline-flex items-center gap-2"
              style={{ color: "var(--lime)" }}
            >
              <Zap size={14} />
              Apenas 3 vagas por semana — atendimento personalizado com o CEO
            </p>
          </GlowCard>
        </FadeInUp>
      </div>
    </section>
  );
}