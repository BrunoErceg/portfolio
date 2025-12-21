// React
import { ButtonHTMLAttributes, useState } from "react";
import Image from "next/image";

// UI components
import { AnimatePresence, motion } from "framer-motion";
import GradientSurface from "../shared/GradientSurface";

/**
 * A React component that demonstrates the use of React Hooks.
 * It displays a counter and allows the user to increment or decrement it.
 * The counter is displayed as a series of rolling digits.
 * @returns A React component that displays the counter and the increment/decrement buttons.
 */

function Counter() {
  const [count, setCount] = useState(0);

  /**
   * An array of all the digits from the count.
   * This is used to create an array of rolling digits.
   */
  const digits = Math.abs(count).toString().split("").map(Number);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <GradientSurface>
      <div className="mx-auto flex w-55 items-center justify-between rounded-full bg-white/20 p-2">
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
    </GradientSurface>
  );
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: "increment" | "decrement";
};

/**
 * A React component that displays a button with a plus or minus icon.
 * @returns A React component that displays the button.
 */

function Button({ variant, ...props }: ButtonProps) {
  return (
    <button
      className="flex h-10 w-10 transform-gpu cursor-pointer items-center justify-center rounded-full bg-blue-400 transition-transform duration-200 ease-in-out will-change-transform hover:scale-115 active:scale-90"
      {...props}
    >
      {variant === "increment" ? (
        <Image width={20} height={20} alt="Plus icon" src="/images/plus.svg" />
      ) : (
        <Image width={20} height={20} alt="Plus icon" src="/images/minus.svg" />
      )}
    </button>
  );
}
/**
 * A React component that displays a single digit of a counter.
 * The component will animate each time the digit changes.
 * @param {Object} props - The props for the component.
 * @param {number} props.digit - The digit to display.
 * @returns A React component that displays the digit.
 */
function RollingDigit({ digit }: { digit: number }) {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <AnimatePresence mode="popLayout">
      {/* Animate the presence of the digit */}
      <motion.div
        layout
        initial={{ opacity: 0, x: 0, y: 10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        exit={{ opacity: 0, x: -10, y: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="relative inline-block h-9 overflow-hidden"
      >
        {/* Animate the transform of the digit */}
        <div
          className="transform-gpu transition-transform duration-400 ease-out"
          style={{
            // Move the digit up by the height of the digit multiplied by the index
            transform: `translateY(-${digit * 36}px)`,
          }}
        >
          {/* Map over all the numbers and render a paragraph for each one */}
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
export default Counter;
