import { company } from "@/config/brand";
import type { LocalizedContent, PageCtaContent, PageHeroContent } from "@/types/content";

const washingtonEntity = company.legalEntities[0];
const turkiyeEntity = company.legalEntities[1];

const englishAbout = {
  hero: {
    eyebrow: "About MS Partners",
    title: "Independent advisory support across borders.",
    summary: `MS Partners is based in ${washingtonEntity.location} and supported by its Türkiye affiliate, ${turkiyeEntity.name} in Ankara.`,
  } satisfies PageHeroContent,
  purpose: {
    eyebrow: "Company Positioning",
    title: "Local execution for international business.",
    body: [
      `MS Partners is an independent global advisory firm based in Washington State and supported by its Türkiye affiliate, ${turkiyeEntity.name} in Ankara.`,
      "Our professional network combines backgrounds in public inspection and specialist roles with extensive private-sector experience. We support U.S. and international companies seeking dependable local insight across Türkiye, Europe and Asia.",
      "MS Partners was established to help businesses reduce uncertainty and manage operational risk in cross-border trade and supply chains. Depending on the agreed scope, our work may include supply-chain oversight, local field representation, financial and corporate due diligence, alternative logistics and freight optimization, and commercial financing or credit-structuring support.",
      "Our objective is to provide international businesses with transparent local execution, disciplined reporting and commercially practical insight for their overseas operations.",
    ],
  },
  crossBorder: {
    eyebrow: "Cross-Border Role",
    title: "Independent support from local context to practical action.",
    introduction: "Each engagement is defined around the client’s commercial purpose, the operating context and the information reasonably available.",
    points: [
      { title: "Independent local insight", description: "Provide local context without claiming authority, certainty or guaranteed outcomes." },
      { title: "Transparent execution", description: "Maintain clear communication about the work performed, information available and relevant limitations." },
      { title: "Disciplined reporting", description: "Organize material observations so international decision-makers can understand and discuss them." },
      { title: "Commercial practicality", description: "Frame implications and recommendations around operational priorities and proportionate next steps." },
    ],
  },
  principles: {
    eyebrow: "Operating Principles",
    title: "High standards with appropriate restraint.",
    items: ["Independent advisory positioning", "Cross-border commercial focus", "Local field capability", "Transparent execution", "Disciplined reporting", "Practical decision support"],
  },
  cta: {
    eyebrow: "Contact",
    title: "Bring local context into your next commercial decision.",
    description: "Prepare the objective, operating context and principal areas of concern for an initial discussion.",
    action: { label: "Contact Us", href: "/contact" },
  } satisfies PageCtaContent,
} as const;

export const aboutContent: LocalizedContent<typeof englishAbout> = { en: englishAbout };
