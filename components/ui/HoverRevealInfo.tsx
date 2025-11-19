import { ReactNode, useEffect, useState } from "react";
import { cn } from "@/utils/cn";
import { cva, VariantProps } from "class-variance-authority";

type HoverRevealInfoProps = VariantProps<typeof hoverRevealInfoVaraints> & {
  trigger: ReactNode;
  card: ReactNode;
};

function HoverRevealInfo({ revealFrom, trigger, card }: HoverRevealInfoProps) {
  const [isHoverd, setIsHoverd] = useState(false);

  return (
    <div className="relative">
      <div
        onMouseEnter={() => setIsHoverd(true)}
        onMouseLeave={() => setIsHoverd(false)}
      >
        {trigger}{" "}
      </div>
      <div
        className={cn(
          hoverRevealInfoVaraints({ revealFrom }),
          isHoverd && "scale-100 opacity-100",
        )}
      >
        {card}
      </div>
    </div>
  );
}

const hoverRevealInfoVaraints = cva(
  "absolute opacity-0 scale-80 origin-bottom duration-200 ease-out",
  {
    variants: {
      revealFrom: {
        bottom: "-bottom-3 left-1/2 -translate-x-1/2 translate-y-full",
        top: "-top-3 left-1/2 -translate-x-1/2 -translate-y-full",
        right: "top-1/2 -right-3 translate-x-full -translate-y-1/2 ",
        left: "top-1/2 -left-3 -translate-x-full -translate-y-1/2",
      },
    },
    defaultVariants: {
      revealFrom: "top",
    },
  },
);

export default HoverRevealInfo;
