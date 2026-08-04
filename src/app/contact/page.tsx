import type { Metadata } from "next";
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

      <section className="page-section page-section--warm contact-notice-section" aria-labelledby="contact-status-title">
        <Container className="contact-notice">
          <div>
            <p className="eyebrow">{content.status.eyebrow}</p>
            <h2 id="contact-status-title">{content.status.title}</h2>
          </div>
          <p>{content.status.body}</p>
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
    </article>
  );
}
