import type { Metadata } from "next";
import { PageCta } from "@/components/pages/page-cta";
import { PageHero } from "@/components/pages/page-hero";
import { Container } from "@/components/ui/container";
import { pageMetadata } from "@/config/site";
import { areasOfWorkContent } from "@/content/areas-of-work";

export const metadata: Metadata = {
  title: pageMetadata.areasOfWork.title,
  description: pageMetadata.areasOfWork.description,
  openGraph: { title: pageMetadata.areasOfWork.title, description: pageMetadata.areasOfWork.description },
};

export default function AreasOfWorkPage() {
  const content = areasOfWorkContent.en;

  return (
    <article className="detail-page areas-of-work-page">
      <PageHero content={content.hero} />
      <section className="page-section" aria-labelledby="areas-intro-title">
        <Container className="page-copy-grid">
          <div>
            <p className="eyebrow">{content.introduction.eyebrow}</p>
            <h2 id="areas-intro-title">{content.introduction.title}</h2>
          </div>
          <p className="page-lede">{content.introduction.body}</p>
        </Container>
      </section>

      <section className="page-section page-section--muted" aria-labelledby="areas-list-title">
        <Container>
          <div className="page-section-heading">
            <p className="eyebrow">Areas</p>
            <h2 id="areas-list-title">Commercial environments supported by MS Partners.</h2>
          </div>
          <div className="area-detail-grid">
            {content.areas.map((area, index) => (
              <article className="area-detail-card" key={area.title}>
                <p>{String(index + 1).padStart(2, "0")}</p>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <PageCta content={content.cta} />
    </article>
  );
}
