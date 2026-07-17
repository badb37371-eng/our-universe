"use client";

import { memories } from "@/data/memories";
import MemoryCard from "./MemoryCard";
import { motion } from "framer-motion";
import Emoji from "@/components/ui/Emoji";

export default function MemorySection() {
  return (
    <section className="relative z-20 py-24">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-20 px-6 text-center"
      >
        {/* Small Title */}
        <div className="flex items-center justify-center gap-3">
          <Emoji name="sparkles" size={20} />
          <p className="tracking-[0.4em] uppercase text-pink-300">
            Our Journey
          </p>
          <Emoji name="sparkles" size={20} />
        </div>

        {/* Main Heading */}
        <div className="mt-5 flex flex-col items-center gap-4">
          <div className="flex items-center gap-3">
            <Emoji name="letter" size={36} />
            <h2 className="text-center text-5xl font-bold text-white">
              Every Memory,
            </h2>
          </div>

          <h2 className="text-center text-5xl font-bold text-white">
            Every Smile,
          </h2>

          <div className="flex items-center gap-3">
            <h2 className="text-center text-5xl font-bold text-white">
              Every Moment
            </h2>

            <Emoji name="heart" size={34} />
          </div>
        </div>

        {/* Description */}
        <div className="mx-auto mt-8 max-w-2xl">

          <p className="text-lg leading-9 text-gray-300">
            আমাদের গল্পটা শুধু সময়ের নয়...
          </p>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-lg leading-9 text-gray-300">
            <span>
              এটা অসংখ্য হাসি, অপেক্ষা, ভালোবাসা আর সুন্দর মুহূর্তের গল্প।
            </span>

            <Emoji name="flower" size={24} />
            <Emoji name="sparkles" size={24} />
          </div>

        </div>
      </motion.div>

      <div className="space-y-24">
        {memories.map((memory) => (
          <MemoryCard
            key={memory.id}
            memory={memory}
          />
        ))}
      </div>

    </section>
  );
}