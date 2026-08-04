import type { LocalizedContent, PageHeroContent } from "@/types/content";
import { contactStatus } from "@/config/site";

const englishContact = {
  hero: {
    eyebrow: "Contact",
    title: "Contact MS Partners.",
    summary: "Prepare the essential context for an initial discussion about a supply chain, overseas operation, transaction or market question.",
  } satisfies PageHeroContent,
  status: {
    eyebrow: "Official Contact Channel",
    title: contactStatus.notice,
    body: "The guidance below can help prepare the context for an efficient initial discussion.",
  },
  preparation: {
    eyebrow: "Enquiry preparation",
    title: "Information to prepare for an initial discussion.",
    introduction: "No information is collected through this website.",
    prompts: [
      { label: "Company name", detail: "The organization seeking support." },
      { label: "Country", detail: "The relevant home or operating jurisdiction." },
      { label: "General area of concern", detail: "The decision, relationship or risk question involved." },
      { label: "Relevant transaction or market", detail: "The commercial context and operating regions involved." },
      { label: "Preferred timeframe", detail: "Any known operational, transaction or decision milestone." },
    ],
  },
} as const;

export const contactContent: LocalizedContent<typeof englishContact> = { en: englishContact };
