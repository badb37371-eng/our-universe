"use client";

import { motion } from "framer-motion";

export default function Background() {
  return (
    <>
      {/* Base Space Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B1022] via-[#050816] to-black" />

      {/* Pink Nebula */}
      <motion.div
        animate={{
          x: [-35, 35, -35],
          y: [-25, 25, -25],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 32,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-[-180px]
          top-[8%]
          h-[520px]
          w-[520px]
          rounded-full
          bg-pink-500/12
          blur-[180px]
        "
      />

      {/* Purple Nebula */}
      <motion.div
        animate={{
          x: [30, -30, 30],
          y: [-20, 20, -20],
          scale: [1.05, 1, 1.05],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          right-[-220px]
          top-[15%]
          h-[620px]
          w-[620px]
          rounded-full
          bg-violet-500/10
          blur-[220px]
        "
      />

      {/* Blue Nebula */}
      <motion.div
        animate={{
          x: [-30, 30, -30],
          y: [20, -20, 20],
          scale: [1, 1.06, 1],
        }}
        transition={{
          duration: 45,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-[-220px]
          left-1/2
          h-[700px]
          w-[700px]
          -translate-x-1/2
          rounded-full
          bg-sky-500/8
          blur-[240px]
        "
      />

      {/* Soft Center Glow */}
      <motion.div
        animate={{
          opacity: [0.05, 0.12, 0.05],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-1/2
          top-1/2
          h-[500px]
          w-[500px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-white
          blur-[220px]
        "
      />
    </>
  );
}