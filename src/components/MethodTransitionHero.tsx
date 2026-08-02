import { motion } from "framer-motion";
import { ArrowRight, Layers } from "lucide-react";

const whatsappLink =
  "https://wa.me/5591982540570?text=Olá!%20Quero%20fazer%20o%20diagnóstico%20gratuito%20e%20entender%20quais%20etapas%20fazem%20sentido%20pro%20meu%20negócio%20agora.%20Pode%20me%20ajudar%3F";

export function MethodTransitionHero() {
  return (
    <section
      className="relative overflow-hidden py-24 sm:py-32 px-4"
      style={{ backgroundColor: "#0a0a0a" }}
    >
      {/* Subtle radial glow */}
      <div
        className="absolute pointer-events-none"
        aria-hidden="true"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "80vw",
          maxWidth: "900px",
          height: "80vw",
          maxHeight: "900px",
          background:
            "radial-gradient(circle, rgba(182,255,0,0.08) 0%, rgba(182,255,0,0.03) 40%, transparent 70%)",
          filter: "blur(50px)",
          zIndex: 0,
        }}
      />

      {/* Sliding decorative bar */}
      <motion.div
        className="absolute pointer-events-none"
        aria-hidden="true"
        initial={{ x: "-100%" }}
        animate={{ x: "100vw" }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          top: "40%",
          left: 0,
          width: "40%",
          height: 1,
          background:
            "linear-gradient(90deg, transparent, rgba(182,255,0,0.5), rgba(182,255,0,0.8), rgba(182,255,0,0.5), transparent)",
          opacity: 0.4,
          zIndex: 0,
        }}
      />

      <div
        className="relative max-w-4xl mx-auto text-center"
        style={{ zIndex: 10 }}
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span
            className="inline-flex items-center gap-2 mb-6 text-xs font-semibold tracking-widest uppercase"
            style={{
              color: "#B6FF00",
              border: "1px solid rgba(182,255,0,0.35)",
              borderRadius: "9999px",
              padding: "0.5rem 1rem",
            }}
          >
            <Layers size={14} />
            Sistema que cresce com você
          </span>
        </motion.div>

        {/* Main sliding headline */}
        <motion.h2
          className="font-[var(--font-heading)] font-black tracking-tight mb-6"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          style={{
            fontSize: "clamp(2rem, 5.5vw, 4rem)",
            lineHeight: 1.15,
            color: "#F2F3F5",
          }}
        >
          As etapas 3 a 5 são apresentadas{" "}
          <span style={{ color: "#B6FF00" }}>depois do diagnóstico</span>, quando
          fizer sentido pro seu momento.
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.25 }}
          style={{
            color: "#8B909C",
            fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
            lineHeight: 1.6,
          }}
        >
          Nada de empurrar sistema que você ainda não precisa. A gente começa
          certo, e só escala o que faz sentido pra sua realidade.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        >
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold"
            style={{
              backgroundColor: "#B6FF00",
              color: "#0a0a0a",
              borderRadius: "0.65rem",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "#B6FF00";
              e.currentTarget.style.outline = "2px solid #B6FF00";
              e.currentTarget.style.outlineOffset = "-2px";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#B6FF00";
              e.currentTarget.style.color = "#0a0a0a";
              e.currentTarget.style.outline = "none";
            }}
          >
            FAZER MEU DIAGNÓSTICO GRATUITO
            <ArrowRight size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
