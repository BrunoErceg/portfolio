import Lottie from 'lottie-react';
import CloneAnimation from '@lottie/clone.json';
import { GradientSurface } from '../GradientSurface';

export function Clone() {
  return (
    <GradientSurface centered className="p-0">
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
