// React
import { useRef, useState } from "react";

// Images
import PlusIcon from "@images/plus.svg";

// UI comonents
import Button from "@ui/Button";
import { AnimatePresence, motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

function HooksEx() {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [count, setCount] = useState(0);
  const firstDigit = count % 10;
  const secondDigit = Math.floor((count / 10) % 10);
  const thirdDigit = Math.floor((count / 100) % 10);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div className="mb-5 flex items-center justify-between rounded-full bg-linear-to-br from-blue-300 to-blue-400 px-3 py-4 md:p-6">
      <Button variant="icon" onClick={decrement}>
        <FontAwesomeIcon icon={faMinus} />
      </Button>

      <div className="translate-y-[3px]">
        {/* Second Digit */}
        <AnimatePresence mode="popLayout">
          {count > 99 && (
            <motion.div
              layout
              initial={{ opacity: 0, x: 0, y: 10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, x: -10, y: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="relative inline-block h-[36px] overflow-hidden"
            >
              <div
                className="transition-transform duration-500"
                style={{
                  transform: `translateY(-${thirdDigit * 36}px)`,
                  transition: "transform 0.3s easeInOut",
                }}
              >
                {numbers.map((number, i) => {
                  return (
                    <p className="text-center text-3xl font-bold text-white">
                      {number}
                    </p>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Second Digit */}
        <AnimatePresence mode="popLayout">
          {count > 9 && (
            <motion.div
              layout
              initial={{ opacity: 0, x: 0, y: 10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, x: -10, y: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="relative inline-block h-[36px] overflow-hidden"
            >
              <div
                className="transition-transform duration-500"
                style={{
                  transform: `translateY(-${secondDigit * 36}px)`,
                  transition: "transform 0.3s easeInOut",
                }}
              >
                {numbers.map((number, i) => {
                  return (
                    <p className="text-center text-3xl font-bold text-white">
                      {number}
                    </p>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        {/* First Digit */}
        <motion.div
          layout
          className="relative inline-block h-[36px] overflow-hidden"
        >
          <div
            style={{
              transform: `translateY(-${firstDigit * 36}px)`,
              transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            {numbers.map((number, i) => {
              return (
                <p className="text-center text-3xl font-bold text-white">
                  {number}
                </p>
              );
            })}
          </div>
        </motion.div>
      </div>
      <Button variant="icon" onClick={increment}>
        <FontAwesomeIcon icon={faPlus} />
      </Button>
    </div>
  );
}

export default HooksEx;
