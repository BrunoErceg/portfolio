import { motion } from "framer-motion";

/**
 * A component that demonstrates a staggered animation effect.
 * The animation is looped and delayed between each item.
 *
 * @returns A div element with a staggered animation effect.
 */

function StaggeredAnimation() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: [0, 1, 1, 0],
      y: [20, 0, 0, 0],
      transition: {
        duration: 2,
        times: [0, 0.2, 0.9, 1],
        repeat: Infinity,
        repeatType: "loop" as const,
        repeatDelay: 2,
      },
    },
  };

  return (
    <div className="mb-5 flex items-center justify-center space-y-2 rounded-2xl bg-linear-to-tl from-blue-300 to-blue-400 p-6 text-white">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-[80%] space-y-3.5 rounded-2xl bg-white/20 p-6"
      >
        {Array.from({ length: 5 }).map((_, index) => (
          <motion.div key={index} variants={itemVariants} className="flex">
            <div className="mr-2 size-4 shrink-0 rounded-full bg-blue-500" />
            <span className="h-4 w-full rounded-full bg-blue-400" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
export default StaggeredAnimation;
