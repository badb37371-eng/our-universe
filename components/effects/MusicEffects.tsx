"use client";

import { motion } from "framer-motion";
import { useAudio } from "@/components/music/AudioProvider";

export default function MusicEffects() {
  const { playing } = useAudio();

  return (
    <motion.div
      animate={{
        opacity: playing ? 1 : 0.45,
      }}
      transition={{
        duration: 2,
      }}
      className="
        pointer-events-none
        fixed
        inset-0
        z-[1]
      "
    >

      {/* Pink Glow */}

      <motion.div
        animate={{
          scale: playing
            ? [1, 1.15, 1]
            : 1,

          opacity: playing
            ? [0.18, 0.35, 0.18]
            : 0.08,
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
        }}
        className="
          absolute
          left-1/2
          top-0
          h-[700px]
          w-[700px]
          -translate-x-1/2
          rounded-full
          bg-pink-500
          blur-[170px]
        "
      />

      {/* Purple */}

      <motion.div
        animate={{
          scale: playing
            ? [1, 1.2, 1]
            : 1,

          opacity: playing
            ? [0.10, 0.22, 0.10]
            : 0.04,
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
        }}
        className="
          absolute
          bottom-0
          right-0
          h-[500px]
          w-[500px]
          rounded-full
          bg-fuchsia-500
          blur-[160px]
        "
      />

    </motion.div>
  );
}