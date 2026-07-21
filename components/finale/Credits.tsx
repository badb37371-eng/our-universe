"use client";

import { motion } from "motion/react";

export default function Credits() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 50,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 1,
      }}
      className="
        mx-auto
        mt-20

        max-w-2xl

        text-center
      "
    >
      <div
        className="
          rounded-3xl

          border
          border-white/10

          bg-white/5

          backdrop-blur-2xl

          p-8
          sm:p-10

          shadow-[0_20px_60px_rgba(255,255,255,0.08)]
        "
      >
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            rotate: [0, 8, -8, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="text-5xl"
        >
          ❤️
        </motion.div>

        <h3
          className="
            mt-6

            text-2xl
            sm:text-3xl

            font-bold

            text-white
          "
        >
          Thank You
        </h3>

        <p
          className="
            mt-5

            text-base
            sm:text-lg

            leading-8

            text-white/75
          "
        >
          Every smile,
          every laugh,
          every memory,
          every moment...
          <br />
          became a beautiful part of our story.
        </p>

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1,
          }}
          className="mt-10"
        >
          <p className="text-white/50 text-sm">
            Made with ❤️ by
          </p>

          <h4
            className="
              mt-2

              text-2xl

              font-semibold

              bg-gradient-to-r
              from-pink-400
              via-rose-300
              to-purple-400

              bg-clip-text

              text-transparent
            "
          >
            Abhijit
          </h4>

          <p className="mt-2 text-white/50 text-sm">
            for the love of his life,
          </p>

          <h4
            className="
              mt-1

              text-2xl

              font-semibold

              bg-gradient-to-r
              from-pink-300
              to-red-300

              bg-clip-text

              text-transparent
            "
          >
            Trisha ❤️
          </h4>
        </motion.div>

        <motion.p
          animate={{
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          className="
            mt-10

            text-sm

            tracking-[0.3em]

            uppercase

            text-white/40
          "
        >
          Forever • Together
        </motion.p>
      </div>
    </motion.div>
  );
}