import Image from 'next/image';
import { GradientSurface } from '../GradientSurface';

export function Merge() {
  return (
    <GradientSurface centered>
      <Image
        alt="Merge icon"
        src="/images/git-merge.svg"
        width={100}
        height={100}
        className="block size-24"
      />
    </GradientSurface>
  );
}
