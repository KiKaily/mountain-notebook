import { useEffect, useState, useRef } from "react";

interface TypewriterTextProps {
  text: string;
  delay?: number;
  startDelay?: number;
  className?: string;
}

const TypewriterText = ({ text, delay = 40, startDelay = 0, className = "" }: TypewriterTextProps) => {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const isTyping = started && displayed.length > 0 && displayed.length < text.length;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    setDisplayed("");
    let i = 0;
    let interval: ReturnType<typeof setInterval> | null = null;
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        setDisplayed(text.slice(0, i + 1));
        i++;
        if (i >= text.length && interval) {
          clearInterval(interval);
        }
      }, delay);
    }, startDelay);

    return () => {
      clearTimeout(timeout);
      if (interval) clearInterval(interval);
    };
  }, [started, text, delay, startDelay]);

  return (
    <span ref={ref} className={`relative inline-grid font-serif ${className}`}>
      <span aria-hidden="true" className="invisible col-start-1 row-start-1 whitespace-pre">
        {text}
        <span>|</span>
      </span>
      <span className="col-start-1 row-start-1 whitespace-pre">
        {displayed}
        {isTyping && (
          <span className="animate-pulse">|</span>
        )}
      </span>
      {!started && (
        <span aria-hidden="true" className="col-start-1 row-start-1 whitespace-pre opacity-0">
          {text}
        </span>
      )}
    </span>
  );
};

export default TypewriterText;
