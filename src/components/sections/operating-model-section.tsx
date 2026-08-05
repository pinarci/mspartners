import { Container } from "@/components/ui/container";
import { homeContent } from "@/content/home";

export function OperatingModelSection() {
  const { operatingModel } = homeContent.en;

  return (
    <section className="section operating-model" aria-labelledby="operating-model-title">
      <Container className="operating-model__grid">
        <div>
          <p className="eyebrow">{operatingModel.eyebrow}</p>
          <h2 id="operating-model-title">{operatingModel.title}</h2>
        </div>
        <div className="operating-model__copy">
          <p>{operatingModel.body}</p>
          <ul>
            {operatingModel.entities.map((entity) => (
              <li key={entity.name}>
                <span>{entity.name}</span>
                {entity.location}
              </li>
            ))}
            <li>
              <span>Local field capability</span>
              Türkiye and relevant international markets
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}
