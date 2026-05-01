import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { ProblemSection } from "../components/ProblemSection";
import { SolutionSection } from "../components/SolutionSection";
import { HowItWorksSection } from "../components/HowItWorksSection";
import { BenefitsSection } from "../components/BenefitsSection";
import { DifferentiatorSection } from "../components/DifferentiatorSection";
import { FreeOfferCTA } from "../components/FreeOfferCTA";
import { AIConsultingSection } from "../components/AIConsultingSection";
import { FinalCTA } from "../components/FinalCTA";
import { Footer } from "../components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Reeb Synapse — Transformamos atenção em vendas reais" },
      { name: "description", content: "Sistema de conversão com IA: vídeos, jingles, landing pages e campanhas que geram vendas reais." },
      { property: "og:title", content: "Reeb Synapse — Transformamos atenção em vendas reais" },
      { property: "og:description", content: "Sistema de conversão com IA: vídeos, jingles, landing pages e campanhas que geram vendas reais." },
    ],
  }),
});

function Index() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <BenefitsSection />
      <DifferentiatorSection />
      <AIConsultingSection />
      <FreeOfferCTA />
      <FinalCTA />
      <Footer />
    </>
  );
}
