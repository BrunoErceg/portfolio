import { cubicBezier, motion } from 'framer-motion';

const ROLLING_ANIMATION = {
  container: {
    hover: {
      transition: {
        staggerChildren: 0.01,
      },
    },
  },
  item: {
    rest: {
      y: 0,
    },
    hover: {
      y: '-100%',
      transition: {
        ease: cubicBezier(0.42, 0, 0.58, 1),
        duration: 0.3,
      },
    },
  },
};

function RollingText({ text }: { text: string }) {
  const splitText = text?.split('');

  return (
    <motion.span variants={ROLLING_ANIMATION.container} className="inline-flex overflow-hidden">
      {splitText?.map((char, index) => (
        <motion.span
          variants={ROLLING_ANIMATION.item}
          key={index}
          className="relative inline-block will-change-transform select-none"
        >
          <span className="select-none">{char === ' ' ? '\u00A0' : char}</span>
          <span className="absolute -bottom-full left-0 select-none">{char === ' ' ? '\u00A0' : char}</span>
        </motion.span>
      ))}
    </motion.span>
  );
}

export default RollingText;
