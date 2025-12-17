import { cn } from "@/utils/cn";
import { cva, VariantProps } from "class-variance-authority";
import { motion } from "framer-motion";
import { ButtonHTMLAttributes, ReactNode } from "react";

type TagProps = VariantProps<typeof tagVariants> &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    className?: string;
    children?: ReactNode;
  };

function Tag({ variant, state, children, className, ...props }: TagProps) {
  return (
    <button
      className={cn(tagVariants({ variant, state }), className)}
      {...props}
    >
      {variant === "availability" && <Badge />}
      {children}
    </button>
  );
}

function Badge() {
  return (
    <span className="mr-1.5 inline-block h-2 w-2 animate-pulse rounded-full bg-green-400 shadow-[0px_0px_9px_1px_#05df72] transition-shadow" />
  );
}

const tagVariants = cva("", {
  variants: {
    variant: {
      base: "cursor-pointer text-sm  md:text-base rounded-full border-2 font-semibold border-blue-500 px-3 py-1 md:px-4 md:py-1.5 text-blue-500 duration-400 ease-out hover:border-transparent hover:bg-linear-to-br hover:from-blue-400 hover:to-blue-500 hover:text-white",
      availability:
        "mb-4 rounded-full border border-gray-600 px-3 py-1 text-sm",
    },
    state: {
      default: "",
      selected: "",
    },
  },
  compoundVariants: [
    {
      variant: "base",
      state: "selected",
      className: "bg-linear-to-br from-blue-400 to-blue-500 text-white",
    },
  ],
  defaultVariants: {
    variant: "base",
    state: "default",
  },
});

const MotionTag = motion(Tag);
export { Tag, MotionTag };
