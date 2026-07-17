"use client";

import { useEffect, useRef } from "react";

type Props = {
  play: boolean;
};

export default function AudioPlayer({ play }: Props) {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.4;

    if (play) {
      audio.play().catch((err) => {
        console.log("Autoplay blocked:", err);
      });
    } else {
      audio.pause();
    }
  }, [play]);

  return (
    <audio
      ref={audioRef}
      src="/music/our-song.mp3"
      preload="auto"
      loop
    />
  );
}