import Link from "next/link";
import { company } from "@/config/brand";
import { temporaryWordmark } from "@/config/brand";
import { Container } from "@/components/ui/container";
import { SiteNavigationState } from "@/components/navigation/site-navigation-state";

export function Header() {
  return (
    <header className="site-header">
      <Container className="site-header__inner">
        <Link className="wordmark" href="/" aria-label={`${company.name} home`}>
          <span className="wordmark__ms">{temporaryWordmark.lead}</span>
          <span>{temporaryWordmark.name}</span>
        </Link>
        <SiteNavigationState />
      </Container>
    </header>
  );
}
