/* eslint-disable react-hooks/set-state-in-effect */

"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Emoji from "@/components/ui/Emoji";
import { useAudio } from "@/components/music/AudioProvider";

const emojis = [
  "heart",
  "pinkHeart",
  "sparkles",
  "butterfly",
  "moon",
  "rose",
] as const;

type FloatingEmoji = {
  emoji: (typeof emojis)[number];
  left: number;
  top: number;
  duration: number;
  size: number;
  delay: number;
};

export default function FloatingAppleEmojis() {
  const { playing } = useAudio();

  const total = playing ? 18 : 8;

  const [floatingEmojis, setFloatingEmojis] = useState<FloatingEmoji[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: total }).map((_, i) => {
  // Randomly choose left or right edge
  const isLeft = Math.random() < 0.5;

  const left = isLeft
    ? 2 + Math.random() * 12
    : 86 + Math.random() * 12;

  // Spread emojis evenly from top to bottom
  const top = 10 + Math.random() * 80;

  return {
    emoji: emojis[Math.floor(Math.random() * emojis.length)],
    left,
    top,
    duration: 8 + Math.random() * 8,
    size: 18 + Math.random() * 14,
    delay: i * 0.35,
  };
});

    setFloatingEmojis(generated);
  }, [total]);

  if (!floatingEmojis.length) return null;

  return (
    <>
      {floatingEmojis.map((item, i) => (
        <motion.div
          key={i}
          className="pointer-events-none fixed z-[2]"
          style={{
            left: `${item.left}%`,
            top: `${item.top}%`,
          }}
          animate={{
            y: [-10, 10, -10],
            x: [-4, 4, -4],
            rotate: [-6, 6, -6],
            opacity: playing
              ? [0.35, 0.75, 0.35]
              : [0.18, 0.45, 0.18],
            scale: playing
              ? [0.95, 1.1, 0.95]
              : [0.9, 1, 0.9],
          }}
          transition={{
            duration: item.duration,
            repeat: Infinity,
            delay: item.delay,
            ease: "easeInOut",
          }}
        >
          <Emoji name={item.emoji} size={item.size} />
        </motion.div>
      ))}
    </>
  );
}