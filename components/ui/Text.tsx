import { forwardRef, HTMLAttributes, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@utils/cn';
import { cva, VariantProps } from 'class-variance-authority';

const textVariants = cva('smooth-poppins', {
  variants: {
    variant: {
      subheading: 'text-lg text-center text-dark mb-4',
      description: 'text-[15px] leading-5.5 text-gray-600 mb-4',
    },
    color: {
      white: 'text-white',
      gray: 'text-gray-600',
      dark: 'text-dark',
    },
    size: {
      small: 'text-sm',
      base: 'text-[15px] ',
      large: 'text-lg',
      xl: 'text-xl',
      xxl: 'text-2xl',
    },
  },
  defaultVariants: {
    variant: 'description',
  },
});

// Define the props for the Text component
type TextProps = VariantProps<typeof textVariants> &
  HTMLAttributes<HTMLParagraphElement> & {
    centered?: boolean;
    className?: string;
    isAnimated?: boolean;
    children: ReactNode;
  };

const Text = forwardRef<HTMLParagraphElement, TextProps>(
  ({ variant, color, size, centered, className, isAnimated, children, ...props }, ref) => {
    const Component = isAnimated ? motion.p : ('p' as any);
    return (
      <Component
        className={cn(textVariants({ variant, color, size }), centered && 'text-center', className)}
        {...props}
        ref={ref}
      >
        {children}
      </Component>
    );
  },
);

export default Text;
