import type React from "react";
import { cn } from "@/utils/cn";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export default function Card({
  children,
  className,
  hover = false,
  onClick,
}: CardProps) {
  return (
    <div
      className={cn(
        "bg-white overflow-hidden",
        hover &&
          "hover:shadow-xl transition-shadow duration-300 cursor-pointer",
        className,
      )}
      onClick={onClick}
      onKeyDown={(e) => {
        if (onClick && (e.key === "Enter" || e.key === " ")) {
          onClick();
        }
      }}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {children}
    </div>
  );
}
