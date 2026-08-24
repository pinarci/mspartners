import type { CompanyIdentity } from "@/types/content";

export const company: CompanyIdentity = {
  name: "MS Partners",
  slogan: "De-Risking Cross-Border Operations.",
  legalEntities: [
    { name: "MS Partners LLC", location: "Virginia, United States" },
    { name: "MS Partners Ltd. Şti.", location: "Ankara, Türkiye" },
  ],
  geographicPositioning: {
    base: "Virginia, United States",
    affiliate: "Ankara, Türkiye",
    operatingRegions: ["Türkiye", "Europe", "Asia"],
  },
};

export const wordmark = {
  lead: "MS",
  name: "Partners",
} as const;
