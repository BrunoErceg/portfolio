import { useScroll, useTransform, motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

function LuxGymShowcase() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  });
  const xLeft = useTransform(scrollYProgress, [0, 0.5, 1], ['50%', '15%', '5%']);
  const xRight = useTransform(scrollYProgress, [0, 0.5, 1], ['-50%', '-15%', '-5%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  return (
    <div className="relative">
      <div className="relative z-20 mx-auto h-120 w-fit overflow-hidden">
        <Image
          src="/images/luxgym.png"
          alt="lux gym"
          width={350}
          height={350}
          className="h-auto w-auto"
        />
        <div className="from-background via-background/50 absolute bottom-0 left-0 h-30 w-full bg-linear-to-t to-transparent" />
      </div>

      <motion.p
        ref={targetRef}
        style={{ x: xLeft, opacity }}
        className="absolute top-1/2 right-1/2 mr-[20%] bg-linear-to-t from-blue-100 to-blue-50 bg-clip-text text-9xl font-semibold text-transparent"
      >
        LUX
      </motion.p>
      <motion.p
        style={{ x: xRight, opacity }}
        className="absolute top-1/2 left-1/2 ml-[20%] bg-linear-to-t from-blue-100 to-blue-50 bg-clip-text text-9xl font-semibold text-transparent"
      >
        Gym
      </motion.p>
    </div>
  );
}

export default LuxGymShowcase;
