"use client";

import { motion } from "motion/react";
import DreamsGrid from "./DreamsGrid";

export default function Dreams() {
  return (
    <section
      id="dreams"
      className="
        relative
        overflow-hidden

        mx-auto
        max-w-7xl

        px-5
        sm:px-6
        lg:px-8

        py-20
        md:py-28
      "
    >
      {/* Background Glow */}
      <div
        className="
          absolute
          inset-0
          -z-10

          bg-gradient-to-b
          from-transparent
          via-pink-500/5
          to-transparent
        "
      />

      {/* Heading */}
      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.3,
        }}
        transition={{
          duration: 0.8,
        }}
        className="mb-16 text-center"
      >
        <div className="mb-6 text-5xl sm:text-6xl">
          🌌
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
          Dream Together
        </h2>

        <p
          className="
            mx-auto
            mt-6

            max-w-2xl

            text-base
            sm:text-lg

            leading-8

            text-white/70
          "
        >
          Every beautiful future begins with a dream.
          <br className="hidden sm:block" />
          These are the moments I hope we will create together.
        </p>
      </motion.div>

      {/* Dreams */}
      <DreamsGrid />
    </section>
  );
}