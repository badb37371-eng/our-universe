"use client";

import { motion } from "motion/react";

export default function Aurora() {
  return (
    <div className="absolute inset-0 -z-30 overflow-hidden">
      {/* Top Aurora */}
      <motion.div
        animate={{
          x: [-80, 80, -80],
          y: [-30, 30, -30],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute

          -top-40
          left-1/2

          h-[500px]
          w-[700px]

          -translate-x-1/2

          rounded-full

          bg-pink-500/20

          blur-[140px]
        "
      />

      {/* Left Glow */}
      <motion.div
        animate={{
          x: [-50, 50, -50],
          y: [20, -20, 20],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute

          left-0
          top-1/3

          h-[400px]
          w-[400px]

          rounded-full

          bg-purple-500/15

          blur-[120px]
        "
      />

      {/* Right Glow */}
      <motion.div
        animate={{
          x: [40, -40, 40],
          y: [-20, 20, -20],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute

          right-0
          bottom-0

          h-[420px]
          w-[420px]

          rounded-full

          bg-cyan-500/15

          blur-[130px]
        "
      />

      {/* Bottom Glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute

          bottom-[-180px]
          left-1/2

          h-[450px]
          w-[650px]

          -translate-x-1/2

          rounded-full

          bg-blue-500/15

          blur-[140px]
        "
      />

      {/* Soft Overlay */}
      <div
        className="
          absolute
          inset-0

          bg-gradient-to-b
          from-black/10
          via-transparent
          to-black/20
        "
      />
    </div>
  );
}