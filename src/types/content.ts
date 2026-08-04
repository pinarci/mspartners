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

export type ContactFieldStatus = "pending" | "confirmed";

export interface ContactConfiguration {
  corporateEmail: string | null;
  corporateEmailStatus: ContactFieldStatus;
  phone: string | null;
  washingtonAddress: string | null;
  ankaraBuildingName: string;
  ankaraBuildingAddress: readonly [string, string];
  ankaraOfficeDetails: string | null;
  mapPlaceQuery: string;
  mapEmbedApiKeyAvailable: boolean;
}

export interface LocalizedContent<T> {
  en: T;
  tr?: T;
}
