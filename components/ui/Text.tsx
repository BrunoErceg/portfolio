import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@utils/cn";
import { cva, VariantProps } from "class-variance-authority";

type TextProps = VariantProps<typeof textVariants> & {
  className?: string;
  children: ReactNode;
};

function Text({ size, className, children, ...props }: TextProps) {
  return (
    <p className={cn(textVariants({ size }), className)} {...props}>
      {children}
    </p>
  );
}

const textVariants = cva("", {
  variants: {
    size: {
      xs: "text-xs",
      sm: "text-sm",
      md: "text-md",
      lg: "text-lg",
      xl: "text-xl",
    },
  },
});

const MotionText = motion(Text);
export { Text, MotionText };
