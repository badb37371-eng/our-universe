"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";

const photos = [
  "/images/memory1.jpg",
  "/images/memory2.jpg",
  "/images/memory3.jpg",
  "/images/memory4.jpg",
  "/images/memory5.jpg",
  "/images/memory6.jpg",
];

export default function Gallery() {
  return (
    <section className="relative z-20 py-28 px-6">

      <SectionTitle
        title="Our Gallery"
        subtitle="A collection of moments I&apos;ll cherish forever."
        leftEmoji="camera"
        rightEmoji="sparkles"
      />

      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-5 md:grid-cols-3">

        {photos.map((photo, index) => (
          <motion.div
            key={index}
            whileHover={{
              y: -8,
              scale: 1.03,
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl"
          >
            <Image
              src={photo}
              alt={`Memory ${index + 1}`}
              width={700}
              height={900}
              className="aspect-[3/4] h-full w-full object-cover transition duration-700 hover:scale-110"
            />
          </motion.div>
        ))}

      </div>

    </section>
  );
}