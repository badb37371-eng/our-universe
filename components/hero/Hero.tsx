"use client";

import { useAudio } from "@/components/music/AudioProvider";
import { motion } from "framer-motion";
import GlassCard from "../ui/GlassCard";
import Emoji from "@/components/ui/Emoji";

export default function Hero() {
  const { playing } = useAudio();

  return (
  
    <section className="relative z-20 flex min-h-screen flex-col items-center justify-center overflow-hidden px-6">

      {/* Floating Emoji Row */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{
          opacity: 1,
          y: [0, -8, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="mb-10 flex flex-wrap items-center justify-center gap-5"
      >
        <Emoji name="heart" size={44} />
        <Emoji name="flower" size={42} />
        <Emoji name="pleading" size={42} />
        <Emoji name="sparkles" size={42} />
        <Emoji name="moon" size={42} />
      </motion.div>

      {/* Hero Card */}
      <motion.div
        initial={{
          opacity: 0,
          y: 80,
          scale: 0.92,
        }}
        animate={{
  opacity: 1,
  y: 0,
  scale: playing
    ? [1, 1.015, 1]
    : 1,
}}
transition={{
  duration: 4,
  repeat: Infinity,
}}
      >
        <GlassCard />
      </motion.div>

    </section>
  );
}