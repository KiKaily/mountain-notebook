import AssetArrowDown from "./AssetArrowDown";
import { useIsMobile } from "@/hooks/use-mobile";
import React from "react";

interface ScrollDownArrowProps {
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
  label?: string;
}

const ScrollDownArrow: React.FC<ScrollDownArrowProps> = ({ onClick, className = "", style = {}, label }) => {
  const isMobile = useIsMobile();
  return (
    <button
      aria-label={label || "Scroll down"}
      onClick={onClick}
      className={`group flex flex-col items-center justify-center absolute left-1/2 -translate-x-1/2 z-30 ${className}`}
      style={style}
      tabIndex={0}
    >
      <AssetArrowDown className="h-8 w-8 md:h-10 md:w-10 animate-bounce drop-shadow-lg opacity-80 group-hover:opacity-100 transition" />
      <span className="sr-only">{label || "Scroll down"}</span>
    </button>
  );
};

export default ScrollDownArrow;
