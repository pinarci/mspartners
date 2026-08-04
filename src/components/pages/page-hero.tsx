import { Container } from "@/components/ui/container";
import type { PageHeroContent } from "@/types/content";

interface PageHeroProps {
  content: PageHeroContent;
}

export function PageHero({ content }: PageHeroProps) {
  return (
    <header className="page-hero">
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
