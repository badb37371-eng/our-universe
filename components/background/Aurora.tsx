"use client";

import { motion } from "framer-motion";

export default function Aurora() {
  return (
    <>
      <motion.div
        className="absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-fuchsia-500/20 blur-[140px]"
        animate={{
          x: [-80, 80, -80],
          y: [-30, 30, -30],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[140px]"
        animate={{
          x: [40, -40, 40],
          y: [30, -30, 30],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </>
  );
}