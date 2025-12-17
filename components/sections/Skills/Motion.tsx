// Animation
import { motion } from "framer-motion";
import getAnimateInProps from "@/utils/animations";

// Components
import Card from "./Card";
import LoopEx from "./examples/LoopEx";
import GestureEx from "./examples/GuesturesEx";

// Type definitions for skill items
type SkillItem = {
  title: string;
  description: string;
  example?: React.ReactNode;
  type: "title" | "example"; // for Card variant
};

function Motion() {
  // Define the skills related to Next
  const MotionSkills: SkillItem[] = [
    {
      title: "Framer Motion",
      description:
        "Suvremena React biblioteka za animaciju koja omogućuje deklarativne pokrete i glatke prijelaze. Koristi gesture podršku za interakcije i jednostavno upravljanje složenim UI animacijama direktno u komponentama.",
      type: "title",
    },
    {
      title: "Variants",
      description:
        "Definiraj sva animacijska stanja u jednom objektu za pregledniju logiku.",

      type: "example",
    },
    {
      title: "Transitions",
      description:
        "Kontroliraj trajanje, olakšavanje i odgodu za precizan ritam svakog pokreta.",
      type: "example",
    },
    {
      title: "AnimatePresence",
      description:
        "Omogući glatke ulazne i izlazne animacije za elemente koji nestaju.",
      type: "example",
    },

    {
      title: "Stagger Effects",
      description: "Stvori kaskadne sekvence pokreta među djecom elementa.",
      type: "example",
    },
    {
      title: "Infinite Loops",
      description:
        "Stvori beskonačne animacije pomoću repeat i yoyo svojstava u prijelazima.",
      example: <LoopEx />,
      type: "example",
    },
    {
      title: "Keyframes",
      description:
        "Definiraj složene, cikličke sekvence pokreta kroz niz vrijednosti koraka.",

      type: "example",
    },
    {
      title: "Gesture Props",
      description:
        "Poveži interakcije poput prelaska i klika s automatskim animacijama.",
      example: <GestureEx />,
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

export default Motion;
