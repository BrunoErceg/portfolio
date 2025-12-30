import Image from 'next/image';
import Stack from '@layout/Stack';
import Text from '@ui/Text';
import { useState } from 'react';
import { cn } from '@/utils/cn';

type CardProps = {
  title: string;
  description: string;
  link?: string;
  icon: string; // src
};

function Card({ title, description, link = '/', icon }: CardProps) {
  const [isHoverd, setIsHoverd] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsHoverd(true)}
      onMouseLeave={() => setIsHoverd(false)}
      className="items- relative flex h-50 overflow-hidden rounded-2xl bg-gray-200 p-10 pr-40"
    >
      <Image
        src={icon}
        width={200}
        height={200}
        alt=""
        className={cn(
          'absolute -right-10 -bottom-10 scale-70 text-[200px] text-gray-300 grayscale-100 duration-150 ease-out',
          isHoverd && 'scale-100 rotate-5 grayscale-0',
        )}
      />
      <Stack direction="col" spacing="xs">
        <Text className="font text-dark text-2xl font-bold">{title}</Text>
        <Text>{description}</Text>
      </Stack>
    </div>
  );
}

export default Card;
