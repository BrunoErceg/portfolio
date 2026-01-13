import { useEffect, useState } from 'react';

type TypeAnimationProps = {
  className?: string;
  words: string[];
};

/**
 * A React component that demonstrates a typing animation effect.
 * The animation is looped and delayed between each item.
 *
 * @returns A span element with the typing animation effect.
 */
export function TypingAnimation({ words, className }: TypeAnimationProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState(words[0]);
  const [isDeleting, setIsDeleting] = useState(true);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    const speed = isDeleting ? 50 : 150;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < currentWord.length) {
          setDisplayedText(currentWord.slice(0, displayedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(displayedText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentWordIndex, words]);

  return <span className={className}>{displayedText}</span>;
}
