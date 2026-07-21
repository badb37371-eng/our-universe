"use client";

import { motion } from "motion/react";

interface CapsuleProps {
  opened: boolean;
  onOpen: () => void;
}

export default function Capsule({
  opened,
  onOpen,
}: CapsuleProps) {
  return (
    <div className="flex justify-center">
      <motion.button
        type="button"
        onClick={onOpen}
        whileHover={
          !opened
            ? {
                scale: 1.05,
                y: -6,
              }
            : {}
        }
        whileTap={
          !opened
            ? {
                scale: 0.96,
              }
            : {}
        }
        animate={
          opened
            ? {
                scale: 1.08,
                rotate: 8,
                opacity: 0,
              }
            : {
                scale: [1, 1.03, 1],
              }
        }
        transition={
          opened
            ? {
                duration: 0.8,
              }
            : {
                duration: 2,
                repeat: Infinity,
              }
        }
        disabled={opened}
        className="
          group
          relative

          h-64
          w-64

          sm:h-72
          sm:w-72

          rounded-full

          border
          border-pink-300/20

          bg-white/10

          backdrop-blur-3xl

          shadow-[0_0_80px_rgba(255,105,180,0.18)]

          transition-all
          duration-300
        "
      >
        {/* Glow */}
        <div
          className="
            absolute
            inset-0

            rounded-full

            opacity-0

            transition-opacity
            duration-500

            group-hover:opacity-100

            bg-gradient-to-br
            from-pink-500/20
            via-purple-500/10
            to-blue-500/20
          "
        />

        {/* Floating shine */}
        <motion.div
          animate={{
            y: [-8, 8, -8],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute

            left-1/2
            top-5

            h-12
            w-12

            -translate-x-1/2

            rounded-full

            bg-white/20

            blur-xl
          "
        />

        <div
          className="
            relative

            flex
            h-full

            flex-col

            items-center
            justify-center
          "
        >
          {/* Lock */}
          <motion.div
            animate={{
              rotate: opened ? 25 : 0,
            }}
            transition={{
              duration: 0.5,
            }}
            className="text-6xl"
          >
            🔒
          </motion.div>

          <h3
            className="
              mt-6

              text-2xl

              font-bold

              text-white
            "
          >
            Memory Capsule
          </h3>

          <p
            className="
              mt-3

              px-6

              text-center

              text-sm

              leading-6

              text-white/70
            "
          >
            {opened
              ? "Opening..."
              : "Tap to unlock our most precious memories"}
          </p>

          {!opened && (
            <motion.div
              animate={{
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
              }}
              className="
                mt-6

                rounded-full

                bg-pink-500/20

                px-5

                py-2

                text-sm

                font-medium

                text-pink-200
              "
            >
              Tap to Open ❤️
            </motion.div>
          )}
        </div>
      </motion.button>
    </div>
  );
}