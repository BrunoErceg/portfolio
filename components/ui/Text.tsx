import { HTMLAttributes } from 'react';
import { cn } from '@utils/cn';
import { cva, VariantProps } from 'class-variance-authority';

const textVariants = cva('smooth-poppins', {
  variants: {
    variant: {
      subheading: 'text-base leading-relaxed text-slate-600 md:text-lg dark:text-slate-400',
      description: 'text-md leading-normal text-slate-500 dark:text-slate-400',
    },
    white: {
      true: 'text-white/80',
    },

    size: {
      small: 'text-sm',
      base: 'text-[15px]',
      large: 'text-lg',
      xl: 'text-xl',
    },
  },
  defaultVariants: {
    variant: 'description',
  },
});

type TextProps = VariantProps<typeof textVariants> & HTMLAttributes<HTMLParagraphElement>;

export function Text({
  variant = 'description',
  white,
  size,
  className,
  children,
  ...props
}: TextProps) {
  return (
    <p className={cn(textVariants({ variant, white, size }), className)} {...props}>
      {children}
    </p>
  );
}
