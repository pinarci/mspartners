import type { RouteNavigationItem } from "@/types/content";

export const primaryNavigation: RouteNavigationItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Areas of Work", href: "/areas-of-work" },
  { label: "Contact", href: "/contact" },
];

export const headerAction = {
  label: "Contact Us",
  href: "/contact",
} as const;
