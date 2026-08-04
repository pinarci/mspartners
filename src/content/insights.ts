import type { InsightItem, LocalizedContent, PageCtaContent, PageHeroContent } from "@/types/content";

export const insights: InsightItem[] = [
  { id: "partner-risk-turkiye", title: "Assessing Business Partner Risk in Türkiye", summary: "A proposed overview of the questions international organizations should consider before entering a commercial relationship.", status: "planned" },
  { id: "supplier-verification", title: "Supplier Verification Beyond Documentation", summary: "A planned perspective on why submitted records are only one part of an effective supplier review.", status: "planned" },
  { id: "market-entry", title: "Preparing for Market Entry in Türkiye", summary: "A proposed guide to framing local information needs before investment or commercial expansion.", status: "planned" },
];

const englishInsights = {
  hero: {
    eyebrow: "Insights",
    title: "Practical perspective for doing business in Türkiye.",
    summary: "A planned editorial programme focused on the commercial questions international organizations face when assessing relationships, suppliers and market opportunities.",
  } satisfies PageHeroContent,
  introduction: {
    eyebrow: "Editorial programme",
    title: "Analysis will follow editorial approval.",
    body: "The concepts below demonstrate future publishing capability. They are not published articles and contain no dates, authors or implied advice.",
  },
  plannedState: "Future commentary and practical analysis will be published only after subject-matter and editorial approval.",
  cta: {
    eyebrow: "A specific question",
    title: "Need local context before the editorial programme launches?",
    description: "Prepare the commercial question or information need you would like to discuss.",
    action: { label: "Contact Our Team", href: "/contact" },
  } satisfies PageCtaContent,
} as const;

export const insightsContent: LocalizedContent<typeof englishInsights> = { en: englishInsights };
