"use client";

import { motion } from "framer-motion";
import Emoji from "@/components/ui/Emoji";
import { useAudio } from "./AudioProvider";

export default function VolumeSlider() {
  const {
    volume,
    setVolume,
  } = useAudio();

  return (
    <div className="flex items-center gap-4">

      <motion.div
        whileHover={{ scale: 1.1 }}
      >
        <Emoji
          name="music"
          size={22}
        />
      </motion.div>

      <div
        className="
          relative
          h-2.5
          flex-1
          cursor-pointer
          rounded-full
          bg-white/10
          overflow-hidden
        "
        onClick={(e) => {
          const rect =
            e.currentTarget.getBoundingClientRect();

          const percent =
            (e.clientX - rect.left) / rect.width;

          setVolume(percent);
        }}
      >

        {/* Filled */}

        <motion.div
          animate={{
            width: `${volume * 100}%`,
          }}
          transition={{
            duration: 0.2,
          }}
          className="
            absolute
            inset-y-0
            left-0
            rounded-full
            bg-gradient-to-r
            from-pink-500
            via-fuchsia-500
            to-purple-500
          "
        />

        {/* Thumb */}

        <motion.div
          animate={{
            left: `${volume * 100}%`,
          }}
          transition={{
            duration: 0.2,
          }}
          className="
            absolute
            top-1/2
            h-5
            w-5
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border
            border-white/20
            bg-white
            shadow-lg
          "
        />

      </div>

      <span className="w-10 text-right text-sm text-white/70">
        {Math.round(volume * 100)}%
      </span>

    </div>
  );
}