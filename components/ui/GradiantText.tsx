import { cn } from "@/utils/cn";
import { ReactNode } from "react";

type GradiantTextProps = {
  className?: string;
  children: ReactNode;
};

function GradiantText({ className, children }: GradiantTextProps) {
  return (
    <span
      className={cn(
        "bg-linear-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent",
        className,
      )}
    >
      {children}
    </span>
  );
}

export default GradiantText;
