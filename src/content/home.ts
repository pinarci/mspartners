import { company } from "@/config/brand";
import type { DifferentiatorItem, LocalizedContent } from "@/types/content";

const englishHome = {
  hero: {
    eyebrow: company.tagline,
    title: "Clarity and Confidence for Business in Türkiye",
    description:
      "Independent local insight, commercial risk assessment and advisory support for international companies operating across Türkiye and the United States.",
    primaryAction: { label: "Explore Our Services", href: "#services" },
    secondaryAction: { label: "Discuss Your Needs", href: "/contact" },
  },
  introduction: {
    eyebrow: "Cross-Border Perspective",
    title: "Local insight for decisions that cannot rely on assumptions.",
    body: [
      "International companies need dependable local information when assessing suppliers, business partners, investments and contractual performance in Türkiye.",
      "MS Partners brings structured review, direct local insight and clear reporting to consequential cross-border decisions.",
    ],
    principle: "Evidence before assumption. Context before conclusion.",
    action: { label: "Learn About MS Partners", href: "/about" },
  },
  services: {
    eyebrow: "Services & Expertise",
    title: "Focused advisory for complex commercial questions.",
    description: "Independent review and advisory support for organizations operating across Türkiye and international markets.",
    action: { label: "Explore All Services", href: "/services" },
  },
  differentiators: {
    eyebrow: "Why MS Partners",
    title: "Serious questions deserve an independent point of view.",
    description: "Working principles designed for sensitive decisions where context, discretion and clarity matter.",
  },
  process: {
    eyebrow: "Working Approach",
    title: "A disciplined path from question to action.",
    description: "A five-step structure that keeps each engagement focused, proportionate and useful.",
    action: { label: "View Our Approach", href: "/approach" },
  },
  insights: {
    eyebrow: "Insights",
    title: "Perspective for doing business in Türkiye.",
    description: "A preview of future analysis intended to help international decision-makers ask better questions.",
    action: { label: "Explore Insights", href: "/insights" },
  },
  contact: {
    eyebrow: "Start with clarity",
    title: "Make your next decision with better local insight.",
    description: "Discuss your objectives, concerns and information needs with our team.",
    actionLabel: "Contact Our Team",
    actionHref: "/contact",
  },
  footer: {
    description: "Independent risk management, audit and business advisory support for international organizations with interests in Türkiye.",
    servicesLinkLabel: "Services & Expertise",
    previewNotice: "Concept preview — Content and company details remain subject to final approval.",
  },
} as const;

// TODO: Add reviewed Turkish content without changing presentation components.
export const homeContent: LocalizedContent<typeof englishHome> = { en: englishHome };

export const differentiators: DifferentiatorItem[] = [
  { id: "independent", title: "Independent Perspective", description: "An objective view centered on the decision and the evidence behind it." },
  { id: "local", title: "Local Market Understanding", description: "Context informed by the commercial realities of operating in Türkiye." },
  { id: "confidential", title: "Confidential Engagement", description: "Discreet handling of sensitive questions and a clear line of communication." },
  { id: "practical", title: "Practical Reporting", description: "Findings structured to be understood, discussed and acted upon." },
  { id: "cross-border", title: "Cross-Border Communication", description: "Clear communication across different business cultures and expectations." },
  { id: "judgment", title: "Senior Professional Judgment", description: "A considered approach to questions that cannot be reduced to a checklist." },
];
