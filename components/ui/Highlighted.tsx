import Stack from "@/components/layout/Stack";
import { cn } from "@/utils/cn";
import { ReactNode, useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
// bg-color - #ebf3ff
// Dot color- #0e60fb
// gradiant-light- #3698fe
// gradiant-dark- #0a5afb

type HighlightedProps = {
  children: ReactNode;
};

function Highlighted({ children }: HighlightedProps) {
  return (
    <span className="relative inline-block border-2 border-[#c4dbff] bg-[#e0ecff] px-2 duration-100">
      <GradiantText className="">
        <TypeAnimation
          sequence={[
            "React", // Types 'One'
            5000, // Waits 1s
            "Next.js", // Deletes 'One' and types 'Two'
            5000, // Waits 2s
            "Tailwind", // Types 'Three' without deleting 'Two'
            5000,
          ]}
          cursor={false}
          repeat={Infinity}
          style={{ fontSize: "1em", display: "inline-block" }}
        />
      </GradiantText>

      <Dot className="-top-1.5 -left-1.5" />
      <Dot className="-top-1.5 -right-1.5" />
      <Dot className="-bottom-1.5 -left-1.5" />
      <Dot className="-right-1.5 -bottom-1.5" />
    </span>
  );
}

type GradiantTextProps = {
  className?: string;
  children: ReactNode;
};

function GradiantText({ className, children }: GradiantTextProps) {
  return (
    <span
      className={cn(
        "bg-linear-to-r from-[#3698fe] to-[#0a5afb] bg-clip-text text-transparent",
        className,
      )}
    >
      {children}
    </span>
  );
}

function Dot({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "absolute h-2.5 w-2.5 rotate-45 rounded-xs bg-[#0e60fb]",
        className,
      )}
    ></span>
  );
}

export default Highlighted;
