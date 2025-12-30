import { useEffect, useState } from 'react';

type TypeAnimationProps = {
  className?: string;
  words: string[];
};

function TypingAnimation({ words, className }: TypeAnimationProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState(words[0]);
  const [isDeleting, setIsDeleting] = useState(true);

  useEffect(() => {
    const currentWord = words[currentWordIndex];

    // Određujemo brzinu: brisanje je obično brže od tipkanja
    const speed = isDeleting ? 50 : 150;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Logika TIPKANJA
        if (displayedText.length < currentWord.length) {
          setDisplayedText(currentWord.slice(0, displayedText.length + 1));
        } else {
          // Riječ je gotova, čekaj sekundu i kreni brisati
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Logika BRISANJA
        if (displayedText.length > 0) {
          setDisplayedText(displayedText.slice(0, -1));
        } else {
          // Brisanje gotovo, prijeđi na sljedeću riječ
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, speed);

    // KLJUČNO: Čišćenje tajmera pri svakoj promjeni
    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentWordIndex, words]);

  return <span className={className}>{displayedText}</span>;
}

export default TypingAnimation;
