import type { LocalizedContent, PageHeroContent } from "@/types/content";

const englishContact = {
  hero: {
    eyebrow: "Contact",
    title: "Prepare for a focused conversation.",
    summary: "Prepare the essential context for an initial discussion about a relationship, transaction or market question involving Türkiye.",
  } satisfies PageHeroContent,
  status: {
    eyebrow: "Contact information",
    title: "Contact details will be added after approval.",
    body: "A verified contact channel will be published here. Until then, use the guidance below to prepare for an efficient first conversation.",
  },
  preparation: {
    eyebrow: "Enquiry preparation",
    title: "Information that can make an initial discussion more useful.",
    introduction: "Prepare these points before reaching out. No information is collected through this website.",
    prompts: [
      { label: "Company name", detail: "The organization seeking support." },
      { label: "Country", detail: "The relevant home or operating jurisdiction." },
      { label: "General area of concern", detail: "The decision, relationship or risk question involved." },
      { label: "Relevant market or transaction", detail: "The commercial context in Türkiye or across borders." },
      { label: "Preferred contact method", detail: "How you would prefer to continue the discussion." },
      { label: "Desired timeframe", detail: "Any known decision or reporting milestone." },
    ],
  },
  privacyNote: "Do not send confidential or personal information until an approved contact channel and privacy notice are published.",
} as const;

export const contactContent: LocalizedContent<typeof englishContact> = { en: englishContact };
