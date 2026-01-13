import { cn } from '@/utils/cn';
import { GradientSurface } from '../GradientSurface';

const GRID_ITEMS = [
  { id: 1, spanConfig: 'col-span-1' },
  { id: 2, spanConfig: 'col-span-2' },
  { id: 3, spanConfig: 'col-span-2' },
  { id: 4, spanConfig: 'col-span-1 row-span-2' },
  { id: 5, spanConfig: 'col-span-1' },
  { id: 6, spanConfig: 'col-span-1' },
];
export function Grid() {
  return (
    <GradientSurface className="flex h-80">
      <div className="grid h-full w-full grid-cols-3 grid-rows-3 gap-2">
        {GRID_ITEMS.map(({ id, spanConfig }) => (
          <GridItem key={id} className={spanConfig} />
        ))}
      </div>
    </GradientSurface>
  );
}

const GridItem = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        'rounded-xl border-4 border-dashed border-blue-200 bg-white/20 dark:border-white/30 dark:bg-white/10',
        className,
      )}
    ></div>
  );
};
