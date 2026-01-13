import Lottie from 'lottie-react';
import CloneAnimation from '@lottie/clone.json';
import { GradientSurface } from '../GradientSurface';

/**
 * A component that demonstrates a clone icon.
 * The icon is displayed inside a gradient surface.
 *
 * @returns A React component with a clone icon.
 */
export function Clone() {
  return (
    <GradientSurface centered className="p-0">
      {/* The clone icon */}
      <Lottie
        animationData={CloneAnimation}
        height={50}
        width={50}
        loop={true}
        className="-ml-5 size-60"
      />
    </GradientSurface>
  );
}
