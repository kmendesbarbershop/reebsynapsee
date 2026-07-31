import { FadeInUp } from "./FadeInUp";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden"
      style={{ backgroundColor: "#0B0C10" }}
    >
      <style>{`
        @keyframes synapse-pulse {
          0% { transform: translateX(-4px); opacity: 0.4; }
          50% { transform: translateX(4px); opacity: 1; }
          100% { transform: translateX(-4px); opacity: 0.4; }
        }
        .synapse-dot {
          animation: synapse-pulse 2.4s ease-in-out infinite;
        }
      `}</style>

      {/* Subtle radial glow behind the headline */}
      <div
        className="absolute pointer-events-none"
        style={{
          zIndex: 0,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "70vw",
          maxWidth: "700px",
          height: "70vw",
          maxHeight: "700px",
          background:
            "radial-gradient(circle, rgba(182,255,0,0.07) 0%, rgba(182,255,0,0.03) 40%, transparent 70%)",
          filter: "blur(40px)",
        }}
        aria-hidden="true"
      />

      {/* Hero content */}
      <div
        className="relative w-full max-w-4xl mx-auto text-center"
        style={{ zIndex: 10 }}
      >
        <FadeInUp delay={0.1}>
          <h1
            className="font-[var(--font-heading)] font-black tracking-tight mb-10"
            style={{
              fontSize: "clamp(2.25rem, 6vw, 4.5rem)",
              lineHeight: 1.15,
              color: "#F2F3F5",
            }}
          >
            Chega de marketing que não vende. Aqui você constrói um sistema que{" "}
            <span className="relative inline-block" style={{ color: "#B6FF00" }}>
              vende
              {/* Signature line */}
              <span
                className="absolute left-0 right-0 -bottom-2 h-px bg-lime"
                style={{ backgroundColor: "#B6FF00", opacity: 0.6 }}
              />
              <span
                className="synapse-dot absolute -bottom-2.5 h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: "#B6FF00", left: "50%" }}
              />
            </span>
            .
          </h1>
        </FadeInUp>

        <FadeInUp delay={0.25}>
          <p
            className="max-w-2xl mx-auto mb-14"
            style={{ color: "#8B909C", fontSize: "clamp(1rem, 1.6vw, 1.25rem)" }}
          >
            Estratégia, comunicação e conversão trabalhando juntas para fazer você
            vender mais — todos os dias.
          </p>
        </FadeInUp>

        <FadeInUp delay={0.4}>
          <a
            href="https://wa.me/5591982540570?text=Olá!%20Quero%20parar%20de%20perder%20vendas%20e%20montar%20uma%20operação%20de%20marketing%20de%20verdade.%20Pode%20me%20ajudar%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold"
            style={{
              backgroundColor: "#B6FF00",
              color: "#0B0C10",
              borderRadius: "0.65rem",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#0B0C10";
              e.currentTarget.style.color = "#B6FF00";
              e.currentTarget.style.outline = "2px solid #B6FF00";
              e.currentTarget.style.outlineOffset = "-2px";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#B6FF00";
              e.currentTarget.style.color = "#0B0C10";
              e.currentTarget.style.outline = "none";
            }}
          >
            QUERO PARAR DE PERDER VENDAS
            <ArrowRight size={20} />
          </a>
        </FadeInUp>
      </div>
    </section>
  );
}
