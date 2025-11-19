import { cn } from "@/utils/cn";
import { motion } from "framer-motion";
import { ReactNode } from "react";

type StackProps = {
  direction?: "row" | "col";
  spacing?: "none" | "xs" | "sm" | "md" | "lg" | "xl";
  children: ReactNode;
  className?: string;
};

function Stack({
  direction = "row",
  spacing = "md",
  children,
  className,
}: StackProps) {
  const directionClass = direction === "col" ? "flex-col" : "flex-row";
  const spacingClass = {
    none: "gap-0",
    xs: "gap-1 lg:gap-2",
    sm: "gap-2 lg:gap-4",
    md: "gap-4 lg:gap-8",
    lg: "gap-10 lg:gap-16 ",
    xl: "gap-16 lg:gap-24",
  }[spacing];

  return (
    <div className={cn(`flex`, directionClass, spacingClass, className)}>
      {children}
    </div>
  );
}

const MotionStack = motion(Stack);
export default Stack;
