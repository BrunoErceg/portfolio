import { motion } from "framer-motion";
import Image from "next/image";
import GradientSurface from "../shared/GradientSurface";

/**
 * A component that demonstrates a React component with a gradient surface
 * @returns A React component example.
 */
function Component() {
  const inputClasses =
    "text-md w-full rounded-xl bg-white/20 p-3 text-center text-white mt-2.5 focus:border-transparent focus:ring-0 focus:outline-none";

  return (
    <GradientSurface>
      <div className="overflow-hidden rounded-xl bg-white/20 p-3 text-center">
        <motion.div
          /**
           * Set the drag constraints to restrict the div to the parent element.
           * Set the drag transition to control the animation.
           * Set the drag elastic to control the springiness of the animation.
           */
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          dragElastic={0.3}
          dragTransition={{ bounceStiffness: 900, bounceDamping: 18 }}
          whileHover={{ scale: 1 }}
          whileTap={{ scale: 0.9 }}
          className="mx-auto h-fit w-fit cursor-grab rounded-2xl p-2"
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
      <input
        className={inputClasses}
        defaultValue={"Edit the description here"}
      />
      <input className={inputClasses} defaultValue={"Edit title here"} />
    </GradientSurface>
  );
}

export default Component;
