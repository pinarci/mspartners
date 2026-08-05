import Image from "next/image";
import { Container } from "@/components/ui/container";
import type { PageHeroContent, PageHeroImage } from "@/types/content";

interface PageHeroProps {
  content: PageHeroContent;
  image?: PageHeroImage;
}

export function PageHero({ content, image }: PageHeroProps) {
  return (
    <header
      className="page-hero"
      data-has-image={image ? "true" : undefined}
      data-overlay={image?.overlayStrength}
    >
      {image ? (
        <div className="page-hero__image" aria-hidden="true">
          <Image
            src={image.src}
            alt=""
            fill
            priority
            sizes="100vw"
            style={{ objectPosition: image.objectPosition ?? "center center" }}
          />
        </div>
      ) : null}
      <Container className="page-hero__grid">
        <p className="eyebrow eyebrow--light">{content.eyebrow}</p>
        <div>
          <h1>{content.title}</h1>
          <p>{content.summary}</p>
        </div>
      </Container>
    </header>
  );
}
