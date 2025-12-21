import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";

type BoxProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  centered?: boolean;
  className?: string;
};

function GradientSurface({
  children,
  centered,
  className,
  ...props
}: BoxProps) {
  const centeredClass = centered ? "flex justify-center items-center" : "";
  return (
    <div
      className={cn(
        "mb-5 rounded-2xl bg-linear-to-br from-blue-300 to-blue-400 p-5 text-white",
        centeredClass,
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export default GradientSurface;
