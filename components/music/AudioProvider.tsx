"use client";

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  ReactNode,
} from "react";

import { playlist, PlaylistSong } from "./playlist-data";

type AudioContextType = {
  audioRef: React.RefObject<HTMLAudioElement | null>;

  playlist: PlaylistSong[];

  currentSong: PlaylistSong;

  currentIndex: number;

  playSong: (index: number) => void;

  nextSong: () => void;

  previousSong: () => void;

  playing: boolean;

  setPlaying: (v: boolean) => void;

  playerVisible: boolean;

  setPlayerVisible: (v: boolean) => void;

  currentTime: number;

  duration: number;

  seek: (time: number) => void;

  volume: number;

  setVolume: (v: number) => void;

  fadeOutAndPause: () => Promise<void>;

  fadeInAndResume: () => Promise<void>;
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

  const DEFAULT_VOLUME = 0.45;

  const [currentIndex, setCurrentIndex] = useState(0);

  const currentSong = playlist[currentIndex] ?? playlist[0];

  const [playing, setPlaying] = useState(false);

  const [playerVisible, setPlayerVisible] = useState(false);

  const [currentTime, setCurrentTime] = useState(0);

  const [duration, setDuration] = useState(0);

  const [volume, setVolume] = useState(DEFAULT_VOLUME);


  useEffect(() => {
  const audio = audioRef.current;

  if (!audio || !currentSong) return;

  audio.src = currentSong.src;
  audio.volume = volume;

  const loadAndPlay = async () => {
    audio.load();

    if (playing) {
      try {
        await audio.play();
      } catch (err) {
        console.error(err);
      }
    } else {
      audio.pause();
    }
  };

  loadAndPlay();
}, [currentSong, playing, volume]);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    const update = () => {
      setCurrentTime(audio.currentTime);

      setDuration(audio.duration || 0);
    };

    const ended = () => {
      nextSong();
    };

    audio.addEventListener("timeupdate", update);

    audio.addEventListener("loadedmetadata", update);

    audio.addEventListener("ended", ended);

    return () => {
      audio.removeEventListener("timeupdate", update);

      audio.removeEventListener("loadedmetadata", update);

      audio.removeEventListener("ended", ended);
    };
  }, [currentIndex]);

  function playSong(index: number) {
  setCurrentIndex(index);
  setPlayerVisible(true);
  setPlaying(true);
}

  function nextSong() {
  playSong((currentIndex + 1) % playlist.length);
}

  function previousSong() {
  playSong(
    currentIndex === 0
      ? playlist.length - 1
      : currentIndex - 1
  );
}

  function seek(time: number) {
    if (!audioRef.current) return;

    audioRef.current.currentTime = time;

    setCurrentTime(time);
  }

  async function fadeOutAndPause() {
    const audio = audioRef.current;

    if (!audio) return;

    const start = audio.volume;

    for (let i = 20; i >= 0; i--) {
      audio.volume = (start * i) / 20;

      await new Promise((r) => setTimeout(r, 25));
    }

    audio.pause();

    setPlaying(false);

    setPlayerVisible(false);

    audio.volume = start;
  }

  async function fadeInAndResume() {
    const audio = audioRef.current;

    if (!audio) return;

    setPlayerVisible(true);

    audio.volume = 0;

    setPlaying(true);

    try {
      await audio.play();
    } catch {}

    for (let i = 0; i <= 20; i++) {
      audio.volume = (DEFAULT_VOLUME * i) / 20;

      await new Promise((r) => setTimeout(r, 25));
    }
  }

  return (
    <AudioContext.Provider
      value={{
        audioRef,

        playlist,

        currentSong,

        currentIndex,

        playSong,

        nextSong,

        previousSong,

        playing,

        setPlaying,

        playerVisible,

        setPlayerVisible,

        currentTime,

        duration,

        seek,

        volume,

        setVolume,

        fadeOutAndPause,

        fadeInAndResume,
      }}
    >
      <audio ref={audioRef} preload="auto" />

      {children}
    </AudioContext.Provider>
  );
}