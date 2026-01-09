import { motion, Variants } from 'framer-motion';
import GradientSurface from '../shared/GradientSurface';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: [0, 1, 1, 0],
    y: [20, 0, 0, 0],
    transition: {
      duration: 2,
      times: [0, 0.2, 0.9, 1],
      repeat: Infinity,
      repeatType: 'loop',
      repeatDelay: 2,
    },
  },
};

/**
 * A component that demonstrates a staggered animation effect.
 * The animation is looped and delayed between each item.
 *
 * @returns A div element with a staggered animation effect.
 */

function StaggeredAnimation() {
  return (
    <GradientSurface centered>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="my-5 w-[80%] space-y-3.5 rounded-2xl bg-white/30 p-6 dark:bg-slate-800"
      >
        {[...Array(5)].map((_, index) => (
          <motion.div key={index} variants={itemVariants} className="flex">
            <div className="mr-2 size-4 shrink-0 rounded-full bg-blue-500 dark:bg-blue-700" />
            <span className="h-4 w-full rounded-full bg-blue-500 dark:bg-slate-700" />
          </motion.div>
        ))}
      </motion.div>
    </GradientSurface>
  );
}
export default StaggeredAnimation;
