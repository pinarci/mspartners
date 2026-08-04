import { company } from "@/config/brand";
import type { LinkPlaceholder } from "@/types/content";

// TODO: Replace all metadata after company positioning is confirmed.
export const siteMetadata = {
  title: `${company.name} | ${company.tagline}`,
  titleTemplate: `%s | ${company.name}`,
  description:
    "Provisional corporate website for independent cross-border risk management, audit and business advisory support involving Türkiye.",
  status: "provisional",
} as const;

// TODO: Review all route metadata after client approval of positioning and services.
export const pageMetadata = {
  home: {
    title: "Clarity and Confidence for Business in Türkiye",
    description: siteMetadata.description,
  },
  about: {
    title: "About Us",
    description: "Provisional overview of MS Partners, its cross-border purpose and intended professional principles.",
  },
  services: {
    title: "Services & Expertise",
    description: "Provisional risk management, verification and cross-border advisory service areas involving Türkiye.",
  },
  approach: {
    title: "Our Approach",
    description: "A provisional engagement framework for focused local review, analysis, reporting and strategic guidance.",
  },
  insights: {
    title: "Insights",
    description: "Planned commentary and practical analysis for international organizations doing business in Türkiye.",
  },
  contact: {
    title: "Contact",
    description: "Prepare for a future conversation with MS Partners about cross-border business objectives and information needs.",
  },
} as const;

// TODO: Add verified details only after client confirmation.
export const contactPlaceholders = {
  email: null,
  phone: null,
  address: null,
  status: "provisional",
} as const;

export const affiliatedWebsites: LinkPlaceholder[] = [];
export const socialMediaLinks: LinkPlaceholder[] = [];
