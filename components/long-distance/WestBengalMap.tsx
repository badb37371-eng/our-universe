"use client";

import { motion } from "motion/react";

import { routeInfo } from "./data";
import RouteAnimation from "./RouteAnimation";

export default function WestBengalMap() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.95,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
      }}
      className="
        relative
        mx-auto

        w-full
        max-w-5xl

        overflow-hidden

        rounded-[32px]

        border
        border-white/10

        bg-white/5

        p-6
        sm:p-10

        backdrop-blur-3xl

        shadow-[0_30px_80px_rgba(255,255,255,0.08)]
      "
    >
      {/* Background Glow */}
      <div
        className="
          absolute
          inset-0

          bg-gradient-to-br
          from-pink-500/5
          via-transparent
          to-purple-500/10
        "
      />

      {/* SVG */}
      <svg
        viewBox="0 0 100 100"
        className="relative z-10 h-[320px] w-full"
      >
        {/* Decorative Grid */}
        <defs>
          <pattern
            id="grid"
            width="10"
            height="10"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M10 0H0V10"
              fill="none"
              stroke="rgba(255,255,255,0.05)"
              strokeWidth="0.3"
            />
          </pattern>
        </defs>

        <rect
          width="100"
          height="100"
          fill="url(#grid)"
        />

        {/* Route */}
        <RouteAnimation
          fromX={routeInfo.from.x}
          fromY={routeInfo.from.y}
          toX={routeInfo.to.x}
          toY={routeInfo.to.y}
        />

        {/* Aranghata */}
        <motion.circle
          cx={routeInfo.from.x}
          cy={routeInfo.from.y}
          r="3"
          fill="#fb7185"
          animate={{
            scale: [1, 1.35, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />

        {/* Naihati */}
        <motion.circle
          cx={routeInfo.to.x}
          cy={routeInfo.to.y}
          r="3"
          fill="#a855f7"
          animate={{
            scale: [1, 1.35, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: 1,
          }}
        />

        {/* Labels */}
        <text
          x={routeInfo.from.x - 12}
          y={routeInfo.from.y - 6}
          fill="white"
          fontSize="4"
        >
          📍 Aranghata
        </text>

        <text
          x={routeInfo.to.x - 8}
          y={routeInfo.to.y - 6}
          fill="white"
          fontSize="4"
        >
          ❤️ Naihati
        </text>
      </svg>

      {/* Caption */}
      <div className="relative z-10 mt-6 text-center">
        <p className="text-white/70 text-sm sm:text-base">
          No matter how far the road is,
          <br />
          my heart always knows the way back to you. ❤️
        </p>
      </div>
    </motion.div>
  );
}