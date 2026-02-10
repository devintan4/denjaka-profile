import { useState, useEffect, useRef } from 'react';

interface TypingTextProps {
  text: string;
  speed?: number;
  deleteSpeed?: number;
  showCursor?: boolean;
  loop?: boolean;
  pauseMs?: number;
  className?: string;
  onComplete?: () => void;
}

export default function TypingText({
  text,
  speed = 60,
  deleteSpeed = 35,
  showCursor = true,
  loop = false,
  pauseMs = 1500,
  className = '',
  onComplete,
}: TypingTextProps) {
  const [displayed, setDisplayed] = useState('');
  const phase = useRef<'typing' | 'pausing' | 'deleting'>('typing');
  const idx = useRef(0);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    phase.current = 'typing';
    idx.current = 0;
    setDisplayed('');

    const tick = () => {
      if (phase.current === 'typing') {
        idx.current++;
        setDisplayed(text.slice(0, idx.current));
        if (idx.current >= text.length) {
          if (loop) {
            phase.current = 'pausing';
            timer.current = setTimeout(tick, pauseMs);
          } else {
            onComplete?.();
          }
          return;
        }
        timer.current = setTimeout(tick, speed);
      } else if (phase.current === 'pausing') {
        phase.current = 'deleting';
        timer.current = setTimeout(tick, deleteSpeed);
      } else if (phase.current === 'deleting') {
        idx.current--;
        setDisplayed(text.slice(0, idx.current));
        if (idx.current <= 0) {
          phase.current = 'typing';
          timer.current = setTimeout(tick, speed + 200);
          return;
        }
        timer.current = setTimeout(tick, deleteSpeed);
      }
    };

    timer.current = setTimeout(tick, speed);
    return () => clearTimeout(timer.current);
  }, [text, speed, deleteSpeed, loop, pauseMs]);

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
          }}
        />
      )}
    </span>
  );
}
