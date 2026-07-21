"use client";

import { motion } from "motion/react";
import { promise } from "./data";
import Typewriter from "./Typewriter";

export default function PromiseLetter() {
  return (
    <section
      id="promise"
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
      <motion.div
        initial={{
          opacity: 0,
          y: 40,
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
        className="text-center"
      >
        {/* Emoji */}
        <div className="mb-6 text-5xl">
          💌
        </div>

        {/* Heading */}
        <h2
          className="
            text-3xl
            sm:text-4xl
            md:text-5xl

            font-bold

            text-white
          "
        >
          {promise.title}
        </h2>

        <p
          className="
            mt-5

            text-base
            sm:text-lg

            text-white/70
          "
        >
          Words that come straight from my heart.
        </p>
      </motion.div>

      {/* Letter */}
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.95,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{
          once: true,
          amount: 0.3,
        }}
        transition={{
          duration: 0.8,
          delay: 0.2,
        }}
        className="
          relative

          mt-12

          rounded-3xl

          border
          border-white/10

          bg-white/5

          backdrop-blur-2xl

          p-6
          sm:p-8
          md:p-10

          shadow-2xl
        "
      >
        {/* Soft Glow */}
        <div
          className="
            absolute
            inset-0

            rounded-3xl

            bg-gradient-to-br
            from-pink-500/10
            via-transparent
            to-purple-500/10

            pointer-events-none
          "
        />

        {/* Wax Seal */}
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="
            absolute

            -top-6

            left-1/2

            -translate-x-1/2

            flex
            h-14
            w-14

            items-center
            justify-center

            rounded-full

            bg-red-600

            text-2xl

            shadow-lg
          "
        >
          ❤️
        </motion.div>

        {/* Letter */}
        <div className="relative pt-8">
          <Typewriter text={promise.content} />
        </div>
      </motion.div>
    </section>
  );
}