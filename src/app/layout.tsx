import type { Metadata } from "next";
import { Source_Sans_3, Source_Serif_4 } from "next/font/google";
import type { ReactNode } from "react";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { siteMetadata } from "@/config/site";
import "./globals.css";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  display: "swap",
});

// TODO: Review metadata after the company identity and positioning are confirmed.
export const metadata: Metadata = {
  title: { default: siteMetadata.title, template: siteMetadata.titleTemplate },
  description: siteMetadata.description,
  openGraph: { type: "website", title: siteMetadata.title, description: siteMetadata.description, siteName: "MS Partners" },
  twitter: { card: "summary", title: siteMetadata.title, description: siteMetadata.description },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body id="top" className={`${sourceSans.variable} ${sourceSerif.variable}`}>
        <a className="skip-link" href="#main-content">Skip to main content</a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
