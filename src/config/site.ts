import { company } from "@/config/brand";

export const siteMetadata = {
  title: `${company.name} | ${company.slogan.replace(/\.$/, "")}`,
  titleTemplate: `%s | ${company.name}`,
  description: "Washington, DC-based independent global advisory for de-risking complex cross-border trade, investment and financing requirements.",
} as const;

export const pageMetadata = {
  home: {
    title: `${company.name} | ${company.slogan.replace(/\.$/, "")}`,
    description: siteMetadata.description,
  },
  about: {
    title: "About Us",
    description: "Learn how MS Partners combines Washington, DC-based accountability with local field execution and independent review.",
  },
  services: {
    title: "Services",
    description: "Financial due diligence, factory inspection, logistics optimization, trade finance advisory and in-country representation from MS Partners.",
  },
  areasOfWork: {
    title: "Areas of Work",
    description: "Commercial environments where MS Partners supports cross-border trade, market entry, finance and real-sector operations.",
  },
  contact: {
    title: "Contact",
    description: "Contact information and inquiry preparation for MS Partners, including the planned Maidan location in Ankara.",
  },
} as const;
