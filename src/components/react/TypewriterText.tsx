import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TypewriterTextProps {
  text: string;
  delay?: number;
  className?: string;
}

export const TypewriterText = ({ text, delay = 0, className = "" }: TypewriterTextProps) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStarted(true);
    }, delay * 1000);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (started && currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 30); // Speed of typing
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, started]);

  return (
    <div className={`grid ${className}`}>
      {/* Invisible layer to preserve space */}
      <span className="invisible pointer-events-none select-none [grid-area:1/1] whitespace-pre-wrap">
        {text}
      </span>
      {/* Visible typing layer */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay }}
        className="[grid-area:1/1] whitespace-pre-wrap"
      >
        {displayText}
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
          className="inline-block w-2 h-5 bg-lime-400 ml-1 align-middle"
        />
      </motion.span>
    </div>
  );
};
