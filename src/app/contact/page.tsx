import type { Metadata } from "next";
import { PageCta } from "@/components/pages/page-cta";
import { PageHero } from "@/components/pages/page-hero";
import { Container } from "@/components/ui/container";
import { pageMetadata } from "@/config/site";
import { contactContent } from "@/content/contact";

export const metadata: Metadata = {
  title: pageMetadata.contact.title,
  description: pageMetadata.contact.description,
  openGraph: { title: pageMetadata.contact.title, description: pageMetadata.contact.description },
};

export default function ContactPage() {
  const content = contactContent.en;

  return (
    <article className="detail-page contact-page">
      <PageHero content={content.hero} />

      <section className="page-section page-section--warm" aria-labelledby="contact-status-title">
        <Container className="placeholder-panel">
          <div>
            <p className="eyebrow">{content.status.eyebrow}</p>
            <h2 id="contact-status-title">{content.status.title}</h2>
          </div>
          <div>
            <p>{content.status.body}</p>
            <p className="page-status"><span aria-hidden="true" />{content.status.label}</p>
          </div>
        </Container>
      </section>

      <section className="page-section" aria-labelledby="preparation-title">
        <Container>
          <div className="page-section-heading">
            <p className="eyebrow">{content.preparation.eyebrow}</p>
            <h2 id="preparation-title">{content.preparation.title}</h2>
            <p>{content.preparation.introduction}</p>
          </div>
          <dl className="prompt-list">
            {content.preparation.prompts.map((prompt, index) => (
              <div key={prompt.label}>
                <dt><span>{String(index + 1).padStart(2, "0")}</span>{prompt.label}</dt>
                <dd>{prompt.detail}</dd>
              </div>
            ))}
          </dl>
          <p className="privacy-note">{content.privacyNote}</p>
        </Container>
      </section>

      <PageCta content={content.cta} />
    </article>
  );
}
