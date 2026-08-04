import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { processSteps } from "@/content/approach";
import { homeContent } from "@/content/home";

export function ProcessSection() {
  return (
    <section className="section process" id="approach" aria-labelledby="process-title">
      <Container>
        <SectionHeading id="process-title" {...homeContent.en.process} />
        <ol className="process-list">
          {processSteps.map((step, index) => (
            <li key={step.id}>
              <span className="process-list__number">{String(index + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
        <Link className="text-link text-link--inline section-detail-link section-detail-link--light" href={homeContent.en.process.action.href}>
          {homeContent.en.process.action.label}<span aria-hidden="true">→</span>
        </Link>
      </Container>
    </section>
  );
}
