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
        </div>
        <div className="hero__brand" aria-hidden="true">
          <Image
            className="hero__brand-image"
            src="/brand/brand-reference.jpeg"
            alt=""
            width={1254}
            height={1254}
            priority
            sizes="(max-width: 680px) 9.5rem, (max-width: 920px) 12rem, (max-width: 1200px) 28vw, 24rem"
          />
        </div>
        <div className="hero__actions">
          <TextLink href={hero.primaryAction.href} variant="primary">{hero.primaryAction.label}</TextLink>
          <TextLink href={hero.secondaryAction.href} variant="secondary">{hero.secondaryAction.label}</TextLink>
        </div>
      </Container>
    </section>
  );
}
