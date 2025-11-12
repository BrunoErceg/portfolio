import { cn } from "@/utils/cn";
import { ReactNode } from "react";

type ColumnsProps = {
  mobile: number;
  tablet: number;
  desktop: number;
  children: ReactNode;
  className?: string;
};

function Columns({
  mobile,
  tablet,
  desktop,
  children,
  className,
}: ColumnsProps) {
  const mobileClass = {
    1: "grid-cols-1 ",
    2: "grid-cols-2 ",
    4: "grid-cols-4 ",
  }[mobile];
  const tabletClass = {
    1: "md:grid-cols-1 ",
    2: "md:grid-cols-2 ",
    4: "md:grid-cols-4 ",
  }[tablet];
  const desktopClass = {
    1: "lg:grid-cols-1 ",
    2: "lg:grid-cols-2 ",
    4: "lg:grid-cols-4 ",
  }[desktop];

  return (
    <div
      className={cn("grid", mobileClass, tabletClass, desktopClass, className)}
    >
      {children}
    </div>
  );
}

export default Columns;
