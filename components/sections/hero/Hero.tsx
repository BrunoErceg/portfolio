"use client";
import { motion } from "framer-motion";
import getAnimateInProps from "@utils/animations";
import { Heading } from "@ui/Heading";
import { MotionText } from "@ui/Text";
import TechStack from "@sections/hero/TechStack";
import { cn } from "@/utils/cn";

function Hero() {
  // Split the title by words and store it as an array
  const title = `Designer specialised in taking digital product`.split(" ");
  return (
    <section className="w-full mt-4 lg:mt-25">
      {/* Title */}
      <Heading level={1} className="md:w-250">
        {/* Stagger animate each word from the title */}
        {title.map((word, i) => {
          return (
            <motion.span
              key={i}
              {...getAnimateInProps("bottom", i * 0.07)}
              className={cn(
                "inline-block mr-2 md:mr-5",
                i == 0 && "text-primary"
              )}
            >
              {" " + word}
            </motion.span>
          );
        })}
      </Heading>

      {/* Paragraph that animate in from left wtih 0.7 delay */}
      <MotionText className="text-xl" {...getAnimateInProps("left", 0.5)}>
        With 10+ years of design experience and as a former founder of a
        <br className="hidden lg:block" />
        venture-backed startup, I help businesses with early-stage products.{" "}
      </MotionText>

      {/* Display technology stack logos */}
      <TechStack />
    </section>
  );
}

export default Hero;
