"use client";

import { motion } from "framer-motion";
import Emoji, { EmojiName } from "@/components/ui/Emoji";

type Props = {
  title: string;
  subtitle?: string;
  leftEmoji?: EmojiName;
  rightEmoji?: EmojiName;
};

export default function SectionTitle({
  title,
  subtitle,
  leftEmoji = "sparkles",
  rightEmoji = "sparkles",
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mb-16 text-center"
    >
      {/* Emoji Row */}
      <div className="flex items-center justify-center gap-3">
        <Emoji name={leftEmoji} size={30} />

        <h2 className="heading-font text-4xl md:text-5xl font-semibold text-white">
          {title}
        </h2>

        <Emoji name={rightEmoji} size={30} />
      </div>

      {subtitle && (
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-300">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}