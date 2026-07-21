"use client";

import { motion } from "motion/react";

import { loveNotes } from "./data";
import Note from "./Note";
import NotesBackground from "./NotesBackground";

export default function FloatingLoveNotes() {
  return (
    <section
      id="love-notes"
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
      {/* Background */}
      <NotesBackground />

      <div className="relative z-10 mx-auto max-w-7xl">
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
          className="text-center"
        >
          <div className="text-5xl">
            💌
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
            Little Things I Never Stop Feeling
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
            Every little thought eventually became another reason
            to love you a little more.
          </p>
        </motion.div>

        {/* Desktop Layout */}
        <div
          className="
            mt-20

            hidden
            md:grid

            grid-cols-3

            gap-8
          "
        >
          {loveNotes.map((note) => (
            <Note
              key={note.id}
              note={note}
            />
          ))}
        </div>

        {/* Mobile Layout */}
        <div
          className="
            mt-16

            flex
            flex-col

            gap-6

            md:hidden
          "
        >
          {loveNotes.map((note) => (
            <Note
              key={note.id}
              note={note}
            />
          ))}
        </div>
      </div>
    </section>
  );
}