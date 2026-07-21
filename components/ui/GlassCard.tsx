"use client";

import { motion } from "framer-motion";
import AnimatedButton from "./AnimatedButton";
import Emoji from "@/components/ui/Emoji";
import LiquidGlass from "./LiquidGlass";

export default function GlassCard() {
  return (
    <motion.div
      animate={{
        y: [0, -8, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
      }}
    >
      <LiquidGlass className="relative w-full max-w-md overflow-hidden p-10">

       

        {/* Top Title */}
        <div className="flex items-center justify-center gap-3 text-sm uppercase tracking-[0.45em] text-pink-300">
          <Emoji name="sparkles" size={18} />
          <span>Our Universe</span>
          <Emoji name="sparkles" size={18} />
        </div>

        {/* Heading */}
<h1
  className="
    heading-font
    mt-8
    text-center
    text-6xl
    md:text-7xl
    font-semibold
    tracking-tight
    leading-none
    text-white
    drop-shadow-[0_0_25px_rgba(255,255,255,0.15)]
  "
>
  Happy
</h1>

<h2
  className="
    heading-font
    mt-3
    text-center
    text-5xl
    md:text-6xl
    font-light
    tracking-wide
    bg-gradient-to-r
    from-pink-200
    via-white
    to-purple-200
    bg-clip-text
    text-transparent
  "
>
  3rd Anniversary
</h2>

        {/* Heart */}
        <motion.div
          className="mt-8 flex justify-center"
          animate={{
            scale: [1, 1.12, 1],
          }}
          transition={{
  duration: 2.2,
  repeat: Infinity,
  ease: "easeInOut",
}}
        >
          <Emoji name="heart" size={74} />
        </motion.div>

        {/* Messages */}
        <div className="mt-8 space-y-4 text-lg text-gray-200">

          <div className="flex items-center justify-center gap-3">
            <Emoji name="pleading" size={22} />
            <span>৩ বছর...</span>
          </div>

          <div className="flex items-center justify-center gap-3">
            <Emoji name="pinkHeart" size={22} />
            <span>হাজারো স্মৃতি...</span>
          </div>

          <div className="flex items-center justify-center gap-3">
            <Emoji name="sparkles" size={22} />
            <span>অসংখ্য হাসি...</span>
          </div>

          <div className="flex items-center justify-center gap-3">
            <Emoji name="flower" size={22} />
            <span>হাজারো ছোট ছোট মুহূর্ত...</span>
          </div>

          <div className="flex items-center justify-center gap-3">
            <Emoji name="cloud" size={22} />
            <span>আর এখনও প্রতিদিন তোমার প্রেমে পড়ি...</span>
          </div>

        </div>

        {/* Button */}
        <AnimatedButton />

        {/* Scroll Indicator */}
        <motion.div
          className="mt-10 flex justify-center"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
        >
          <span className="text-3xl text-pink-300">↓</span>
        </motion.div>

      </LiquidGlass>
    </motion.div>
  );
}