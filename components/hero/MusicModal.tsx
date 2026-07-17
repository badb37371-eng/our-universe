"use client";

import { motion } from "framer-motion";
import Emoji from "@/components/ui/Emoji";
import { useAudio } from "@/components/music/AudioProvider";

type Props = {
  onPlay: () => void;
  onSkip: () => void;
};

export default function MusicModal({
  onPlay,
  onSkip,
}: Props) {
  const {
  setPlaying,
  setPlayerVisible,
} = useAudio();

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-xl px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        initial={{ scale: 0.9, y: 30 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-md rounded-[36px] border border-white/10 bg-white/10 p-8 backdrop-blur-3xl"
      >
        <div className="flex justify-center">
          <Emoji
            name="headphones"
            size={70}
          />
        </div>

        <h2 className="heading-font mt-6 text-center text-4xl text-white">
          Before We Begin...
        </h2>

        <div className="mt-8 space-y-5 text-center text-lg leading-8 text-gray-300">

          <div className="flex items-center justify-center gap-2">
            <Emoji name="pleading" size={22} />
            <span>There's a song...</span>
          </div>

          <div className="flex items-center justify-center gap-2">
            <Emoji name="heart" size={22} />
            <span>that always reminds me of us.</span>
          </div>

          <div className="flex items-center justify-center gap-2">
            <Emoji name="sparkles" size={22} />
            <span>
              Would you like to hear it while exploring our little universe?
            </span>
          </div>

        </div>

        <button
          onClick={() => {
  setPlaying(true);
  setPlayerVisible(true);
  onPlay();
}}
          className="mt-10 w-full rounded-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500 py-4 font-bold text-white shadow-[0_0_35px_rgba(236,72,153,.35)] transition hover:scale-[1.02]"
        >
          <span className="flex items-center justify-center gap-3">
            <Emoji name="music" size={22} />
            <span>Play "Perfect"</span>
            <Emoji name="heart" size={22} />
          </span>
        </button>

        <button
          onClick={onSkip}
          className="mt-4 w-full rounded-full border border-white/20 py-4 text-white transition hover:bg-white/5"
        >
          <span className="flex items-center justify-center gap-3">
            <Emoji name="cloud" size={20} />
            <span>Maybe Later</span>
          </span>
        </button>
      </motion.div>
    </motion.div>
  );
}