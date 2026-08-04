import type { LocalizedContent, PageCtaContent, PageHeroContent, ServiceItem } from "@/types/content";

// TODO: Confirm the service portfolio, naming and scope with the client.
export const services: ServiceItem[] = [
  {
    id: "due-diligence",
    title: "Business Partner Due Diligence",
    description: "Independent background review to support informed decisions about prospective partners and counterparties.",
    detail: "Depending on the agreed scope, a review may bring together available corporate information, commercial context and locally observable factors to highlight matters requiring further consideration.",
    scope: ["Corporate and commercial context", "Available background information", "Locally verifiable operating indicators"],
    status: "provisional",
  },
  {
    id: "supplier-verification",
    title: "Supplier and Company Verification",
    description: "Local verification of commercial presence, operating context and information supplied by third parties.",
    detail: "A defined verification assignment may compare submitted information with available records and local observations, without representing a certification or regulatory approval.",
    scope: ["Business presence indicators", "Submitted-information comparison", "Supplier operating context"],
    status: "provisional",
  },
  {
    id: "financial-reliability",
    title: "Financial Reliability Assessment",
    description: "A focused review of available financial and commercial information to identify issues requiring closer attention.",
    detail: "Subject to information availability and client confirmation, the work may organize selected financial and commercial indicators to support a broader reliability assessment.",
    scope: ["Available financial indicators", "Commercial consistency review", "Questions for further clarification"],
    status: "provisional",
  },
  {
    id: "compliance-review",
    title: "Product and Contract Compliance",
    description: "Focused review of product, supplier and contractual requirements across cross-border engagements.",
    detail: "A scoped review may examine how supplied product information, commercial commitments and agreed contractual expectations align in practice. It is not presented as a legal opinion.",
    scope: ["Documented requirement comparison", "Product and supplier information", "Contract-performance observations"],
    status: "provisional",
  },
  {
    id: "market-entry",
    title: "Market Entry and Investment Advisory",
    description: "Grounded local insight for companies evaluating investment, trade or a commercial presence in Türkiye.",
    detail: "Advisory support may help an organization frame its local information needs, evaluate commercial assumptions and prepare for more detailed specialist advice where required.",
    scope: ["Market-entry question framing", "Local commercial context", "Investment information priorities"],
    status: "provisional",
  },
  {
    id: "local-reporting",
    title: "Commercial Risk and Local Reporting",
    description: "Discreet local investigation, observation and reporting shaped around a clearly defined business question.",
    detail: "Engagements may combine targeted local review with concise reporting designed around a specific transaction, relationship or operational concern.",
    scope: ["Commercial risk questions", "Defined local review", "Clear findings and limitations"],
    status: "provisional",
  },
];

const englishServicesPage = {
  hero: {
    eyebrow: "Services & Expertise",
    title: "Focused local support for complex commercial decisions.",
    summary: "Six provisional service areas designed to help international organizations understand business relationships, operating conditions and commercial risk involving Türkiye.",
  } satisfies PageHeroContent,
  introduction: {
    eyebrow: "Provisional capabilities",
    title: "Scope-led support, shaped around the decision at hand.",
    body: "The exact nature, methodology and deliverables of every service remain subject to client approval and would be agreed for each engagement.",
  },
  scope: {
    eyebrow: "Engagement definition",
    title: "Clear scope before work begins.",
    body: "Available information, appropriate limitations, intended deliverables and communication expectations would be defined before an engagement proceeds. Specialist legal, tax, regulatory or certified audit advice would be identified separately where relevant.",
  },
  cta: {
    eyebrow: "Define the requirement",
    title: "Discuss your requirements with a clear starting point.",
    description: "Outline the decision, relationship or market question that requires dependable local context.",
    action: { label: "Discuss Your Requirements", href: "/contact" },
  } satisfies PageCtaContent,
  status: "provisional",
} as const;

export const servicesPageContent: LocalizedContent<typeof englishServicesPage> = { en: englishServicesPage };
