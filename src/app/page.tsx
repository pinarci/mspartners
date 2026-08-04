import { ContactCtaSection } from "@/components/sections/contact-cta-section";
import { DifferentiatorsSection } from "@/components/sections/differentiators-section";
import { HeroSection } from "@/components/sections/hero-section";
import { IntroductionSection } from "@/components/sections/introduction-section";
import { InsightsSection } from "@/components/sections/insights-section";
import { ProcessSection } from "@/components/sections/process-section";
import { ServicesSection } from "@/components/sections/services-section";
import { pageMetadata } from "@/config/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: pageMetadata.home.title,
  description: pageMetadata.home.description,
  openGraph: { title: pageMetadata.home.title, description: pageMetadata.home.description },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <IntroductionSection />
      <ServicesSection />
      <DifferentiatorsSection />
      <ProcessSection />
      <InsightsSection />
      <ContactCtaSection />
    </>
  );
}
