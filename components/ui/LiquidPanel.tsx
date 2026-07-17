"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function LiquidPanel({
  children,
  className = "",
}: Props) {
  return (
    <motion.div
      whileHover={{
        y: -4,
      }}
      transition={{
        duration: 0.35,
      }}
      className={`
        relative
        overflow-hidden
        rounded-[36px]
        border
        border-white/15
        bg-white/[0.06]
        backdrop-blur-[32px]
        shadow-[0_20px_80px_rgba(0,0,0,.35)]
        ${className}
      `}
    >
      {/* Border Glow */}
      <div className="absolute inset-0 rounded-[36px] border border-white/5" />

      {/* Top Highlight */}
      <div className="absolute inset-x-0 top-0 h-px bg-white/60" />

      {/* Bottom Glow */}
      <div className="absolute bottom-0 left-0 h-28 w-full bg-gradient-to-t from-pink-500/10 to-transparent" />

      {/* Animated Reflection */}
      <motion.div
        className="absolute -left-1/2 top-0 h-full w-1/3 -skew-x-12 bg-white/15 blur-2xl"
        animate={{
          x: ["0%", "500%"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}