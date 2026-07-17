"use client";

import { motion } from "framer-motion";
import { Pause, Play } from "lucide-react";

type MusicToggleProps = {
  isPlaying: boolean;
  onToggle: () => void;
};

export default function MusicToggle({
  isPlaying,
  onToggle,
}: MusicToggleProps) {
  return (
    <motion.button
      onClick={onToggle}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="
      fixed
      bottom-6
      right-6
      z-50
      flex
      h-14
      w-14
      items-center
      justify-center
      rounded-full
      border
      border-white/10
      bg-white/10
      backdrop-blur-xl
      shadow-2xl
      text-white"
    >
      {isPlaying ? (
        <Pause size={24} />
      ) : (
        <Play size={24} className="ml-1" />
      )}
    </motion.button>
  );
}