import Fork from "../examples/github/Fork";
import Branches from "../examples/github/Branches";
import Clone from "../examples/github/Clone";
type SkillItem = {
  title: string;
  description: string;
  example?: React.ReactNode;
  type: "title" | "example"; // for Card variant
};

const GitHubSkills: SkillItem[] = [
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
    example: <Fork />,
    type: "example",
  },

  {
    title: "Branches",
    description:
      "Izoliraj razvoj novih značajki od glavne stabilne grane koda (main)",
    example: <Branches />,
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
    example: <Clone />,
    type: "example",
  },
];

export default GitHubSkills;
