import type { ContactConfiguration } from "@/types/content";

const googleMapsEmbedApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY?.trim() || null;

export const contactConfiguration: ContactConfiguration = {
  corporateEmail: null,
  corporateEmailStatus: "pending",
  phone: null,
  washingtonAddress: null,
  ankaraBuildingName: "Maidan İş ve Yaşam Merkezi",
  ankaraBuildingAddress: [
    "Mustafa Kemal Mahallesi 2118. Cad. No:4",
    "Çankaya, Ankara, Türkiye",
  ],
  ankaraOfficeDetails: null,
  mapPlaceQuery: "Maidan İş ve Yaşam Merkezi, Mustafa Kemal Mahallesi 2118. Cad. No:4, Çankaya, Ankara, Türkiye",
  mapShareUrl: "https://maps.app.goo.gl/a1Vj2SGrCCQcUX7z6",
  mapPreviewEmbedUrl: "https://www.google.com/maps?q=39.9095739%2C32.7645597&z=17&output=embed",
  mapEmbedApiKeyAvailable: googleMapsEmbedApiKey !== null,
};

export function getGoogleMapsEmbedUrl() {
  if (!googleMapsEmbedApiKey) return contactConfiguration.mapPreviewEmbedUrl;

  return `https://www.google.com/maps/embed/v1/place?key=${encodeURIComponent(googleMapsEmbedApiKey)}&q=${encodeURIComponent(contactConfiguration.mapPlaceQuery)}`;
}

export const googleMapsExternalUrl = contactConfiguration.mapShareUrl;
