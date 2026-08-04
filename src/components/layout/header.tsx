import Image from "next/image";
import Link from "next/link";
import { company } from "@/config/brand";
import { Container } from "@/components/ui/container";
import { SiteNavigationState } from "@/components/navigation/site-navigation-state";

export function Header() {
  return (
    <header className="site-header">
      <Container className="site-header__inner">
        <Link className="wordmark" href="/" aria-label={`${company.name} home`}>
          <span className="wordmark__mark" aria-hidden="true">
            <Image
              className="wordmark__mark-image"
              src="/brand/brand-reference.jpeg"
              alt=""
              width={1254}
              height={1254}
              priority
              sizes="7rem"
            />
          </span>
          <span className="wordmark__name" aria-hidden="true">
            <Image
              className="wordmark__name-image"
              src="/brand/brand-reference.jpeg"
              alt=""
              width={1254}
              height={1254}
              priority
              sizes="10rem"
            />
          </span>
        </Link>
        <SiteNavigationState />
      </Container>
    </header>
  );
}
