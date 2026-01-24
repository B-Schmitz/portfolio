import React, { useEffect, useState } from "react";

interface TypewriterProps {
  words: string[];
  prefix?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pause?: number;
  className?: string;
}

export const Typewriter: React.FC<TypewriterProps> = ({
  words,
  prefix = "",
  typingSpeed = 80,
  deletingSpeed = 40,
  pause = 1200,
  className = "",
}) => {
  const [currentWord, setCurrentWord] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const fullWord = words[currentWord];

    if (!isDeleting && displayed.length < fullWord.length) {
      timeout = setTimeout(() => {
        setDisplayed(fullWord.slice(0, displayed.length + 1));
      }, typingSpeed);
    } else if (!isDeleting && displayed.length === fullWord.length) {
      timeout = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && displayed.length > 0) {
      // Não apaga o prefixo, só as techs
      timeout = setTimeout(() => {
        setDisplayed(fullWord.slice(0, displayed.length - 1));
      }, deletingSpeed);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setCurrentWord((prev) => (prev + 1) % words.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, words, currentWord, typingSpeed, deletingSpeed, pause]);

  // Sempre mostra o prefixo fixo
  return (
    <span className={className}>
      {prefix}
      {displayed}
      <span className="inline-block w-2 h-6 align-middle bg-foreground animate-pulse ml-0.5" style={{borderRadius:2}} />
    </span>
  );
};
