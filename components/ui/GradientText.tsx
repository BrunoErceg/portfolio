import { cn } from '@/utils/cn';
import { ReactNode } from 'react';

type GradientTextProps = {
  className?: string;
  children: ReactNode;
};

function GradientText({ className, children }: GradientTextProps) {
  return (
    <span
      className={cn(
        'bg-linear-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent',
        className,
      )}
    >
      {children}
    </span>
  );
}

export default GradientText;
