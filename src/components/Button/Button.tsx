import type React from "react";
import { cn } from "@/utils/cn";

const sizeVariants = {
  sm: "text-xs px-3 py-1.5",
  md: "text-sm px-5 py-2.5",
  lg: "text-base px-6 py-3",
};

const buttonVariants = {
  default:
    "text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
  alternative:
    "text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700",
  dark: "text-white bg-gray-800 hover:bg-gray-900 focus:ring-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700",
  light:
    "text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-gray-100 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700",
  green:
    "text-white bg-green-700 hover:bg-green-800 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800",
  red: "text-white bg-red-700 hover:bg-red-800 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900",
  yellow:
    "text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-yellow-300 dark:focus:ring-yellow-900",
  purple:
    "text-white bg-purple-700 hover:bg-purple-800 focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900",
};

const baseStyles =
  "focus:outline-none focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 transition-colors duration-150";

type ButtonProps = {
  variant?: keyof typeof buttonVariants;
  size?: keyof typeof sizeVariants;
  icon?: React.ReactElement;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function Button({
  className,
  variant = "default",
  size = "md",
  icon,
  children,
  ...props
}: ButtonProps) {
  const variantStyles = buttonVariants[variant] || buttonVariants.default;
  const sizeStyles = sizeVariants[size] || sizeVariants.md;

  const mergedClasses = cn(baseStyles, variantStyles, sizeStyles, className);

  return (
    <button type="button" className={mergedClasses} {...props}>
      {icon}
      {children}
    </button>
  );
}

export default Button;
