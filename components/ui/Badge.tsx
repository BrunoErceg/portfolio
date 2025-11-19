import { motion } from "framer-motion";
import { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
};

function Badge({ children, ...props }: BadgeProps) {
  return (
    <p
      className="mb-4 rounded-full border border-gray-600 px-3 py-1 text-sm"
      {...props}
    >
      <span className="mr-1.5 inline-block h-2 w-2 animate-pulse rounded-full bg-green-400 shadow-[0px_0px_9px_1px_#05df72] transition-shadow"></span>
      {children}
    </p>
  );
}

const MotionBadge = motion(Badge);
export { MotionBadge, Badge };
