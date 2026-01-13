import { SkillCard } from './SkillCard';
import { SkillItem } from './types';

type SkillDataProps = {
  techSkills: SkillItem[];
};

export function TechSkills({ techSkills }: SkillDataProps) {
  return (
    <div className="columns-1 space-y-5 md:columns-2 lg:columns-3">
      {techSkills.map(({ title, description, example, type }) => (
        <SkillCard
          key={title}
          variant={type}
          title={title}
          description={description}
          example={example}
        />
      ))}
    </div>
  );
}
