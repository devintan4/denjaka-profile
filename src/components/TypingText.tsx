import { useState, useEffect } from 'react';

interface TypingTextProps {
  text: string;
  speed?: number;
  showCursor?: boolean;
  className?: string;
  onComplete?: () => void;
}

export default function TypingText({
  text,
  speed = 60,
  showCursor = true,
  className = '',
  onComplete,
}: TypingTextProps) {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDisplayed('');
    setDone(false);
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(interval);
        setDone(true);
        onComplete?.();
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <span className={className}>
      {displayed}
      {showCursor && (
        <span
          className="cursor-blink"
          style={{
            borderRight: '2px solid var(--gold)',
            marginLeft: 2,
            paddingRight: 2,
            opacity: done ? 1 : 1,
          }}
        />
      )}
    </span>
  );
}
