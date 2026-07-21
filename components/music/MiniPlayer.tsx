"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useAudio } from "./AudioProvider";
import GlassPlayer from "./GlassPlayer";
import { PlayIcon, PauseIcon } from "./PlayerIcons";
import Emoji from "@/components/ui/Emoji";
import WaveBars from "./WaveBars";

interface Props {
  onExpand: () => void;
}

export default function MiniPlayer({
  onExpand,
}: Props) {
  const {
    playing,
    setPlaying,
    currentSong,
  } = useAudio();

  const onPlayPause = () => {
    setPlaying(!playing);
  };

  return (
    <motion.div
      layoutId="music-player"
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 80 }}
      transition={{
        type: "spring",
        stiffness: 180,
        damping: 20,
      }}
      className="fixed bottom-6 right-6 z-[999]"
    >
      <GlassPlayer className="w-[360px] cursor-pointer">

        <div
          onClick={onExpand}
          className="flex items-center justify-between p-4"
        >

          {/* Left */}
          <div className="flex items-center gap-4">

            <motion.div
              animate={{
                rotate: playing ? 360 : 0,
              }}
              transition={{
                repeat: Infinity,
                duration: 20,
                ease: "linear",
              }}
              className="relative h-16 w-16 overflow-hidden rounded-full border border-white/15"
            >
              <Image
  src={currentSong.cover}
  alt={currentSong.title}
  fill
  sizes="(max-width: 768px) 100vw, 320px"
  className="object-cover"
/>
            </motion.div>

            <div>

              <div className="flex items-center gap-2">

                <Emoji
                  name="music"
                  size={18}
                />

                <h3 className="font-semibold text-white">
                  {currentSong.title}
                </h3>

              </div>

              <div className="mt-1 flex items-center gap-2">

                <Emoji
                  name="heart"
                  size={16}
                />

                <div className="mt-1 flex items-center gap-2">
  <p className="text-sm text-pink-300">
    {currentSong.artist}
  </p>

  <WaveBars playing={playing} />
</div>

              </div>

            </div>

          </div>

          {/* Right */}

          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            onClick={(e) => {
              e.stopPropagation();
              onPlayPause();
            }}
            className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-full
              bg-gradient-to-br
              from-pink-500
              via-fuchsia-500
              to-purple-600
              shadow-[0_0_25px_rgba(236,72,153,.45)]
            "
          >
            {playing ? (
              <PauseIcon className="h-7 w-7 text-white" />
            ) : (
              <PlayIcon className="ml-1 h-7 w-7 text-white" />
            )}
          </motion.button>

        </div>

      </GlassPlayer>
    </motion.div>
  );
}