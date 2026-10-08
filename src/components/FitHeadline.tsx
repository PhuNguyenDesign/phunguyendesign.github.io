"use client";

import { useLayoutEffect, useRef, type CSSProperties, type ReactNode } from "react";

// A one-line headline sized to exactly fill its container's content width.
// Announces "hero:layout" after each fit so the ripple surface can repaint its copy of the type.
export default function FitHeadline({ children, style, ...rest }: { children: ReactNode; style?: CSSProperties } & Record<`data-${string}`, boolean | string>) {
  const ref = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    const parent = el?.parentElement;
    if (!el || !parent) return;
    const fit = () => {
      const cs = getComputedStyle(parent);
      const avail = parent.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
      el.style.fontSize = "100px";
      const w = el.getBoundingClientRect().width;
      if (w > 0) el.style.fontSize = `${(100 * avail) / w}px`;
      window.dispatchEvent(new Event("hero:layout"));
    };
    fit();
    document.fonts?.ready.then(fit);
    const ro = new ResizeObserver(fit);
    ro.observe(parent);
    return () => ro.disconnect();
  }, []);

  return (
    <h1 ref={ref} {...rest} style={{ ...style, width: "max-content", fontSize: "14vw" }}>
      {children}
    </h1>
  );
}
