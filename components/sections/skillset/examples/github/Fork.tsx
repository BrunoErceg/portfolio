import Image from 'next/image';
import { GradientSurface } from '../GradientSurface';

/**
 * A component that demonstrates a fork icon.
 * The icon is displayed inside a gradient surface.
 *
 * @returns A React component with a fork icon.
 */
export function Fork() {
  return (
    <GradientSurface centered>
      {/* The fork icon */}
      <Image
        alt="fork icon"
        src="/images/git-fork.svg"
        width={100}
        height={100}
        className="block size-24"
      />
    </GradientSurface>
  );
}
