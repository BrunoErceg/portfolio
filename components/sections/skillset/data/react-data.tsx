import { Component, Counter, WeatherApi, TypeScript } from '../examples/react';
import { SkillItem } from '../types';

const reactSkills: SkillItem[] = [
  {
    title: 'React',
    description:
      'React je JavaScript biblioteka za izgradnju korisničkih sučelja. Omogućuje kreiranje interaktivnih komponenti koje se ažuriraju.',
    type: 'title',
  },
  {
    title: 'TypeScript',
    description: 'Poboljšaj kvalitetu koda sa statičkim tipovima.',
    example: <TypeScript />,
    type: 'example',
  },
  {
    title: 'React Hooks',
    description: 'Upravljaj stanjem i životnim ciklusom funkcionalnih komponenti.',
    example: <Counter />,
    type: 'example',
  },
  {
    title: 'Data Fetching Api',
    description: 'Komuniciraj s vanjskim servisima i backend sustavima.',
    example: <WeatherApi />,
    type: 'example',
  },
  {
    title: 'Memoization',
    description: 'useMemo, useCallback, React.memo za optimizaciju performansi.',
    type: 'example',
  },
  {
    title: 'Context API',
    description: 'useState, useEffect, useContext, custom hooks',
    type: 'example',
  },
  {
    title: 'Custom Components',
    description: 'Prilagođene i ponovno upotrebljive UI komponente.',
    example: <Component />,
    type: 'example',
  },
];

export default reactSkills;
