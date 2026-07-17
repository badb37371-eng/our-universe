"use client";

import { motion } from "framer-motion";
import Emoji from "@/components/ui/Emoji";

type Props = {
  onContinue: () => void;
};

export default function WelcomeScene({ onContinue }: Props) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-40 flex items-center justify-center bg-[#050816]/80 backdrop-blur-xl px-8"
    >
      <motion.div
        initial={{ y: 40 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-md text-center"
      >
        {/* Heading */}
        <h1 className="heading-font text-5xl text-white flex flex-wrap items-center justify-center gap-3">
          <span>Hello Beautiful...</span>

          <Emoji
            name="pleading"
            size={48}
            className="inline-block"
          />

          <Emoji
            name="pinkHeart"
            size={48}
            className="inline-block"
          />
        </h1>

        {/* Description */}
        <div className="mt-8 space-y-4 text-lg text-gray-300 leading-8">

          <div className="flex items-center justify-center gap-2">
            <Emoji name="flower" size={24} />
            <span>I made something special for you...</span>
          </div>

          <div className="flex items-center justify-center gap-2">
            <Emoji name="heart" size={22} />
            <span>Every photo...</span>
          </div>

          <div className="flex items-center justify-center gap-2">
            <Emoji name="gift" size={22} />
            <span>Every memory...</span>
          </div>

          <div className="flex items-center justify-center gap-2">
            <Emoji name="sparkles" size={22} />
            <span>Every animation...</span>
          </div>

          <p className="pt-3">
            was made with love.
          </p>

        </div>

        {/* Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onContinue}
          className="mt-10 w-full rounded-full bg-gradient-to-r from-pink-500 to-purple-500 py-4 font-bold text-white shadow-[0_0_35px_rgba(236,72,153,.35)]"
        >
          <span className="flex items-center justify-center gap-3">
            <Emoji name="sparkles" size={22} />
            <span>Continue Our Journey</span>
            <Emoji name="heart" size={22} />
          </span>
        </motion.button>
      </motion.div>
    </motion.section>
  );
}