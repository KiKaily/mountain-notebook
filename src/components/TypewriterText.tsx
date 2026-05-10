import { useEffect, useState, useRef, ReactNode } from "react";

interface TextSegment {
  type: 'text' | 'link';
  content: string;
  href?: string;
}

interface TypewriterTextProps {
  text: string;
  delay?: number;
  startDelay?: number;
  className?: string;
}

// Parse text for URLs in parentheses like "(domain.com)" and convert to clickable links
const parseTextWithLinks = (text: string): TextSegment[] => {
  const segments: TextSegment[] = [];
  const linkRegex = /\(([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})\)/g;
  let lastIndex = 0;
  let match;

  while ((match = linkRegex.exec(text)) !== null) {
    // Add text before the link
    if (match.index > lastIndex) {
      segments.push({
        type: 'text',
        content: text.slice(lastIndex, match.index),
      });
    }

    // Extract domain and determine protocol
    const domain = match[1];
    const href = domain.startsWith('http') ? domain : `https://${domain}`;

    // Add the link (with parentheses as visual element)
    segments.push({
      type: 'link',
      content: match[0], // includes parentheses
      href,
    });

    lastIndex = match.index + match[0].length;
  }

  // Add remaining text
  if (lastIndex < text.length) {
    segments.push({
      type: 'text',
      content: text.slice(lastIndex),
    });
  }

  return segments.length > 0 ? segments : [{ type: 'text', content: text }];
};

// Render parsed segments with typewriter effect on text
const renderSegments = (segments: TextSegment[], displayed: string, isTyping: boolean): ReactNode => {
  let charCount = 0;
  const result: ReactNode[] = [];

  for (let i = 0; i < segments.length; i++) {
    const segment = segments[i];
    const segmentLength = segment.content.length;
    const segmentStart = charCount;
    const segmentEnd = charCount + segmentLength;

    if (segment.type === 'link') {
      // Links are always fully displayed when their position is reached
      if (displayed.length >= segmentEnd) {
        result.push(
          <a
            key={`link-${i}`}
            href={segment.href}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-primary transition-colors cursor-pointer"
            onClick={(e) => e.stopPropagation()}
          >
            {segment.content}
          </a>
        );
      } else if (displayed.length > segmentStart) {
        // Partial display of link - show what's typed
        result.push(
          <a
            key={`link-${i}`}
            href={segment.href}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-primary transition-colors cursor-pointer"
            onClick={(e) => e.stopPropagation()}
          >
            {segment.content.slice(0, displayed.length - segmentStart)}
          </a>
        );
      }
    } else {
      // Text segments
      if (displayed.length >= segmentStart) {
        const textLength = Math.min(displayed.length - segmentStart, segmentLength);
        result.push(
          <span key={`text-${i}`}>
            {segment.content.slice(0, textLength)}
          </span>
        );
      }
    }

    charCount += segmentLength;
  }

  return result;
};

const TypewriterText = ({ text, delay = 40, startDelay = 0, className = "" }: TypewriterTextProps) => {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const segments = parseTextWithLinks(text);
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
      <span aria-hidden="true" className="invisible col-start-1 row-start-1 whitespace-pre-wrap break-words">
        {text}
        <span>|</span>
      </span>
      <span className="col-start-1 row-start-1 whitespace-pre-wrap break-words">
        {renderSegments(segments, displayed, isTyping)}
        {isTyping && (
          <span className="animate-pulse">|</span>
        )}
      </span>
      {!started && (
        <span aria-hidden="true" className="col-start-1 row-start-1 whitespace-pre-wrap break-words opacity-0">
          {text}
        </span>
      )}
    </span>
  );
};

export default TypewriterText;
