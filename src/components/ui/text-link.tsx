import type { AnchorHTMLAttributes, ReactNode } from "react";

interface TextLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "inline";
}

export function TextLink({ children, className = "", variant = "inline", ...props }: TextLinkProps) {
  return (
    <a className={`text-link text-link--${variant} ${className}`.trim()} {...props}>
      {children}
      <span aria-hidden="true">→</span>
    </a>
  );
}
