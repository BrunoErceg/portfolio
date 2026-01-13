import { cn } from '@/utils/cn';
import { cva, VariantProps } from 'class-variance-authority';
import { HTMLAttributes, ReactNode } from 'react';

type HeadingProps = VariantProps<typeof HeadingVariants> &
  HTMLAttributes<HTMLHeadingElement> & {
    level: 1 | 2 | 3;
    centered?: boolean;
    white?: boolean;
    className?: string;
    children: ReactNode;
  };

const HeadingVariants = cva('tracking-tight text-slate-900 dark:text-white/90', {
  variants: {
    level: {
      1: 'mb-4 max-w-[20ch] text-3xl font-bold md:text-6xl',
      2: 'mb-5 max-w-[25ch] text-3xl font-[500] md:text-5xl',
      3: 'mb-1 text-2xl font-semibold',
    },
    white: {
      true: 'text-white/90',
    },
    centered: {
      true: 'mx-auto text-center',
    },
  },
});

/**
 * A React component that displays a heading with a variant style.
 *
 * @returns A React component that displays a heading with a variant style.
 */
export function Heading({
  level,
  centered = level === 1 || level === 2,
  white = false,
  className,
  children,
  ...props
}: HeadingProps) {
  const Tag = `h${level}` as const;

  return (
    <Tag className={cn(HeadingVariants({ level, white, centered }), className)} {...props}>
      {children}
    </Tag>
  );
}
