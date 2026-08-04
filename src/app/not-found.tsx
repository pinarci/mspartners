import { Container } from "@/components/ui/container";
import { TextLink } from "@/components/ui/text-link";

export default function NotFound() {
  return (
    <section className="state-page">
      <Container>
        <p className="eyebrow">404 · Page not found</p>
        <h1>The page you requested is not available.</h1>
        <p>It may have moved, or it may be planned for a later phase of this website.</p>
        <TextLink href="/" variant="primary">Return to the homepage</TextLink>
      </Container>
    </section>
  );
}
