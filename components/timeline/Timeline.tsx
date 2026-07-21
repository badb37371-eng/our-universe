"use client";

import { motion } from "motion/react";
import TimelineItem from "./TimelineItem";
import { timelineEvents } from "./data";

export default function Timeline() {
  return (
    <section
      id="timeline"
      className="
        relative
        mx-auto
        max-w-5xl

        px-5
        sm:px-6
        lg:px-8

        py-20
        md:py-28
      "
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-16 text-center"
      >
        <div className="mb-5 text-5xl">
          💕
        </div>

        <h2
          className="
            text-3xl
            sm:text-4xl
            md:text-5xl

            font-bold
            text-white
          "
        >
          Our Journey Together
        </h2>

        <p
          className="
            mx-auto
            mt-5
            max-w-2xl

            text-base
            sm:text-lg

            leading-8

            text-white/70
          "
        >
          Every chapter of our story has made us stronger,
          happier, and more grateful to have each other.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="space-y-10 md:space-y-12">
        {timelineEvents.map((event, index) => (
          <TimelineItem
            key={event.id}
            event={event}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}