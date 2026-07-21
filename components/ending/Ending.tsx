"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import Emoji from "@/components/ui/Emoji";

export default function Ending() {
  return (
    <section className="relative z-20 flex min-h-screen items-center justify-center px-6 py-32">

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="max-w-3xl text-center"
      >

        <SectionTitle
          title="Forever & Always"
          subtitle="Happy 3rd Anniversary"
          leftEmoji="stars"
          rightEmoji="heart"
        />

        <motion.div
          initial={{ scale: 0.8 }}
          whileInView={{ scale: 1 }}
          transition={{
            duration: 1,
          }}
          className="mt-12 flex justify-center"
        >
          <Emoji
            name="heart"
            size={70}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            delay: 0.4,
            duration: 1,
          }}
          className="mt-10 text-2xl leading-10 text-white"
        >
          Out of billions of people...
          <br />
          I found you.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            delay: 1,
            duration: 1,
          }}
          className="mt-16 text-lg leading-9 text-pink-200"
        >
          Thank you for every smile,
          every late-night conversation,
          every laugh,
          every memory,
          and every dream we&apos;ve shared.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            delay: 1.6,
            duration: 1,
          }}
          className="mt-20"
        >
          <p className="text-3xl text-white">
            Love,
          </p>

          <p className="mt-3 heading-font text-5xl text-pink-300">
            Abhi
          </p>

          <div className="mt-6 flex justify-center gap-3">
            <Emoji name="heart" size={28} />
            <Emoji name="flower" size={28} />
            <Emoji name="sparkles" size={28} />
          </div>

        </motion.div>

      </motion.div>

    </section>
  );
}