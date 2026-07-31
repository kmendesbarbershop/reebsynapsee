import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { ProblemSection } from "./components/ProblemSection";
import { SolutionSection } from "./components/SolutionSection";
import { HowItWorksSection } from "./components/HowItWorksSection";
import { BenefitsSection } from "./components/BenefitsSection";
import { DifferentiatorSection } from "./components/DifferentiatorSection";
import { AIConsultingSection } from "./components/AIConsultingSection";
import { FreeOfferCTA } from "./components/FreeOfferCTA";
import { FAQSection } from "./components/FAQSection";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";

function App() {
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
      <FAQSection />
      <FinalCTA />
      <Footer />
    </>
  );
}

export default App;