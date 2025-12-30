import Stack from '@/components/layout/Stack';
import { cn } from '@/utils/cn';
import { ReactNode, useEffect, useState } from 'react';
import TypingAnimation from './TypingAnimation';

type HighlightedProps = {
  words: string[];
};

function Highlighted({ words }: HighlightedProps) {
  return (
    <span className="relative px-1 py-0">
      <span className="relative z-20 inline-block bg-linear-to-r from-blue-400 to-blue-600 bg-clip-text p-0 text-transparent">
        <TypingAnimation words={words} className="inline-block h-4 p-0" />
      </span>

      <span className="absolute top-1/2 left-0 z-0 inline-block h-[80%] w-full -translate-y-1/2 border-2 border-blue-200 bg-blue-100">
        <Dot className="-top-1 -left-1 md:-top-1.5 md:-left-1.5" />
        <Dot className="-top-1 -right-1 md:-top-1.5 md:-right-1.5" />
        <Dot className="md-bottom-1.5 -bottom-1 -left-1 md:-left-1.5" />
        <Dot className="-right-1 -bottom-1 md:-right-1.5 md:-bottom-1.5" />
      </span>
    </span>
  );
}

function Dot({ className }: { className?: string }) {
  return (
    <span
      className={cn('absolute size-1.5 rotate-45 rounded-xs bg-[#0e60fb] md:size-2.5', className)}
    ></span>
  );
}

export default Highlighted;
