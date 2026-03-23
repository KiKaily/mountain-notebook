import * as React from "react";
import arrowDown from "@/assets/arrow-down-01-stroke-rounded.svg";

const AssetArrowDown: React.FC<{ className?: string }> = ({ className = "" }) => (
  <img src={arrowDown} alt="Scroll down" className={className} draggable={false} />
);

export default AssetArrowDown;
