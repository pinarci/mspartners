import type { LocalizedContent, PageCtaContent, PageHeroContent, ProcessStep } from "@/types/content";

// TODO: Confirm and approve the working process with the client.
export const processSteps: ProcessStep[] = [
  { id: "consultation", title: "Initial Consultation", description: "Understand the decision, context and key concerns.", detail: "Begin with the commercial question, the decision it informs and the information already available. This first discussion would identify whether local review is appropriate and what still needs clarification.", status: "provisional" },
  { id: "scope", title: "Scope Definition", description: "Agree priorities, boundaries and appropriate sources.", detail: "Define a proportionate scope, expected limitations, communication points and intended deliverables before work begins. The structure may differ depending on the engagement.", status: "provisional" },
  { id: "review", title: "Local Review", description: "Conduct the defined verification or advisory work.", detail: "Carry out the agreed local review using appropriate available information, observations and commercial context. Activities remain bounded by the confirmed scope.", status: "provisional" },
  { id: "reporting", title: "Analysis and Reporting", description: "Present material findings with clarity and context.", detail: "Organize relevant observations, explain important limitations and distinguish evidence from interpretation in a concise reporting format.", status: "provisional" },
  { id: "guidance", title: "Strategic Guidance", description: "Discuss implications and practical next steps.", detail: "Review what the findings may mean for the client’s decision and identify practical questions or specialist input that may be required next.", status: "provisional" },
];

const englishApproach = {
  hero: {
    eyebrow: "Our Approach",
    title: "A disciplined engagement, adapted to the question at hand.",
    summary: "A provisional five-step framework for defining the issue, conducting focused local review and communicating findings with appropriate context and limitations.",
  } satisfies PageHeroContent,
  introduction: {
    eyebrow: "Scope-led methodology",
    title: "Structure without a one-size-fits-all process.",
    body: "Every potential engagement would be shaped around its commercial purpose, available information and appropriate boundaries. The process below is a working model rather than a fixed or certified methodology.",
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
  limitation: "Final methodology, timing, deliverables and engagement terms remain subject to client confirmation and the circumstances of each assignment.",
  cta: {
    eyebrow: "Plan the scope",
    title: "Discuss how an engagement may proceed.",
    description: "Start with the decision, the available information and the local questions that need to be addressed.",
    action: { label: "Discuss an Engagement", href: "/contact" },
  } satisfies PageCtaContent,
} as const;

export const approachContent: LocalizedContent<typeof englishApproach> = { en: englishApproach };
