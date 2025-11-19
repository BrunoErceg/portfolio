import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@utils/cn";
import { cva, VariantProps } from "class-variance-authority";

type TextProps = VariantProps<typeof textVariants> & {
  className?: string;
  children: ReactNode;
};

function Text({ variant, color, className, children, ...props }: TextProps) {
  return (
    <p className={cn(textVariants({ variant, color }), className)} {...props}>
      {children}
    </p>
  );
}

const textVariants = cva("", {
  variants: {
    variant: {
      paragraph: "leading-7 text-xl ",
      caption: "text-base leading-5",
    },
    color: {
      white: "text-white",
      dark: "text-dark",
    },
  },
  defaultVariants: {
    variant: "paragraph",
    color: "dark",
  },
});

const MotionText = motion(Text);
export { Text, MotionText };
