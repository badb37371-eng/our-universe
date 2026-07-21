"use client";

import { motion } from "motion/react";
import type { Reason } from "./types";

interface ReasonCardProps {
  reason: Reason;
  index: number;
}

export default function ReasonCard({
  reason,
  index,
}: ReasonCardProps) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
      }}
      whileHover={{
        y: -6,
        scale: 1.02,
      }}
      className="
        group
        relative
        overflow-hidden

        rounded-2xl
        md:rounded-3xl

        border
        border-white/10

        bg-white/5
        backdrop-blur-xl

        p-5
        sm:p-6
        md:p-8

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
          via-transparent
          to-purple-500/10
        "
      />

      <div className="relative z-10">
        {/* Emoji */}
        <div className="mb-5 text-4xl sm:text-5xl">
          {reason.emoji}
        </div>

        {/* Title */}
        <h3
          className="
            text-xl
            sm:text-2xl
            font-semibold
            text-white
          "
        >
          {reason.title}
        </h3>

        {/* Description */}
        <p
          className="
            mt-3
            text-sm
            sm:text-base
            leading-7
            text-white/70
          "
        >
          {reason.description}
        </p>
      </div>
    </motion.article>
  );
}