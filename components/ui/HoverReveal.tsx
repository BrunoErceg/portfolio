import { ReactNode, useEffect, useState } from "react";
import { cn } from "@/utils/cn";
import { Text } from "@ui/Text";

type HoverRevealProps = {
  trigger: ReactNode;
  title: string;
  description: string;
  className?: string;
};

// Component that reveals additional content on hover with background blur effect
// The reveal only happened when the screen is over 900px
function HoverReveal({
  trigger,
  title,
  description,
  className,
}: HoverRevealProps) {
  const [isHoverd, setIsHoverd] = useState(false);
  const [showZIndex, setShowZIndex] = useState(false);

  // Toggel z index, when removing the calss delay for 100 miliseconds
  useEffect(() => {
    if (isHoverd) {
      setShowZIndex(true);
    } else {
      setTimeout(() => {
        setShowZIndex(false);
      }, 100);
    }
  }, [isHoverd]);

  return (
    <>
      <div
        className={(cn("relative"), className)}
        onMouseEnter={() => window.innerWidth > 900 && setIsHoverd(true)} // Trigger only when the screen width is over 900px
        onMouseLeave={() => setIsHoverd(false)}
      >
        <div
          className={cn(
            "relative duration-100 ease-in-out",
            isHoverd ? "scale-110" : "scale-100",
            showZIndex && "z-20"
          )}
        >
          {trigger}
          <InfoCard
            isVisible={isHoverd}
            description={description}
            title={title}
          />
        </div>
        <BlurOverlay isVisible={isHoverd} />
      </div>
    </>
  );
}

// Background overlay that blurs content behind the hover card
function BlurOverlay({ isVisible }: { isVisible: boolean }) {
  return (
    <div
      className={cn(
        `fixed transition-all ease-in-out duration-150 z-10 bg-white/10 inset-0 backdrop-blur-sm w-screen h-screen pointer-events-none`,
        isVisible ? "opacity-100" : "opacity-0"
      )}
    />
  );
}

//  Card that displays the description content
// on hover with blured background
function InfoCard({
  title,
  isVisible,
  description,
}: {
  isVisible: boolean;
  description: string;
  title: string;
}) {
  return (
    <div
      className={cn(
        "absolute top-0 left-1/2 bg-white shadow-[0px_5px_12px_2px_rgba(0,_0,_0,_0.1)] -translate-x-1/2 transform rounded-lg text-center ease-in-out duration-150 w-80 py-6 px-4",
        isVisible
          ? "translate-y-[-120%] scale-100 opacity-100" // Slides up and fades in
          : "translate-y-[-95%] opacity-0 scale-70 pointer-events-none" // Hidden state
      )}
    >
      <Text>
        <span className="text-primary">{title}</span> {description}"
      </Text>
    </div>
  );
}

export default HoverReveal;
