import { Text } from "@/components/ui/Text";
import { cn } from "@/utils/cn";
import { useEffect, useState } from "react";

type Device = "desktop" | "tablet" | "mobile";

function ResponsiveEx() {
  const [currentDevice, setCurrentDevice] = useState<Device>("desktop");
  const ROTATION_DURATION_MS = 1000;
  const GRID_CONFIG = {
    desktop: "grid-cols-3",
    tablet: "grid-cols-2",
    mobile: "grid-cols-1",
  }[currentDevice];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDevice((prevDevice) => {
        if (prevDevice === "desktop") return "tablet";
        if (prevDevice === "tablet") return "mobile";
        return "desktop";
      });
    }, ROTATION_DURATION_MS);

    return () => clearInterval(interval); // Clean Interval
  }, []);
  return (
    <div className="mb-5 flex h-58 space-y-2 rounded-2xl bg-linear-to-br from-blue-400 to-blue-300 p-6">
      <div className={cn("grid w-full gap-3", GRID_CONFIG)}>
        <GridItem>
          <Text color="white" weight="semibold">
            Box
          </Text>
        </GridItem>
        <GridItem>
          <Text color="white" weight="semibold">
            Box
          </Text>
        </GridItem>
        <GridItem className={cn(currentDevice === "tablet" && "col-span-2")}>
          <Text color="white" weight="semibold">
            Box
          </Text>
        </GridItem>
      </div>
    </div>
  );
}

type GridItemProps = {
  children: React.ReactNode;
  className?: string;
};

function GridItem({ children, className }: GridItemProps) {
  return (
    <div
      className={cn(
        "flex w-full items-center justify-center rounded-2xl bg-blue-300 p-3 text-center",
        className,
      )}
    >
      {children}
    </div>
  );
}

export default ResponsiveEx;
