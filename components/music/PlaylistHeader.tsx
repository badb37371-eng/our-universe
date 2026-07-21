"use client";

import { motion } from "framer-motion";
import Emoji from "@/components/ui/Emoji";

export default function PlaylistHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="mx-auto max-w-3xl text-center"
    >
      <div className="flex justify-center">
        <Emoji name="music" size={40} />
      </div>

      <h2 className="mt-6 text-4xl font-black text-white sm:text-5xl">
        Our Playlist
      </h2>

      <p className="mt-5 text-lg leading-8 text-white/70">
        Every song reminds me of a memory we&apos;ve created together.
      </p>
    </motion.div>
  );
}