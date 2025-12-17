import { Text } from "@/components/ui/Text";
import { cn } from "@/utils/cn";
import { useEffect, useState } from "react";

function Typography() {
  const [rerender, setRerender] = useState(0);
  const fonts = [
    "poppins",
    "funnel-display",
    "limelight",
    "unifrakturmaguntia",
  ];

  function randomFont() {
    const random = Math.floor(Math.random() * 4); // random number from 0 to 3
    return fonts[random];
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setRerender((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mb-5 space-y-2 rounded-2xl bg-linear-to-tl from-blue-300 to-blue-400 p-6 text-white">
      <Text color="white" className={cn("mb-3 text-3xl", randomFont())}>
        Brzina i jednostavnost
      </Text>
      <Text color="white" className={cn("mb-3 text-3xl", randomFont())}>
        Pisanje je brže
      </Text>
      <Text color="white" className={cn("mb-3 text-2xl", randomFont())}>
        Stil bez muke
      </Text>
      <Text color="white" className={cn("text-xl", randomFont())}>
        Manje koda
      </Text>
    </div>
  );
}

export default Typography;
