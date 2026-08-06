import type { LocalizedContent, PageCtaContent, PageHeroContent } from "@/types/content";

export const serviceAreas = [
  {
    title: "Financial & Commercial Due Diligence",
    description: "Reviewing financial standing, corporate information and commercially relevant risk indicators to support informed cross-border decisions.",
    detail: "Independent review of counterparties, financial context and commercially material indicators before clients commit resources across borders.",
  },
  {
    title: "Factory Inspection & Quality Control",
    description: "Coordinating on-site factory reviews, quality-control activities and pre-shipment inspections to assess production capability, conformity and shipment readiness.",
    detail: "Field coordination for production-site reviews, quality-control activity and Pre-Shipment Inspection (PSI) where shipment readiness must be verified.",
  },
  {
    title: "Alternative Logistics & Freight Optimization",
    description: "Evaluating alternative routes, carriers and freight structures to improve operational resilience, timing and commercial efficiency.",
    detail: "Commercial review of routes, carriers and freight structures when timing, resilience or operating cost require a more practical logistics path.",
  },
  {
    title: "Trade, Finance & Credit Advisory",
    description: "Supporting the assessment, coordination and structuring of cross-border financing and credit requirements.",
    detail: "Coordination and commercial assessment for financing structures, credit requirements and financial counterparties in cross-border activity.",
  },
  {
    title: "Continuous In-Country Representation",
    description: "Providing continuous local coordination and field representation without requiring the client to establish an immediate local branch or operating entity.",
    detail: "Ongoing in-market coordination for clients that need dependable local presence before deciding whether to create a branch or local operating entity.",
  },
] as const;

const englishServicesPage = {
  hero: {
    eyebrow: "Services",
    title: "Cross-border services grounded in field execution.",
    summary: "MS Partners supports complex international requirements through focused commercial review, local coordination and practical operating support.",
  } satisfies PageHeroContent,
  introduction: {
    eyebrow: "Service Focus",
    title: "Clear support for decisions that cross markets.",
    body: "Each service area is shaped around the client’s commercial objective, operating context and risk questions, with emphasis on disciplined coordination and clear reporting.",
  },
  services: serviceAreas,
  cta: {
    eyebrow: "Contact",
    title: "Discuss the operating context behind your requirement.",
    description: "Prepare the commercial objective, relevant market and principal areas of concern for an initial discussion.",
    action: { label: "Contact Us", href: "/contact" },
  } satisfies PageCtaContent,
} as const;

export const servicesPageContent: LocalizedContent<typeof englishServicesPage> = { en: englishServicesPage };
