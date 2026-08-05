import type { LocalizedContent, PageCtaContent, PageHeroContent } from "@/types/content";

export const areasOfWorkItems = [
  {
    title: "International Trade & Supply Chains",
    description: "Supplier relationships, cross-border transactions, sourcing environments and operational supply-chain requirements.",
  },
  {
    title: "Investment & Market Entry",
    description: "Local information, commercial coordination and practical support for companies assessing or entering new markets.",
  },
  {
    title: "Banking, Finance & Credit",
    description: "Cross-border financing requirements, financial counterparties and commercially relevant credit considerations.",
  },
  {
    title: "Industrial & Real-Sector Operations",
    description: "Factories, production environments, quality processes and field-level operational requirements.",
  },
] as const;

const englishAreasOfWork = {
  hero: {
    eyebrow: "Areas of Work",
    title: "Commercial environments where field context matters.",
    summary: "MS Partners works across cross-border business environments where local information, financial context and operational execution need to be coordinated carefully.",
  } satisfies PageHeroContent,
  introduction: {
    eyebrow: "Operating Context",
    title: "Commercial contexts that require careful coordination.",
    body: "These areas describe the commercial environments in which MS Partners may support clients as requirements are assessed, coordinated and executed across borders.",
  },
  areas: areasOfWorkItems,
  cta: {
    eyebrow: "Contact",
    title: "Bring local context into a cross-border decision.",
    description: "Prepare the market, counterparties and operating questions that need field-level clarity.",
    action: { label: "Contact Us", href: "/contact" },
  } satisfies PageCtaContent,
} as const;

export const areasOfWorkContent: LocalizedContent<typeof englishAreasOfWork> = { en: englishAreasOfWork };
