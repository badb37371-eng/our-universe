"use client";

import { motion } from "motion/react";
import type { TimelineEvent } from "./types";

interface TimelineItemProps {
  event: TimelineEvent;
  index: number;
}

export default function TimelineItem({
  event,
  index,
}: TimelineItemProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: index % 2 === 0 ? -40 : 40,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
      }}
      className="relative flex gap-5"
    >
      {/* Timeline */}
      <div className="flex flex-col items-center">
        <div
          className="
            flex
            h-12
            w-12
            items-center
            justify-center

            rounded-full

            border
            border-pink-400/30

            bg-pink-500/10
            backdrop-blur-xl

            text-2xl
          "
        >
          {event.emoji}
        </div>

        {index !== 3 && (
          <div
            className="
              mt-2
              h-full
              w-[2px]

              bg-gradient-to-b
              from-pink-400/60
              to-transparent
            "
          />
        )}
      </div>

      {/* Card */}
      <motion.div
        whileHover={{
          y: -4,
          scale: 1.02,
        }}
        className="
          flex-1

          rounded-2xl
          border
          border-white/10

          bg-white/5

          backdrop-blur-xl

          p-5
          sm:p-6

          transition-all
          duration-300
        "
      >
        <p className="text-sm text-pink-300">
          {event.date}
        </p>

        <h3
          className="
            mt-2

            text-xl
            sm:text-2xl

            font-semibold
            text-white
          "
        >
          {event.title}
        </h3>

        <p
          className="
            mt-3

            text-sm
            sm:text-base

            leading-7

            text-white/70
          "
        >
          {event.description}
        </p>
      </motion.div>
    </motion.div>
  );
}