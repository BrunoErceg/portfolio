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
    1: "text-dark mb-6 text-4xl leading-10 font-semibold md:text-4xl md:leading-16 lg:text-7xl lg:leading-20",
    2: " ",
    3: " ",
    4: " ",
    5: " ",
    6: " ",
  }[level];
  return (
    <Tag className={cn(styles, className, "")} {...props}>
      {children}
    </Tag>
  );
}

const MotionHeading = motion(Heading);

export { Heading, MotionHeading };
