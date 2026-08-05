import { Container } from "@/components/ui/container";
import { homeContent } from "@/content/home";

export function TrustPillarsSection() {
  const { trustPillars } = homeContent.en;

  return (
    <section className="trust-strip" aria-labelledby="trust-pillars-title">
      <Container>
        <div className="trust-strip__heading">
          <p className="eyebrow eyebrow--light">{trustPillars.eyebrow}</p>
          <h2 id="trust-pillars-title">{trustPillars.title}</h2>
        </div>
        <div className="trust-strip__grid">
          {trustPillars.items.map((pillar) => (
            <article key={pillar.title}>
              <h3>{pillar.title}</h3>
              <p>{pillar.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
