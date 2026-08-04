import type { Metadata } from "next";
import { PageCta } from "@/components/pages/page-cta";
import { PageHero } from "@/components/pages/page-hero";
import { Container } from "@/components/ui/container";
import { pageMetadata } from "@/config/site";
import { servicesPageContent } from "@/content/services";

export const metadata: Metadata = {
  title: pageMetadata.services.title,
  description: pageMetadata.services.description,
  openGraph: { title: pageMetadata.services.title, description: pageMetadata.services.description },
};

export default function ServicesPage() {
  const content = servicesPageContent.en;

  return (
    <article className="detail-page services-page">
      <PageHero content={content.hero} />

      <section className="page-section page-section--intro" aria-labelledby="services-intro-title">
        <Container className="page-copy-grid">
          <div>
            <p className="eyebrow">{content.introduction.eyebrow}</p>
            <h2 id="services-intro-title">{content.introduction.title}</h2>
          </div>
          <p className="page-lede">{content.introduction.body}</p>
        </Container>
      </section>

      <PageCta content={content.cta} />
    </article>
  );
}
