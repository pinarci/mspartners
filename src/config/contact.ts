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
  mapEmbedApiKeyAvailable: googleMapsEmbedApiKey !== null,
};

export function getGoogleMapsEmbedUrl() {
  if (!googleMapsEmbedApiKey) return null;

  return `https://www.google.com/maps/embed/v1/place?key=${encodeURIComponent(googleMapsEmbedApiKey)}&q=${encodeURIComponent(contactConfiguration.mapPlaceQuery)}`;
}

export const googleMapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactConfiguration.mapPlaceQuery)}`;
