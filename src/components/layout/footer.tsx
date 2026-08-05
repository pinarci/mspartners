import Link from "next/link";
import { Container } from "@/components/ui/container";
import { company } from "@/config/brand";
import { primaryNavigation } from "@/config/navigation";

export function Footer() {
  return (
    <footer className="site-footer">
      <Container>
        <div className="site-footer__top">
          <div className="site-footer__identity">
            <p className="footer-wordmark">{company.name}</p>
            <p className="site-footer__slogan">{company.slogan}</p>
            <ul className="footer-entities">
              {company.legalEntities.map((entity) => (
                <li key={entity.name}>
                  <span>{entity.name}</span>{" — "}{entity.location}
                </li>
              ))}
            </ul>
          </div>
          <nav className="site-footer__column" aria-label="Footer navigation">
            <p className="footer-label">Navigate</p>
            <ul className="footer-nav">
              {primaryNavigation.map((item) => <li key={item.href}><Link href={item.href}>{item.label}</Link></li>)}
            </ul>
          </nav>
        </div>
        <div className="site-footer__bottom">
          <p>Independent global advisory for cross-border operations.</p>
        </div>
      </Container>
    </footer>
  );
}
