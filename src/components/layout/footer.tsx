import Link from "next/link";
import { Container } from "@/components/ui/container";
import { company } from "@/config/brand";
import { primaryNavigation } from "@/config/navigation";
import { homeContent } from "@/content/home";
import { services } from "@/content/services";

export function Footer() {
  const content = homeContent.en.footer;
  return (
    <footer className="site-footer">
      <Container>
        <div className="site-footer__top">
          <div className="site-footer__identity">
            <p className="footer-wordmark">{company.name}</p>
            <p className="site-footer__tagline">{company.tagline}</p>
            <p className="site-footer__description">{content.description}</p>
          </div>
          <nav className="site-footer__column" aria-label="Footer navigation">
            <p className="footer-label">Navigate</p>
            <ul className="footer-nav">
              {primaryNavigation.map((item) => <li key={item.href}><Link href={item.href}>{item.label}</Link></li>)}
            </ul>
          </nav>
          <div className="site-footer__column">
            <p className="footer-label">{content.servicesLabel}</p>
            <ul className="footer-services">
              {services.slice(0, 4).map((service) => <li key={service.id}><Link href="/services">{service.title}</Link></li>)}
            </ul>
          </div>
          <div className="site-footer__column site-footer__placeholders">
            <div><p className="footer-label">{content.affiliatedLabel}</p><p>{content.affiliatedPlaceholder}</p></div>
            <div><p className="footer-label">{content.legalLabel}</p><p>{content.privacyPlaceholder}<br />{content.legalPlaceholder}</p></div>
            <div><p className="footer-label">{content.contactLabel}</p><p>{content.contactPlaceholder}</p></div>
          </div>
        </div>
        <div className="site-footer__bottom">
          <p>© {new Date().getFullYear()} {company.name} · Provisional identity</p>
          <p>Final legal, privacy and contact information pending client approval.</p>
        </div>
      </Container>
    </footer>
  );
}
