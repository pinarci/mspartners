import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { homeContent } from "@/content/home";
import { services } from "@/content/services";

export function ServicesSection() {
  const content = homeContent.en.services;
  return (
    <section className="section section--muted" id="services" aria-labelledby="services-title">
      <Container>
        <SectionHeading id="services-title" {...content} />
        <div className="services-grid">
          {services.map((service, index) => (
            <article className="service-card" key={service.id}>
              <p className="service-card__number">{String(index + 1).padStart(2, "0")}</p>
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
