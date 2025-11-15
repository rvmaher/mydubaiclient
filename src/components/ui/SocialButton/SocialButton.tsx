import type React from "react";
import { cn } from "@/utils/cn";

interface SocialButtonProps {
  icon: React.ElementType;
  label: string;
  onClick?: () => void;
  className?: string;
}

export default function SocialButton({
  icon: Icon,
  label,
  onClick,
  className,
}: SocialButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "w-full flex items-center justify-center py-3 border border-gray-300 rounded-md text-gray-900 bg-white hover:bg-gray-50 transition duration-150 shadow-sm",
        className,
      )}
    >
      <Icon className="mr-3 w-5 h-5" />
      <span className="text-base font-medium">{label}</span>
    </button>
  );
}
