import type React from "react";
import { cn } from "@/utils/cn";

interface HeadingProps {
  children: React.ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
  variant?: "primary" | "secondary" | "serif";
}

const variantStyles = {
  primary: "text-gray-900 font-bold",
  secondary: "text-gray-700 font-semibold",
  serif: "font-serif font-normal text-gray-900",
};

const levelStyles = {
  1: "text-4xl md:text-5xl",
  2: "text-3xl md:text-4xl",
  3: "text-2xl md:text-3xl",
  4: "text-xl md:text-2xl",
  5: "text-lg md:text-xl",
  6: "text-base md:text-lg",
};

export default function Heading({
  children,
  level = 2,
  className,
  variant = "primary",
}: HeadingProps) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <Tag
      className={cn(
        variantStyles[variant],
        levelStyles[level],
        "mb-6",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
