import { cn } from "@/utils/cn";

interface DividerProps {
  text?: string;
  className?: string;
}

export default function Divider({ text, className }: DividerProps) {
  if (!text) {
    return <div className={cn("border-t border-gray-200", className)} />;
  }

  return (
    <div
      className={cn(
        "flex items-center justify-center text-gray-400 py-2",
        className,
      )}
    >
      <div className="flex-grow border-t border-gray-200" />
      <span className="mx-4 text-xs tracking-wider uppercase">{text}</span>
      <div className="flex-grow border-t border-gray-200" />
    </div>
  );
}
