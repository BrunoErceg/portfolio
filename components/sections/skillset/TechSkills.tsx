import SkillCard from './SkillCard';
import { SkillItem } from './types';

type SkillDataProps = {
  techSkills: SkillItem[];
};

/**
 * A component that renders a list of tech skills as a grid of cards.
 * Each card displays the title, description, and an optional example component for the skill.
 * @param {{ techSkills: SkillItem[] }} props - The props object containing the list of tech skills.
 * @returns A React component that renders the tech skills grid.
 */
function TechSkills({ techSkills }: SkillDataProps) {
  return (
    <div className="mt-5 w-full space-y-3 md:mt-10 lg:mt-15 lg:columns-3 lg:gap-3 lg:space-y-4 [@media(max-width:1300px)]:columns-2 [@media(max-width:770px)]:columns-1">
      {/* Render each skill item as a Card */}
      {techSkills.map(({ title, description, example, type }) => (
        <SkillCard
          // The variant prop determines the color scheme of the card
          variant={type}
          // The key prop is used to uniquely identify each card
          key={title}
          // The title and description props are used to display the title and description of the skill
          title={title}
          description={description}
          // The example prop is an optional prop that can be used to display an example component for the skill
          example={example}
        />
      ))}
    </div>
  );
}
export default TechSkills;
