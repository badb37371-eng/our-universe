"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import { useAudio } from "./AudioProvider";

import MiniPlayer from "./MiniPlayer";
import ExpandedPlayer from "./ExpandedPlayer";

export default function MusicPlayer() {
  const {
    playing,
    setPlaying,
    playerVisible,
  } = useAudio();

  const [expanded, setExpanded] = useState(false);

  if (!playerVisible) return null;

  return (
    <AnimatePresence mode="wait">

      {!expanded ? (
        <MiniPlayer
          key="mini"
          playing={playing}
          onPlayPause={() => setPlaying(!playing)}
          onExpand={() => setExpanded(true)}
        />
      ) : (
        <ExpandedPlayer
          key="expanded"
          playing={playing}
          onPlayPause={() => setPlaying(!playing)}
          onClose={() => setExpanded(false)}
        />
      )}

    </AnimatePresence>
  );
}