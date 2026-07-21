"use client";

import { motion } from "framer-motion";
import Emoji from "@/components/ui/Emoji";

export default function FinalMessage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2 }}
      className="relative z-20 mx-auto max-w-3xl text-center"
    >
      <div className="flex justify-center gap-3">
        <Emoji name="sparkles" size={26} />
        <Emoji name="heart" size={30} />
        <Emoji name="sparkles" size={26} />
      </div>

      <h1 className="mt-8 text-6xl font-black text-white">
        Happy 3rd Anniversary
      </h1>

      <p className="mt-10 text-2xl leading-10 text-gray-200">
        No matter where life takes us...
        <br />
        I&apos;ll always choose you.
      </p>

      <div className="mt-12 text-pink-300">
        <p className="text-3xl font-semibold">
          Forever Yours ❤️
        </p>

        <p className="mt-5 text-2xl">
          — Your Abhi
        </p>
      </div>
    </motion.div>
  );
}