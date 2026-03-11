import Image from 'next/image';
import { GradientSurface } from '../GradientSurface';

export function RelationalDb() {
  return (
    <GradientSurface centered>
      <Image
        alt="fork icon"
        src="/images/db-relational.png"
        width={100}
        height={100}
        className="my-5 block size-24"
      />
    </GradientSurface>
  );
}
