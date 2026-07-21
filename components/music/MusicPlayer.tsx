"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import { useAudio } from "./AudioProvider";

import MiniPlayer from "./MiniPlayer";
import ExpandedPlayer from "./ExpandedPlayer";

export default function MusicPlayer() {
  const { playerVisible } = useAudio();

  const [expanded, setExpanded] = useState(false);

  if (!playerVisible) return null;

  return (
    <AnimatePresence mode="wait">
      {!expanded ? (
        <MiniPlayer
          key="mini"
          onExpand={() => setExpanded(true)}
        />
      ) : (
        <ExpandedPlayer
          key="expanded"
          onClose={() => setExpanded(false)}
        />
      )}
    </AnimatePresence>
  );
}