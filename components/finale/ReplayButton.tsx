"use client";

import { motion } from "motion/react";
import { RotateCcw } from "lucide-react";

export default function ReplayButton() {
  const handleReplay = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.8,
      }}
      className="mt-20 flex justify-center pb-20"
    >
      <motion.button
        whileHover={{
          scale: 1.05,
        }}
        whileTap={{
          scale: 0.96,
        }}
        onClick={handleReplay}
        className="
          group
          relative

          flex
          items-center
          gap-3

          overflow-hidden

          rounded-full

          border
          border-white/10

          bg-white/5

          px-8
          py-4

          backdrop-blur-2xl

          shadow-[0_20px_60px_rgba(255,192,203,0.15)]

          transition-all
          duration-300

          hover:border-pink-400/30
          hover:bg-white/10
        "
      >
        {/* Animated Background */}
        <div
          className="
            absolute
            inset-0

            -translate-x-full

            bg-gradient-to-r
            from-transparent
            via-white/10
            to-transparent

            transition-transform
            duration-700

            group-hover:translate-x-full
          "
        />

        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
          className="relative z-10"
        >
          <RotateCcw
            size={22}
            className="text-pink-300"
          />
        </motion.div>

        <span
          className="
            relative
            z-10

            text-base
            sm:text-lg

            font-medium

            text-white
          "
        >
          Replay Our Journey
        </span>
      </motion.button>
    </motion.div>
  );
}