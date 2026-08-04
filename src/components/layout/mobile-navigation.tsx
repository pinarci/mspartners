"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { company, wordmark } from "@/config/brand";
import { headerAction, primaryNavigation } from "@/config/navigation";

interface MobileNavigationProps {
  activePath: string;
}

export function MobileNavigation({ activePath }: MobileNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const previousOverflowRef = useRef("");

  const closeMenu = useCallback((restoreFocus = false) => {
    document.body.style.overflow = previousOverflowRef.current;
    setIsOpen(false);
    if (restoreFocus) window.requestAnimationFrame(() => toggleRef.current?.focus());
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    previousOverflowRef.current = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstLinkRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu(true);
      }
    };

    const desktopQuery = window.matchMedia("(min-width: 921px)");
    const handleDesktopChange = (event: MediaQueryListEvent) => {
      if (event.matches) closeMenu();
    };

    document.addEventListener("keydown", handleKeyDown);
    desktopQuery.addEventListener("change", handleDesktopChange);

    return () => {
      document.body.style.overflow = previousOverflowRef.current;
      document.removeEventListener("keydown", handleKeyDown);
      desktopQuery.removeEventListener("change", handleDesktopChange);
    };
  }, [closeMenu, isOpen]);

  return (
    <div className="mobile-navigation">
      <button
        ref={toggleRef}
        className="menu-toggle"
        type="button"
        aria-expanded={isOpen}
        aria-controls="mobile-site-navigation"
        onClick={() => setIsOpen((open) => !open)}
      >
        <span className="menu-toggle__label">{isOpen ? "Close" : "Menu"}</span>
        <span className="menu-toggle__icon" aria-hidden="true"><i /><i /></span>
      </button>

      {isOpen ? (
        <div className="mobile-menu" id="mobile-site-navigation">
          <button className="mobile-menu__backdrop" type="button" aria-label="Close navigation" onClick={() => closeMenu()} />
          <div className="mobile-menu__panel">
            <p className="mobile-menu__wordmark" aria-hidden="true">
              <span>{wordmark.lead}</span> {wordmark.name}
            </p>
            <nav aria-label="Mobile navigation">
              <ul>
                {primaryNavigation.map((item, index) => {
                  const isActive = item.href === activePath;
                  return (
                    <li key={item.href}>
                      <Link
                        ref={index === 0 ? firstLinkRef : undefined}
                        href={item.href}
                        data-active={isActive || undefined}
                        aria-current={isActive ? "page" : undefined}
                        onClick={() => closeMenu()}
                      >
                        <span>{String(index + 1).padStart(2, "0")}</span>{item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
            <Link className="mobile-menu__cta" href={headerAction.href} onClick={() => closeMenu()}>
              {headerAction.label}
            </Link>
            <p className="mobile-menu__tagline">{company.slogan}</p>
          </div>
        </div>
      ) : null}
    </div>
  );
}
