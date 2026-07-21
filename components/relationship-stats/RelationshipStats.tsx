"use client";

import { motion } from "motion/react";

import StatCard from "./StatCard";
import { stats } from "./data";

export default function RelationshipStats() {
  return (
    <section
      id="stats"
      className="relative mx-auto max-w-7xl px-6 py-28"
    >
      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-16 text-center"
      >
        <div className="mb-5 text-5xl">❤️</div>

        <h2 className="text-4xl font-bold md:text-5xl">
          Every Number Has A Memory
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70 leading-relaxed">
          Some moments can be counted.
          <br />
          Others can only be felt.
        </p>
      </motion.div>

      {/* Stats Grid */}
      <div
        className="
          grid
          grid-cols-1
          gap-6

          sm:grid-cols-2

          lg:grid-cols-3
        "
      >
        {stats.map((stat, index) => (
          <StatCard
            key={stat.id}
            stat={stat}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}