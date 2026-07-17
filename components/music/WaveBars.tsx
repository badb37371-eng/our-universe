"use client";

import { motion } from "framer-motion";

export default function WaveBars({
  playing,
}: {
  playing: boolean;
}) {
  return (
    <div className="mt-6 flex items-end justify-center gap-1 h-10">

      {[10, 18, 26, 16, 24, 30, 18, 12].map((h, i) => (
        <motion.div
          key={i}
          animate={{
            height: playing
              ? [h, h + 12, h]
              : h,
          }}
          transition={{
            repeat: Infinity,
            duration: 0.6 + i * 0.05,
          }}
          className="w-1 rounded-full bg-gradient-to-t from-pink-500 to-fuchsia-400"
        />
      ))}

    </div>
  );
}