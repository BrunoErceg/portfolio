import { cn } from "@/utils/cn";
import { cva, VariantProps } from "class-variance-authority";
import { motion } from "framer-motion";
import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof ButtonVaraints> & {
    className?: string;
    children: ReactNode;
  };

const ButtonVaraints = cva("", {
  variants: {
    variant: {
      primary: "bg-linear-to-br from-blue-400 to-blue-500 text-white",
      secondary:
        "bg-white text-blue-500 hover:bg-blue-500 hover:text-white disabled:text-gray-400 disabled:cursor-not-allowed",
      icon: "bg-linear-to-br from-blue-400 to-blue-500 text-white text-xl hover:scale-110 py-3.5 px-3.5 rounded-full active:scale-90 cursor-pointer easeInOut duration-200",
      disabled:
        "bg-linear-to-br from-gray-200 to-gray-300 text-gray-400 hover:cursor-not-allowed",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

function Button({ variant, children, className, ...props }: ButtonProps) {
  return (
    <button className={cn(ButtonVaraints({ variant }), className)} {...props}>
      {children}
    </button>
  );
}

export default Button;
