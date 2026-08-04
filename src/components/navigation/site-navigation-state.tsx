"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { MobileNavigation } from "@/components/layout/mobile-navigation";
import { headerAction, primaryNavigation } from "@/config/navigation";

export function SiteNavigationState() {
  const pathname = usePathname();
  const progressRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const progressElement = progressRef.current;
    if (!progressElement) return;

    let animationFrame: number | null = null;

    const updateProgress = () => {
      animationFrame = null;
      const scrollRange = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollRange > 0 ? Math.min(Math.max(window.scrollY / scrollRange, 0), 1) : 0;
      progressElement.style.setProperty("--scroll-progress", progress.toString());
    };

    const requestProgressUpdate = () => {
      if (animationFrame === null) animationFrame = window.requestAnimationFrame(updateProgress);
    };

    progressElement.style.setProperty("--scroll-progress", "0");
    animationFrame = window.requestAnimationFrame(updateProgress);
    window.addEventListener("scroll", requestProgressUpdate, { passive: true });
    window.addEventListener("resize", requestProgressUpdate);

    return () => {
      window.removeEventListener("scroll", requestProgressUpdate);
      window.removeEventListener("resize", requestProgressUpdate);
      if (animationFrame !== null) window.cancelAnimationFrame(animationFrame);
    };
  }, [pathname]);

  return (
    <div className="header-navigation-state">
      <div className="desktop-header">
        <nav aria-label="Primary navigation">
          <ul className="site-nav">
            {primaryNavigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link href={item.href} data-active={isActive || undefined} aria-current={isActive ? "page" : undefined}>
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <Link className="header-cta" href={headerAction.href}>
          {headerAction.label}<span aria-hidden="true">→</span>
        </Link>
      </div>
      <MobileNavigation key={pathname} activePath={pathname} />
      <span className="scroll-progress" aria-hidden="true"><span ref={progressRef} /></span>
    </div>
  );
}
