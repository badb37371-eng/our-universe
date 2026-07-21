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
      transition={{
  duration: 1,
  ease: "easeOut",
}}
      className="mx-auto mb-28 max-w-5xl px-6"
    >
      <motion.div
        whileHover={{
  y: -10,
  scale: 1.02,
}}
transition={{
  duration: 0.45,
  ease: "easeOut",
}}
        className="
relative
overflow-hidden
rounded-[36px]
border
border-white/15
bg-white/[0.06]
backdrop-blur-[35px]
shadow-[0_25px_80px_rgba(0,0,0,0.45)]
"
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
              className="
h-auto
w-full
object-contain
transition-all
duration-1000
ease-out
hover:scale-[1.06]
hover:brightness-110
"
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

          <div
  className="
    pointer-events-none
    absolute
    inset-0
    bg-gradient-to-t
    from-black/35
    via-transparent
    to-transparent
  "
/>

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