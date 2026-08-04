import Link from "next/link";
import { Container } from "@/components/ui/container";
import { company } from "@/config/brand";
import { primaryNavigation } from "@/config/navigation";
import { homeContent } from "@/content/home";

export function Footer() {
  const content = homeContent.en.footer;
  return (
    <footer className="site-footer">
      <Container>
        <div className="site-footer__top">
          <div className="site-footer__identity">
            <p className="footer-wordmark">{company.name}</p>
            <p className="site-footer__description">{content.description}</p>
          </div>
          <nav className="site-footer__column" aria-label="Footer navigation">
            <p className="footer-label">Navigate</p>
            <ul className="footer-nav">
              {primaryNavigation.map((item) => <li key={item.href}><Link href={item.href}>{item.label}</Link></li>)}
            </ul>
          </nav>
          <div className="site-footer__column">
            <p className="footer-label">Services</p>
            <ul className="footer-services">
              <li><Link href="/services">{content.servicesLinkLabel}</Link></li>
            </ul>
          </div>
        </div>
        <div className="site-footer__bottom">
          <p>© {new Date().getFullYear()} {company.name}</p>
          <p>{content.previewNotice}</p>
        </div>
      </Container>
    </footer>
  );
}
