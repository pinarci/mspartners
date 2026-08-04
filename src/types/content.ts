export type ContentStatus = "provisional" | "confirmed";

export interface CompanyIdentity {
  name: string;
  tagline: string;
  status: ContentStatus;
}

export interface RouteNavigationItem {
  label: string;
  href: `/${string}`;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  detail: string;
  scope: string[];
  status: ContentStatus;
}

export interface DifferentiatorItem {
  id: string;
  title: string;
  description: string;
}

export interface InsightItem {
  id: string;
  title: string;
  summary: string;
  status: "planned";
}

export interface ProcessStep {
  id: string;
  title: string;
  description: string;
  detail: string;
  status: ContentStatus;
}

export interface PageHeroContent {
  eyebrow: string;
  title: string;
  summary: string;
}

export interface PageCtaContent {
  eyebrow: string;
  title: string;
  description: string;
  action?: {
    label: string;
    href: `/${string}`;
  };
  status?: string;
}

export interface LinkPlaceholder {
  label: string;
  href: string | null;
  status: ContentStatus;
}

export interface LocalizedContent<T> {
  en: T;
  tr?: T;
}
