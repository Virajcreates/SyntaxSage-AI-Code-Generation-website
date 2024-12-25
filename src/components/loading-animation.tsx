import { useEffect, useState } from 'react';

const loadingPhrases = [
  "Summoning the Sage's Wisdom...",
  "Casting the Code Spell...",
  "Weaving Syntax Magic...",
  "Consulting the Oracle...",
  "Gathering Arcane Scripts...",
  "Deciphering Ancient Code...",
  "Invoking the Syntax Spirits...",
  "Enlightening the Path of Code...",
  "Unveiling the Code Prophecy...",
  "Harnessing Mystic Algorithms...",
  "Magic in Progress...",
  "The Sage is Thinking...",
  "Spinning the Code Web...",
  "Enchanting Your Request...",
  "Brewing Syntax Potions..."
];

export function LoadingAnimation() {
  const [phrase, setPhrase] = useState(loadingPhrases[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhrase(loadingPhrases[Math.floor(Math.random() * loadingPhrases.length)]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div className="relative w-24 h-24">
        <div className="absolute inset-0 border-4 border-t-primary border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
        <div className="absolute inset-2 border-4 border-r-primary border-t-transparent border-b-transparent border-l-transparent rounded-full animate-spin-reverse"></div>
        <div className="absolute inset-4 border-4 border-b-primary border-t-transparent border-r-transparent border-l-transparent rounded-full animate-spin"></div>
      </div>
      <p className="text-lg font-medium text-primary animate-pulse">{phrase}</p>
    </div>
  );
}