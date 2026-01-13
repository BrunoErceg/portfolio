import { cn } from '@/utils/cn';
import { ReactNode } from 'react';

type ContainerProps = {
  size?: 'sm' | 'md' | 'lg';
  align?: 'left' | 'center';
  children: ReactNode;
  className?: string;
};

export function Container({ size = 'md', align = 'center', children, className }: ContainerProps) {
  const sizeClass = {
    sm: 'max-w-4xl',
    md: '',
    lg: '',
  }[size];
  const alignClass = {
    left: '',
    center: 'mx-auto',
  }[align];

  return <div className={cn('container px-4', alignClass, sizeClass, className)}>{children}</div>;
}
