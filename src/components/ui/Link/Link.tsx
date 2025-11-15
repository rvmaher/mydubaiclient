import NextLink from "next/link";
import type React from "react";
import { cn } from "@/utils/cn";

interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
  variant?: "default" | "nav" | "footer";
}

const variantStyles = {
  default: "text-gray-600 hover:text-red-600 transition-colors",
  nav: "text-current hover:text-red-600 transition-colors",
  footer: "text-gray-400 hover:text-white transition-colors duration-200",
};

export default function Link({
  href,
  children,
  className,
  external = false,
  variant = "default",
}: LinkProps) {
  const classes = cn(variantStyles[variant], className);

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <NextLink href={href} className={classes}>
      {children}
    </NextLink>
  );
}
