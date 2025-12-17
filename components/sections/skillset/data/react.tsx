import TypeScript from "../examples/react/TypeScript";
import Hooks from "../examples/react/Hooks";
import Api from "../examples/react/Api";
import Component from "../examples/react/Component";

type SkillItem = {
  title: string;
  description: string;
  example?: React.ReactNode;
  type: "title" | "example"; // for Card variant
};

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
    example: <TypeScript />,
    type: "example",
  },
  {
    title: "React Hooks",
    description:
      "Upravljaj stanjem i životnim ciklusom funkcionalnih komponenti.",
    example: <Hooks />,
    type: "example",
  },
  {
    title: "Data Fetching Api",
    description: "Komuniciraj s vanjskim servisima i backend sustavima.",
    example: <Api />,
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
    example: <Component />,
    type: "example",
  },
];

export default reactSkills;
