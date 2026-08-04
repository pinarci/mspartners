import { company } from "@/config/brand";
import type { ContactStatus } from "@/types/content";

export const siteMetadata = {
  title: `${company.name} | ${company.slogan.replace(/\.$/, "")}`,
  titleTemplate: `%s | ${company.name}`,
  description: "Independent cross-border advisory support for U.S. and international companies operating across Türkiye, Europe and Asia.",
} as const;

export const pageMetadata = {
  home: {
    title: `${company.name} | ${company.slogan.replace(/\.$/, "")}`,
    description: siteMetadata.description,
  },
  about: {
    title: "About Us",
    description: "Learn about MS Partners, its Washington State base, Ankara affiliate and independent cross-border advisory positioning.",
  },
  services: {
    title: "Services",
    description: "Broad areas of cross-border advisory support, with detailed scopes and deliverables defined for each engagement.",
  },
  approach: {
    title: "How We Work",
    description: "A flexible engagement process for scope definition, local review, analysis, reporting and practical recommendations.",
  },
  contact: {
    title: "Contact",
    description: "Prepare for a conversation with MS Partners about cross-border business objectives and information needs.",
  },
} as const;

// TODO: Replace this notice when the official corporate contact channel is confirmed.
export const contactStatus = {
  officialChannelConfirmed: false,
  notice: "The official corporate contact channel will be added following confirmation.",
} satisfies ContactStatus;
