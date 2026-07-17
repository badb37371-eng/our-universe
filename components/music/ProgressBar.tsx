"use client";

import { motion } from "framer-motion";
import { useAudio } from "./AudioProvider";

function formatTime(sec: number) {
  if (!sec) return "0:00";

  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);

  return `${m}:${s.toString().padStart(2, "0")}`;
}

export default function ProgressBar() {
  const {
    currentTime,
    duration,
    seek,
  } = useAudio();

  const progress =
    duration > 0
      ? (currentTime / duration) * 100
      : 0;

  return (
    <div>

      {/* Progress */}

      <div
        onClick={(e) => {
          const rect =
            e.currentTarget.getBoundingClientRect();

          const percent =
            (e.clientX - rect.left) / rect.width;

          seek(percent * duration);
        }}
        className="
          relative
          h-2.5
          cursor-pointer
          overflow-hidden
          rounded-full
          bg-white/10
        "
      >

        {/* Filled */}

        <motion.div
          animate={{
            width: `${progress}%`,
          }}
          transition={{
            duration: 0.2,
          }}
          className="
            absolute
            left-0
            top-0
            h-full
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
            left: `${progress}%`,
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

      {/* Time */}

      <div className="mt-3 flex justify-between text-sm text-gray-300">

        <span>{formatTime(currentTime)}</span>

        <span>{formatTime(duration)}</span>

      </div>

    </div>
  );
}