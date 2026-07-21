/* eslint-disable react-hooks/purity */

"use client";

import { motion } from "framer-motion";
import Emoji from "@/components/ui/Emoji";

export default function HeartParticles() {
  return (
    <>
      {Array.from({ length: 18 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${10 + Math.random() * 80}%`,
            bottom: "-40px",
          }}
          animate={{
            y: [-20, -600],
            opacity: [0, 1, 0],
            rotate: [-15, 15],
          }}
          transition={{
            repeat: Infinity,
            duration: 8 + Math.random() * 4,
            delay: i * 0.4,
          }}
        >
          <Emoji
            name="heart"
            size={18 + Math.random() * 12}
          />
        </motion.div>
      ))}
    </>
  );
}