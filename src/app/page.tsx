import { ContactCtaSection } from "@/components/sections/contact-cta-section";
import { AreasOfWorkSection } from "@/components/sections/areas-of-work-section";
import { HeroSection } from "@/components/sections/hero-section";
import { IntroductionSection } from "@/components/sections/introduction-section";
import { ServicesSection } from "@/components/sections/services-section";
import { pageMetadata } from "@/config/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: pageMetadata.home.title },
  description: pageMetadata.home.description,
  openGraph: { title: pageMetadata.home.title, description: pageMetadata.home.description },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <IntroductionSection />
      <ServicesSection />
      <AreasOfWorkSection />
      <ContactCtaSection />
    </>
  );
}
