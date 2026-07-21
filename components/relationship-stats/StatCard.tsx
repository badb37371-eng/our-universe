"use client";

import { motion } from "motion/react";
import Counter from "./Counter";
import type { Stat } from "./types";

interface StatCardProps {
  stat: Stat;
  index: number;
}

export default function StatCard({
  stat,
  index,
}: StatCardProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
        scale: 0.95,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
      }}
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      className="
        group
        relative
        overflow-hidden

        rounded-3xl

        border
        border-white/10

        bg-white/5

        backdrop-blur-2xl

        p-8

        shadow-xl

        transition-all
        duration-300
      "
    >
      {/* Glow */}
      <div
        className="
          absolute
          inset-0

          opacity-0

          transition-opacity
          duration-300

          group-hover:opacity-100

          bg-gradient-to-br
          from-pink-500/10
          via-white/5
          to-transparent
        "
      />

      <div className="relative z-10">
        {/* Emoji */}
        <div className="text-5xl mb-6">
          {stat.emoji}
        </div>

        {/* Number */}
        <h3
          className="
            text-4xl
            font-bold
            text-white
          "
        >
          <Counter
            value={stat.value}
            suffix={stat.suffix}
          />
        </h3>

        {/* Title */}
        <p
          className="
            mt-3

            text-white/70

            text-lg
          "
        >
          {stat.title}
        </p>
      </div>
    </motion.div>
  );
}