import Link from "next/link";
import { Container } from "@/components/ui/container";
import type { PageCtaContent } from "@/types/content";

interface PageCtaProps {
  content: PageCtaContent;
}

export function PageCta({ content }: PageCtaProps) {
  return (
    <section className="page-cta" aria-labelledby="page-cta-title">
      <Container className="page-cta__grid">
        <div>
          <p className="eyebrow eyebrow--light">{content.eyebrow}</p>
          <h2 id="page-cta-title">{content.title}</h2>
        </div>
        <div className="page-cta__action">
          <p>{content.description}</p>
          {content.action ? (
            <Link className="text-link text-link--secondary" href={content.action.href}>
              {content.action.label}<span aria-hidden="true">→</span>
            </Link>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
