"use client";
import Image from "next/image";
import { cn } from "@/utils/cn";
import getAnimateInProps from "@utils/animations";
import Stack from "@layout/Stack";
import { MotionHeading } from "@ui/Heading";
import { Text, MotionText } from "@ui/Text";
import HoverRevealInfo from "@ui/HoverRevealInfo";
import Highlighted from "@ui/Highlighted";
import { MotionBadge } from "@ui/Badge";
import { TECH_STACK_DATA } from "@/constants/techStack";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="mt-20 flex flex-col items-center justify-center">
      {/*  Availability badge */}
      <MotionBadge {...getAnimateInProps("bottom", 0.1)}>
        Tražim Posao
      </MotionBadge>

      {/* Heading with animation */}
      <MotionHeading
        level={1}
        className="w-300 text-center font-bold tracking-tight"
        {...getAnimateInProps("bottom", 0.3)}
      >
        Frontend Developer
        <br /> specijaliziran za <Highlighted>React</Highlighted>
      </MotionHeading>

      {/* Description with animation */}
      <MotionText
        variant="paragraph"
        className="text-center"
        {...getAnimateInProps("bottom", 0.5)}
      >
        Frontend developer iz Šibenika specijaliziran za React, bez
        komercijalnog iskustva
        <br className="hidden lg:block" /> ali s <b>jakim projektima</b> i
        ogromnom voljom za učenje i napredovanje u <b>IT industriji</b>.{" "}
      </MotionText>

      {/* Display technology stack logos and on hover display text card  */}
      <Stack className="mt-10" spacing="sm">
        {TECH_STACK_DATA.map((tech, i) => (
          <motion.div
            key={tech.id}
            {...getAnimateInProps("left", 0.7 + i * 0.1)}
          >
            <TechStackItem tech={tech} />
          </motion.div>
        ))}
      </Stack>
    </section>
  );
}

// Tech stack item
function TechStackItem({ tech }: { tech: (typeof TECH_STACK_DATA)[0] }) {
  return (
    <HoverRevealInfo
      revealFrom="top"
      card={
        <TechCard
          text={tech.description}
          bgFrom={tech.bgFrom}
          bgTo={tech.bgTo}
        />
      }
      trigger={
        <TechLogo logo={tech.logo} bgFrom={tech.bgFrom} bgTo={tech.bgTo} />
      }
    />
  );
}

type TechCardProps = {
  text: string;
  bgFrom: string;
  bgTo: string;
};

// Tech Card that displays simple small text
function TechCard({ text, bgFrom, bgTo }: TechCardProps) {
  return (
    <div
      className={cn(
        "w-65 rounded-xl bg-linear-to-br p-3 shadow-xl",
        bgFrom,
        bgTo,
      )}
    >
      <Text variant="caption" color="white">
        {text}
      </Text>
    </div>
  );
}

type TechLogoProps = {
  logo: string;
  bgFrom: string;
  bgTo: string;
};

// Displays tach logo with gradiant background
function TechLogo({ logo, bgFrom, bgTo }: TechLogoProps) {
  return (
    <Image
      src={logo}
      alt=""
      width={36}
      height={36}
      className={cn("size-12 rounded-xl bg-linear-to-br p-1.5", bgFrom, bgTo)}
    />
  );
}

export default Hero;
