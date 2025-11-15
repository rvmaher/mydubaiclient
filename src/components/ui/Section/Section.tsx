import type React from "react";
import { cn } from "@/utils/cn";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  fullWidth?: boolean;
}

export default function Section({
  children,
  className,
  containerClassName,
  fullWidth = false,
}: SectionProps) {
  return (
    <section className={cn("py-12 md:py-16", className)}>
      <div
        className={cn(
          !fullWidth && "max-w-7xl mx-auto px-4",
          containerClassName,
        )}
      >
        {children}
      </div>
    </section>
  );
}
