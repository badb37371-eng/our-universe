"use client";

import { motion } from "motion/react";

interface RouteAnimationProps {
  fromX: number;
  fromY: number;
  toX: number;
  toY: number;
}

export default function RouteAnimation({
  fromX,
  fromY,
  toX,
  toY,
}: RouteAnimationProps) {
  return (
    <>
      {/* Curved Route */}
      <motion.path
        d={`M ${fromX} ${fromY}
            Q ${(fromX + toX) / 2}
            ${Math.min(fromY, toY) - 18}
            ${toX} ${toY}`}
        fill="none"
        stroke="url(#routeGradient)"
        strokeWidth="3"
        strokeLinecap="round"
        initial={{
          pathLength: 0,
          opacity: 0,
        }}
        animate={{
          pathLength: 1,
          opacity: 1,
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
        }}
      />

      {/* Traveling Light */}
      <motion.circle
        r="5"
        fill="#ffffff"
        filter="url(#glow)"
      >
        <animateMotion
          dur="4s"
          repeatCount="indefinite"
          rotate="auto"
          path={`M ${fromX} ${fromY}
                 Q ${(fromX + toX) / 2}
                 ${Math.min(fromY, toY) - 18}
                 ${toX} ${toY}`}
        />
      </motion.circle>

      {/* SVG Definitions */}
      <defs>
        <linearGradient
          id="routeGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
        >
          <stop offset="0%" stopColor="#fb7185" />
          <stop offset="50%" stopColor="#ec4899" />
          <stop offset="100%" stopColor="#a855f7" />
        </linearGradient>

        <filter id="glow">
          <feGaussianBlur
            stdDeviation="4"
            result="coloredBlur"
          />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
    </>
  );
}