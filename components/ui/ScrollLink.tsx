'use client';
import { motion } from 'framer-motion';
import { RollingText } from '@ui';

type NavLinkProps = {
  name: string;
  section: string;
};

const containerVariants = {
  rest: { scale: 1 },
  hover: {
    scale: 1,
    transition: { staggerChildren: 0.1 },
  },
};

export function ScrollLink({ name, section }: NavLinkProps) {
  const handleScroll = () => {
    const targetSection = document.getElementById(section);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <motion.button
      initial="rest"
      whileHover="hover"
      animate="rest"
      variants={containerVariants}
      onClick={handleScroll}
      aria-label={`Scroll to ${name}`}
      className="group flex cursor-pointer items-center transition-colors duration-200 hover:text-blue-500"
    >
      <RollingText text={name} />
    </motion.button>
  );
}
