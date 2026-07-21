"use client";

import { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";
import { motion } from "motion/react";

interface VideoCardProps {
  src: string;
  onClick: () => void;
}

export default function VideoCard({
  src,
  onClick,
}: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [duration, setDuration] = useState("0:00");

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    const handleLoaded = () => {
      const total = Math.floor(video.duration);

      const min = Math.floor(total / 60);

      const sec = total % 60;

      setDuration(
        `${min}:${sec.toString().padStart(2, "0")}`
      );
    };

    video.addEventListener("loadedmetadata", handleLoaded);

    return () =>
      video.removeEventListener(
        "loadedmetadata",
        handleLoaded
      );
  }, []);

  return (
    <button
      onClick={onClick}
      className="
      relative
      group
      overflow-hidden
      rounded-3xl
      aspect-[9/16]
      w-full
      cursor-pointer
      bg-black
      "
    >
      <motion.video
      layoutId={src}
        ref={videoRef}
        src={src}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="
        h-full
        w-full
        object-cover
        transition-transform
        duration-500
        group-hover:scale-[1.03]
        "
      />

      {/* Gradient */}

      <div
        className="
        absolute
        inset-0
        bg-gradient-to-t
        from-black/60
        via-transparent
        to-transparent
        "
      />

      {/* Play Button */}

      <div
        className="
        absolute
        inset-0
        flex
        items-center
        justify-center
        "
      >
        <div
          className="
          h-16
          w-16
          rounded-full
          border
          border-white/20
          bg-white/10
          backdrop-blur-xl
          flex
          items-center
          justify-center
          transition
          duration-300
          group-hover:scale-110
          "
        >
          <Play
            className="ml-1 text-white"
            size={28}
            fill="white"
          />
        </div>
      </div>

      {/* Duration */}

      <div
        className="
        absolute
        bottom-4
        left-4
        rounded-full
        bg-black/30
        px-3
        py-1
        text-sm
        font-medium
        text-white
        backdrop-blur-md
        "
      >
        {duration}
      </div>
    </button>
  );
}