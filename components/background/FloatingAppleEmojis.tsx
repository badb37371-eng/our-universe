"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Emoji from "@/components/ui/Emoji";
import { useAudio } from "@/components/music/AudioProvider";

const emojis = [
  "heart",
  "pinkHeart",
  "flower",
  "rose",
  "sparkles",
  "stars",
  "butterfly",
  "moon",
  "cloud",
  "hibiscus",
  "tulip",
  "rainbow",
  "leaf",
] as const;

export default function FloatingAppleEmojis() {
  const { playing } = useAudio();

  const total = playing ? 36 : 14;

type FloatingEmoji = {
  emoji: (typeof emojis)[number];
  left: number;
  top: number;
  duration: number;
  size: number;
  delay: number;
};

const [floatingEmojis, setFloatingEmojis] = useState<FloatingEmoji[]>([]);

useEffect(() => {
  const generated = Array.from({ length: total }).map((_, i) => ({
    emoji: emojis[i % emojis.length],
    left: Math.random() * 100,
    top: Math.random() * 100,
    duration: 4 + Math.random() * 6,
    size: 18 + Math.random() * 20,
    delay: i * 0.15,
  }));

  setFloatingEmojis(generated);
}, [total]);

if (floatingEmojis.length === 0) return null;

  return (
    <>
      {floatingEmojis.map((item, i) => {
       const emoji = item.emoji;

        return (
          <motion.div
            key={i}
            className="pointer-events-none fixed z-[2]"
            style={{
              left: `${item.left}%`,
              top: `${item.top}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-8, 8, -8],
              rotate: [-15, 15, -15],
              opacity: playing
                ? [0.45, 1, 0.45]
                : [0.25, 0.55, 0.25],
              scale: playing
                ? [0.9, 1.25, 0.9]
                : [0.8, 1, 0.8],
            }}
            transition={{
              duration: item.duration,
              repeat: Infinity,
               delay: item.delay,
            }}
          >
            <Emoji
              name={emoji}
              size={item.size}
            />
          </motion.div>
        );
      })}
    </>
  );
}