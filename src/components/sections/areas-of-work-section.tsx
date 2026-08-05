import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { homeContent } from "@/content/home";

export function AreasOfWorkSection() {
  const content = homeContent.en.areasOfWork;

  return (
    <section className="section areas-overview" id="areas-of-work" aria-labelledby="areas-of-work-title">
      <Container>
        <SectionHeading id="areas-of-work-title" {...content} />
        <div className="area-card-grid">
          {content.items.map((area, index) => (
            <article className="area-card" key={area.title}>
              <p>{String(index + 1).padStart(2, "0")}</p>
              <h3>{area.title}</h3>
              <p>{area.description}</p>
            </article>
          ))}
        </div>
        <Link className="text-link text-link--inline section-detail-link" href={content.action.href}>
          {content.action.label}<span aria-hidden="true">→</span>
        </Link>
      </Container>
    </section>
  );
}
