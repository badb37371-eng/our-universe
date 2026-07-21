"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

import { finale } from "./data";

import Aurora from "./Aurora";
import Fireflies from "./Fireflies";
import Constellation from "./Constellation";
import EndingScene from "./EndingScene";
import Credits from "./Credits";
import ReplayButton from "./ReplayButton";

export default function Finale() {
  const [showConstellation, setShowConstellation] = useState(false);
  const [showEnding, setShowEnding] = useState(false);
  const [showCredits, setShowCredits] = useState(false);
  const [showReplay, setShowReplay] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setShowConstellation(true), 1500);
    const t2 = setTimeout(() => setShowEnding(true), 4500);
    const t3 = setTimeout(() => setShowCredits(true), 8000);
    const t4 = setTimeout(() => setShowReplay(true), 10000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, []);

  return (
    <section
      id="finale"
      className="
        relative
        overflow-hidden

        min-h-screen

        flex
        items-center
        justify-center

        px-5
        sm:px-6
        lg:px-8
      "
    >
      {/* Aurora */}
      <Aurora />

      {/* Fireflies */}
      <Fireflies />

      <div className="relative z-10 w-full max-w-5xl">
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
            duration: 1,
          }}
          className="text-center"
        >
          <div className="mb-6 text-5xl">
            🌌
          </div>

          <h2
            className="
              text-3xl
              sm:text-5xl

              font-bold

              text-white
            "
          >
            {finale.title}
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
            {finale.subtitle}
          </p>
        </motion.div>

        <AnimatePresence>
          {showConstellation && (
            <Constellation />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showEnding && (
            <EndingScene
              quote={finale.quote}
              ending={finale.ending}
            />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showCredits && (
            <Credits />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showReplay && (
            <ReplayButton />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}