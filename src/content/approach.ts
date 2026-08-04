import type { LocalizedContent, PageCtaContent, PageHeroContent, ProcessStep } from "@/types/content";

// TODO: Confirm and approve the working process with the client.
export const processSteps: ProcessStep[] = [
  { id: "consultation", title: "Initial Consultation", description: "Understand the decision, context and key concerns.", detail: "Start with the commercial question, the information available and what still needs clarification.", status: "provisional" },
  { id: "scope", title: "Scope Definition", description: "Agree priorities, boundaries and appropriate sources.", detail: "Define proportionate boundaries, expected limitations, communication points and deliverables before work begins.", status: "provisional" },
  { id: "review", title: "Local Review", description: "Conduct the defined verification or advisory work.", detail: "Review the agreed information, observations and commercial context within the confirmed scope.", status: "provisional" },
  { id: "reporting", title: "Analysis and Reporting", description: "Present material findings with clarity and context.", detail: "Organize observations, explain limitations and distinguish evidence from interpretation.", status: "provisional" },
  { id: "guidance", title: "Strategic Guidance", description: "Discuss implications and practical next steps.", detail: "Consider what the findings mean for the decision and where specialist input may be required.", status: "provisional" },
];

const englishApproach = {
  hero: {
    eyebrow: "Our Approach",
    title: "A disciplined engagement, adapted to the question at hand.",
    summary: "A five-step framework for defining the issue, conducting focused local review and communicating findings with appropriate context and limitations.",
  } satisfies PageHeroContent,
  introduction: {
    eyebrow: "Scope-led methodology",
    title: "Structure without a one-size-fits-all process.",
    body: "Each engagement is shaped around its commercial purpose, available information and appropriate boundaries rather than a one-size-fits-all methodology.",
  },
  principles: {
    eyebrow: "Engagement principles",
    title: "Clear expectations throughout the work.",
    items: [
      { title: "Confidentiality and discretion", description: "Sensitive information and communication would be handled with appropriate care." },
      { title: "Scope-led methodology", description: "Work would remain aligned with the agreed question and reasonable limitations." },
      { title: "Clear deliverables", description: "The expected reporting format and intended use would be defined in advance." },
      { title: "Practical communication", description: "Material observations would be communicated clearly and without unnecessary complexity." },
    ],
  },
  limitation: "Methodology, timing and deliverables are adapted to the question, information available and agreed scope.",
  cta: {
    eyebrow: "Plan the scope",
    title: "Discuss how an engagement may proceed.",
    description: "Start with the decision, the available information and the local questions that need to be addressed.",
    action: { label: "Discuss an Engagement", href: "/contact" },
  } satisfies PageCtaContent,
} as const;

export const approachContent: LocalizedContent<typeof englishApproach> = { en: englishApproach };
