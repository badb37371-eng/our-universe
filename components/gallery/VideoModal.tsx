"use client";

import { useAudio } from "../music/AudioProvider";
import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";
import { useEffect } from "react";

interface VideoModalProps {
  video: string | null;
  onClose: () => void;
}

export default function VideoModal({
  video,
  onClose,
}: VideoModalProps) {
  const { fadeInAndResume } = useAudio();

  // ESC key support
  useEffect(() => {
    if (!video) return;

    const handler = async (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        await fadeInAndResume();
      }
    };

    window.addEventListener("keydown", handler);

    return () => {
      window.removeEventListener("keydown", handler);
    };
  }, [video, onClose, fadeInAndResume]);

  const handleClose = async () => {
    onClose();
    await fadeInAndResume();
  };

  return (
    <AnimatePresence>
      {video && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="
            fixed
            inset-0
            z-[999]
            flex
            items-center
            justify-center
            bg-black/80
            backdrop-blur-xl
          "
          onClick={handleClose}
        >
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="
              absolute
              top-6
              right-6
              z-20
              h-12
              w-12
              rounded-full
              bg-white/10
              backdrop-blur-xl
              border
              border-white/20
              flex
              items-center
              justify-center
            "
          >
            <X size={24} color="white" />
          </button>

          {/* Video */}
          <motion.video
            layoutId={video}
            src={video}
            controls
            autoPlay
            playsInline
            className="
              max-h-[90vh]
              max-w-[95vw]
              rounded-3xl
              shadow-2xl
            "
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}