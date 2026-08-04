import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { homeContent } from "@/content/home";

export function IntroductionSection() {
  const { introduction } = homeContent.en;
  return (
    <section className="section introduction" id="about" aria-labelledby="about-title">
      <Container className="introduction__grid">
        <SectionHeading id="about-title" eyebrow={introduction.eyebrow} title={introduction.title} />
        <div className="introduction__copy">
          {introduction.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <blockquote>{introduction.principle}</blockquote>
          <p className="provisional-note">Provisional company positioning — pending client approval.</p>
          <Link className="text-link text-link--inline section-detail-link" href={introduction.action.href}>
            {introduction.action.label}<span aria-hidden="true">→</span>
          </Link>
        </div>
      </Container>
    </section>
  );
}
