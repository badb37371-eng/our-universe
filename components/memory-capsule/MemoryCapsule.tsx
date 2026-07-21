"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import { memoryCapsule } from "./data";
import Capsule from "./Capsule";
import Letter from "./Letter";
import HiddenPhoto from "./HiddenPhoto";
import FinalMessage from "./FinalMessage";

export default function MemoryCapsule() {
  const [opened, setOpened] = useState(false);
  const [showLetter, setShowLetter] = useState(false);
  const [showPhoto, setShowPhoto] = useState(false);
  const [showFinalMessage, setShowFinalMessage] = useState(false);

  const handleOpen = async () => {
    if (opened) return;

    setOpened(true);

    setTimeout(() => {
      setShowLetter(true);
    }, 800);

    setTimeout(() => {
      setShowPhoto(true);
    }, 2200);

    setTimeout(() => {
      setShowFinalMessage(true);
    }, 3400);
  };

  return (
    <section
      id="memory-capsule"
      className="
        relative
        overflow-hidden

        mx-auto
        max-w-6xl

        px-5
        sm:px-6
        lg:px-8

        py-24
        md:py-32
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
        }}
        transition={{
          duration: 0.8,
        }}
        className="mb-14 text-center"
      >
        <div className="mb-5 text-5xl">
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
          {memoryCapsule.title}
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
          {memoryCapsule.subtitle}
        </p>
      </motion.div>

      {/* Capsule */}
      <Capsule
        opened={opened}
        onOpen={handleOpen}
      />

      <AnimatePresence>
        {showLetter && (
          <Letter
            text={memoryCapsule.letter}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showPhoto && (
          <HiddenPhoto
            image={memoryCapsule.photo}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showFinalMessage && (
          <FinalMessage
            message={memoryCapsule.finalMessage}
          />
        )}
      </AnimatePresence>
    </section>
  );
}