import { v4 as uuidv4 } from "uuid";
export const TECH_STACK_DATA = [
  {
    id: uuidv4(),
    name: "React",
    description:
      "React je JavaScript biblioteka za izgradnju korisničkih interfejsa komponentama.",
    logo: "/images/react.svg",
    bgFrom: "from-blue-400",
    bgTo: "to-blue-600",
  },

  {
    id: uuidv4(),
    name: "Tailwind",
    description:
      "Tailwind je utility-first CSS framework za brzu izgradnju modernih korisničkih interfejsa.",
    logo: "/images/tailwind-icon.svg",
    bgFrom: "from-teal-500",
    bgTo: "to-teal-700",
  },
  {
    id: uuidv4(),
    name: "Motion",
    description:
      "Motion je production-ready motion library za React komponente i animacije.",
    logo: "/images/motion-icon.svg",
    bgFrom: "from-slate-600",
    bgTo: "to-slate-800",
  },
  {
    id: uuidv4(),
    name: "Github",
    description:
      "GitHub je sistem za kontrolu verzija koda koji omogućuje praćenje promjena i timski rad.",
    logo: "/images/github-icon.svg",
    bgFrom: "from-slate-500",
    bgTo: "to-slate-700",
  },
];
