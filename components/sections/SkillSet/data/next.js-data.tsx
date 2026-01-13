import { ImageOptimization, Routing, WeatherApi } from '../examples/next.js/index';
import { SkillItem } from '../types.js';

export const NextSkills: SkillItem[] = [
  {
    title: 'Next.js',
    description:
      'Next.js je React framework koji omogućuje brzu izgradnju web aplikacija sa server-side rendering i automatskim rutingom.',
    type: 'title',
  },
  {
    title: 'Image Optimization',
    description: 'Automatska optimizacija slika za bolje performanse.',
    example: <ImageOptimization />,
    type: 'example',
  },
  {
    title: 'Server-Side Rendering',
    description: 'Renderiranje stranica na serveru prije slanja klijentu.',
    type: 'example',
  },
  {
    title: 'File-Based Routing',
    description: 'Automatsko ruting prema strukturi direktorija projekta.',
    example: <Routing />,
    type: 'example',
  },

  {
    title: 'Server-Side Data Fetching',
    description:
      'Server-side data fetching poboljšava performanse i SEO. Podaci se dohvaćaju prije renderiranja stranice.',
    example: <WeatherApi />,
    type: 'example',
  },
  {
    title: 'API Routes',
    description: 'Kreiranje backend endpointova unutar Next.js aplikacije.',

    type: 'example',
  },
];
