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

      <section className="page-section page-section--muted" aria-labelledby="services-list-title">
        <Container>
          <div className="page-section-heading">
            <p className="eyebrow">Approved Services</p>
            <h2 id="services-list-title">Service focus areas for cross-border requirements.</h2>
          </div>
          <div className="service-detail-list">
            {content.services.map((service, index) => (
              <article className="service-detail-card" key={service.title}>
                <p>{String(index + 1).padStart(2, "0")}</p>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <p>{service.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <PageCta content={content.cta} />
    </article>
  );
}
