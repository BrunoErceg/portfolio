import Gesture from "../examples/motion/Guestures";
import Loop from "../examples/motion/Loop";

type SkillItem = {
  title: string;
  description: string;
  example?: React.ReactNode;
  type: "title" | "example"; // for Card variant
};

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
    example: <Loop />,
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
    example: <Gesture />,
    type: "example",
  },
];

export default MotionSkills;
