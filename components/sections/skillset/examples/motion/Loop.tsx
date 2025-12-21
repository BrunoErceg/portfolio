import Image from "next/image";
import HeartIcon from "@images/heart.svg";
import { motion } from "framer-motion";

/**
 * A component that demonstrates infinite animation loops
 * using the `repeat` and `repeatType` properties in Framer Motion.
 *
 * @returns A div element with an animated heart icon.
 */

function Loop() {
  return (
    <div className="mb-5 flex justify-center space-y-2 overflow-hidden rounded-2xl bg-linear-to-tl from-blue-300 to-blue-400 p-9 text-white">
      {/* An animated heart icon that loops indefinitely */}
      <motion.div
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        dragElastic={0.3} // Controls springiness
        dragTransition={{ bounceStiffness: 900, bounceDamping: 18 }}
        initial={{ scale: 1 }}
        animate={{ scale: 1.2 }}
        transition={{
          repeat: Infinity, // Repeat the animation indefinitely
          duration: 0.5, // Animation duration in seconds
          type: "spring", // Animation type
          repeatType: "reverse", // Animation repeat type
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
    </div>
  );
}

export default Loop;
