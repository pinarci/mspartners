import type { InsightItem, LocalizedContent, PageCtaContent, PageHeroContent } from "@/types/content";

export const insights: InsightItem[] = [
  { id: "partner-risk-turkiye", title: "Assessing Business Partner Risk in Türkiye", summary: "Questions to consider before entering a commercial relationship.", status: "planned" },
  { id: "supplier-verification", title: "Supplier Verification Beyond Documentation", summary: "Why submitted records are only one part of an effective supplier review.", status: "planned" },
  { id: "market-entry", title: "Preparing for Market Entry in Türkiye", summary: "How to frame local information needs before investment or commercial expansion.", status: "planned" },
];

const englishInsights = {
  hero: {
    eyebrow: "Insights",
    title: "Practical perspective for doing business in Türkiye.",
    summary: "Editorial perspectives on the commercial questions international organizations face when assessing relationships, suppliers and market opportunities.",
  } satisfies PageHeroContent,
  introduction: {
    eyebrow: "Editorial programme",
    title: "Topics under editorial development.",
    body: "Future commentary will focus on practical questions involving business relationships, suppliers and market entry in Türkiye.",
  },
  cta: {
    eyebrow: "A specific question",
    title: "Need local context before the editorial programme launches?",
    description: "Prepare the commercial question or information need you would like to discuss.",
    action: { label: "Contact Our Team", href: "/contact" },
  } satisfies PageCtaContent,
} as const;

export const insightsContent: LocalizedContent<typeof englishInsights> = { en: englishInsights };
