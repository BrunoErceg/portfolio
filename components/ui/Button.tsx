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
  VariantProps<typeof ButtonVariants> &
  VariantProps<typeof iconVariants> & {
    className?: string;
    href?: string;
    centered?: boolean;
    text?: string;
    submit?: boolean;
    icon?: IconDefinition;
  };

const ButtonVariants = cva(
  'group m-2 inline-flex w-fit cursor-pointer items-center rounded-full font-semibold',
  {
    variants: {
      variant: {
        primary:
          'border border-blue-200 bg-blue-100 text-blue-500 dark:border-blue-800 dark:bg-blue-900 dark:text-white/80',
        secondary:
          'bg-blue-500 text-white/90 dark:border-blue-800 dark:bg-blue-900 dark:bg-linear-to-br',
        white: 'bg-white text-blue-500 dark:text-slate-600',
      },
      centered: {
        true: 'mx-auto flex',
      },
      size: {
        sm: 'px-2.5 py-1.5 text-xs md:px-4 md:py-2 md:text-sm',
        md: 'md:text-md px-2.5 py-1.5 text-sm md:px-4 md:py-2',
        lg: 'px-4 py-2 text-base md:px-5 md:py-3 md:text-lg',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
);

const iconVariants = cva('mr-1.5 transition-transform', {
  variants: {
    iconSize: {
      sm: 'scale-90',
      md: 'scale-100',
      lg: 'scale-110',
    },
  },
  defaultVariants: { iconSize: 'md' },
});

/*
 * This is the animation for the button.
 * It is used to add a rolling text effect to the button.
 */
const BUTTON_ANIMATION = {
  initial: 'rest',
  whileHover: 'hover',
  animate: 'rest',
  whileTap: 'tap',
  variants: {
    rest: { scale: 1 },
    hover: { scale: 1.05, transition: { staggerChildren: 0.01 } }, // Necessary for the rolling text
    tap: { scale: 0.95 },
  },
};

/**
 * A React component that displays a button with the given variant style.
 * The component is used to display buttons with the given variant style.
 *
 * @returns A React component that displays the button with the given variant style.
 */
function Button({
  variant,
  href,
  centered,
  icon,
  iconSize,
  className,
  text,
  size,
  type,
  submit = false,
  ...props
}: ButtonProps) {
  const Component = (href ? motion.a : motion.button) as any;
  const linkProps = href ? { href, target: '_blank', rel: 'noreferrer' } : {};
  const buttonType = submit || type === 'submit' ? 'submit' : 'button';
  return (
    <Component
      {...BUTTON_ANIMATION} // Necessary for the rolling text
      {...linkProps}
      {...(props as any)}
      className={cn(ButtonVariants({ variant, centered, size }), className)}
      aria-label={text}
      type={href ? undefined : buttonType}
    >
      {icon && <FontAwesomeIcon icon={icon} className={cn(iconVariants({ iconSize }))} />}
      {text && <RollingText text={text} />}
    </Component>
  );
}

export default Button;
