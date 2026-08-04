import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { differentiators, homeContent } from "@/content/home";

export function DifferentiatorsSection() {
  return (
    <section className="section differentiators" aria-labelledby="differentiators-title">
      <Container className="differentiators__grid">
        <SectionHeading id="differentiators-title" {...homeContent.en.differentiators} theme="dark" />
        <div className="differentiator-list">
          {differentiators.map((item, index) => (
            <article key={item.id}>
              <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              <div><h3>{item.title}</h3><p>{item.description}</p></div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
