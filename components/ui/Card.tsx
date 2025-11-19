import Image from "next/image";
import Stack from "@layout/Stack";
import { Text } from "@ui/Text";
import { useState } from "react";
import { cn } from "@/utils/cn";
import Arrow from "@ui/Arrow";
import Link from "next/link";

type CardProps = {
  title: string;
  description: string;
  link?: string;
  icon: string; // src
};

function Card({ title, description, link = "/", icon }: CardProps) {
  const [isHoverd, setIsHoverd] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsHoverd(true)}
      onMouseLeave={() => setIsHoverd(false)}
      className="h-90 bg-gray-200 rounded-2xl p-10 pr-40 flex items- relative overflow-hidden"
    >
      <Image
        src={icon}
        width={200}
        height={200}
        alt=""
        className={cn(
          "text-[200px] text-gray-300 absolute grayscale-100  duration-150 ease-out -right-10 -bottom-10",
          isHoverd && "grayscale-0 scale-120 rotate-5"
        )}
      />
      <Stack direction="col" spacing="xs">
        <Text className="text-2xl font">{title}</Text>
        <Text>{description}</Text>
      </Stack>

      <Link href={link}>
        <Arrow
          direction="upperRight"
          className="absolute fill-primary top-11 right-7"
        />
      </Link>
    </div>
  );
}

export default Card;
