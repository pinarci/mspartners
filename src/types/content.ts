export interface LegalEntity {
  name: string;
  location: string;
}

export interface GeographicPositioning {
  base: string;
  affiliate: string;
  operatingRegions: readonly string[];
}

export interface CompanyIdentity {
  name: string;
  slogan: string;
  legalEntities: readonly LegalEntity[];
  geographicPositioning: GeographicPositioning;
}

export interface RouteNavigationItem {
  label: string;
  href: `/${string}`;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
}

export interface DifferentiatorItem {
  id: string;
  title: string;
  description: string;
}

export interface ProcessStep {
  id: string;
  title: string;
  description: string;
  detail: string;
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
}

export interface ContactStatus {
  officialChannelConfirmed: boolean;
  notice: string;
}

export interface LocalizedContent<T> {
  en: T;
  tr?: T;
}
