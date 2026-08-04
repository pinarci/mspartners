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

      <section className="page-section page-section--muted" aria-labelledby="cross-border-title">
        <Container>
          <div className="page-section-heading">
            <p className="eyebrow">{content.crossBorder.eyebrow}</p>
            <h2 id="cross-border-title">{content.crossBorder.title}</h2>
            <p>{content.crossBorder.introduction}</p>
          </div>
          <div className="editorial-grid">
            {content.crossBorder.points.map((point, index) => (
              <article key={point.title}>
                <p className="editorial-grid__number">{String(index + 1).padStart(2, "0")}</p>
                <h3>{point.title}</h3>
                <p>{point.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="page-section principles-section" aria-labelledby="principles-title">
        <Container className="page-copy-grid">
          <div>
            <p className="eyebrow">{content.principles.eyebrow}</p>
            <h2 id="principles-title">{content.principles.title}</h2>
          </div>
          <ol className="principles-list">
            {content.principles.items.map((item, index) => (
              <li key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>
            ))}
          </ol>
        </Container>
      </section>

      <PageCta content={content.cta} />
    </article>
  );
}
