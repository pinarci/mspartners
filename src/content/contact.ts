import type { LocalizedContent, PageCtaContent, PageHeroContent } from "@/types/content";

const englishContact = {
  hero: {
    eyebrow: "Contact",
    title: "Prepare for a focused conversation.",
    summary: "MS Partners is not yet publishing contact details. This page outlines the information a prospective client may prepare once the approved contact channel is available.",
  } satisfies PageHeroContent,
  status: {
    eyebrow: "Contact information",
    title: "Details pending client confirmation.",
    body: "A verified email address, telephone number, office information and official social profiles will be added only after client approval.",
    label: "Contact channel not yet active",
  },
  preparation: {
    eyebrow: "Enquiry preparation",
    title: "Information that can make an initial discussion more useful.",
    introduction: "These prompts are informational only. No information is collected or submitted through this website during the current phase.",
    prompts: [
      { label: "Company name", detail: "The organization seeking support." },
      { label: "Country", detail: "The relevant home or operating jurisdiction." },
      { label: "General area of concern", detail: "The decision, relationship or risk question involved." },
      { label: "Relevant market or transaction", detail: "The commercial context in Türkiye or across borders." },
      { label: "Preferred contact method", detail: "To be used once confirmed channels are published." },
      { label: "Desired timeframe", detail: "Any known decision or reporting milestone." },
    ],
  },
  privacyNote: "Do not send confidential or personal information until an approved contact channel and privacy notice are published.",
  cta: {
    eyebrow: "Current status",
    title: "The enquiry channel is being prepared.",
    description: "Contact information will be added following client confirmation and privacy review.",
    status: "Contact details pending confirmation",
  } satisfies PageCtaContent,
} as const;

export const contactContent: LocalizedContent<typeof englishContact> = { en: englishContact };
