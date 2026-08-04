import { company } from "@/config/brand";
import type { DifferentiatorItem, LocalizedContent } from "@/types/content";

const englishHome = {
  hero: {
    eyebrow: "Independent Cross-Border Advisory",
    title: company.slogan,
    description: "Independent local insight and practical advisory support for U.S. and international companies operating across Türkiye, Europe and Asia.",
    primaryAction: { label: "Explore Our Work", href: "/services" },
    secondaryAction: { label: "Contact Us", href: "/contact" },
  },
  introduction: {
    eyebrow: "Washington & Ankara",
    title: "Independent local execution for cross-border trade.",
    body: [
      `Based in ${company.geographicPositioning.base}, MS Partners works with its affiliate in ${company.geographicPositioning.affiliate} to support U.S. and international companies across ${company.geographicPositioning.operatingRegions.join(", ")}.`,
      "Our cross-border advisory work combines commercial focus with local field capability, transparent execution and disciplined reporting.",
    ],
    principle: "Independent insight. Practical local execution.",
    action: { label: "Learn About MS Partners", href: "/about" },
  },
  services: {
    eyebrow: "Areas of Work",
    title: "Practical support for cross-border operations.",
    description: "Broad advisory capabilities shaped around each client’s commercial purpose, operating context and agreed scope.",
    action: { label: "Explore Our Work", href: "/services" },
  },
  differentiators: {
    eyebrow: "Why MS Partners",
    title: "Independent perspective, grounded in local execution.",
    description: "A commercially focused approach to uncertainty, coordination and decision support across borders.",
  },
  process: {
    eyebrow: "How We Work",
    title: "A clear process, adapted to each engagement.",
    description: "A practical structure for defining the question, coordinating local work and communicating useful findings.",
    action: { label: "See How We Work", href: "/approach" },
  },
  contact: {
    eyebrow: "Contact",
    title: "Start with the commercial question.",
    description: "Prepare the context, priorities and timeframe for an initial discussion with MS Partners.",
    actionLabel: "Contact Us",
    actionHref: "/contact",
  },
  footer: {
    previewNotice: "Concept preview — Company information and content remain subject to final approval.",
  },
} as const;

// TODO: Add reviewed Turkish content without changing presentation components.
export const homeContent: LocalizedContent<typeof englishHome> = { en: englishHome };

export const differentiators: DifferentiatorItem[] = [
  { id: "independent", title: "Independent Advisory", description: "An objective perspective centered on the client’s commercial purpose and agreed scope." },
  { id: "local", title: "Local Field Capability", description: "On-the-ground coordination and insight through the Türkiye affiliate in Ankara." },
  { id: "cross-border", title: "Cross-Border Focus", description: "Support for U.S. and international companies operating across different markets." },
  { id: "transparent", title: "Transparent Execution", description: "Clear communication about the work performed, information available and relevant limitations." },
  { id: "reporting", title: "Disciplined Reporting", description: "Material observations organized to support discussion and decision-making." },
  { id: "commercial", title: "Commercial Practicality", description: "Recommendations framed around operational priorities and practical next steps." },
];
