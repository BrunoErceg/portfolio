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
    submit?: boolean;
    icon?: IconDefinition;
  };

const ButtonVariants = cva('group w-fit inline-block items-center m-2 cursor-pointer', {
  variants: {
    variant: {
      primary: 'bg-blue-100 rounded-full font-semibold  text-blue-500 border border-blue-200 ',
      secondary: 'bg-blue-500  rounded-full font-semibold text-white  ',
      white: 'bg-white  rounded-lg font-semibold  text-blue-500 border border-blue-100 ',
    },
    centered: {
      true: 'block mx-auto',
    },
    size: {
      sm: 'text-sm py-2 px-4',
      md: 'text-md py-2 px-4',
      lg: 'text-lg py-3 px-5',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
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

function Button({
  variant,
  href,
  centered,
  icon,
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
      {...BUTTON_ANIMATION}
      {...linkProps}
      {...(props as any)}
      className={cn(ButtonVariants({ variant, centered, size }), className)}
      aria-label={text}
      type={href ? undefined : buttonType}
    >
      {icon && <FontAwesomeIcon icon={icon} className="mr-1.5 scale-110" />}
      {text && <RollingText text={text} />}
    </Component>
  );
}

export default Button;
