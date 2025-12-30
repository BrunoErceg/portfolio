import { Fork, Merge, Clone, Pull } from '../examples/github';
import { SkillItem } from '../types';

const GitHubSkills: SkillItem[] = [
  {
    title: 'GitHub',
    description:
      'Platforma za verziranje koda koja koristi Git, omogućujući suradnju na projektima. Pomaže u praćenju promjena, upravljanju granama.',
    type: 'title',
  },
  {
    title: 'Forks',
    description: 'Napravi vlastitu kopiju tuđeg repozitorija kako bi ga mogao slobodno mijenjati',
    example: <Fork />,
    type: 'example',
  },

  {
    title: 'Branches',
    description: 'Izoliraj razvoj novih značajki od glavne stabilne grane koda (main)',

    type: 'example',
  },
  {
    title: 'Pull Requests',
    description: 'Pošalji svoje promjene autoru projekta s zahtjevom za uključivanjem koda',
    example: <Pull />,
    type: 'example',
  },
  {
    title: 'Merge',
    description: 'Spoji promjene iz jedne grane u drugu, često kroz odobreni zahtjev',
    example: <Merge />,
    type: 'example',
  },
  {
    title: 'Push',
    description: 'Pošalji svoje lokalne commit-ove na udaljeni repozitorij na GitHubu.',
    type: 'example',
  },
  {
    title: 'Clone',
    description: 'Preuzmi cijeli repozitorij s udaljenog poslužitelja na svoje lokalno računalo.',
    example: <Clone />,
    type: 'example',
  },
];

export default GitHubSkills;
