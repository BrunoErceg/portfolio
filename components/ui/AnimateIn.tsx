import { cn } from '@/utils/cn';
import { motion, Variants } from 'framer-motion';

type Direction = 'bottom' | 'left' | 'right' | 'top' | 'none';
type StaggerSpeed = 'slow' | 'medium' | 'fast' | number;
type BaseProps = {
  delay?: number;
  duration?: number;
  amount?: number;
  className?: string;
  children: React.ReactNode;
};
type WordsProps = {
  delay?: number;
  from?: 'bottom' | 'left' | 'right' | 'top' | 'none';
  stagger?: 'slow' | 'medium' | 'fast' | number;
  amount?: number;
  duration?: number;
  children: string;
};

const STAGGER_VALUES: Record<string, number> = {
  slow: 0.4,
  medium: 0.2,
  fast: 0.1,
};

const EASE_VALUE = [0.16, 1, 0.3, 1] as const;

const getStartingValues = (from: 'bottom' | 'left' | 'right' | 'top' | 'none') => {
  const base = { opacity: 0, filter: 'blur(2px)' };
  switch (from) {
    case 'bottom':
      return { ...base, x: 0, y: 10 };
    case 'left':
      return { ...base, x: -10, y: 0 };
    case 'right':
      return { ...base, x: 10, y: 0 };
    case 'top':
      return { ...base, x: 0, y: -10 };
    default:
      return { ...base, x: 0, y: 0 };
  }
};

const ENDING_VALUES = {
  opacity: 1,
  filter: 'blur(0px)',
  x: 0,
  y: 0,
};

const getContainerVariants = (
  staggerValue: number | 'slow' | 'medium' | 'fast',
  delay: number,
  duration: number,
): Variants => {
  const staggerValues: Record<string, number> = {
    slow: 0.4,
    medium: 0.2,
    fast: 0.1,
  };
  return {
    visible: {
      opacity: 1,
      transition: {
        type: 'tween',
        delay: delay,
        delayChildren: delay,
        duration: duration,
        ease: EASE_VALUE,
        staggerChildren: staggerValues[staggerValue] || (staggerValue as number),
      },
    },
  };
};
function Container({
  delay = 0,
  duration = 0.3,
  amount = 0.3,
  stagger = 'medium',
  className,
  children,
}: BaseProps & { stagger?: StaggerSpeed }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: amount }}
      variants={getContainerVariants(stagger, delay, duration)}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

function Item({
  from = 'bottom',
  duration = 0.7,
  delay,
  className,
  children,
}: BaseProps & { from?: Direction }) {
  const variants: Variants = {
    hidden: getStartingValues(from),
    visible: {
      ...ENDING_VALUES,

      transition: {
        ...(delay !== undefined ? { delay } : {}),
        type: 'tween',
        duration: duration,
        ease: EASE_VALUE,
      },
    },
  };
  return (
    <motion.div className={className} variants={variants}>
      {children}
    </motion.div>
  );
}

function Individual({
  from = 'bottom',
  delay = 0,
  duration = 0.7,
  amount = 0.3,
  children,
}: BaseProps & { from?: Direction }) {
  return (
    <motion.div
      initial={getStartingValues(from)}
      whileInView={{
        ...ENDING_VALUES,
        transition: { type: 'tween', duration: duration, ease: EASE_VALUE, delay: delay },
      }}
      viewport={{ once: true, amount: amount }}
    >
      {children}
    </motion.div>
  );
}

function Words({
  from = 'bottom',
  delay = 0,
  stagger = 'fast',
  amount = 0.5,
  duration = 0.7,
  children,
}: WordsProps) {
  const wordVariants: Variants = {
    hidden: getStartingValues(from),
    visible: {
      ...ENDING_VALUES,
      transition: { type: 'tween', duration: duration, ease: EASE_VALUE },
    },
  };
  const words = children.split(' ');
  return (
    <motion.span
      variants={getContainerVariants(stagger, delay, duration)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: amount }}
      className="inline-block"
    >
      {words.map((word, index) => (
        <motion.span key={index} variants={wordVariants} className="inline-block">
          {word}&nbsp;
        </motion.span>
      ))}
    </motion.span>
  );
}

const AnimateIn = {
  Container,
  Item,
  Individual,
  Words,
};

export { AnimateIn };
