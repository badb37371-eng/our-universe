"use client";

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  ReactNode,
} from "react";

type AudioContextType = {
  audioRef: React.RefObject<HTMLAudioElement | null>;

  playing: boolean;
  setPlaying: (v: boolean) => void;

  playerVisible: boolean;
  setPlayerVisible: (v: boolean) => void;

  currentTime: number;
  duration: number;

  seek: (time: number) => void;

  volume: number;
  setVolume: (v: number) => void;
};

const AudioContext = createContext<AudioContextType | null>(null);

export function useAudio() {
  const ctx = useContext(AudioContext);

  if (!ctx) {
    throw new Error("useAudio must be used inside AudioProvider");
  }

  return ctx;
}

export default function AudioProvider({
  children,
}: {
  children: ReactNode;
}) {
  const audioRef = useRef<HTMLAudioElement>(null);

  // Player state
  const [playing, setPlaying] = useState(false);
  const [playerVisible, setPlayerVisible] = useState(false);

  // Audio data
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  // Volume
  const [volume, setVolume] = useState(0.45);

  // Play / Pause
  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.volume = volume;

    if (playing) {
      audio.play().catch(() => {});
    } else {
      audio.pause();
    }
  }, [playing, volume]);

  // Time Update
  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    const update = () => {
      setCurrentTime(audio.currentTime);
      setDuration(audio.duration || 0);
    };

    audio.addEventListener("timeupdate", update);
    audio.addEventListener("loadedmetadata", update);

    return () => {
      audio.removeEventListener("timeupdate", update);
      audio.removeEventListener("loadedmetadata", update);
    };
  }, []);

  // Seek
  const seek = (time: number) => {
    if (!audioRef.current) return;

    audioRef.current.currentTime = time;
    setCurrentTime(time);
  };

  return (
    <AudioContext.Provider
      value={{
        audioRef,

        playing,
        setPlaying,

        playerVisible,
        setPlayerVisible,

        currentTime,
        duration,

        seek,

        volume,
        setVolume,
      }}
    >
      <audio
        ref={audioRef}
        src="/music/perfect.mp3"
        preload="auto"
        loop
      />

      {children}
    </AudioContext.Provider>
  );
}