import type { RouteNavigationItem } from "@/types/content";

export const primaryNavigation: RouteNavigationItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "How We Work", href: "/approach" },
  { label: "Contact", href: "/contact" },
];

export const headerAction = {
  label: "Contact Us",
  href: "/contact",
} as const;
