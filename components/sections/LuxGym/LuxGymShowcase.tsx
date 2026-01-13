import { cn } from '@/utils/cn';
import { useScroll, useTransform, motion, MotionProps } from 'framer-motion';
import Image from 'next/image';
import { forwardRef, useRef } from 'react';

/**
 * Parallax showcase for LuxGym.
 * Animates "LUX" and "GYM" text based on scroll progress to create a floating depth effect.
 */
export function LuxGymShowcase() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  });
  const xRight = useTransform(scrollYProgress, [0, 0.5, 1], ['50%', '15%', '5%']);
  const xLeft = useTransform(scrollYProgress, [0, 0.5, 1], ['-50%', '-15%', '-5%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  return (
    <div className="relative">
      <div className="relative z-20 mx-auto h-120 w-fit overflow-hidden">
        <Image
          src="/images/luxgym.png"
          alt="lux gym"
          width={350}
          height={350}
          className="h-auto w-auto dark:opacity-70"
        />
        <div className="from-background via-background/50 absolute bottom-0 left-0 h-30 w-full bg-linear-to-t to-transparent" />
      </div>

      <FloatingText side="right" style={{ x: xRight, opacity }}>
        LUX
      </FloatingText>
      <FloatingText side="left" ref={targetRef} style={{ x: xLeft, opacity }}>
        GYM
      </FloatingText>
    </div>
  );
}

type FloatingTextProps = {
  side: 'left' | 'right';
  style: MotionProps['style'];
  children: React.ReactNode;
};

const FloatingText = forwardRef<HTMLParagraphElement, FloatingTextProps>(
  ({ side, style, children }, ref) => {
    return (
      <motion.p
        style={style}
        ref={ref}
        className={cn(
          'absolute top-1/2 hidden bg-linear-to-t from-blue-100 to-blue-50 bg-clip-text text-9xl font-semibold text-transparent md:block dark:from-slate-800 dark:to-slate-900',
          side === 'left' ? 'left-1/2 ml-[20%]' : 'right-1/2 mr-[20%]',
        )}
      >
        {children}
      </motion.p>
    );
  },
);
