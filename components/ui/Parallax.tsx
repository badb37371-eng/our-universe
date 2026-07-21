"use client";

import { useEffect } from "react";

export default function Parallax() {
  useEffect(() => {
    if ("ontouchstart" in window || navigator.maxTouchPoints > 0) return;

    let frame = 0;

    const move = (e: MouseEvent) => {
      cancelAnimationFrame(frame);

      frame = requestAnimationFrame(() => {
        const x = (e.clientX / window.innerWidth - 0.5) * 2;
        const y = (e.clientY / window.innerHeight - 0.5) * 2;

        document.querySelectorAll<HTMLElement>("[data-depth]").forEach((el) => {
          const depth = Number(el.dataset.depth);

          el.style.setProperty("--px", `${x * depth}px`);
          el.style.setProperty("--py", `${y * depth}px`);
        });
      });
    };

    window.addEventListener("mousemove", move);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return null;
}