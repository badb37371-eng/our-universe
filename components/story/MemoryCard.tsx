"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Emoji from "@/components/ui/Emoji";

type Memory = {
  id: number;
  type: "image" | "video";
  src: string;
  date?: string;
  title: string;
  caption: string;
};

type Props = {
  memory: Memory;
};

export default function MemoryCard({ memory }: Props) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.9 }}
      className="mx-auto mb-28 max-w-5xl px-6"
    >
      <motion.div
        whileHover={{
          y: -6,
          scale: 1.01,
        }}
        transition={{
          duration: 0.35,
        }}
        className="overflow-hidden rounded-[36px] border border-white/10 bg-white/5 backdrop-blur-3xl shadow-2xl"
      >
        {/* Media */}

        <div className="relative w-full overflow-hidden bg-black">

          {memory.type === "image" ? (
            <Image
              src={memory.src}
              alt={memory.title}
              width={1600}
              height={900}
              priority={false}
              className="h-auto w-full object-contain transition duration-700 hover:scale-[1.03]"
            />
          ) : (
            <video
              src={memory.src}
              autoPlay
              muted
              loop
              playsInline
              controls
              className="h-auto w-full object-contain"
            />
          )}

        </div>

        {/* Text */}

        <div className="p-10">

          {memory.date && (
            <div className="mb-5 flex items-center gap-2">

              <Emoji
                name="sparkles"
                size={18}
              />

              <p className="text-sm uppercase tracking-[0.25em] text-pink-300">
                {memory.date}
              </p>

            </div>
          )}

          <div className="flex items-center gap-3">

            <Emoji
              name="heart"
              size={28}
            />

            <h2 className="text-4xl font-bold text-white">
              {memory.title}
            </h2>

          </div>

          <div className="mt-6 flex items-start gap-3">

            <Emoji
              name="flower"
              size={22}
              className="mt-1 shrink-0"
            />

            <p className="text-lg leading-9 text-gray-300">
              {memory.caption}
            </p>

          </div>

        </div>

      </motion.div>
    </motion.section>
  );
}