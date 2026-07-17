"use client";

import { motion } from "framer-motion";
import Emoji from "@/components/ui/Emoji";

export default function LoveLetter() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.9,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 0.8,
      }}
      className="mx-auto max-w-3xl rounded-[34px] bg-[#fffaf3] p-10 text-[#3b2c1d] shadow-2xl"
    >
      <div className="mb-8 flex justify-center">
        <Emoji
          name="heart"
          size={50}
        />
      </div>

      <h2 className="heading-font text-center text-4xl">
        Dear Trisha,
      </h2>

      <p className="mt-8 text-lg leading-10">
        Today marks three beautiful years of us.
        Thank you for every smile, every late-night conversation,
        every moment of support, and every memory we've created together.
      </p>

      <p className="mt-8 text-lg leading-10">
        No matter how many kilometers separate us,
        you've always been the closest person to my heart.
      </p>

      <p className="mt-8 text-lg leading-10">
        I don't know what the future holds,
        but I know one thing —
        I want you in every chapter of it.
      </p>

      <div className="mt-10 flex items-center gap-3">
        <Emoji name="heart" size={24} />
        <span>Forever yours,</span>
      </div>

      <p className="mt-2 text-2xl font-bold">
        Abhi
      </p>
    </motion.div>
  );
}