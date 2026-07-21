"use client";

import { motion } from "motion/react";
import type { Dream } from "./types";

interface DreamCardProps {
  dream: Dream;
  index: number;
}

export default function DreamCard({
  dream,
  index,
}: DreamCardProps) {
  return (
    <motion.article
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
      viewport={{
        once: true,
        amount: 0.3,
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
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

        p-6
        sm:p-7
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
          via-purple-500/5
          to-blue-500/10
        "
      />

      <div className="relative z-10">
        <div className="mb-5 text-5xl">
          {dream.emoji}
        </div>

        <h3
          className="
            text-2xl
            font-bold
            text-white
          "
        >
          {dream.title}
        </h3>

        <p
          className="
            mt-4

            text-sm
            sm:text-base

            leading-7

            text-white/70
          "
        >
          {dream.description}
        </p>
      </div>
    </motion.article>
  );
}