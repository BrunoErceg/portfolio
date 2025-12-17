"use client";

// React
import { useRef } from "react";

// Animation utilities
import getAnimateInProps from "@utils/animations";

// UI components
import { MotionHeading } from "@ui/Heading";
import { MotionText } from "@ui/Text";
import Highlighted from "@ui/Highlighted";
import { MotionTag } from "@ui/Tag";

function Hero() {
  const TextRef = useRef<HTMLParagraphElement>(null);
  return (
    <section className="mt-20 flex flex-col items-center justify-center md:mt-35">
      {/*  Availability tag */}
      <MotionTag variant="availability" {...getAnimateInProps("bottom", 0.1)}>
        Tražim Posao
      </MotionTag>

      {/* Heading with animation */}
      <MotionHeading level={1} {...getAnimateInProps("bottom", 0.3)}>
        Frontend Developer <br /> specijaliziran za
        <Highlighted>React</Highlighted>
      </MotionHeading>

      {/* Description with animation */}
      <MotionText
        variant="subheading"
        ref={TextRef}
        {...getAnimateInProps("bottom", 0.5)}
      >
        Frontend developer iz Šibenika specijaliziran za React, bez
        komercijalnog iskustva
        <br className="hidden lg:block" /> ali s <b>jakim projektima</b> i
        ogromnom voljom za učenje.
      </MotionText>
    </section>
  );
}

export default Hero;
