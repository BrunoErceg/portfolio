import { cn } from '@/utils/cn';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { cva, VariantProps } from 'class-variance-authority';
import { ButtonHTMLAttributes } from 'react';

type TagProps = VariantProps<typeof tagVariants> &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    text: string;
    icon?: IconDefinition;
  };

const tagVariants = cva('inline-flex w-fit items-center rounded-full px-3 py-1 text-sm', {
  variants: {
    variant: {
      base: 'cursor-pointer border-2 border-blue-500 font-semibold text-blue-500 transition duration-400 ease-out hover:bg-linear-to-br hover:from-blue-400 hover:to-blue-500 hover:text-white/80 md:px-4 md:py-1.5 md:text-base dark:border-blue-900 dark:text-blue-500 dark:hover:from-blue-800 dark:hover:to-blue-900',
      availability: 'border-slate-700 text-slate-700',
      heading: 'border-blue-500 text-blue-500',
    },
    state: {
      default: '',
      selected: '',
    },
    white: {
      true: 'border-white/80 text-white/80 dark:border-slate-600 dark:text-slate-600',
    },
  },
  compoundVariants: [
    {
      variant: 'base',
      state: 'selected',
      className:
        'bg-linear-to-br from-blue-400 to-blue-500 text-white dark:from-blue-800 dark:to-blue-900 dark:text-white/80',
    },
    {
      variant: ['heading', 'availability'],
      className: 'border dark:border-slate-400 dark:text-slate-400',
    },
  ],
  defaultVariants: {
    variant: 'base',
    state: 'default',
  },
});

export function Tag({ text, icon, variant, white, state, className, ...props }: TagProps) {
  return (
    <button className={cn(tagVariants({ variant, white, state }), className)} {...props}>
      {variant === 'availability' && <GreenLight />}
      {icon && <FontAwesomeIcon icon={icon} className="mr-1.5" />}
      {text}
    </button>
  );
}

function GreenLight() {
  return (
    <span
      className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-green-400 shadow-[0px_0px_9px_1px_#05df72] transition-shadow"
      aria-hidden="true"
    />
  );
}
