import type { Metadata } from "next";
import { PageCta } from "@/components/pages/page-cta";
import { PageHero } from "@/components/pages/page-hero";
import { Container } from "@/components/ui/container";
import { pageMetadata } from "@/config/site";
import { approachContent, processSteps } from "@/content/approach";

export const metadata: Metadata = {
  title: pageMetadata.approach.title,
  description: pageMetadata.approach.description,
  openGraph: { title: pageMetadata.approach.title, description: pageMetadata.approach.description },
};

export default function ApproachPage() {
  const content = approachContent.en;

  return (
    <article className="detail-page approach-page">
      <PageHero content={content.hero} />

      <section className="page-section page-section--intro" aria-labelledby="approach-intro-title">
        <Container className="page-copy-grid">
          <div>
            <p className="eyebrow">{content.introduction.eyebrow}</p>
            <h2 id="approach-intro-title">{content.introduction.title}</h2>
          </div>
          <p className="page-lede">{content.introduction.body}</p>
        </Container>
      </section>

      <section className="approach-index" aria-label="Engagement process">
        <Container>
          <ol>
            {processSteps.map((step, index) => (
              <li key={step.id}>
                <p className="approach-index__number">{String(index + 1).padStart(2, "0")}</p>
                <div>
                  <h2>{step.title}</h2>
                </div>
                <div>
                  <p className="approach-index__summary">{step.description}</p>
                  <p>{step.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="page-section page-section--muted" aria-labelledby="engagement-principles-title">
        <Container>
          <div className="page-section-heading">
            <p className="eyebrow">{content.principles.eyebrow}</p>
            <h2 id="engagement-principles-title">{content.principles.title}</h2>
          </div>
          <div className="editorial-grid">
            {content.principles.items.map((item, index) => (
              <article key={item.title}>
                <p className="editorial-grid__number">{String(index + 1).padStart(2, "0")}</p>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
          <p className="limitation-note">{content.limitation}</p>
        </Container>
      </section>

      <PageCta content={content.cta} />
    </article>
  );
}
