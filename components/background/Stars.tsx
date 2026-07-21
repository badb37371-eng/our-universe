"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Star = {
  id: number;
  top: number;
  left: number;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
};

export default function Stars() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: 160 }, (_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,

      // Three star sizes
      size:
        Math.random() < 0.65
          ? 1
          : Math.random() < 0.9
          ? 2
          : 3.5,

      // Different brightness
      opacity: 0.15 + Math.random() * 0.75,

      // Different twinkle speed
      duration: 3 + Math.random() * 7,

      delay: Math.random() * 6,
    }));

    setStars(generated);
  }, []);

  return (
    <>
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,

            // Soft glow
            boxShadow:
              star.size > 2
                ? "0 0 10px rgba(255,255,255,.8)"
                : "0 0 4px rgba(255,255,255,.35)",
          }}
          animate={{
            opacity: [
              star.opacity * 0.35,
              star.opacity,
              star.opacity * 0.35,
            ],
            scale: [1, 1.35, 1],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </>
  );
}