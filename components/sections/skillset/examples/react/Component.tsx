import { motion } from "framer-motion";
import Image from "next/image";

function Component() {
  return (
    <div className="mb-5 space-y-2 rounded-2xl bg-linear-to-br from-blue-400 to-blue-300 p-6">
      <div className="overflow-hidden rounded-2xl bg-white/20 p-3 text-center">
        <motion.div
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          dragElastic={0.3} // Controls springiness
          dragTransition={{ bounceStiffness: 900, bounceDamping: 18 }}
          whileHover={{ scale: 1 }}
          whileTap={{ scale: 0.9 }}
          className="mx-auto h-fit w-fit cursor-grab rounded-full"
        >
          <Image
            width={150}
            height={150}
            src="/images/default-image.svg"
            alt="Default image icon"
            className="pointer-events-none mx-auto"
          />
        </motion.div>
      </div>
      <input
        className="text-md w-full rounded-2xl bg-white/20 p-3 text-center text-white focus:border-transparent focus:ring-0 focus:outline-none"
        defaultValue={"Edit the description here"}
      />
      <input
        className="text-md w-full rounded-2xl bg-white/20 p-3 text-center text-white focus:border-transparent focus:ring-0 focus:outline-none"
        defaultValue={"Edit Title"}
      />
    </div>
  );
}

export default Component;
