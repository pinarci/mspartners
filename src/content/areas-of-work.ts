import type { LocalizedContent, PageCtaContent, PageHeroContent } from "@/types/content";

const englishAreasOfWork = {
  hero: {
    eyebrow: "Areas of Work",
    title: "Cross-border support shaped by local requirements.",
    summary: "Our areas of work are being reviewed and will be presented in detail following final approval. MS Partners’ engagements may address operational, commercial and local-execution requirements arising in cross-border business.",
  } satisfies PageHeroContent,
  cta: {
    eyebrow: "Contact",
    title: "Discuss your requirements with MS Partners.",
    description: "Official contact details will be added following confirmation.",
    action: { label: "Contact Us", href: "/contact" },
  } satisfies PageCtaContent,
} as const;

export const areasOfWorkContent: LocalizedContent<typeof englishAreasOfWork> = { en: englishAreasOfWork };
