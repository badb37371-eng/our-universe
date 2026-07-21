"use client";

import { motion } from "motion/react";

interface FinalMessageProps {
  message: string;
}

export default function FinalMessage({
  message,
}: FinalMessageProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 60,
        scale: 0.95,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      transition={{
        duration: 0.9,
      }}
      className="
        mx-auto
        mt-16

        max-w-3xl
      "
    >
      <div
        className="
          relative

          overflow-hidden

          rounded-3xl

          border
          border-pink-400/20

          bg-white/5

          backdrop-blur-3xl

          p-8
          sm:p-10
          md:p-12

          text-center

          shadow-[0_20px_80px_rgba(255,105,180,0.15)]
        "
      >
        {/* Animated Glow */}
        <motion.div
          animate={{
            opacity: [0.25, 0.5, 0.25],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            inset-0

            bg-gradient-to-br
            from-pink-500/10
            via-purple-500/5
            to-blue-500/10
          "
        />

        <div className="relative z-10">
          <motion.div
            animate={{
              y: [-5, 5, -5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="mb-6 text-6xl"
          >
            ❤️
          </motion.div>

          <h3
            className="
              text-2xl
              sm:text-3xl
              md:text-4xl

              font-bold

              text-white
            "
          >
            Forever & Always
          </h3>

          <p
            className="
              mt-8

              text-base
              sm:text-lg

              leading-8

              text-white/80
            "
          >
            {message}
          </p>

          <motion.button
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.96,
            }}
            className="
              mt-10

              rounded-full

              border
              border-pink-400/20

              bg-pink-500/15

              px-8
              py-3

              font-medium

              text-white

              backdrop-blur-xl

              transition-all
              duration-300

              hover:bg-pink-500/25
            "
          >
            Continue Our Journey →
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}