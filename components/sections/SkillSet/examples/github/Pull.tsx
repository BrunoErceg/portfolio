import Image from 'next/image';
import { GradientSurface } from '../GradientSurface';

export function Pull() {
  return (
    <GradientSurface centered>
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
