"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Star = {
  id: number;
  top: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
};

export default function Stars() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generatedStars = Array.from({ length: 120 }, (_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: 2 + Math.random() * 3,
      delay: Math.random() * 5,
    }));

    setStars(generatedStars);
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
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.4, 1],
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