import { ReactNode, useState } from "react";
import { cn } from "@/utils/cn";

type HoverRevealProps = {
  trigger: ReactNode;
  description: ReactNode | string;
};

function HoverReveal({ trigger, description }: HoverRevealProps) {
  const [isHoverd, setIsHoverd] = useState(false);
  return (
    <>
      <div
        className={cn("relative", isHoverd && "z-20")}
        onMouseEnter={() => setIsHoverd(true)}
        onMouseLeave={() => setIsHoverd(false)}
      >
        <div
          className={cn(
            "duration-200 ease-in-out",
            isHoverd == true ? "scale-110" : "scale-100"
          )}
        >
          {trigger}
        </div>
        <InfoCard isVisible={isHoverd} description={description} />
      </div>
      <BlurOverlay isVisible={isHoverd} />
    </>
  );
}

function BlurOverlay({ isVisible }: { isVisible: boolean }) {
  return (
    <div
      className={cn(
        `fixed transition-all ease-in-out  duration-300 z-10 bg-white/10 inset-0 backdrop-blur-sm w-screen h-screen `,
        " pointer-events-none",
        isVisible ? "opacity-100" : "opacity-0"
      )}
    />
  );
}

function InfoCard({
  isVisible,
  description,
}: {
  isVisible: boolean;
  description: ReactNode | string;
}) {
  return (
    <div
      className={cn(
        "absolute top-0 left-1/2 -translate-x-1/2 transform rounded-lg text-center ease-in-out duration-200 w-80 py-3 ",
        isVisible
          ? "translate-y-[-110%] opacity-100"
          : "translate-y-[-90%] opacity-0 pointer-events-none"
      )}
    >
      {description}
    </div>
  );
}

export default HoverReveal;
