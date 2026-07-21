"use client";

import { motion } from "motion/react";

import { routeInfo } from "./data";
import WestBengalMap from "./WestBengalMap";
import LocationCard from "./LocationCard";

export default function LongDistance() {
  return (
    <section
      id="long-distance"
      className="
        relative
        overflow-hidden

        py-28
        sm:py-36

        px-5
        sm:px-6
        lg:px-8
      "
    >
      {/* Heading */}
      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
        }}
        className="
          mx-auto
          max-w-3xl

          text-center
        "
      >
        <div className="text-5xl">
          🗺️
        </div>

        <h2
          className="
            mt-6

            text-3xl
            sm:text-5xl

            font-bold

            text-white
          "
        >
          {routeInfo.title}
        </h2>

        <p
          className="
            mt-6

            text-base
            sm:text-lg

            leading-8

            text-white/70
          "
        >
          {routeInfo.subtitle}
        </p>
      </motion.div>

      {/* Map */}
      <div className="mt-20">
        <WestBengalMap />
      </div>

      {/* Cards */}
      <div
        className="
          mt-16

          grid

          gap-6

          sm:grid-cols-2
          lg:grid-cols-4
        "
      >
        <LocationCard
          emoji="🏡"
          title={routeInfo.from.name}
          subtitle={routeInfo.from.subtitle}
        />

        <LocationCard
          emoji="❤️"
          title={routeInfo.to.name}
          subtitle={routeInfo.to.subtitle}
        />

        <LocationCard
          emoji="📅"
          title="Together Since"
          subtitle="22 July 2023"
        />

        <LocationCard
          emoji="♾️"
          title="Forever Connected"
          subtitle="Connected by Love, Not by Distance."
        />
      </div>
    </section>
  );
}