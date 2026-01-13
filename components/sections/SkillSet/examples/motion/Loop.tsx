import Image from 'next/image';
import HeartIcon from '@images/heart.svg';
import { motion } from 'framer-motion';
import { GradientSurface } from '../GradientSurface';

export function Loop() {
  return (
    <GradientSurface className="p-10" centered>
      <motion.div
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        dragElastic={0.3}
        dragTransition={{ bounceStiffness: 900, bounceDamping: 18 }}
        initial={{ scale: 1 }}
        animate={{ scale: 1.2 }}
        transition={{
          repeat: Infinity,
          duration: 0.5,
          type: 'spring',
          repeatType: 'reverse',
        }}
        className="h-20 w-20 cursor-grab"
      >
        <Image
          width={80}
          height={80}
          src={HeartIcon.src}
          alt="Default image icon"
          className="pointer-events-none mx-auto opacity-60"
        />
      </motion.div>
    </GradientSurface>
  );
}
