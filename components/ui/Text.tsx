import { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@utils/cn';
import { cva, VariantProps } from 'class-variance-authority';

const textVariants = cva('smooth-poppins max-w-[55ch]', {
  variants: {
    variant: {
      subheading: 'mb-6 text-base leading-relaxed text-slate-600 md:text-lg dark:text-slate-400',
      description: 'text-md leading-normal text-slate-500 dark:text-slate-400',
    },
    white: {
      true: 'text-white/80',
    },
    centered: {
      true: 'mx-auto text-center',
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

type TextProps = VariantProps<typeof textVariants> &
  HTMLAttributes<HTMLParagraphElement> & {
    centered?: boolean;
    className?: string;
    children: ReactNode;
  };

/**
 * A React component that displays a paragraph of text with the given variant style.
 * The component is used to display descriptions of skills or projects.
 *
 * @returns A React component that displays a paragraph of text with the given variant style.
 */
function Text({
  variant = 'description',
  white,
  size,
  centered = variant === 'subheading',
  className,
  children,
  ...props
}: TextProps) {
  return (
    <p className={cn(textVariants({ variant, white, size, centered }), className)} {...props}>
      {children}
    </p>
  );
}

export default Text;
