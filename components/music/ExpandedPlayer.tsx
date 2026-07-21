"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useAudio } from "./AudioProvider";
import GlassPlayer from "./GlassPlayer";
import WaveBars from "./WaveBars";
import ProgressBar from "./ProgressBar";
import VolumeSlider from "./VolumeSlider";

import {
  PlayIcon,
  PauseIcon,
  PreviousIcon,
  NextIcon,
  CloseIcon,
} from "./PlayerIcons";

import Emoji from "@/components/ui/Emoji";

interface Props {
  onClose: () => void;
}

export default function ExpandedPlayer({
  onClose,
}: Props) {
  const {
  playing,
  setPlaying,
  currentSong,
  previousSong,
  nextSong,
} = useAudio();

  return (
    <motion.div
      layoutId="music-player"
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.92 }}
      transition={{
        type: "spring",
        stiffness: 180,
        damping: 22,
      }}
      className="fixed bottom-6 right-6 z-[999]"
    >
      <GlassPlayer className="w-[360px] p-6">
        {/* Close */}
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
          >
            <CloseIcon className="h-5 w-5" />
          </button>
        </div>

        {/* Album */}
        <div className="relative mt-4 flex justify-center">
          {/* Ambient Glow */}
          <motion.div
            animate={{
              opacity: playing ? [0.18, 0.35, 0.18] : 0.12,
              scale: playing ? [1, 1.08, 1] : 1,
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
            }}
            className="absolute h-64 w-64 rounded-full bg-pink-500/20 blur-[70px]"
          />

          <motion.div
  animate={{
    rotate: playing ? 360 : 0,
    y: playing ? [-3, 3, -3] : 0,
  }}
  transition={{
    rotate: {
      duration: 20,
      repeat: Infinity,
      ease: "linear",
    },
    y: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  }}
  className="
    relative
    h-56
    w-56
    overflow-hidden
    rounded-full
    border
    border-white/20
    shadow-[0_0_70px_rgba(236,72,153,.25)]
  "
>

{/* Vinyl Grooves */}

<div className="absolute inset-0 rounded-full">

  {Array.from({ length: 18 }).map((_, i) => (
    <div
      key={i}
      className="absolute rounded-full border border-white/6"
      style={{
        inset: `${i * 8}px`,
      }}
    />
  ))}

</div>

            <Image
  src={currentSong.cover}
  alt={currentSong.title}
  fill
  sizes="(max-width: 768px) 100vw, 320px"
  className="object-cover"
/>

{/* Reflection */}

<motion.div
  animate={{
    rotate: 360,
  }}
  transition={{
    repeat: Infinity,
    duration: 12,
    ease: "linear",
  }}
  className="
    absolute
    inset-0
    rounded-full
    bg-gradient-to-tr
    from-transparent
    via-white/12
    to-transparent
    mix-blend-screen
  "
/>

            {/* Vinyl Center */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/25 bg-gradient-to-br from-neutral-800 to-black shadow-inner">
                <div className="h-3 w-3 rounded-full bg-zinc-300" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Song */}
        <div className="mt-8 text-center">
          <div className="flex items-center justify-center gap-2">
            <Emoji name="music" size={24} />

            <h2 className="text-3xl font-black tracking-tight text-white">
              {currentSong.title}
            </h2>
          </div>

          <div className="mt-3 flex items-center justify-center gap-2">
            <Emoji name="heart" size={20} />

            <p className="text-base font-medium text-pink-300">
              {currentSong.artist}
            </p>
          </div>
        </div>

        {/* Equalizer */}
        <WaveBars playing={playing} />

        {/* Progress */}
        <div className="mt-8">
          <ProgressBar />
        </div>

        {/* Controls */}
        <div className="mt-10 flex items-center justify-center gap-6">
          <motion.button
         whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
         onClick={previousSong}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 backdrop-blur-xl"
          >
            <PreviousIcon className="h-7 w-7 text-white" />
          </motion.button>

          <motion.button
  whileHover={{ scale: 1.08 }}
  whileTap={{ scale: 0.92 }}
  onClick={() => setPlaying(!playing)}
  className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 backdrop-blur-xl"
>
  {playing ? (
    <PauseIcon className="h-12 w-12 text-white" />
  ) : (
    <PlayIcon className="ml-1 h-12 w-12 text-white" />
  )}
</motion.button>

          <motion.button
  whileHover={{ scale: 1.08 }}
  whileTap={{ scale: 0.92 }}
  onClick={nextSong}
  className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 backdrop-blur-xl"
>
  <NextIcon className="h-7 w-7 text-white" />
</motion.button>
        </div>

        {/* Volume */}
        <div className="mt-8">
          <VolumeSlider />
        </div>

        {/* Status */}
        <div className="mt-8 flex items-center justify-center gap-2 text-sm text-pink-200">
          <Emoji name="sparkles" size={18} />

          <span>
            {playing ? "Playing our song..." : "Music paused"}
          </span>

          <Emoji name="heart" size={18} />
        </div>
      </GlassPlayer>
    </motion.div>
  );
}