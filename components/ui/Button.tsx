'use client';
import { cn } from '@/utils/cn';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { cva, VariantProps } from 'class-variance-authority';
import { motion } from 'framer-motion';
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import RollingText from './RollingText';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLAnchorElement> &
  VariantProps<typeof ButtonVariants> & {
    className?: string;
    href?: string;
    centered?: boolean;
    text?: string;
    icon?: IconDefinition;
  };

const ButtonVariants = cva('group w-fit inline-flex items-center m-2 cursor-pointer', {
  variants: {
    variant: {
      primary:
        'bg-blue-100 py-2 px-4 rounded-lg font-semibold text-md text-blue-500 border border-blue-200 ',
      white:
        'bg-white py-2 px-4 rounded-lg font-semibold text-md text-blue-500 border border-blue-100 ',
    },
    centered: {
      true: 'block mx-auto',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

const BUTTON_ANIMATION = {
  initial: 'rest',
  whileHover: 'hover',
  animate: 'rest',
  variants: {
    rest: { scale: 1 },
    hover: { scale: 1.05, transition: { staggerChildren: 0.01 } },
  },
};

function Button({ variant, href, centered, icon, className, text, ...props }: ButtonProps) {
  const Component = (href ? motion.a : motion.button) as any;
  const linkProps = href ? { href, target: '_blank', rel: 'noreferrer' } : {};

  return (
    <Component
      {...BUTTON_ANIMATION}
      {...linkProps}
      {...(props as any)}
      className={cn(ButtonVariants({ variant, centered }), className)}
      aria-label={text}
    >
      {icon && <FontAwesomeIcon icon={icon} className="mr-1.5 scale-110" />}
      {text && <RollingText text={text} />}
    </Component>
  );
}

export default Button;
