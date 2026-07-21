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
  scale: 1.04,
  y: -4,
  boxShadow: "0 18px 60px rgba(236,72,153,0.45)",
}}
      whileTap={{
  scale: 0.96,
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
        shadow-[0_12px_40px_rgba(236,72,153,.30)]
hover:shadow-[0_18px_60px_rgba(236,72,153,.45)]
transition-all
duration-500
        ${className}
      `}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500/70 via-fuchsia-500/60 to-purple-500/70" />

      {/* Premium Shine */}
<motion.div
  className="
    absolute
    top-0
    left-[-40%]
    h-full
    w-20
    -skew-x-12
    bg-gradient-to-r
    from-transparent
    via-white/50
    to-transparent
    blur-lg
    pointer-events-none
  "
  animate={{
    x: ["0%", "700%"],
    opacity: [0, 1, 1, 0],
  }}
  transition={{
    duration: 4,
    repeat: Infinity,
    repeatDelay: 3,
    ease: "easeInOut",
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