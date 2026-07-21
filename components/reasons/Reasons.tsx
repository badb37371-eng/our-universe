"use client";

import { motion } from "motion/react";
import ReasonsGrid from "./ReasonsGrid";

export default function Reasons() {
  return (
    <section
      id="reasons"
      className="
        relative
        mx-auto
        max-w-7xl

        px-5
        sm:px-6
        lg:px-8

        py-20
        md:py-28
      "
    >
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
          duration: 0.7,
        }}
        className="mb-14 text-center md:mb-16"
      >
        <div className="mb-5 text-5xl">
          💖
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
          Reasons I Love You
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
          Some feelings are impossible to put into words,
          <br className="hidden sm:block" />
          but these are a few reasons why my heart will
          always choose you.
        </p>
      </motion.div>

      {/* Cards */}
      <ReasonsGrid />
    </section>
  );
}