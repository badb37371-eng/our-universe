"use client";

import { ReactNode, useEffect } from "react";
import Lenis from "lenis";

interface Props {
  children: ReactNode;
}

export default function SmoothScroll({
  children,
}: Props) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.3,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}