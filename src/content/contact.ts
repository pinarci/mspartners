import type { LocalizedContent, PageHeroContent } from "@/types/content";
import { contactConfiguration } from "@/config/contact";

const englishContact = {
  hero: {
    eyebrow: "Contact",
    title: "Contact MS Partners.",
    summary: "Corporate contact information, the planned Ankara location and concise inquiry-preparation guidance.",
  } satisfies PageHeroContent,
  information: {
    eyebrow: "Contact Information",
    title: "Current contact details.",
    email: {
      label: "Corporate Email",
      pendingValue: "Email unavailable",
      supportingText: "The corporate email address will be added when available.",
    },
    whatsapp: {
      label: "WhatsApp",
      actionLabel: "Message us on WhatsApp",
      supportingText: "Start a direct conversation with our team.",
    },
    ankara: {
      label: "",
      building: contactConfiguration.ankaraBuildingName,
      address: contactConfiguration.ankaraBuildingAddress,
      statusNote: "",
    },
  },
  map: {
    eyebrow: "Location",
    title: "Maidan in Çankaya, Ankara.",
    iframeTitle: "Map showing Maidan İş ve Yaşam Merkezi in Ankara",
    linkLabel: "View Maidan on Google Maps",
    note: "",
  },
  preparation: {
    eyebrow: "Inquiry preparation",
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
