"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

interface EndingSceneProps {
  quote: string;
  ending: string;
}

export default function EndingScene({
  quote,
  ending,
}: EndingSceneProps) {
  const [typed, setTyped] = useState("");

  useEffect(() => {
    let index = 0;

    const timer = setInterval(() => {
      if (index >= ending.length) {
        clearInterval(timer);
        return;
      }

      setTyped((prev) => prev + ending[index]);
      index++;
    }, 45);

    return () => clearInterval(timer);
  }, [ending]);

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 1,
      }}
      className="
        mx-auto
        mt-16

        max-w-3xl

        text-center
      "
    >
      {/* Quote */}
      <motion.blockquote
        initial={{
          opacity: 0,
          scale: 0.95,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          delay: 0.4,
          duration: 0.8,
        }}
        className="
          text-xl
          sm:text-2xl
          md:text-3xl

          font-light
          italic

          leading-relaxed

          text-white
        "
      >
        “{quote}”
      </motion.blockquote>

      {/* Divider */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "120px" }}
        transition={{
          delay: 1,
          duration: 0.8,
        }}
        className="
          mx-auto
          my-10

          h-px

          bg-gradient-to-r
          from-transparent
          via-pink-400
          to-transparent
        "
      />

      {/* Typewriter */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1.2,
        }}
        className="
          rounded-3xl

          border
          border-white/10

          bg-white/5

          p-6
          sm:p-8
          md:p-10

          backdrop-blur-2xl

          shadow-[0_20px_60px_rgba(255,192,203,0.12)]
        "
      >
        <p
          className="
            whitespace-pre-line

            text-base
            sm:text-lg
            md:text-xl

            leading-9

            text-white/90
          "
        >
          {typed}

          <motion.span
            animate={{
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
            }}
          >
            |
          </motion.span>
        </p>
      </motion.div>
    </motion.div>
  );
}