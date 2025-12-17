import { forwardRef, HTMLAttributes, ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@utils/cn";
import { cva, VariantProps } from "class-variance-authority";
// subheadings
// description
// caption
const textVariants = cva("", {
  variants: {
    variant: {
      subheading: "text-lg text-center text-dark",
      description: "text-[15px] leading-5.5 text-gray-600",
    },
    color: {
      white: "text-white",
      gray: "text-gray-600",
      dark: "text-dark",
    },
    size: {
      sm: "text-sm",
      md: "text-[15px] ",
      lg: "text-lg",
      xl: "text-xl",
      xxl: "text-2xl",
    },
  },
  defaultVariants: {
    variant: "description",
  },
});

// Define the props for the Text component
type TextProps = VariantProps<typeof textVariants> &
  HTMLAttributes<HTMLParagraphElement> & {
    className?: string;
    children: ReactNode;
  };

const Text = forwardRef<HTMLParagraphElement, TextProps>(
  ({ variant, color, size, className, children, ...props }, ref) => {
    return (
      <p
        className={cn(textVariants({ variant, color, size }), className)}
        {...props}
        ref={ref}
      >
        {children}
      </p>
    );
  },
);

const MotionText = motion(Text);
export { Text, MotionText };
