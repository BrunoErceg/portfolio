import { motion } from 'framer-motion';
import { useState } from 'react';
import { GradientSurface } from '../GradientSurface';

export function Gestures() {
  const [buttonContent, setButtonContent] = useState('Drag Me 🤠');
  const handleDrag = () => {
    setButtonContent('Im dizzy 😵‍💫');
    setTimeout(() => setButtonContent('Again 🤠'), 2000);
  };
  return (
    <GradientSurface centered className="h-50 overflow-hidden">
      <motion.button
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        dragElastic={0.3}
        dragTransition={{ bounceStiffness: 900, bounceDamping: 18 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onDragEnd={handleDrag}
        className="flex h-13 w-40 cursor-grab items-center justify-center rounded-full bg-linear-to-br from-blue-500 to-blue-600 text-white dark:from-slate-700 dark:to-slate-900"
      >
        {buttonContent}
      </motion.button>
    </GradientSurface>
  );
}
