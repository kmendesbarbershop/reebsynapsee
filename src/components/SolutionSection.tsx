import { FadeInUp } from "./FadeInUp";
import { ServicesCarousel } from "@/components/ui/services-carousel";

export function SolutionSection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <FadeInUp>
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            O que a Reeb executa por você
          </h2>
        </FadeInUp>
        <FadeInUp delay={0.1}>
          <p className="text-base font-bold mb-8" style={{ color: "var(--lime)" }}>
            Vídeos que prendem. Músicas que marcam. Páginas que vendem.
          </p>
        </FadeInUp>
        <FadeInUp delay={0.2}>
          <ServicesCarousel />
        </FadeInUp>
      </div>
    </section>
  );
}
