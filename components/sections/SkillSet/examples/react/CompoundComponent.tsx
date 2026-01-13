import { motion } from 'framer-motion';
import Image from 'next/image';
import { GradientSurface } from '../GradientSurface';

export function CompoundComponent() {
  const inputClasses =
    'text-md w-full rounded-xl bg-white/20 p-3 text-center text-white mt-2.5 focus:border-transparent focus:ring-0 focus:outline-none';

  return (
    <GradientSurface className="p-4">
      <div className="relative overflow-hidden rounded-xl bg-white/20 p-3 text-center">
        <motion.div
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          dragElastic={0.3}
          dragTransition={{ bounceStiffness: 900, bounceDamping: 18 }}
          whileHover={{ scale: 1 }}
          whileTap={{ scale: 0.9 }}
          className="relative mx-auto h-fit w-fit cursor-grab rounded-2xl p-2"
        >
          <Image
            width={120}
            height={120}
            src="/images/default-image.svg"
            alt="Default image icon"
            className="pointer-events-none mx-auto size-30"
          />
        </motion.div>
      </div>
      <input className={inputClasses} defaultValue={'Edit the description here'} />
      <input className={inputClasses} defaultValue={'Edit title here'} />
    </GradientSurface>
  );
}
