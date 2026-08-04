import type { LocalizedContent, PageCtaContent, PageHeroContent } from "@/types/content";

const englishServicesPage = {
  hero: {
    eyebrow: "Services",
    title: "Services shaped around each engagement.",
    summary: "Our detailed service portfolio is currently being finalized. Service scope, methodology and deliverables will be defined according to the requirements of each engagement.",
  } satisfies PageHeroContent,
  introduction: {
    eyebrow: "Service Information",
    title: "Further information will follow final approval.",
    body: "Further information will be published following final client approval.",
  },
  cta: {
    eyebrow: "Contact",
    title: "Discuss your requirements with MS Partners.",
    description: "Official contact details will be added following confirmation.",
    action: { label: "Contact Us", href: "/contact" },
  } satisfies PageCtaContent,
} as const;

export const servicesPageContent: LocalizedContent<typeof englishServicesPage> = { en: englishServicesPage };
