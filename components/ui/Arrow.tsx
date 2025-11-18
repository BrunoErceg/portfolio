import Image from "next/image";
import ArrowSvg from "@images/arrow.svg";
import { cn } from "@/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";

type ArrowProps = VariantProps<typeof arrowVariants> & {
  className?: string;
};

function Arrow({ direction, size, className, ...props }: ArrowProps) {
  return (
    <Image
      src={ArrowSvg.src}
      alt="Arrow icon"
      width={0}
      height={0}
      className={cn(arrowVariants({ direction, size }), className)}
      {...props}
    />
  );
}

const arrowVariants = cva("", {
  variants: {
    direction: {
      up: "rotate-0",
      left: "-rotate-90",
      upperLeft: "-rotate-45",
      downLeft: "-rotate-135",
      down: "rotate-180",
      right: "rotate-90",
      upperRight: "rotate-45",
      downRight: "rotate-135",
    },
    size: {
      xs: "size-3",
      sm: "size-4",
      md: "size-6",
      lg: "size-9",
      xl: "size-12",
      xxl: "size-18",
    },
  },
  defaultVariants: {
    direction: "left",
    size: "md",
  },
});

export default Arrow;
