"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface LetterProps {
  text: string;
}

export default function Letter({ text }: LetterProps) {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let current = 0;

    const interval = setInterval(() => {
      current++;

      setDisplayText(text.slice(0, current));

      if (current >= text.length) {
        clearInterval(interval);
      }
    }, 22);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 80,
        rotateX: -40,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotateX: 0,
      }}
      transition={{
        duration: 0.9,
      }}
      className="mx-auto mt-14 max-w-3xl"
      style={{
        perspective: 1000,
      }}
    >
      <div
        className="
          relative

          overflow-hidden

          rounded-3xl

          border
          border-amber-200/20

          bg-gradient-to-b
          from-white/15
          via-white/10
          to-white/5

          backdrop-blur-3xl

          shadow-[0_20px_80px_rgba(255,215,150,0.15)]

          p-6
          sm:p-8
          md:p-10
        "
      >
        {/* Paper Glow */}
        <div
          className="
            absolute
            inset-0

            bg-gradient-to-br
            from-yellow-200/5
            via-transparent
            to-pink-300/5
          "
        />

        {/* Decorative line */}
        <div
          className="
            absolute

            left-0
            top-0

            h-1
            w-full

            bg-gradient-to-r
            from-transparent
            via-yellow-300/60
            to-transparent
          "
        />

        <div className="relative z-10">
          <motion.h3
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.3,
            }}
            className="
              mb-8

              text-center

              text-2xl
              sm:text-3xl

              font-bold

              text-white
            "
          >
            💌 A Letter From My Heart
          </motion.h3>

          <pre
            className="
              whitespace-pre-wrap

              font-sans

              text-sm
              sm:text-base

              leading-8

              text-white/85
            "
          >
            {displayText}
            <motion.span
              animate={{
                opacity: [0, 1, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 0.8,
              }}
            >
              |
            </motion.span>
          </pre>
        </div>
      </div>
    </motion.div>
  );
}