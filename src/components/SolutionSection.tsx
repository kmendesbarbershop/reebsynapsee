import { FadeInUp } from "./FadeInUp";
import { ServicesCarousel } from "@/components/ui/services-carousel";

export function SolutionSection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <FadeInUp>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Um sistema completo de conversão
          </h2>
        </FadeInUp>
        <FadeInUp delay={0.15}>
          <ServicesCarousel />
        </FadeInUp>
      </div>
    </section>
  );
}
