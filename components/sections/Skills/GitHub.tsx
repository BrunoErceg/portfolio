// Animation
import { motion } from "framer-motion";
import getAnimateInProps from "@/utils/animations";

// Components
import Card from "./Card";
import ForkEx from "./examples/ForkEx";
import BranchesEx from "./examples/BranchesEx";
import CloneEx from "./examples/CloneEx";

// Type definitions for skill items
type SkillItem = {
  title: string;
  description: string;
  example?: React.ReactNode;
  type: "title" | "example"; // for Card variant
};

function GitHub() {
  // Define the skills related to Next
  const MotionSkills: SkillItem[] = [
    {
      title: "GitHub",
      description:
        "Platforma za verzioniranje koda koja koristi Git, omogućujući suradnju na projektima. Pomaže u praćenju promjena, upravljanju granama i zajedničkom rađenju putem pull requesta i code reviewa.",
      type: "title",
    },
    {
      title: "Forks",
      description:
        "Napravi vlastitu kopiju tuđeg repozitorija kako bi ga mogao slobodno mijenjati",
      example: <ForkEx />,
      type: "example",
    },

    {
      title: "Branches",
      description:
        "Izoliraj razvoj novih značajki od glavne stabilne grane koda (main)",
      example: <BranchesEx />,
      type: "example",
    },
    {
      title: "Pull Requests",
      description:
        "Pošalji svoje promjene autoru projekta s zahtjevom za uključivanjem koda",
      type: "example",
    },
    {
      title: "Merge",
      description:
        "Spoji promjene iz jedne grane u drugu, često kroz odobreni zahtjev",
      type: "example",
    },
    {
      title: "Push",
      description:
        "Pošalji svoje lokalne commit-ove na udaljeni repozitorij na GitHubu.",
      type: "example",
    },
    {
      title: "Clone",
      description:
        "Preuzmi cijeli repozitorij s udaljenog poslužitelja na svoje lokalno računalo.",
      example: <CloneEx />,
      type: "example",
    },
  ];

  return (
    // Responsive Skills grid display with animation
    <motion.div
      {...getAnimateInProps("bottom", 0.1)}
      className="mt-5 w-full space-y-3 md:mt-10 lg:mt-15 lg:columns-3 lg:gap-5 lg:space-y-6 [@media(max-width:1300px)]:columns-2 [@media(max-width:770px)]:columns-1"
    >
      {/* Render each skill item as a Card */}
      {MotionSkills.map(({ title, description, example, type }, index) => (
        <Card
          variant={type}
          key={title}
          title={title}
          description={description}
          example={example} // Optional example component
        />
      ))}
    </motion.div>
  );
}

export default GitHub;
