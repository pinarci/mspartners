import { company } from "@/config/brand";
import { areasOfWorkItems } from "@/content/areas-of-work";
import { serviceAreas } from "@/content/services";
import type { LocalizedContent } from "@/types/content";

const englishHome = {
  hero: {
    eyebrow: "Washington-Based Independent Global Advisory",
    title: company.slogan,
    description: "MS Partners combines Washington-based corporate responsibility with on-the-ground execution to turn complex international trade, investment and financing requirements into clear, secure and sustainable solutions.",
    compactLine: "Your on-the-ground partner for complex cross-border operations.",
    primaryAction: { label: "About MS Partners", href: "/about" },
    secondaryAction: { label: "Contact Us", href: "/contact" },
  },
  introduction: {
    eyebrow: "Company Positioning",
    title: "Washington accountability with practical field execution.",
    body: [
      "MS Partners is a Washington-based independent global advisory firm established to transform complex international trade processes into clear, secure and sustainable solutions.",
      "The firm combines Washington-based corporate responsibility with local execution in developing sourcing and commercial centres, helping clients coordinate cross-border requirements without the immediate need to establish a local entity in each market.",
    ],
    principle: "Washington-based accountability. Local field execution. Independent review.",
    action: { label: "Learn About MS Partners", href: "/about" },
  },
  trustPillars: {
    eyebrow: "Trust Anchors",
    title: "A disciplined structure for cross-border engagement.",
    items: [
      {
        title: "Washington-Based Framework",
        description: "A Washington-based corporate structure supporting clear responsibility and cross-border engagement.",
      },
      {
        title: "On-the-Ground Execution",
        description: "Local coordination, inspection and practical field support where commercial activity takes place.",
      },
      {
        title: "Independent Review",
        description: "Objective commercial, financial and operational review aligned with the client’s long-term interests.",
      },
    ],
  },
  services: {
    eyebrow: "Services",
    title: "Focused support across the operating cycle.",
    description: "Five approved service areas support decisions, verification, logistics, financing and continuous local coordination.",
    items: serviceAreas,
    action: { label: "View Services", href: "/services" },
  },
  operatingModel: {
    eyebrow: "Operating Model",
    title: "Washington-based responsibility. Local execution where it matters.",
    body: "Our structure combines a Washington-based corporate platform with local coordination and field capability in Türkiye and relevant international markets. This allows clients to address cross-border requirements through one coordinated relationship rather than establishing an immediate local presence in every jurisdiction.",
    entities: company.legalEntities,
  },
  areasOfWork: {
    eyebrow: "Areas of Work",
    title: "Commercial environments where MS Partners may operate.",
    description: "Areas of work describe the contexts in which cross-border requirements may require local information, commercial coordination and field-level clarity.",
    items: areasOfWorkItems,
    action: { label: "View Areas of Work", href: "/areas-of-work" },
  },
  contact: {
    eyebrow: "Contact",
    title: "Discuss your cross-border requirements with MS Partners.",
    description: "Prepare the commercial objective, operating context and principal areas of concern for an initial discussion.",
    actionLabel: "Contact Us",
    actionHref: "/contact",
  },
  footer: {
    note: "Independent global advisory for cross-border operations.",
  },
} as const;

export const homeContent: LocalizedContent<typeof englishHome> = { en: englishHome };
