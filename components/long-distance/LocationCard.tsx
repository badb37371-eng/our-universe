"use client";

import { motion } from "motion/react";

interface LocationCardProps {
  emoji: string;
  title: string;
  subtitle: string;
}

export default function LocationCard({
  emoji,
  title,
  subtitle,
}: LocationCardProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
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

        p-6

        backdrop-blur-2xl

        transition-all
        duration-500

        hover:border-pink-400/20
        hover:bg-white/10

        shadow-[0_20px_60px_rgba(255,255,255,0.05)]
        hover:shadow-[0_25px_80px_rgba(255,105,180,0.15)]
      "
    >
      {/* Glow */}
      <div
        className="
          absolute
          inset-0

          opacity-0

          transition-opacity
          duration-500

          group-hover:opacity-100

          bg-gradient-to-br
          from-pink-500/10
          via-transparent
          to-purple-500/10
        "
      />

      {/* Emoji */}
      <motion.div
        whileHover={{
          scale: 1.15,
          rotate: 8,
        }}
        className="
          relative
          z-10

          text-4xl
        "
      >
        {emoji}
      </motion.div>

      {/* Title */}
      <h3
        className="
          relative
          z-10

          mt-5

          text-xl

          font-semibold

          text-white
        "
      >
        {title}
      </h3>

      {/* Subtitle */}
      <p
        className="
          relative
          z-10

          mt-3

          text-sm
          sm:text-base

          leading-7

          text-white/70
        "
      >
        {subtitle}
      </p>

      {/* Bottom Accent */}
      <div
        className="
          relative
          z-10

          mt-6

          h-px
          w-16

          bg-gradient-to-r
          from-pink-400
          via-purple-400
          to-transparent
        "
      />
    </motion.div>
  );
}