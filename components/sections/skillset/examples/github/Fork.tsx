import Image from 'next/image';
import { GradientSurface } from '../GradientSurface';

export function Fork() {
  return (
    <GradientSurface centered>
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
