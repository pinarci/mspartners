import type { Metadata } from "next";
import { PageHero } from "@/components/pages/page-hero";
import { Container } from "@/components/ui/container";
import { contactConfiguration, getGoogleMapsEmbedUrl, googleMapsSearchUrl } from "@/config/contact";
import { pageMetadata } from "@/config/site";
import { contactContent } from "@/content/contact";

export const metadata: Metadata = {
  title: pageMetadata.contact.title,
  description: pageMetadata.contact.description,
  openGraph: { title: pageMetadata.contact.title, description: pageMetadata.contact.description },
};

export default function ContactPage() {
  const content = contactContent.en;
  const mapEmbedUrl = contactConfiguration.mapEmbedApiKeyAvailable ? getGoogleMapsEmbedUrl() : null;
  const corporateEmail = contactConfiguration.corporateEmailStatus === "confirmed"
    ? contactConfiguration.corporateEmail
    : null;

  return (
    <article className="detail-page contact-page">
      <PageHero content={content.hero} />

      <section className="page-section contact-information-section" aria-labelledby="contact-information-title">
        <Container>
          <div className="page-section-heading">
            <p className="eyebrow">{content.information.eyebrow}</p>
            <h2 id="contact-information-title">{content.information.title}</h2>
          </div>
          <div className="contact-information-grid">
            <article>
              <h3>{content.information.email.label}</h3>
              {corporateEmail ? (
                <a className="contact-information-value" href={`mailto:${corporateEmail}`}>{corporateEmail}</a>
              ) : (
                <p className="contact-information-value">{content.information.email.pendingValue}</p>
              )}
              {corporateEmail ? null : <p>{content.information.email.supportingText}</p>}
            </article>
            <article>
              <h3>{content.information.ankara.label}</h3>
              <address>
                <strong>{content.information.ankara.building}</strong>
                {content.information.ankara.address.map((line) => <span key={line}>{line}</span>)}
              </address>
              <p>{contactConfiguration.ankaraOfficeDetails ?? content.information.ankara.statusNote}</p>
            </article>
          </div>
        </Container>
      </section>

      <section className="page-section page-section--muted contact-map-section" aria-labelledby="contact-map-title">
        <Container>
          <div className="page-section-heading">
            <p className="eyebrow">{content.map.eyebrow}</p>
            <h2 id="contact-map-title">{content.map.title}</h2>
          </div>
          {mapEmbedUrl ? (
            <div className="contact-map-frame">
              <iframe
                src={mapEmbedUrl}
                title={content.map.iframeTitle}
                loading="lazy"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          ) : (
            <div className="contact-map-fallback">
              <p>{content.map.fallbackText}</p>
              <a href={googleMapsSearchUrl} target="_blank" rel="noopener noreferrer">
                {content.map.linkLabel}<span aria-hidden="true">↗</span>
              </a>
            </div>
          )}
          <p className="contact-map-note">{content.map.note}</p>
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
        </Container>
      </section>
    </article>
  );
}
