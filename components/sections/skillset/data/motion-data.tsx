import { PresenceAnimation, Gestures, Loop, StaggeredAnimation } from '../examples/motion';
import { SkillItem } from '../types';

export const MotionSkills: SkillItem[] = [
  {
    title: 'Motion',
    description:
      'Suvremena React biblioteka za animaciju koja omogućuje deklarativne pokrete i glatke prijelaze. Koristi gesture podršku za interakcije.',
    type: 'title',
  },
  {
    title: 'AnimatePresence',
    description: 'Omogući glatke ulazne i izlazne animacije za elemente koji nestaju.',
    example: <PresenceAnimation />,
    type: 'example',
  },
  {
    title: 'Variants',
    description: 'Definiraj sva animacijska stanja u jednom objektu za pregledniju logiku.',

    type: 'example',
  },
  {
    title: 'Stagger Effects',
    description: 'Stvori kaskadne sekvence pokreta među djecom elementa.',
    example: <StaggeredAnimation />,
    type: 'example',
  },

  {
    title: 'Transitions',
    description: 'Kontroliraj trajanje, olakšavanje i odgodu za precizan ritam svakog pokreta.',
    type: 'example',
  },
  {
    title: 'Gesture Props',
    description: 'Poveži interakcije poput prelaska i klika s automatskim animacijama.',
    example: <Gestures />,
    type: 'example',
  },
  {
    title: 'Infinite Loops',
    description: 'Stvori beskonačne animacije pomoću repeat i yoyo svojstava u prijelazima.',
    example: <Loop />,
    type: 'example',
  },

  {
    title: 'Keyframes',
    description: 'Definiraj složene, cikličke sekvence pokreta kroz niz vrijednosti koraka.',

    type: 'example',
  },
];
