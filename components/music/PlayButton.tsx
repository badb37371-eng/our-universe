"use client";

import { motion } from "framer-motion";

import { useAudio } from "./AudioProvider";
import { PlayIcon, PauseIcon } from "./PlayerIcons";

interface PlayButtonProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function PlayButton({
  className = "",
  size = "md",
}: PlayButtonProps) {
  const {
    playing,
    setPlaying,
    setPlayerVisible,
  } = useAudio();

  const sizes = {
    sm: {
      button: "h-10 w-10",
      icon: "h-5 w-5",
    },
    md: {
      button: "h-14 w-14",
      icon: "h-7 w-7",
    },
    lg: {
      button: "h-20 w-20",
      icon: "h-10 w-10",
    },
  };

  const current = sizes[size];

  const handleClick = () => {
    setPlayerVisible(true);
    setPlaying(!playing);
  };

  return (
    <motion.button
      whileHover={{
        scale: 1.08,
      }}
      whileTap={{
        scale: 0.92,
      }}
      onClick={handleClick}
      className={`
        ${current.button}

        flex
        items-center
        justify-center

        rounded-full

        bg-gradient-to-br
        from-pink-500
        via-fuchsia-500
        to-purple-600

        shadow-[0_0_35px_rgba(236,72,153,.45)]

        transition-all
        duration-300

        ${className}
      `}
    >
      {playing ? (
        <PauseIcon className={`${current.icon} text-white`} />
      ) : (
        <PlayIcon className={`${current.icon} ml-1 text-white`} />
      )}
    </motion.button>
  );
}