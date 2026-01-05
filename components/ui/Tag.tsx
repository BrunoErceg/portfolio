import { cn } from '@/utils/cn';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { cva, VariantProps } from 'class-variance-authority';
import { motion } from 'framer-motion';
import { ButtonHTMLAttributes, ReactNode } from 'react';

type TagProps = VariantProps<typeof tagVariants> &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    text: string;
    icon?: IconDefinition;
    isAnimated?: boolean;
    centered?: boolean;
    className?: string;
    children?: ReactNode;
  };

const tagVariants = cva('w-fit', {
  variants: {
    variant: {
      base: 'cursor-pointer text-sm md:text-base rounded-full border-2 font-semibold border-blue-500 px-3 py-1 md:px-4 md:py-1.5 text-blue-500 duration-400 ease-out hover:border-transparent hover:bg-linear-to-br hover:from-blue-400 hover:to-blue-500 hover:text-white',
      availability: 'mb-4 rounded-full border text-slate-700  border-slate-700 px-3 py-1 text-sm',
      heading:
        'mb-8 rounded-full mx-auto border border-gray-600 px-3 py-1 text-sm text-blue-500 border-blue-500',
    },
    state: {
      default: '',
      selected: '',
    },
  },
  compoundVariants: [
    {
      variant: 'base',
      state: 'selected',
      className: 'bg-linear-to-br from-blue-400 to-blue-500 text-white',
    },
  ],
  defaultVariants: {
    variant: 'base',
    state: 'default',
  },
});

function Tag({
  text,
  icon,
  variant,
  state,
  centered,
  isAnimated,
  children,
  className,
  ...props
}: TagProps) {
  const Component = isAnimated ? motion.button : ('button' as any);
  return (
    <Component className={cn(tagVariants({ variant, state }), className)} {...props}>
      {variant === 'availability' && <GreenLight />}
      {icon && <FontAwesomeIcon icon={icon} className="mr-1.5" />}
      {text}
    </Component>
  );
}

function GreenLight() {
  return (
    <span
      className="mr-1.5 inline-block h-2 w-2 animate-pulse rounded-full bg-green-400 shadow-[0px_0px_9px_1px_#05df72] transition-shadow"
      aria-hidden="true"
    />
  );
}

export default Tag;
