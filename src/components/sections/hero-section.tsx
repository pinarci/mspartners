import Image from "next/image";
import { Container } from "@/components/ui/container";
import { TextLink } from "@/components/ui/text-link";
import { pageHeroImages } from "@/config/page-hero-images";
import { homeContent } from "@/content/home";

export function HeroSection() {
  const { hero } = homeContent.en;
  const backgroundImage = pageHeroImages.about;

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__background" aria-hidden="true">
        <Image
          src={backgroundImage.src}
          alt=""
          fill
          priority
          sizes="100vw"
          style={{ objectPosition: backgroundImage.objectPosition }}
        />
      </div>
      <Container className="hero__grid">
        <div className="hero__content">
          <p className="eyebrow eyebrow--light">{hero.eyebrow}</p>
          <h1 id="hero-title">{hero.title}</h1>
          <p className="hero__lede">{hero.description}</p>
          <p className="hero__compact-line">{hero.compactLine}</p>
        </div>
        <div className="hero__brand">
          <Image
            className="hero__brand-image"
            src="/brand/brand-reference.jpeg"
            alt="MS Partners logo"
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
