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
        <div className="hero-visual" aria-hidden="true">
          <div className="hero-visual__heading">
            <span>{hero.visual.label}</span><span>MSP / 01</span>
          </div>
          <div className="hero-visual__field">
            <div className="hero-visual__axis hero-visual__axis--x" />
            <div className="hero-visual__axis hero-visual__axis--y" />
            <div className="hero-visual__focus"><span>Independent</span><strong>Local review</strong></div>
          </div>
          <ol className="hero-visual__stages">
            {hero.visual.stages.map((stage, index) => <li key={stage}><span>{String(index + 1).padStart(2, "0")}</span>{stage}</li>)}
          </ol>
          <p className="hero-visual__note">{hero.visual.note}</p>
        </div>
      </Container>
    </section>
  );
}
