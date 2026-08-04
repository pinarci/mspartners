import type { LocalizedContent, PageCtaContent, PageHeroContent } from "@/types/content";

const englishAbout = {
  hero: {
    eyebrow: "About MS Partners",
    title: "Independent local perspective for cross-border business decisions.",
    summary: "MS Partners is being developed to support international organizations that require dependable context, independent assessment and clear communication when their business interests involve Türkiye.",
  } satisfies PageHeroContent,
  purpose: {
    eyebrow: "Company purpose",
    title: "Understanding beyond submitted documentation.",
    body: [
      "International organizations assessing a supplier, partner, investment or contractual relationship may need a clearer view of the conditions behind the available documentation.",
      "The proposed role of MS Partners is to organize relevant local context, examine defined questions independently and communicate material observations in a practical form.",
    ],
  },
  crossBorder: {
    eyebrow: "Cross-border role",
    title: "A clear line between international expectations and local commercial reality.",
    introduction: "The intended positioning combines local understanding in Türkiye with awareness of the information and communication standards expected by U.S. and other international decision-makers.",
    points: [
      { title: "Local context", description: "Interpret commercially relevant information within the conditions in which a business operates." },
      { title: "Independent assessment", description: "Keep the review centered on evidence, limitations and the client’s decision." },
      { title: "Clear communication", description: "Translate local observations into concise, internationally understandable reporting." },
      { title: "Decision support", description: "Help clients identify questions, implications and proportionate next steps." },
    ],
  },
  principles: {
    eyebrow: "Core principles",
    title: "Professional judgment with appropriate restraint.",
    items: ["Independence", "Confidentiality", "Professional judgment", "Practical communication", "Evidence-based assessment", "Cross-border perspective"],
  },
  background: {
    eyebrow: "Professional background",
    title: "Leadership details will follow client confirmation.",
    body: "This area is reserved for approved team biographies, substantiated professional experience and relevant credentials. No names, roles or claims will be published until the client has reviewed and confirmed them.",
    status: "Details pending confirmation",
  },
  cta: {
    eyebrow: "Start with the question",
    title: "Bring local context into your next decision.",
    description: "Prepare the objectives and concerns you would like an independent local perspective to address.",
    action: { label: "Contact Our Team", href: "/contact" },
  } satisfies PageCtaContent,
} as const;

export const aboutContent: LocalizedContent<typeof englishAbout> = { en: englishAbout };
