
/* eslint-disable react-hooks/purity */

"use client";

import { motion } from "framer-motion";

export default function Fireflies() {
  return (
    <>
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-yellow-200"
          style={{
            width: 4,
            height: 4,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            opacity: [0.15, 1, 0.15],
            scale: [1, 1.8, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 3 + Math.random() * 5,
            delay: i * 0.2,
          }}
        />
      ))}
    </>
  );
}