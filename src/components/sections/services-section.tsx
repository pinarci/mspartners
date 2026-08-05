import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { homeContent } from "@/content/home";

export function ServicesSection() {
  const content = homeContent.en.services;
  return (
    <section className="section section--muted services-overview" id="services" aria-labelledby="services-title">
      <Container>
        <SectionHeading id="services-title" {...content} />
        <div className="service-card-grid">
          {content.items.map((service) => (
            <article className="service-card" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
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
