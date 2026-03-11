import { Performance, RelationalDb } from '../examples/database';
import { SkillItem } from '../types';

export const DatabaseSkills: SkillItem[] = [
  {
    title: 'Database',
    description:
      'Projektiranje i upravljanje relacijskim bazama podataka koristeći PostgreSQL i Prisma ORM za siguran rad s podacima.',
    type: 'title',
  },

  {
    title: 'Database Transactions',
    description:
      'Osiguravanje integriteta podataka izvršavanjem višestrukih povezanih operacija kao jedne cjeline.',
    type: 'example',
  },
  {
    title: 'Type-Safe Queries',
    description:
      'Automatsko generiranje TypeScript tipova iz sheme za eliminaciju runtime grešaka.',
    type: 'example',
  },

  {
    title: 'Schema Migrations',
    description:
      'Verziranje i upravljanje promjenama baze podataka bez gubitka produkcijskih podataka.',
    type: 'example',
  },
  {
    title: 'Relational Modeling',
    description: 'Arhitektura složenih relacija uz strogu referencijalnu važnost.',
    example: <RelationalDb />,
    type: 'example',
  },
  {
    title: 'Performance Optimization',
    description:
      'Optimizacija upita kroz selektivni dohvat polja i efikasno indeksiranje podataka.',
    example: <Performance />,
    type: 'example',
  },
  {
    title: 'Connection Pooling',
    description: 'Efikasno upravljanje resursima baze u serverless okruženjima poput Vercela.',
    type: 'example',
  },
];
