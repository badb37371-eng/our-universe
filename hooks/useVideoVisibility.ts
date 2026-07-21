"use client";

import { useEffect, type RefObject } from "react";

export function useVideoVisibility(
  ref: RefObject<HTMLVideoElement | null>
) {
  useEffect(() => {
    const video = ref.current;

    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      {
        threshold: 0.6,
      }
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, [ref]);
}