import { cn } from '@/utils/cn';
import GradientSurface from '../shared/GradientSurface';

/**
 * A Tailwind CSS grid component.
 * It displays a grid of 3x3 items with a gap of 2px between each item.
 * The grid items are rounded and have a dashed blue border.
 * The grid background is a blue gradient.
 * @returns A React component that displays the grid.
 */
function Grid() {
  return (
    <GradientSurface className="flex h-80">
      <div className="grid h-full w-full grid-cols-3 grid-rows-3 gap-2">
        <GridItem className="col-span-1" />
        <GridItem className="col-span-2" />
        <GridItem className="col-span-2" />
        <GridItem className="col-span-1 row-span-2" />
        <GridItem className="col-span-1" />
        <GridItem className="col-span-1" />
      </div>
    </GradientSurface>
  );
}

/**
 * A single grid item component.
 * It displays a rounded item with a dashed blue border.
 *
 * @returns A React component that displays the grid item.
 */

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
export default Grid;
