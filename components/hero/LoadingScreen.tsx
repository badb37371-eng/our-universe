"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Emoji from "@/components/ui/Emoji";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050816]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Logo */}
          <motion.div
            className="mb-8 flex items-center justify-center gap-4"
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Emoji
              name="sparkles"
              size={42}
            />

            <h1 className="heading-font text-4xl text-white">
              Our Universe
            </h1>

            <Emoji
              name="heart"
              size={42}
            />
          </motion.div>

          {/* Subtitle */}
          <motion.div
            className="flex items-center gap-3 text-pink-300"
            animate={{
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
            }}
          >
            <Emoji
              name="flower"
              size={24}
            />

            <span className="tracking-[0.35em] uppercase">
              Loading...
            </span>

            <Emoji
              name="sparkles"
              size={24}
            />
          </motion.div>

          {/* Progress Bar */}
          <div className="mt-10 h-2 w-64 overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{
                duration: 2.5,
                ease: "easeInOut",
              }}
            />
          </div>

          {/* Bottom Icons */}
          <motion.div
            className="mt-10 flex gap-5"
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
            }}
          >
            <Emoji name="heart" size={24} />
            <Emoji name="flower" size={24} />
            <Emoji name="butterfly" size={24} />
            <Emoji name="sparkles" size={24} />
            <Emoji name="moon" size={24} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}