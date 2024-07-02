import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  words: string[];
  speed?: number;
  pause?: number;
}

const Typewriter: React.FC<TypewriterProps> = ({ words, speed = 50, pause = 2000 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const typeSpeed = isDeleting ? speed / 2 : speed;

    if (!isDeleting && index < currentWord.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(currentWord.substring(0, index + 1));
        setIndex(index + 1);
      }, typeSpeed);
      return () => clearTimeout(timeout);
    } else if (isDeleting && index > 0) {
      const timeout = setTimeout(() => {
        setDisplayedText(currentWord.substring(0, index - 1));
        setIndex(index - 1);
      }, typeSpeed);
      return () => clearTimeout(timeout);
    } else if (!isDeleting && index === currentWord.length) {
      const timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pause);
      return () => clearTimeout(timeout);
    } else if (isDeleting && index === 0) {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    }
  }, [index, isDeleting, words, wordIndex, speed, pause]);

  return <p className='h-6 font-semibold text-xl  md:text-4xl'>{displayedText}</p>;
};

export default Typewriter;
