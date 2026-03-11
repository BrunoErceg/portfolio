import { useState } from 'react';
import { motion } from 'framer-motion';
import { AnimateIn } from '@brunoerceg/animate-in';
import {
  ReactSkills,
  DatabaseSkills,
  MotionSkills,
  NextSkills,
  TailwindSkills,
} from './data/index';
import { cn } from '@/utils/cn';
import { TechSkills } from './TechSkills';
import { Tag } from '@ui';

const TECH_STACK = [
  { name: 'Next.js', data: NextSkills },
  { name: 'React', data: ReactSkills },
  { name: 'Database', data: DatabaseSkills },
  { name: 'Tailwind', data: TailwindSkills },
  { name: 'Motion', data: MotionSkills },
] as const;

type TechNames = (typeof TECH_STACK)[number]['name'];
type TechData = (typeof TECH_STACK)[number]['data'];

export function SkillSet({ className }: { className?: string }) {
  const [currentTech, setCurrentTech] = useState<TechNames>(TECH_STACK[0].name);
  const activeData: TechData = TECH_STACK.find(({ name }) => name === currentTech)?.data || [];

  return (
    <section className={className}>
      <AnimateIn.Container
        amount="any"
        stagger="fast"
        delay={0.5}
        className="flex flex-col items-center gap-y-15"
      >
        <AnimateIn.Item className="grid w-fit grid-cols-6 grid-rows-2 gap-2 md:grid-cols-10 md:grid-rows-1">
          {TECH_STACK.map(({ name }, index) => (
            <Tag
              key={name}
              variant="base"
              onClick={() => setCurrentTech(name)}
              text={name}
              className={cn(
                'col-span-2 place-self-center',
                index === 3 && 'col-start-2 md:col-start-auto',
              )}
              state={currentTech === name ? 'selected' : 'default'}
            />
          ))}
        </AnimateIn.Item>

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
