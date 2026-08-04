import type { LocalizedContent, PageCtaContent, PageHeroContent, ProcessStep } from "@/types/content";

export const processSteps: ProcessStep[] = [
  { id: "discussion", title: "Initial Discussion", description: "Understand the commercial objective, context and principal concerns.", detail: "Begin with the decision to be supported, the operating context and the information currently available." },
  { id: "scope", title: "Scope Definition", description: "Agree priorities, boundaries and intended deliverables.", detail: "Define a proportionate scope, relevant limitations, coordination points and expected outputs." },
  { id: "review", title: "Local Review and Coordination", description: "Conduct and coordinate the agreed local work.", detail: "Review the relevant information and local observations within the boundaries established for the engagement." },
  { id: "reporting", title: "Analysis and Reporting", description: "Present material findings with appropriate context.", detail: "Organize observations, explain limitations and distinguish available information from professional interpretation." },
  { id: "recommendations", title: "Practical Recommendations", description: "Discuss implications and proportionate next steps.", detail: "Frame practical recommendations around the client’s commercial purpose and the agreed scope." },
];

const englishApproach = {
  hero: {
    eyebrow: "How We Work",
    title: "A clear process, adapted to each engagement.",
    summary: "A practical framework for defining the question, coordinating local work and communicating findings with appropriate context and limitations.",
  } satisfies PageHeroContent,
  introduction: {
    eyebrow: "Adapted Process",
    title: "Professional structure without a fixed methodology.",
    body: "The process is adapted to each engagement’s commercial purpose, available information, operating context and agreed boundaries.",
  },
  principles: {
    eyebrow: "Engagement principles",
    title: "Clear expectations throughout the work.",
    items: [
      { title: "Confidentiality and discretion", description: "Sensitive information and communication are handled with appropriate care." },
      { title: "Scope-led work", description: "The engagement remains aligned with the agreed question and reasonable limitations." },
      { title: "Clear deliverables", description: "The expected reporting format and intended use are defined in advance." },
      { title: "Practical communication", description: "Material observations are communicated clearly and without unnecessary complexity." },
    ],
  },
  limitation: "Methodology, timing and deliverables are adapted to the question, information available and agreed scope.",
  cta: {
    eyebrow: "Plan the scope",
    title: "Discuss how an engagement may proceed.",
    description: "Start with the decision, the available information and the local questions that need to be addressed.",
    action: { label: "Contact Us", href: "/contact" },
  } satisfies PageCtaContent,
} as const;

export const approachContent: LocalizedContent<typeof englishApproach> = { en: englishApproach };
