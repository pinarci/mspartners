import type { PageHeroImage } from "@/types/content";

export const pageHeroImages = {
  about: {
    src: "/images/page-heroes/about-corporate-architecture.webp",
    objectPosition: "center 45%",
    overlayStrength: "standard",
  },
  services: {
    src: "/images/page-heroes/services-field-inspection.webp",
    objectPosition: "center 38%",
    overlayStrength: "strong",
  },
  areasOfWork: {
    src: "/images/page-heroes/areas-logistics-terminal.webp",
    objectPosition: "center 50%",
    overlayStrength: "standard",
  },
  contact: {
    src: "/images/page-heroes/contact-blue-architecture.webp",
    objectPosition: "center 42%",
    overlayStrength: "standard",
  },
} as const satisfies Record<string, PageHeroImage>;
