"use client";

import { motion } from "motion/react";

const fireflies = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  left: Math.random() * 100,
  top: Math.random() * 100,
  size: 4 + Math.random() * 6,
  duration: 8 + Math.random() * 8,
  delay: Math.random() * 6,
}));

export default function Fireflies() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-20 overflow-hidden">
      {fireflies.map((firefly) => (
        <motion.div
          key={firefly.id}
          initial={{
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            opacity: [0.15, 0.8, 0.15],
            scale: [0.8, 1.3, 0.8],
            x: [0, 25, -15, 10, 0],
            y: [0, -35, -60, -20, 0],
          }}
          transition={{
            duration: firefly.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: firefly.delay,
          }}
          style={{
            left: `${firefly.left}%`,
            top: `${firefly.top}%`,
            width: firefly.size,
            height: firefly.size,
          }}
          className="
            absolute

            rounded-full

            bg-yellow-300

            shadow-[0_0_20px_rgba(255,240,150,0.9)]
          "
        />
      ))}
    </div>
  );
}