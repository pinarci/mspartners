import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { homeContent } from "@/content/home";
import { insights } from "@/content/insights";

export function InsightsSection() {
  return (
    <section className="section insights" id="insights" aria-labelledby="insights-title">
      <Container>
        <div className="insights__header">
          <SectionHeading id="insights-title" {...homeContent.en.insights} />
          <p className="insights__status">Future editorial capability · No articles published</p>
        </div>
        <div className="insights-grid">
          {insights.map((insight, index) => (
            <article key={insight.id}>
              <div className="insights-card__meta"><span>Planned Insight</span><span>{String(index + 1).padStart(2, "0")}</span></div>
              <h3>{insight.title}</h3>
              <p>{insight.summary}</p>
              <span className="insights-card__future">Concept preview</span>
            </article>
          ))}
        </div>
        <Link className="text-link text-link--inline section-detail-link" href={homeContent.en.insights.action.href}>
          {homeContent.en.insights.action.label}<span aria-hidden="true">→</span>
        </Link>
      </Container>
    </section>
  );
}
