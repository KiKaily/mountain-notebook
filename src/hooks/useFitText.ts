import { useEffect, useRef, useState } from "react";

/**
 * useFitText hook
 * Automatically scales down font size so text fits in its container without overflow.
 * Usage: const [ref, fontSize] = useFitText({ minFontSize: 10, maxFontSize: 24 });
 * <span ref={ref} style={{ fontSize }}> ... </span>
 */
export function useFitText({ minFontSize = 10, maxFontSize = 24, resolution = 1, padding = 0 } = {}) {
  const ref = useRef(null);
  const [fontSize, setFontSize] = useState(maxFontSize);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    let parent = node.parentElement;
    if (!parent) return;

    let newFontSize = maxFontSize;
    node.style.fontSize = `${newFontSize}px`;
    node.style.whiteSpace = "nowrap";
    node.style.display = "inline-block";
    node.style.lineHeight = "1.1";

    // Ajustar para padding opcional
    const getAvailableWidth = () => {
      const parentStyle = window.getComputedStyle(parent);
      const parentPadding = parseFloat(parentStyle.paddingLeft) + parseFloat(parentStyle.paddingRight);
      return parent.clientWidth - parentPadding - padding * 2;
    };

    // Reduce font size hasta que quepa dentro del ancho disponible
    while (node.scrollWidth > getAvailableWidth() && newFontSize > minFontSize) {
      newFontSize -= resolution;
      node.style.fontSize = `${newFontSize}px`;
    }
    setFontSize(newFontSize);
  }, [minFontSize, maxFontSize, resolution, padding]);

  return [ref, fontSize];
}
