"use client";

import ReasonCard from "./ReasonCard";
import { reasons } from "./data";

export default function ReasonsGrid() {
  return (
    <div
      className="
        grid

        grid-cols-1

        gap-5

        sm:grid-cols-2

        lg:grid-cols-3

        lg:gap-7
      "
    >
      {reasons.map((reason, index) => (
        <ReasonCard
          key={reason.id}
          reason={reason}
          index={index}
        />
      ))}
    </div>
  );
}