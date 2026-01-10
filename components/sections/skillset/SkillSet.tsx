import { useState } from 'react';
import { motion } from 'framer-motion';
import { ReactSkills, GitHubSkills, MotionSkills, NextSkills, TailwindSkills } from './data/index';

// Components
import Tag from '@ui/Tag';
import TechSkills from './TechSkills';
import { AnimateIn } from '@brunoerceg/animate-in';
import { cn } from '@/utils/cn';

const TECH_STACK = [
  { name: 'React', data: ReactSkills },
  { name: 'Next.js', data: NextSkills },
  { name: 'Tailwind', data: TailwindSkills },
  { name: 'Motion', data: MotionSkills },
  { name: 'GitHub', data: GitHubSkills },
] as const;

type TechNames = (typeof TECH_STACK)[number]['name'];
type TechData = (typeof TECH_STACK)[number]['data'];

/**
 * A component that displays a list of tech stacks and their respective skills.
 * It renders a navigation bar with tabs for each tech stack and a grid of skills for the active tech stack.
 * @returns A React component that displays the tech stack navigation and skills grid.
 */
function SkillSet() {
  /**
   * The state of the currently selected tech stack.
   * It is used to determine which data to display in the skills grid.
   */
  const [currentTech, setCurrentTech] = useState<TechNames>(TECH_STACK[0].name);

  /**
   * The data of the currently selected tech stack.
   * It is used to render the skills grid.
   */
  const activeData: TechData = TECH_STACK.find(({ name }) => name === currentTech)?.data || [];

  return (
    <section className="mb-15 md:mb-30">
      {/* 1. Navigation bar with tabs for each tech stack */}
      <AnimateIn.Container
        amount="any"
        stagger="fast"
        delay={0.5}
        className="my-5 flex flex-wrap justify-center gap-3"
      >
        <AnimateIn.Item className="grid grid-cols-6 grid-rows-2 gap-2 md:grid-cols-10 md:grid-rows-1">
          {TECH_STACK.map(({ name }, index) => (
            <Tag
              key={index}
              variant="base"
              onClick={() => setCurrentTech(name)}
              text={name}
              className={cn('col-span-2', index === 3 && 'col-start-2 md:col-start-auto')}
              state={currentTech === name ? 'selected' : 'default'}
            />
          ))}
        </AnimateIn.Item>

        {/* 2. Skills grid for the active tech stack */}
        <AnimateIn.Item>
          <motion.div
            key={currentTech}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          >
            <TechSkills techSkills={activeData} />
          </motion.div>
        </AnimateIn.Item>
      </AnimateIn.Container>
    </section>
  );
}
export default SkillSet;
