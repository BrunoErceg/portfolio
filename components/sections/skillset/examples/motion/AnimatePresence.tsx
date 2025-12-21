import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

/**
 * A component that demonstrates the use of AnimatePresence.
 * It displays a list of cards that can be added or removed.
 * The cards are animated in and out of the list.
 * The user can add or remove cards by clicking on the
 * corresponding buttons.
 *
 * @returns A React component that displays the list of cards.
 */
function PresenceAnimation() {
  /**
   * The state of the cards in the list.
   * The cards are represented as an array of objects
   * with an id property.
   */
  const [cards, setCards] = useState([
    { id: crypto.randomUUID() },
    { id: crypto.randomUUID() },
  ]);

  /**
   * Adds a new card to the list.
   */
  const addCard = () => {
    if (cards.length < 3) {
      setCards((cards) => [...cards, { id: crypto.randomUUID() }]);
    }
  };

  /**
   * Removes a card from the list with the given id.
   * @param {string} id The id of the card to remove.
   */
  const deleteCard = (id: string) => {
    setCards((cards) => cards.filter((card) => card.id !== id));
  };

  return (
    <LayoutGroup>
      <motion.div
        layout
        className="mb-5 flex h-70 flex-col space-y-3 rounded-2xl bg-linear-to-br from-blue-300 to-blue-400 px-10 py-5 text-white"
      >
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
          className="mx-auto size-8 cursor-pointer rounded-xl bg-linear-to-br from-blue-400 to-blue-500"
        >
          <FontAwesomeIcon icon={faPlus} />
        </motion.button>
      </motion.div>
    </LayoutGroup>
  );
}

type CardDummyProps = {
  deleteCard: () => void;
};

/**
 * A dummy card component that demonstrates the use of React Hooks
 * and Framer Motion together.
 * It displays a card with a delete button that removes the card
 * from the list.
 *
 * @returns A React component that displays the card.
 */
function CardDummy({ deleteCard }: CardDummyProps) {
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ x: 0, y: 0, opacity: 1 }}
      exit={{ x: 20, opacity: 0 }}
      layout
      className="flex w-full items-center rounded-xl bg-white/20 p-4"
    >
      <div className="mr-3 h-5 w-full rounded-full bg-blue-400" />
      <button
        onClick={deleteCard}
        className="cursor-pointer rounded-md bg-linear-to-br from-blue-400 to-blue-500 px-1 py-0.5 text-sm"
      >
        <FontAwesomeIcon icon={faTrash} className="text-blue-100" />
      </button>
    </motion.div>
  );
}
export default PresenceAnimation;
