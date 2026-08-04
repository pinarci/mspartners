import type { LocalizedContent, PageCtaContent, PageHeroContent, ServiceItem } from "@/types/content";

// TODO: Confirm the service portfolio, naming and scope with the client.
export const services: ServiceItem[] = [
  {
    id: "supply-chain-oversight",
    title: "Cross-Border Supply-Chain Oversight",
    description: "Independent local oversight and coordination for defined supply-chain questions and operating priorities.",
  },
  {
    id: "field-representation",
    title: "Local Field Representation",
    description: "Local coordination, observation and communication support for overseas commercial operations.",
  },
  {
    id: "due-diligence",
    title: "Financial and Corporate Due Diligence",
    description: "Scoped review of available financial, corporate and commercial information to support decision-making.",
  },
  {
    id: "logistics",
    title: "Logistics and Freight Optimization",
    description: "Assessment of alternative logistics and freight approaches in support of commercial and operational objectives.",
  },
  {
    id: "commercial-financing",
    title: "Commercial Financing and Credit Structuring",
    description: "Commercially focused support in evaluating financing and credit-structuring considerations for defined transactions.",
  },
];

const englishServicesPage = {
  hero: {
    eyebrow: "Services",
    title: "Cross-border support shaped around the engagement.",
    summary: "Broad areas of work for U.S. and international companies managing supply chains, overseas operations and commercial decisions.",
  } satisfies PageHeroContent,
  introduction: {
    eyebrow: "Engagement Scope",
    title: "Broad capabilities, defined for each assignment.",
    body: "Detailed service scopes and deliverables are defined for each engagement.",
  },
  cta: {
    eyebrow: "Define the Requirement",
    title: "Start with the commercial objective and operating context.",
    description: "Outline the supply-chain, transaction or overseas operating question that requires independent local support.",
    action: { label: "Contact Us", href: "/contact" },
  } satisfies PageCtaContent,
} as const;

export const servicesPageContent: LocalizedContent<typeof englishServicesPage> = { en: englishServicesPage };
