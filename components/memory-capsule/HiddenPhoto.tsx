"use client";

import Image from "next/image";
import { motion } from "motion/react";

interface HiddenPhotoProps {
  image: string;
}

export default function HiddenPhoto({
  image,
}: HiddenPhotoProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.8,
        y: 50,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      transition={{
        duration: 0.8,
      }}
      className="mx-auto mt-16 max-w-md"
    >
      <div
        className="
          group
          relative

          overflow-hidden

          rounded-3xl

          border
          border-white/10

          bg-white/5

          p-3

          backdrop-blur-2xl

          shadow-[0_25px_80px_rgba(255,192,203,0.15)]
        "
      >
        {/* Glow */}
        <div
          className="
            absolute
            inset-0

            opacity-0

            transition-opacity
            duration-500

            group-hover:opacity-100

            bg-gradient-to-br
            from-pink-500/10
            via-transparent
            to-purple-500/10
          "
        />

        {/* Image */}
        <div
          className="
            relative

            aspect-[4/5]

            overflow-hidden

            rounded-2xl
          "
        >
          <Image
            src={image}
            alt="Our Memory"
            fill
            sizes="(max-width:768px) 90vw, 400px"
            className="
              object-cover

              transition-transform
              duration-700

              group-hover:scale-105
            "
            priority={false}
          />
        </div>

        {/* Caption */}
        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.4,
          }}
          className="
            mt-5

            text-center

            text-sm
            sm:text-base

            italic

            text-white/75
          "
        >
          Every picture tells a story...
          <br />
          Ours is my favorite. ❤️
        </motion.p>
      </div>
    </motion.div>
  );
}