import Image from "next/image";
import { Container } from "@/components/ui/container";
import { TextLink } from "@/components/ui/text-link";
import { homeContent } from "@/content/home";

export function HeroSection() {
  const { hero } = homeContent.en;
  return (
    <section className="hero" aria-labelledby="hero-title">
      <Container className="hero__grid">
        <div className="hero__content">
          <p className="eyebrow eyebrow--light">{hero.eyebrow}</p>
          <h1 id="hero-title">{hero.title}</h1>
          <p className="hero__lede">{hero.description}</p>
          <div className="hero__actions">
            <TextLink href={hero.primaryAction.href} variant="primary">{hero.primaryAction.label}</TextLink>
            <TextLink href={hero.secondaryAction.href} variant="secondary">{hero.secondaryAction.label}</TextLink>
          </div>
        </div>
        <div className="hero__brand">
          <Image
            className="hero__brand-image"
            src="/brand/brand-reference.jpeg"
            alt="MS Partners"
            fill
            priority
            sizes="(max-width: 680px) 0px, (max-width: 920px) 11rem, (max-width: 1200px) 22vw, 18rem"
          />
        </div>
      </Container>
    </section>
  );
}
