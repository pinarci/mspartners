import type { Metadata } from "next";
import { PageCta } from "@/components/pages/page-cta";
import { PageHero } from "@/components/pages/page-hero";
import { Container } from "@/components/ui/container";
import { pageMetadata } from "@/config/site";
import { insights, insightsContent } from "@/content/insights";

export const metadata: Metadata = {
  title: pageMetadata.insights.title,
  description: pageMetadata.insights.description,
  openGraph: { title: pageMetadata.insights.title, description: pageMetadata.insights.description },
};

export default function InsightsPage() {
  const content = insightsContent.en;

  return (
    <article className="detail-page insights-page">
      <PageHero content={content.hero} />

      <section className="page-section page-section--intro" aria-labelledby="insights-intro-title">
        <Container className="page-copy-grid">
          <div>
            <p className="eyebrow">{content.introduction.eyebrow}</p>
            <h2 id="insights-intro-title">{content.introduction.title}</h2>
          </div>
          <p className="page-lede">{content.introduction.body}</p>
        </Container>
      </section>

      <section className="planned-insights" aria-label="Planned insights">
        <Container>
          <div className="planned-insights__list">
            {insights.map((insight, index) => (
              <article key={insight.id}>
                <div className="planned-insights__meta">
                  <span>Planned Insight</span>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>
                <h2>{insight.title}</h2>
                <p>{insight.summary}</p>
                <p className="planned-insights__state">Editorial concept · Not yet published</p>
              </article>
            ))}
          </div>
          <p className="limitation-note">{content.plannedState}</p>
        </Container>
      </section>

      <PageCta content={content.cta} />
    </article>
  );
}
