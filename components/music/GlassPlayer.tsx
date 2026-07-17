"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export default function GlassPlayer({
  children,
  className = "",
}: Props) {
  return (
    <motion.div
      layout
      whileHover={{
        scale: 1.015,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 20,
      }}
      className={`
        relative
        overflow-hidden
        rounded-[42px]
        border
        border-white/15
        bg-white/[0.07]
        backdrop-blur-[55px]
        shadow-[0_35px_100px_rgba(0,0,0,.50)]
        ${className}
      `}
    >
      {/* Ambient Glow */}
      <motion.div
        animate={{
          opacity: [0.12, 0.22, 0.12],
          scale: [1, 1.08, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
        }}
        className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-pink-500 blur-[90px]"
      />

      <motion.div
        animate={{
          opacity: [0.10, 0.18, 0.10],
        }}
        transition={{
          repeat: Infinity,
          duration: 6,
        }}
        className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-purple-500 blur-[80px]"
      />

      {/* Moving Reflection */}
      <motion.div
        animate={{
          x: ["-120%", "160%"],
        }}
        transition={{
          repeat: Infinity,
          duration: 8,
          ease: "linear",
        }}
        className="
          absolute
          top-0
          h-full
          w-28
          rotate-12
          bg-gradient-to-r
          from-transparent
          via-white/18
          to-transparent
          blur-xl
        "
      />

      {/* Inner Shine */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          rounded-[42px]
          bg-gradient-to-br
          from-white/15
          via-white/5
          to-transparent
        "
      />

      {/* Inner Border */}
      <div className="absolute inset-[1px] rounded-[41px] border border-white/8" />

      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}