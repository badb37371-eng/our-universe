"use client";

import PlaylistHeader from "./PlaylistHeader";
import SongCard from "./SongCard";

import { playlist } from "./playlist-data";

export default function PlaylistSection() {
  return (
    <section
      id="playlist"
      className="
        relative

        py-28

        px-6
      "
    >
      <PlaylistHeader />

      <div
        className="
          mx-auto
          mt-16
          max-w-7xl

          grid

          gap-8

          sm:grid-cols-2

          lg:grid-cols-4
        "
      >
        {playlist.map((song, index) => (
          <SongCard
            key={song.src}
            song={song}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}