import { motion } from "framer-motion";
function GestureEx() {
  return (
    <div className="mb-5 flex justify-center space-y-2 overflow-hidden rounded-2xl bg-linear-to-tl from-blue-300 to-blue-400 p-10 text-white">
      <motion.div
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        dragElastic={0.3} // Controls springiness
        dragTransition={{ bounceStiffness: 900, bounceDamping: 18 }}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        className="size-20 cursor-grab rounded-full bg-white"
      ></motion.div>
    </div>
  );
}

export default GestureEx;
