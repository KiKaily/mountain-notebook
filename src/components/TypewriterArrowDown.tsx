import * as React from "react";

// SVG for a typewriter-style down arrow
const TypewriterArrowDown: React.FC<{ className?: string }>
  = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    width={32}
    height={32}
  >
    <rect x="7" y="5" width="18" height="6" rx="2" fill="none" stroke="currentColor" strokeWidth="2.2" />
    <path d="M16 11v13" />
    <path d="M11 20l5 5 5-5" />
  </svg>
);

export default TypewriterArrowDown;
