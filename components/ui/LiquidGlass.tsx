"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function LiquidGlass({
  children,
  className = "",
}: Props) {
  return (
    <motion.div
      whileHover={{
        y: -4,
        scale: 1.01,
      }}
      transition={{
        duration: 0.35,
      }}
      className={`
        relative
        overflow-hidden
        rounded-[34px]
        border
        border-white/10
        bg-white/[0.07]
        backdrop-blur-[35px]
        shadow-[0_20px_80px_rgba(0,0,0,.35)]
        ${className}
      `}
    >
      {/* Background Glow */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-br
          from-white/15
          via-transparent
          to-white/5
          pointer-events-none
        "
      />

      {/* Glass Reflection */}
      <motion.div
        animate={{
          x: ["-120%", "120%"],
        }}
        transition={{
          repeat: Infinity,
          duration: 7,
          ease: "linear",
        }}
        className="
          absolute
          top-0
          left-0
          h-full
          w-1/3
          -skew-x-12
          bg-gradient-to-r
          from-transparent
          via-white/20
          to-transparent
          blur-xl
          pointer-events-none
        "
      />

      {/* Top Highlight */}
      <div
        className="
          absolute
          inset-x-0
          top-0
          h-px
          bg-white/40
        "
      />

      {/* Bottom Glow */}
      <div
        className="
          absolute
          bottom-0
          left-0
          h-20
          w-full
          bg-gradient-to-t
          from-pink-500/10
          to-transparent
          pointer-events-none
        "
      />

      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}