"use client";

import { motion } from "motion/react";

const stars = [
  { x: 50, y: 12 },
  { x: 66, y: 5 },
  { x: 82, y: 18 },
  { x: 84, y: 40 },
  { x: 68, y: 60 },
  { x: 50, y: 82 },
  { x: 32, y: 60 },
  { x: 16, y: 40 },
  { x: 18, y: 18 },
  { x: 34, y: 5 },
];

const lines = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 6],
  [6, 7],
  [7, 8],
  [8, 9],
  [9, 0],
];

export default function Constellation() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="mx-auto mt-20 flex justify-center"
    >
      <svg
        viewBox="0 0 100 100"
        className="h-[280px] w-[280px] sm:h-[360px] sm:w-[360px]"
      >
        {/* Connecting Lines */}
        {lines.map(([from, to], index) => (
          <motion.line
            key={index}
            x1={stars[from].x}
            y1={stars[from].y}
            x2={stars[to].x}
            y2={stars[to].y}
            stroke="rgba(255,255,255,0.35)"
            strokeWidth="0.7"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: 1,
              opacity: 1,
            }}
            transition={{
              delay: index * 0.18,
              duration: 0.6,
            }}
          />
        ))}

        {/* Stars */}
        {stars.map((star, index) => (
          <motion.circle
            key={index}
            cx={star.x}
            cy={star.y}
            r="1.8"
            fill="#ffffff"
            initial={{
              scale: 0,
              opacity: 0,
            }}
            animate={{
              scale: [0, 1.2, 1],
              opacity: [0, 1, 0.9],
            }}
            transition={{
              delay: index * 0.18,
              duration: 0.5,
            }}
          />
        ))}

        {/* Twinkling Glow */}
        {stars.map((star, index) => (
          <motion.circle
            key={`glow-${index}`}
            cx={star.x}
            cy={star.y}
            r="3.8"
            fill="white"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.05, 0.35, 0.05],
              scale: [1, 1.6, 1],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              delay: index * 0.15,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>
    </motion.div>
  );
}