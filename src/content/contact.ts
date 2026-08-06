import type { LocalizedContent, PageHeroContent } from "@/types/content";
import { contactConfiguration } from "@/config/contact";

const englishContact = {
  hero: {
    eyebrow: "Contact",
    title: "Contact MS Partners.",
    summary: "Corporate contact information, the planned Ankara location and concise enquiry-preparation guidance.",
  } satisfies PageHeroContent,
  information: {
    eyebrow: "Contact Information",
    title: "Current contact details.",
    email: {
      label: "Corporate Email",
      pendingValue: "Email unavailable",
      supportingText: "The corporate email address will be added when available.",
    },
    ankara: {
      label: "Planned Ankara Office Location",
      building: contactConfiguration.ankaraBuildingName,
      address: contactConfiguration.ankaraBuildingAddress,
      statusNote: "Virtual-office and unit details remain subject to final confirmation.",
    },
  },
  map: {
    eyebrow: "Location",
    title: "Maidan in Çankaya, Ankara.",
    iframeTitle: "Map showing Maidan İş ve Yaşam Merkezi in Ankara",
    linkLabel: "View Maidan on Google Maps",
    note: "Map indicates the Maidan complex. Final MS Partners office details remain subject to confirmation.",
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
