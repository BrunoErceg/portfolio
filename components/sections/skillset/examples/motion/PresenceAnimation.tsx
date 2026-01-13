import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { GradientSurface } from '../GradientSurface';

export function PresenceAnimation() {
  const [cards, setCards] = useState([{ id: crypto.randomUUID() }, { id: crypto.randomUUID() }]);
  const addCard = () => {
    if (cards.length < 3) {
      setCards((cards) => [...cards, { id: crypto.randomUUID() }]);
    }
  };

  const deleteCard = (id: string) => {
    setCards((cards) => cards.filter((card) => card.id !== id));
  };

  return (
    <LayoutGroup>
      <GradientSurface className="flex h-70 flex-col items-center space-y-3">
        <AnimatePresence mode="popLayout">
          {cards.map((card) => (
            <CardDummy key={card.id} deleteCard={() => deleteCard(card.id)} />
          ))}
        </AnimatePresence>

        <motion.button
          layout
          whileTap={
            cards.length >= 3
              ? {
                  x: [-3, 3, -3, 3, 0],
                  transition: { duration: 0.5 },
                }
              : {}
          }
          onClick={addCard}
          className="mx-auto size-8 cursor-pointer rounded-xl bg-white/30 text-white dark:bg-linear-to-br dark:from-blue-800 dark:to-blue-900"
        >
          <FontAwesomeIcon icon={faPlus} />
        </motion.button>
      </GradientSurface>
    </LayoutGroup>
  );
}

const CardDummy = ({ deleteCard }: { deleteCard: () => void }) => {
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ x: 0, y: 0, opacity: 1 }}
      exit={{ x: 20, opacity: 0 }}
      layout
      className="flex w-full items-center rounded-xl bg-white/30 p-4 dark:bg-slate-800"
    >
      <div className="mr-3 h-5 w-full rounded-full bg-blue-500 dark:bg-slate-700" />
      <button
        onClick={deleteCard}
        className="cursor-pointer rounded-md bg-blue-500 px-1.5 py-1 text-sm dark:bg-slate-700"
      >
        <FontAwesomeIcon icon={faTrash} className="text-blue-100" />
      </button>
    </motion.div>
  );
};
