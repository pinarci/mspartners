import Link from "next/link";
import { Container } from "@/components/ui/container";
import { homeContent } from "@/content/home";

export function ContactCtaSection() {
  const content = homeContent.en.contact;
  return (
    <section className="section contact-cta" id="contact" aria-labelledby="contact-title">
      <Container className="contact-cta__inner">
        <div>
          <p className="eyebrow">{content.eyebrow}</p>
          <h2 id="contact-title">{content.title}</h2>
        </div>
        <div className="contact-cta__copy">
          <p>{content.description}</p>
          <Link className="contact-cta__action" href={content.actionHref}>{content.actionLabel}<span aria-hidden="true">→</span></Link>
          <p className="contact-placeholder" id="contact-note"><span aria-hidden="true" />{content.actionNote}</p>
        </div>
      </Container>
    </section>
  );
}
