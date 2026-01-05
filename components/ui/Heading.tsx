import { cn } from '@/utils/cn';
import { cva, VariantProps } from 'class-variance-authority';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

type HeadingProps = VariantProps<typeof HeadingVariants> & {
  level: 1 | 2 | 3;
  centered?: boolean;
  color?: 'white' | 'dark' | 'gray';
  isAnimated?: boolean;
  className?: string;
  children: ReactNode;
};

const HeadingVariants = cva('text-slate-900', {
  variants: {
    level: {
      1: 'text-5xl md:text-6xl text-center font-bold text-slate-900 tracking-tight mb-4',
      2: 'text-4xl md:text-5xl font-[500] text-slate-900 tracking-tight mb-5 max-w-[25ch]',
      3: 'text-2xl font-semibold text-slate-900 tracking-tight mb-1',
    },
    color: {
      white: 'text-white',
      gray: 'text-gray-600',
      dark: 'text-slate-900',
    },
    defaultVariants: {
      color: 'dark',
    },
  },
});

function Heading({
  level = 1,
  centered,
  color,
  className,
  isAnimated,
  children,
  ...props
}: HeadingProps) {
  const Component = (isAnimated ? (motion as any)[`h${level}`] : `h${level}`) as any;

  return (
    <Component
      className={cn(
        HeadingVariants({ level, color }),
        centered && 'mx-auto text-center',
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

export default Heading;
