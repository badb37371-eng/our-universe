"use client";

import { useState } from "react";

import { useAudio } from "../music/AudioProvider";

import VideoCard from "./VideoCard";
import VideoModal from "./VideoModal";

import { videos } from "@/data/videos";

export default function VideoGallery() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const { fadeOutAndPause } = useAudio();

  const handleOpenVideo = async (src: string) => {
    await fadeOutAndPause();
    setSelectedVideo(src);
  };

  return (
    <>
      <section className="mx-auto max-w-7xl px-6 py-24">
        {/* Heading */}

        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold">
            Our Memories in Motion
          </h2>

          <p className="mt-4 text-white/70">
            Some moments are better felt than told.
          </p>
        </div>

        {/* Grid */}

        <div
          className="
            grid
            gap-8
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
          "
        >
          {videos.map((video) => (
            <VideoCard
              key={video.id}
              src={video.src}
              onClick={() => handleOpenVideo(video.src)}
            />
          ))}
        </div>
      </section>

      <VideoModal
        video={selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />
    </>
  );
}