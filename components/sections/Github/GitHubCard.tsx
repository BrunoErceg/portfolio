import { cn } from '@/utils/cn';
import Image from 'next/image';

type GitHubCardProps = {
  side: 'left' | 'right';
  img: string;
  alt: string;
  className?: string;
};

/**
 * A React component that displays a card with a GitHub icon.
 * The card is absolute positioned at the bottom of its parent element.
 * It has a rounded background with a white opacity and a padding of 10px.
 * It also has a rotation of 10 degrees to the right when the side is 'left'.
 * The image inside the card is given a width and height of 300px and has an opacity of 80.
 * The image also has a brightness of 20 in dark mode and is grayscale.
 *
 * @returns {JSX.Element} - The JSX element of the component.
 */
function GitHubCard({ side, img, alt, className }: GitHubCardProps) {
  return (
    <div
      className={cn(
        'absolute -bottom-8 z-10 rounded-3xl bg-white/20 p-5 md:px-10 md:py-5 dark:bg-slate-600',
        side === 'left'
          ? '-right-10 rotate-10 md:right-5 lg:right-30'
          : '-left-10 -rotate-10 md:left-5 lg:left-30',
        className,
      )}
    >
      <Image
        src={img}
        alt={alt}
        width={300}
        height={300}
        className="w-25 opacity-80 select-none md:w-45 lg:w-50 dark:brightness-20 dark:grayscale"
      />
    </div>
  );
}

export default GitHubCard;
