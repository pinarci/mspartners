interface SectionHeadingProps {
  id?: string;
  eyebrow: string;
  title: string;
  description?: string;
  theme?: "light" | "dark";
}

export function SectionHeading({ id, eyebrow, title, description, theme = "light" }: SectionHeadingProps) {
  return (
    <div className={`section-heading section-heading--${theme}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id}>{title}</h2>
      {description ? <p className="section-heading__description">{description}</p> : null}
    </div>
  );
}
