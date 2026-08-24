import { company } from "@/config/brand";
import type { LocalizedContent, PageCtaContent, PageHeroContent } from "@/types/content";

const virginiaEntity = company.legalEntities[0];
const turkiyeEntity = company.legalEntities[1];

const englishAbout = {
  hero: {
    eyebrow: "About MS Partners",
    title: "Virginia-based accountability. Local field execution. Independent review.",
    summary: `MS Partners combines a Virginia-based corporate platform with practical local coordination through ${turkiyeEntity.name} in Ankara and field capability across relevant markets.`,
  } satisfies PageHeroContent,
  purpose: {
    eyebrow: "Company Positioning",
    title: "Built to de-risk cross-border operations.",
    body: [
      "MS Partners is a Virginia-based independent global advisory company established to transform complex international trade processes into clear, secure and sustainable solutions. We bring together the decades of public- and private-sector experience of team leaders who have held senior roles across international trade, investment, banking, finance and the real economy in a broad range of markets.",
      "Guided by a vision of removing blind spots across the supply chain, our operating model combines Virginia-based corporate responsibility with local execution in developing sourcing and commercial centers. As an independent partner aligned with our clients’ long-term success, we support requirements ranging from financial due diligence and factory inspection to alternative logistics optimization and cross-border financing structures.",
      "MS Partners enables clients to manage cross-border requirements without the immediate need to establish a local entity or branch in each market. We coordinate operational and legal workstreams through local expertise and qualified professional networks, bringing global perspective together with practical field execution. Our approach is grounded in commercial judgement, transparency and respect for human values.",
    ],
  },
  trustPillars: {
    eyebrow: "Trust Anchors",
    title: "Three anchors shape the way MS Partners works.",
    items: [
      {
        title: "Virginia-Based Framework",
        description: "A Virginia-based corporate structure supporting clear responsibility and cross-border engagement.",
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
  operatingModel: {
    eyebrow: "Operating Model",
    title: "A coordinated relationship from Virginia to the field.",
    body: `The MS Partners structure brings together ${virginiaEntity.name} in ${virginiaEntity.location}, ${turkiyeEntity.name} in ${turkiyeEntity.location}, and local field capability across relevant markets. Clients can address cross-border requirements through one coordinated relationship rather than establishing an immediate local presence in every jurisdiction.`,
  },
  cta: {
    eyebrow: "Services",
    title: "Explore the service areas behind the operating model.",
    description: "Review the approved service focus areas for cross-border commercial, operational and financing requirements.",
    action: { label: "View Services", href: "/services" },
  } satisfies PageCtaContent,
} as const;

export const aboutContent: LocalizedContent<typeof englishAbout> = { en: englishAbout };
