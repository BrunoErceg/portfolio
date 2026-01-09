import { motion } from 'framer-motion';
import Image from 'next/image';
import GradientSurface from '../shared/GradientSurface';

/**
 * A component that demonstrates image optimization techniques in Next.js.
 * It displays a gradient surface with a motion-enabled image.
 * The image is optimized for web and mobile devices.
 *
 * @returns A React component with a gradient surface and a motion-enabled image.
 */
function ImageOptimization() {
  return (
    <GradientSurface centered>
      <motion.div
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        dragElastic={0.3}
        dragTransition={{ bounceStiffness: 900, bounceDamping: 18 }}
        whileHover={{ scale: 1 }}
        whileTap={{ scale: 0.9 }}
        className="mx-auto h-fit w-fit cursor-grab rounded-full p-2"
      >
        <Image
          width={120}
          height={120}
          src="/images/default-image.svg"
          alt="Default image icon"
          className="pointer-events-none mx-auto"
        />
      </motion.div>
    </GradientSurface>
  );
}
export default ImageOptimization;
