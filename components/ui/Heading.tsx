import { cn } from '@/utils/cn';
import { cva, VariantProps } from 'class-variance-authority';
import { HTMLAttributes } from 'react';

type HeadingProps = VariantProps<typeof HeadingVariants> &
  HTMLAttributes<HTMLHeadingElement> & {
    level: 1 | 2 | 3;
  };

const HeadingVariants = cva('tracking-tight text-slate-900 dark:text-white/90', {
  variants: {
    level: {
      1: 'text-3xl font-bold md:text-6xl',
      2: 'text-3xl font-medium md:text-5xl',
      3: 'text-2xl font-semibold',
    },
    white: {
      true: 'text-white/90',
    },
  },
});

export function Heading({ level, white = false, className, children, ...props }: HeadingProps) {
  const Tag = `h${level}` as const;

  return (
    <Tag className={cn(HeadingVariants({ level, white }), className)} {...props}>
      {children}
    </Tag>
  );
}
