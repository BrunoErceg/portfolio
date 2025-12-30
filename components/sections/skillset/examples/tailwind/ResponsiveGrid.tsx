import { cn } from '@/utils/cn';
import { useEffect, useState } from 'react';
import GradientSurface from '../shared/GradientSurface';

type Device = 'desktop' | 'tablet' | 'mobile';

/**
 * A component that renders a responsive grid based on the current device.
 * The component rotates through different devices (desktop, tablet, mobile) every 1500ms.
 * The grid configuration is based on the current device.
 *
 * @returns A responsive grid component.
 */
function ResponsiveGrid() {
  const [currentDevice, setCurrentDevice] = useState<Device>('desktop');

  const ROTATION_INTERVAL_MS = 1500;

  const GRID_CONFIG_BY_DEVICE = {
    desktop: 'grid-cols-3',
    tablet: 'grid-cols-2',
    mobile: 'grid-cols-1',
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDevice((prevDevice) => {
        switch (prevDevice) {
          case 'desktop':
            return 'tablet';
          case 'tablet':
            return 'mobile';
          default:
            return 'desktop';
        }
      });
    }, ROTATION_INTERVAL_MS);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <GradientSurface className="flex h-58">
      <div className={cn('grid w-full gap-3', GRID_CONFIG_BY_DEVICE[currentDevice])}>
        <GridItem />
        <GridItem />
        <GridItem className={cn(currentDevice === 'tablet' && 'col-span-2')} />
      </div>
    </GradientSurface>
  );
}

type GridItemProps = {
  className?: string;
};

function GridItem({ className }: GridItemProps) {
  return (
    <div
      className={cn(
        'flex w-full items-center justify-center rounded-2xl bg-white/30 p-3 text-center',
        className,
      )}
    >
      <p className="font-semibold text-white">Col</p>
    </div>
  );
}

export default ResponsiveGrid;
