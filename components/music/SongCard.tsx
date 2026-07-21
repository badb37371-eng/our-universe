"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { PlaylistSong } from "./playlist-data";
import { useAudio } from "./AudioProvider";
import { PlayIcon } from "./PlayerIcons";

interface Props {
  song: PlaylistSong;
  index: number;
}

export default function SongCard({ song, index }: Props) {
  const { currentIndex, playSong } = useAudio();

  const active = currentIndex === index;

  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      className={`
        group
        overflow-hidden
        rounded-3xl
        border
        backdrop-blur-xl
        transition-all

        ${
          active
            ? "border-pink-400 bg-pink-500/10"
            : "border-white/10 bg-white/5"
        }
      `}
    >
      <div className="relative aspect-square">
        <Image
          src={song.cover}
          alt={song.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

        <button
          onClick={() => playSong(index)}
          className="
            absolute
            bottom-5
            right-5
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-full
            bg-pink-500
            shadow-xl
          "
        >
          <PlayIcon className="ml-1 h-7 w-7 text-white" />
        </button>
      </div>

      <div className="p-5">
        <h3 className="text-xl font-bold text-white">
          {song.title}
        </h3>

        <p className="mt-2 text-pink-300">
          {song.artist}
        </p>

        <div className="mt-4 flex justify-between text-sm text-white/60">
          <span>{song.duration}</span>

          {active && (
            <span className="text-pink-400">
              Now Playing
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}