import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { homeContent } from "@/content/home";

export function AreasOfWorkSection() {
  const content = homeContent.en.areasOfWork;

  return (
    <section className="section compact-preview" id="areas-of-work" aria-labelledby="areas-of-work-title">
      <Container className="compact-preview__inner">
        <SectionHeading id="areas-of-work-title" {...content} />
        <Link className="text-link text-link--inline section-detail-link" href={content.action.href}>
          {content.action.label}<span aria-hidden="true">→</span>
        </Link>
      </Container>
    </section>
  );
}
