"use client";

import { motion } from "motion/react";
import type { LoveNote } from "./types";

interface NoteProps {
  note: LoveNote;
}

const variants = {
  glass: {
    card: `
      bg-white/10
      border-white/15
      shadow-[0_20px_60px_rgba(255,255,255,0.08)]
      hover:shadow-[0_25px_70px_rgba(255,255,255,0.15)]
    `,
  },

  rose: {
    card: `
      bg-pink-500/10
      border-pink-300/20
      shadow-[0_20px_60px_rgba(255,105,180,0.15)]
      hover:shadow-[0_25px_70px_rgba(255,105,180,0.25)]
    `,
  },

  midnight: {
    card: `
      bg-violet-500/10
      border-violet-300/20
      shadow-[0_20px_60px_rgba(139,92,246,0.15)]
      hover:shadow-[0_25px_70px_rgba(139,92,246,0.25)]
    `,
  },
};

export default function Note({ note }: NoteProps) {
  const style = variants[note.variant];

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
        rotate: note.rotation,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      animate={{
        y: [0, -10, 0],
        rotate: [
          note.rotation,
          note.rotation + 2,
          note.rotation,
        ],
      }}
      transition={{
        opacity: {
          duration: 0.6,
          delay: note.delay,
        },
        y: {
          duration: note.floatDuration,
          repeat: Infinity,
          ease: "easeInOut",
        },
        rotate: {
          duration: note.floatDuration + 2,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      whileHover={{
        scale: 1.05,
        rotate: 0,
      }}
      className={`
        group
        relative

        overflow-hidden

        rounded-3xl

        border

        backdrop-blur-2xl

        p-6

        transition-all
        duration-500

        ${style.card}
      `}
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
          from-white/10
          via-transparent
          to-pink-400/10
        "
      />

      {/* Emoji */}
      <motion.div
        whileHover={{
          scale: 1.2,
          rotate: 8,
        }}
        className="
          relative
          z-10

          text-3xl
        "
      >
        {note.emoji}
      </motion.div>

      {/* Message */}
      <p
        className="
          relative
          z-10

          mt-4

          text-base
          sm:text-lg

          font-medium

          leading-7

          text-white
        "
      >
        {note.message}
      </p>

      {/* Decorative line */}
      <div
        className="
          relative
          z-10

          mt-5

          h-px
          w-16

          bg-gradient-to-r
          from-pink-400
          to-transparent
        "
      />
    </motion.div>
  );
}