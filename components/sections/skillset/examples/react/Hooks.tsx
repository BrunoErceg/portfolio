// React
import { ButtonHTMLAttributes, useState } from "react";
import Image from "next/image";

// UI components
import { AnimatePresence, motion } from "framer-motion";

function Hooks() {
  const [count, setCount] = useState(0);
  const digits = Math.abs(count).toString().split("").map(Number); // Create an array of all the digits form count
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div className="mb-5 flex items-center justify-between rounded-full bg-linear-to-br from-blue-300 to-blue-400 px-3 py-4 md:p-3">
      <Button variant="decrement" onClick={decrement} />

      <div className="translate-y-1.5">
        {/* Display minus if the count is negative*/}
        <AnimatePresence mode="popLayout">
          {count < 0 && (
            <motion.p
              layout
              initial={{ opacity: 0, x: 0, y: 10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, x: -10, y: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="inline-block -translate-y-2 text-center text-3xl font-bold text-white"
            >
              -
            </motion.p>
          )}
        </AnimatePresence>

        {/* Display all digits */}
        {digits.map((digit, index) => {
          return <RollingDigit key={index} digit={digit} />;
        })}
      </div>

      <Button variant="increment" onClick={increment} />
    </div>
  );
}

// Button
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: "increment" | "decrement";
};

function Button({ variant, ...props }: ButtonProps) {
  return (
    <button
      className="flex h-10 w-10 transform-gpu cursor-pointer items-center justify-center rounded-full bg-blue-500 transition-transform duration-200 ease-in-out will-change-transform hover:scale-115 active:scale-90"
      {...props}
    >
      {variant == "increment" ? (
        <Image width={20} height={20} alt="Plus icon" src="/images/plus.svg" />
      ) : (
        <Image width={20} height={20} alt="Plus icon" src="/images/minus.svg" />
      )}
    </button>
  );
}

// RollingDigit
function RollingDigit({ digit }: { digit: number }) {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        layout
        initial={{ opacity: 0, x: 0, y: 10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        exit={{ opacity: 0, x: -10, y: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="relative inline-block h-9 overflow-hidden"
      >
        <div
          className="transform-gpu transition-transform duration-400 ease-out"
          style={{
            transform: `translateY(-${digit * 36}px)`,
          }}
        >
          {numbers.map((num) => {
            return (
              <p
                key={num}
                className="text-center text-3xl font-bold text-white"
              >
                {num}
              </p>
            );
          })}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default Hooks;
