import { company } from "@/config/brand";

export const siteMetadata = {
  title: `${company.name} | ${company.slogan.replace(/\.$/, "")}`,
  titleTemplate: `%s | ${company.name}`,
  description: "Independent local insight and practical advisory support for complex cross-border operations across Türkiye, Europe and Asia.",
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
    description: "MS Partners services are shaped around each engagement, with detailed information pending final client approval.",
  },
  areasOfWork: {
    title: "Areas of Work",
    description: "Broad cross-border support shaped by local operational and commercial requirements.",
  },
  contact: {
    title: "Contact",
    description: "Contact information and enquiry preparation for MS Partners, including the planned Maidan location in Ankara.",
  },
} as const;
