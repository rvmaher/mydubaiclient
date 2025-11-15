import type React from "react";
import { cn } from "@/utils/cn";

interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  ariaLabel: string;
}

const variantStyles = {
  primary: "bg-black text-white hover:bg-gray-800",
  secondary: "bg-white text-gray-700 hover:bg-gray-50 border border-gray-300",
  ghost: "bg-transparent hover:bg-gray-100",
};

const sizeStyles = {
  sm: "p-1.5",
  md: "p-2",
  lg: "p-3",
};

export default function IconButton({
  icon,
  variant = "ghost",
  size = "md",
  ariaLabel,
  className,
  ...props
}: IconButtonProps) {
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      className={cn(
        "rounded-full transition-all duration-200",
        variantStyles[variant],
        sizeStyles[size],
        className,
      )}
      {...props}
    >
      {icon}
    </button>
  );
}
