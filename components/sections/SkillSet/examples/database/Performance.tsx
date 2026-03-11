import Image from 'next/image';
import { GradientSurface } from '../GradientSurface';

export function Performance() {
  return (
    <GradientSurface centered>
      <Image
        alt="Pull icon"
        src="/images/database.png"
        width={100}
        height={100}
        className="my-5 block size-24"
      />
    </GradientSurface>
  );
}
