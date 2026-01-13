import { cn } from '@/utils/cn';
import { TypingAnimation } from '@ui';

type SelectionHighlightProps = {
  words: string[];
};

const POSITIONS = [
  '-top-1 -left-1 md:-top-1.5 md:-left-1.5',
  '-top-1 -right-1 md:-top-1.5 md:-right-1.5',
  '-bottom-1 -left-1 md:-bottom-1.5 md:-left-1.5',
  '-bottom-1 -right-1 md:-bottom-1.5 md:-right-1.5',
];

export function SelectionHighlight({ words }: SelectionHighlightProps) {
  return (
    <span className="relative px-1 py-0">
      <span className="relative z-20 inline-block bg-linear-to-r from-blue-400 to-blue-600 bg-clip-text p-0 text-transparent dark:from-blue-500 dark:to-blue-700">
        <TypingAnimation words={words} className="inline-block h-4 p-0" />
      </span>

      <span className="absolute top-1/2 left-0 z-0 inline-block h-[80%] w-full -translate-y-1/2 border-2 border-blue-200 bg-blue-100 dark:border-slate-700 dark:bg-slate-800">
        {POSITIONS.map((position, index) => (
          <Dot key={index} className={position} />
        ))}
      </span>
    </span>
  );
}

/**
 * A small dot used to indicate the position of a selection highlight.
 *
 * @param {{ className?: string }} - The className for the dot element.
 * @returns A span element with the dot.
 */
function Dot({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        'absolute size-1.5 rotate-45 rounded-xs bg-blue-600 md:size-2.5 dark:bg-blue-600',
        className,
      )}
    />
  );
}
