import type { CompanyIdentity } from "@/types/content";

// TODO: Replace after client confirmation.
export const company: CompanyIdentity = {
  name: "MS Partners",
  tagline: "International Risk Management & Audit",
  status: "provisional",
};

export const temporaryWordmark = {
  lead: "MS",
  name: "Partners",
  status: "provisional",
} as const;

export const brandAsset = {
  referencePath: "/brand/brand-reference.jpeg",
  usage: "reference-only",
  finalAssetRequired: true,
} as const;
