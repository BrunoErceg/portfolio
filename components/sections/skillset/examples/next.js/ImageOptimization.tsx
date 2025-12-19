import { motion } from "framer-motion";
import Image from "next/image";

function ImageOptimization() {
  return (
    <div className="mb-5 space-y-2 rounded-2xl bg-linear-to-tl from-blue-300 to-blue-400 p-6 text-white">
      <motion.div
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        dragElastic={0.3} // Controls springiness
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
    </div>
  );
}

export default ImageOptimization;
