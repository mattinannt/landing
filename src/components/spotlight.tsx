"use client";

import { useEffect, useRef } from "react";

/**
 * Cursor spotlight: reveals a brighter copy of the background grid and a
 * soft glow around the pointer, trailing it with a slight easing. Only
 * activates for fine pointers (mouse/trackpad), so touch devices keep the
 * static background.
 */
export function Spotlight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    let animating = false;
    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const target = { ...pos };

    const render = () => {
      pos.x += (target.x - pos.x) * 0.14;
      pos.y += (target.y - pos.y) * 0.14;
      el.style.setProperty("--x", `${pos.x}px`);
      el.style.setProperty("--y", `${pos.y}px`);
      if (
        Math.abs(target.x - pos.x) > 0.5 ||
        Math.abs(target.y - pos.y) > 0.5
      ) {
        raf = requestAnimationFrame(render);
      } else {
        animating = false;
      }
    };

    const onMove = (e: PointerEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
      el.style.opacity = "1";
      if (!animating) {
        animating = true;
        raf = requestAnimationFrame(render);
      }
    };

    const onLeave = () => {
      el.style.opacity = "0";
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="spotlight-mask pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-500"
    >
      {/* Soft neon bloom behind the lines */}
      <div className="absolute inset-0 opacity-60 blur-[6px]">
        <div className="spotlight-grid absolute inset-0" />
      </div>
      {/* Crisp glowing grid lines */}
      <div className="spotlight-grid absolute inset-0 opacity-80" />
    </div>
  );
}
