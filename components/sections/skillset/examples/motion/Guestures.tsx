import { motion } from "framer-motion";
import { useState } from "react";

/**
 * A component that demonstrates a gesture recognition animation effect.
 * The animation is looped and delayed between each item.
 *
 * @returns A div element with a gesture recognition animation effect.
 */

function Gesture() {
  const [buttonContent, setButtonContent] = useState("Drag Me 🤠");
  const handelDrag = () => {
    return () => {
      setButtonContent("Im dizzy 😵‍💫");
      setTimeout(() => setButtonContent("Again 🤠"), 2000);
    };
  };
  return (
    <div className="mb-5 flex h-50 items-center justify-center space-y-2 overflow-hidden rounded-2xl bg-linear-to-tl from-blue-300 to-blue-400 p-10 text-white">
      {/* This div element is used to create the gesture recognition animation effect */}
      <motion.button
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        dragElastic={0.3}
        dragTransition={{ bounceStiffness: 900, bounceDamping: 18 }}
        whileHover={{ scale: 1 }}
        whileTap={{ scale: 0.9 }}
        onDragEnd={handelDrag()}
        className="flex h-13 w-40 cursor-grab items-center justify-center rounded-full bg-linear-to-br from-blue-500 to-blue-400 text-white"
      >
        {buttonContent}
      </motion.button>
    </div>
  );
}

export default Gesture;
