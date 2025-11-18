import { cn } from "@/utils/cn";
import { motion } from "framer-motion";
import { ReactNode } from "react";

type HeadingProps = {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
  children: ReactNode;
};

function Heading({ level, className, children, ...props }: HeadingProps) {
  const Tag = `h${level}` as const;

  const styles = {
    1: "text-3xl lg:text-7xl md:text-6xl md:leading-16 font-semibold leading-10 lg:leading-20 mb-6",
    2: " ",
    3: " ",
    4: " ",
    5: " ",
    6: " ",
  }[level];
  return <Tag className={cn(styles, className)}>{children}</Tag>;
}

const MotionHeading = motion(Heading);

export { Heading, MotionHeading };
