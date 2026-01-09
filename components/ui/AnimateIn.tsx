import { cn } from '@/utils/cn';
import { HTMLMotionProps, motion, stagger, Variants } from 'framer-motion';

type Direction = 'bottom' | 'left' | 'right' | 'top' | 'none';
type AmountOption = keyof typeof AMOUNT_VALUES | number;
type StaggerSpeed = keyof typeof STAGGER_VALUES | number;

type BaseProps = HTMLMotionProps<'div'> & {
  delay?: number;
  duration?: number;
  amount?: AmountOption;
  className?: string;
  children: React.ReactNode;
};
type WordsProps = {
  delay?: number;
  from?: Direction;
  stagger?: StaggerSpeed;
  amount?: AmountOption;
  duration?: number;
  children: string;
};

const STAGGER_VALUES = {
  slow: 0.4,
  medium: 0.2,
  fast: 0.1,
} as const;

const AMOUNT_VALUES = {
  full: 0.9,
  half: 0.5,
  quarter: 0.25,
  some: 0.1,
  any: 0,
  mostly: 0.75,
} as const;

const ENDING_VALUES = {
  opacity: 1,
  filter: 'blur(0px)',
  x: 0,
  y: 0,
} as const;

const DIRECTIONS = {
  bottom: { x: 0, y: 10 },
  left: { x: -10, y: 0 },
  right: { x: 10, y: 0 },
  top: { x: 0, y: -10 },
  none: { x: 0, y: 0 },
} as const;

const EASE_VALUE = [0.16, 1, 0.3, 1] as const;

const getAmountValue = (amount: AmountOption): number =>
  typeof amount === 'number' ? amount : AMOUNT_VALUES[amount];

const getStaggerValue = (stagger: StaggerSpeed): number =>
  typeof stagger === 'number' ? stagger : STAGGER_VALUES[stagger];

const getStartingValues = (from: Direction) => ({
  opacity: 0,
  filter: 'blur(2px)',
  ...DIRECTIONS[from],
});

const getContainerVariants = (
  staggerValue: StaggerSpeed,
  delay: number,
  duration: number,
): Variants => {
  return {
    visible: {
      opacity: 1,
      transition: {
        type: 'tween',
        delay: delay,
        delayChildren: delay,
        duration: duration,
        ease: EASE_VALUE,
        staggerChildren: getStaggerValue(staggerValue),
      },
    },
  };
};

function Container({
  delay = 0,
  duration = 0.3,
  amount = 'quarter',
  stagger = 'medium',
  className,
  children,
  ...props
}: BaseProps & { stagger?: StaggerSpeed }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: getAmountValue(amount) }}
      variants={getContainerVariants(stagger, delay, duration)}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

function TextContainer({
  delay = 0,
  duration = 0.3,
  amount = 'quarter',
  stagger = 'fast',
  className,
  children,
  ...props
}: BaseProps & { stagger?: StaggerSpeed }) {
  return (
    <motion.span
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: getAmountValue(amount) }}
      variants={getContainerVariants(stagger, delay, duration)}
      className={cn('inline-block', className)}
      {...props}
    >
      {children}
    </motion.span>
  );
}

function Item({
  from = 'bottom',
  duration = 0.7,
  delay,
  className,
  children,
  ...props
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
    <motion.div className={className} variants={variants} {...props}>
      {children}
    </motion.div>
  );
}

function Individual({
  from = 'bottom',
  delay = 0,
  duration = 0.7,
  amount = 'quarter',
  children,
  ...props
}: BaseProps & { from?: Direction }) {
  return (
    <motion.div
      initial={getStartingValues(from)}
      whileInView={{
        ...ENDING_VALUES,
        transition: { type: 'tween', duration: duration, ease: EASE_VALUE, delay: delay },
      }}
      viewport={{ once: true, amount: getAmountValue(amount) }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

function Words({ from = 'bottom', stagger = 'fast', duration = 0.7, children }: WordsProps) {
  const wordVariants: Variants = {
    hidden: getStartingValues(from),
    visible: {
      ...ENDING_VALUES,
      transition: { type: 'tween', duration: duration, ease: EASE_VALUE },
    },
  };
  const words = children.split(' ');
  return (
    <motion.span variants={getContainerVariants(stagger, 0, duration)} className="inline-block">
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
  TextContainer,
  Item,
  Individual,
  Words,
};

export { AnimateIn };
