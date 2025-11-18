import { cn } from "@/utils/cn";
import { ReactNode, useState } from "react";

type TagProps = {
  className?: string;
  children: ReactNode;
};

function Tag({ className, children, ...props }: TagProps) {
  const [isHoverd, setIshoverd] = useState(false);
  return (
    <p
      onMouseEnter={() => setIshoverd(true)}
      onMouseLeave={() => setIshoverd(false)}
      className={cn(
        "py-1 px-4 rounded-full  duration-300 ease-in-out bg-gray-200 relative overflow-hidden",
        isHoverd && "text-white",
        className
      )}
    >
      <span className="inline-block  relative position z-20">{children}</span>
      <span
        className={cn(
          "bg-primary z-10 rounded-t-full ease-out duration-500 w-full absolute bottom-0 translate-y-full left-0 h-20",
          isHoverd && "translate-y-0 "
        )}
      />{" "}
    </p>
  );
}

export default Tag;
