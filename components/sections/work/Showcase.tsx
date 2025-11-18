import { shuffleArray } from "@/utils/shuffelArray";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Stack from "../../layout/Stack";
type ShowcaseProps = {
  images: { name: string; src: string }[];
};

function Showcase({ images }: ShowcaseProps) {
  const [isClient, setIsClent] = useState(false);
  const [shuffelArrays, setShuffeldArrays] = useState(
    [] as { name: string; src: string }[][]
  );
  useEffect(() => {
    setShuffeldArrays([
      shuffleArray(images).slice(0, 5),
      shuffleArray(images).slice(0, 5),
      shuffleArray(images).slice(0, 5),
    ]);

    setIsClent(true);
  }, []);

  return (
    <div className="p-10 rounded-xl overflow-hidden bg-gray-200">
      <div className="hover:scale-125 duration-700 ease-in-out">
        {isClient && (
          <>
            {shuffelArrays.map((array, i) => {
              const divClasses = {
                0: "-mt-40",
                1: "mt-15",
                2: "-mb-40 mt-15",
              }[i];
              const animations = [
                { initial: { x: -50 }, animate: { x: -700 } },
                { initial: { x: -700 }, animate: { x: -50 } },
                { initial: { x: -50 }, animate: { x: -700 } },
              ];
              return (
                <motion.div
                  key={i}
                  initial={animations[i].initial}
                  animate={animations[i].animate}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "reverse",
                  }}
                  className={divClasses}
                >
                  <Stack spacing="lg">
                    {array.map((screen) => (
                      <Image
                        key={screen.name}
                        src={screen.src}
                        alt={""}
                        height={500}
                        width={500}
                        className="rounded-md"
                      />
                    ))}
                  </Stack>
                </motion.div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
}

export default Showcase;
