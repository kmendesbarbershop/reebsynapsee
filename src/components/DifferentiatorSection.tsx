import { FadeInUp } from "./FadeInUp";
import { Brain, Target, Rocket } from "lucide-react";

const pills = [
  { Icon: Brain, label: "IA generativa" },
  { Icon: Target, label: "Estratégia por dados" },
  { Icon: Rocket, label: "Execução criativa" },
];

export function DifferentiatorSection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <FadeInUp>
          <div
            aria-hidden
            className="mx-auto mb-8 h-px w-32"
            style={{
              background:
                "linear-gradient(to right, transparent, #B6FF00, transparent)",
              boxShadow: "0 0 12px rgba(182, 255, 0, 0.6)",
            }}
          />
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Criatividade + IA + Estratégia
          </h2>
        </FadeInUp>
        <FadeInUp delay={0.1}>
          <p className="text-muted-custom text-lg mb-10 max-w-2xl mx-auto">
            Unimos inteligência artificial com estratégia de marketing para criar campanhas mais rápidas, criativas e eficientes.
          </p>
        </FadeInUp>
        <FadeInUp delay={0.2}>
          <div className="flex flex-wrap justify-center gap-3">
            {pills.map((p) => (
              <span
                key={p.label}
                className="pill-badge text-sm px-5 py-2 inline-flex items-center gap-2"
              >
                <p.Icon size={16} />
                {p.label}
              </span>
            ))}
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
