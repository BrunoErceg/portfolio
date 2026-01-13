import Image from 'next/image';
import { GradientSurface } from '../GradientSurface';

/**
 * A component that demonstrates a pull icon.
 * The icon is displayed inside a gradient surface.
 * @returns A React component with a pull icon.
 */
export function Pull() {
  return (
    <GradientSurface centered>
      {/* The pull icon */}
      <Image
        alt="Pull icon"
        src="/images/git-pull.svg"
        width={100}
        height={100}
        className="block size-24"
      />
    </GradientSurface>
  );
}
