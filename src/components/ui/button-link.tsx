import type { ReactNode } from "react";

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  download?: boolean;
  external?: boolean;
}

export function ButtonLink({ href, children, variant = "primary", download, external }: ButtonLinkProps) {
  return (
    <a
      href={href}
      className={variant === "primary" ? "button-primary" : "button-secondary"}
      download={download}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
    >
      {children}
    </a>
  );
}
