import HeroSection from '@/components/figma/HeroSection';
import ServicesSection from '@/components/figma/ServicesSection';
import IntelligentEnterpriseSection from '@/components/figma/IntelligentEnterpriseSection';
import SolutionConceptsSection from '@/components/figma/SolutionConceptsSection';
import DeliveryApproachSection from '@/components/figma/DeliveryApproachSection';
import EngineeringContinuitySection from '@/components/figma/EngineeringContinuitySection';
import EngagementModelsSection from '@/components/figma/EngagementModelsSection';
import FAQSection from '@/components/figma/FAQSection';
import ConsultationSection from '@/components/figma/ConsultationSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#111827]">
      {/* 00 / Hero & Lifecycle Strip */}
      <HeroSection />

      {/* 01 / Our Capabilities */}
      <ServicesSection />

      {/* 02 / The Intelligent Enterprise (Dark Obsidian Blueprint Section) */}
      <IntelligentEnterpriseSection />

      {/* 03 / Possibilities In Practice (Interactive Mockups) */}
      <SolutionConceptsSection />

      {/* 04 / How We Deliver (4-Stage Process) */}
      <DeliveryApproachSection />

      {/* 05 / Built For The Long Term (Engineering & Infrastructure) */}
      <EngineeringContinuitySection />

      {/* 06 / Your Team, Extended (Engagement Models) */}
      <EngagementModelsSection />

      {/* 07 / Before We Begin (FAQ Accordion) */}
      <FAQSection />


      {/* 08 / Let's Build What's Next (Project Consultation Lead Form) */}
      <ConsultationSection />
    </main>
  );
}
