import type { CompanyIdentity } from "@/types/content";

export const company: CompanyIdentity = {
  name: "MS Partners",
  slogan: "De-Risking Global Supply Chains.",
  legalEntities: [
    { name: "MS Partners LLC", location: "Washington State, United States" },
    { name: "MS Partners Ltd. Şti.", location: "Ankara, Türkiye" },
  ],
  geographicPositioning: {
    base: "Washington State, United States",
    affiliate: "Ankara, Türkiye",
    operatingRegions: ["Türkiye", "Europe", "Asia"],
  },
};

export const wordmark = {
  lead: "MS",
  name: "Partners",
} as const;
