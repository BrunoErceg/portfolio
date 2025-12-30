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

const HeadingVariants = cva('smooth-poppins text-dark', {
  variants: {
    level: {
      1: ' mb-6 mt-2 text-3xl leading-9 font-semibold md:text-5xl text-center md:leading-13 lg:text-6xl lg:leading-16   ',
      2: ' mb-4 mt-5 text-3xl md:text-4xl leading-10 md:leading-11 lg:text-5xl lg:leading-14  tracking-normal ',
      3: ' mt-2 mb-2 leading-4 md:text-xl md:leading-6 font-semibold lg:text-[22px] ',
    },
    color: {
      white: 'text-white',
      gray: 'text-gray-600',
      dark: 'text-dark',
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
      className={cn(HeadingVariants({ level, color }), centered && 'text-center', className)}
      {...props}
    >
      {children}
    </Component>
  );
}

export default Heading;
