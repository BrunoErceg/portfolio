import ResponsiveGrid from "../examples/tailwind/ResponsiveGrid";
import TailwindState from "../examples/tailwind/TailwindState";
import Typography from "../examples/tailwind/Typography";
import Grid from "../examples/tailwind/Grid";

type SkillItem = {
  title: string;
  description: string;
  example?: React.ReactNode;
  type: "title" | "example"; // for Card variant
};

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
    example: <ResponsiveGrid />,
    type: "example",
  },
  {
    title: "State Varijante",
    description:
      "Stilovi za hover, focus i active stanja olakšavaju interakciju.",
    example: <TailwindState />,
    type: "example",
  },
  {
    title: "Flexbox i Grid",
    description: "Moderne i moćne tehnike za kreiranje kompleksnih layouta.",
    example: <Grid />,
    type: "example",
  },
  {
    title: "Typography",
    description:
      "Potpuna kontrola nad fontovima, veličinama i visinama teksta.",
    example: <Typography />,
    type: "example",
  },
  {
    title: "Customizacija",
    description:
      "Konfiguracijski file omogućava jednostavno prilagođavanje dizajna.",
    type: "example",
  },
];

export default TailwindSkills;
