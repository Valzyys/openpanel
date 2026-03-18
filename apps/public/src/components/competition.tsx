'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const brandConfig = {
  'JKT48 Official': '#FF006E',
  'IDN App': '#00D9FF',
  'Showroom': '#00C853',
  'YouTube Streams': '#FF0000',
  'Theater Info': '#FF9500',
  'Member Data': '#AF52DE',
  'Event Calendar': '#FF3B30',
  'Real-time Data': '#5AC8FA',
} as const;

const words = Object.keys(brandConfig);

function useWordCycle(words: string[], interval: number, mounted: boolean) {
  const [index, setIndex] = useState(0);
  const [isInitial, setIsInitial] = useState(true);

  useEffect(() => {
    if (!mounted) {
      return;
    }

    if (isInitial) {
      setIndex(Math.floor(Math.random() * words.length));
      setIsInitial(false);
      return;
    }

    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % words.length);
    }, interval);
    return () => clearInterval(timer);
  }, [words, interval, isInitial, mounted]);

  return words[index];
}

export function Competition() {
  const [mounted, setMounted] = useState(false);
  const word = useWordCycle(words, 2100, mounted);
  const color = brandConfig[word as keyof typeof brandConfig];

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <span className="block truncate leading-tight -mt-1" style={{ color }}>
        {word}
      </span>
    );
  }

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={word}
        className="block truncate leading-tight -mt-1"
        style={{ color }}
      >
        {word?.split('').map((char, index) => (
          <motion.span
            key={`${word}-${char}-${index.toString()}`}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{
              duration: 0.15,
              delay: index * 0.015,
              ease: 'easeOut',
            }}
            style={{ display: 'inline-block', whiteSpace: 'pre' }}
          >
            {char}
          </motion.span>
        ))}
      </motion.div>
    </AnimatePresence>
  );
}
