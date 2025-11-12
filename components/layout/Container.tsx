import { cn } from "@/utils/cn";
import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn("container mx-auto px-4 lg:w-[890px]", className)}>
      {children}
    </div>
  );
}

export default Container;
