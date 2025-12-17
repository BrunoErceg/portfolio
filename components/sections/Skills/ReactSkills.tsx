// Animation
import { motion } from "framer-motion";
import getAnimateInProps from "@/utils/animations";

// Components
import TypeScriptEx from "./examples/TypeScriptEx";
import HooksEx from "./examples/HooksEx";
import ApiEx from "./examples/ApiEx";
import ComponentEx from "./examples/ComponentEx";
import Card from "./Card";

// Type definitions for skill items
type SkillItem = {
  title: string;
  description: string;
  example?: React.ReactNode;
  type: "title" | "example"; // for Card variant
};

function ReactSkills() {
  // Define the skills related to React
  const reactSkills: SkillItem[] = [
    {
      title: "React",
      description:
        "React je JavaScript biblioteka za izgradnju korisničkih sučelja. Omogućuje kreiranje interaktivnih komponenti koje se ažuriraju efikasno.",
      type: "title",
    },
    {
      title: "TypeScript",
      description: "Poboljšaj kvalitetu koda sa statičkim tipovima.",
      example: <TypeScriptEx />,
      type: "example",
    },
    {
      title: "React Hooks",
      description:
        "Upravljaj stanjem i životnim ciklusom funkcionalnih komponenti.",
      example: <HooksEx />,
      type: "example",
    },
    {
      title: "Data Fetching Api",
      description: "Komuniciraj s vanjskim servisima i backend sustavima.",
      example: <ApiEx />,
      type: "example",
    },
    {
      title: "Memoization",
      description:
        "useMemo, useCallback, React.memo za optimizaciju performansi.",
      type: "example",
    },
    {
      title: "Context API",
      description: "useState, useEffect, useContext, custom hooks",
      type: "example",
    },
    {
      title: "Custom Components",
      description: "Prilagođene i ponovno upotrebljive UI komponente.",
      example: <ComponentEx />,
      type: "example",
    },
  ];

  return (
    // Responsive Skills grid display with animation
    <motion.div
      {...getAnimateInProps("bottom", 0.1)}
      className="mt-5 w-full space-y-3 md:mt-10 lg:mt-15 lg:columns-3 lg:gap-3 lg:space-y-4 [@media(max-width:1300px)]:columns-2 [@media(max-width:770px)]:columns-1"
    >
      {/* Render each skill item as a Card */}
      {reactSkills.map(({ title, description, example, type }, index) => (
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

export default ReactSkills;
