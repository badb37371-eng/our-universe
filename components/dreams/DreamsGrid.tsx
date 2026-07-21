"use client";

import DreamCard from "./DreamCard";
import { dreams } from "./data";

export default function DreamsGrid() {
  return (
    <div
      className="
        grid
        grid-cols-1

        gap-6

        sm:grid-cols-2

        xl:grid-cols-3

        xl:gap-8
      "
    >
      {dreams.map((dream, index) => (
        <DreamCard
          key={dream.id}
          dream={dream}
          index={index}
        />
      ))}
    </div>
  );
}