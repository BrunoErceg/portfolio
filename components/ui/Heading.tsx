import { cn } from "@/utils/cn";
import { cva, VariantProps } from "class-variance-authority";
import { motion } from "framer-motion";
import { ReactNode } from "react";

type HeadingProps = VariantProps<typeof HeadingVariants> & {
  level: 1 | 2 | 3;
  className?: string;
  children: ReactNode;
};

function Heading({ level = 1, className, children, ...props }: HeadingProps) {
  const Tag = `h${level}` as const;

  return (
    <Tag className={cn(HeadingVariants({ level }), className)} {...props}>
      {children}
    </Tag>
  );
}

const HeadingVariants = cva("text-dark, font-semibold tracking-tight", {
  variants: {
    level: {
      1: " mb-6 mt-2 text-3xl leading-8  md:text-5xl text-center md:leading-13 lg:text-6xl lg:leading-16   ",
      2: " mt-3 mb-5 leading-10 text-4xl md:leading-8 lg:text-4xl ",
      3: " mt-2 mb-0 leading-4 md:text-xl md:leading-6 font-semibold lg:text-[22px] ",
    },
  },
});

const MotionHeading = motion(Heading);
export { Heading, MotionHeading };
