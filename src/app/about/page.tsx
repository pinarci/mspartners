import type { Metadata } from "next";
import { PageCta } from "@/components/pages/page-cta";
import { PageHero } from "@/components/pages/page-hero";
import { Container } from "@/components/ui/container";
import { pageMetadata } from "@/config/site";
import { aboutContent } from "@/content/about";

export const metadata: Metadata = {
  title: pageMetadata.about.title,
  description: pageMetadata.about.description,
  openGraph: { title: pageMetadata.about.title, description: pageMetadata.about.description },
};

export default function AboutPage() {
  const content = aboutContent.en;

  return (
    <article className="detail-page about-page">
      <PageHero content={content.hero} />

      <section className="page-section" aria-labelledby="about-purpose-title">
        <Container className="page-copy-grid">
          <div>
            <p className="eyebrow">{content.purpose.eyebrow}</p>
            <h2 id="about-purpose-title">{content.purpose.title}</h2>
          </div>
          <div className="page-prose">
            {content.purpose.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </Container>
      </section>

      <section className="page-section page-section--muted" aria-labelledby="about-trust-title">
        <Container>
          <div className="page-section-heading">
            <p className="eyebrow">{content.trustPillars.eyebrow}</p>
            <h2 id="about-trust-title">{content.trustPillars.title}</h2>
          </div>
          <div className="trust-card-grid">
            {content.trustPillars.items.map((pillar) => (
              <article className="trust-card" key={pillar.title}>
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="page-section" aria-labelledby="about-operating-model-title">
        <Container className="page-copy-grid">
          <div>
            <p className="eyebrow">{content.operatingModel.eyebrow}</p>
            <h2 id="about-operating-model-title">{content.operatingModel.title}</h2>
          </div>
          <p className="page-lede">{content.operatingModel.body}</p>
        </Container>
      </section>

      <PageCta content={content.cta} />
    </article>
  );
}
