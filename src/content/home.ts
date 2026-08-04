import { company } from "@/config/brand";
import type { LocalizedContent } from "@/types/content";

const englishHome = {
  hero: {
    eyebrow: "Independent Cross-Border Advisory",
    title: company.slogan,
    description: "Independent local insight and practical advisory support for complex cross-border operations across Türkiye, Europe and Asia.",
    primaryAction: { label: "About MS Partners", href: "/about" },
    secondaryAction: { label: "Contact Us", href: "/contact" },
  },
  introduction: {
    eyebrow: "Washington & Ankara",
    title: "Local context for complex cross-border operations.",
    body: [
      `Based in ${company.geographicPositioning.base}, MS Partners works with its affiliate in ${company.geographicPositioning.affiliate} across ${company.geographicPositioning.operatingRegions.join(", ")}.`,
      "The firm addresses uncertainty and operational risk in cross-border business through local context and commercially practical insight.",
    ],
    principle: "Independent insight. Practical local execution.",
    action: { label: "Learn About MS Partners", href: "/about" },
  },
  services: {
    eyebrow: "Services",
    title: "Services shaped around each engagement.",
    description: "Our detailed service portfolio is currently being finalized. Further information will be published following final client approval.",
    action: { label: "View Services", href: "/services" },
  },
  areasOfWork: {
    eyebrow: "Areas of Work",
    title: "Cross-border support shaped by local requirements.",
    description: "Our areas of work are being reviewed and will be presented in detail following final approval.",
    action: { label: "View Areas of Work", href: "/areas-of-work" },
  },
  contact: {
    eyebrow: "Contact",
    title: "Discuss your requirements with MS Partners.",
    description: "Official contact details will be added following confirmation.",
    actionLabel: "Contact Us",
    actionHref: "/contact",
  },
  footer: {
    previewNotice: "Concept preview — Company information and content remain subject to final approval.",
  },
} as const;

export const homeContent: LocalizedContent<typeof englishHome> = { en: englishHome };
