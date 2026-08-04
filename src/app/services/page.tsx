import type { Metadata } from "next";
import { PageCta } from "@/components/pages/page-cta";
import { PageHero } from "@/components/pages/page-hero";
import { Container } from "@/components/ui/container";
import { pageMetadata } from "@/config/site";
import { services, servicesPageContent } from "@/content/services";

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

      <section className="service-index" aria-label="Provisional service areas">
        <Container>
          <ol>
            {services.map((service, index) => (
              <li id={service.id} key={service.id}>
                <p className="service-index__number">{String(index + 1).padStart(2, "0")}</p>
                <div className="service-index__content">
                  <p className="status-label">Provisional service area</p>
                  <h2>{service.title}</h2>
                  <p className="service-index__summary">{service.description}</p>
                  <p>{service.detail}</p>
                </div>
                <div className="service-index__scope">
                  <p className="footer-label">Scope may include</p>
                  <ul>
                    {service.scope.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="page-section page-section--muted" aria-labelledby="scope-title">
        <Container className="page-copy-grid">
          <div>
            <p className="eyebrow">{content.scope.eyebrow}</p>
            <h2 id="scope-title">{content.scope.title}</h2>
          </div>
          <p className="page-lede">{content.scope.body}</p>
        </Container>
      </section>

      <PageCta content={content.cta} />
    </article>
  );
}
