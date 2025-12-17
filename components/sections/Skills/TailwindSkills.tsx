// Animation
import { motion } from "framer-motion";
import getAnimateInProps from "@/utils/animations";

// Components
import Card from "./Card";
import ResponsiveEx from "./examples/ResponsiveEx";
import TailwindStateEx from "./examples/TailwindStateEx";
import TypographyEx from "./examples/TypographyEx";

// Type definitions for skill items
type SkillItem = {
  title: string;
  description: string;
  example?: React.ReactNode;
  type: "title" | "example"; // for Card variant
};

function TailwindSkills() {
  // Define the skills related to Tailwind
  const TailwindSkills: SkillItem[] = [
    {
      title: "Tailwind CSS",
      description:
        "Tailwind CSS je moderni framework koji omogućava brzi razvoj suvremenih korisničkih sučelja kroz utility classe.",
      type: "title",
    },
    {
      title: "Responsive Dizajn",
      description:
        "Jednostavno kreiraš prilagodljive layoute za mobilne i desktop uređaje.",
      example: <ResponsiveEx />,
      type: "example",
    },
    {
      title: "State Varijante",
      description:
        "Stilovi za hover, focus i active stanja olakšavaju interakciju.",
      example: <TailwindStateEx />,
      type: "example",
    },
    {
      title: "Flexbox i Grid",
      description: "Moderne i moćne tehnike za kreiranje kompleksnih layouta.",

      type: "example",
    },
    {
      title: "Typography",
      description:
        "Potpuna kontrola nad fontovima, veličinama i visinama teksta.",
      example: <TypographyEx />,
      type: "example",
    },
    {
      title: "Customizacija",
      description:
        "Konfiguracijski file omogućava jednostavno prilagođavanje dizajna.",
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
      {TailwindSkills.map(({ title, description, example, type }, index) => (
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

export default TailwindSkills;
