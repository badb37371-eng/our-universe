"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
};

export default function LiquidButton({
  children,
  onClick,
  className = "",
}: Props) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{
        scale: 1.03,
        y: -2,
      }}
      whileTap={{
        scale: 0.98,
      }}
      className={`
        relative
        overflow-hidden
        rounded-full
        border
        border-white/20
        bg-white/10
        backdrop-blur-[30px]
        px-8
        py-4
        font-semibold
        text-white
        shadow-[0_10px_40px_rgba(236,72,153,.25)]
        transition-all
        duration-300
        ${className}
      `}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500/70 via-fuchsia-500/60 to-purple-500/70" />

      {/* Animated Shine */}
      <motion.div
        className="absolute top-0 left-[-30%] h-full w-1/4 bg-white/30 blur-xl"
        animate={{
          x: ["0%", "500%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Top highlight */}
      <div className="absolute inset-x-0 top-0 h-px bg-white/60" />

      {/* Button text */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </motion.button>
  );
}