"use client";

import { motion } from "framer-motion";
import Emoji from "@/components/ui/Emoji";

type Props = {
  onOpen: () => void;
};

export default function Envelope({ onOpen }: Props) {
  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      onClick={onOpen}
      className="mx-auto cursor-pointer max-w-md rounded-[34px] border border-white/10 bg-white/5 p-10 backdrop-blur-3xl"
    >
      <div className="flex justify-center">
        <Emoji
          name="letter"
          size={80}
        />
      </div>

      <h2 className="heading-font mt-8 text-center text-4xl text-white">
        A Letter For You
      </h2>

      <p className="mt-5 text-center text-gray-300">
        Tap the envelope to open it.
      </p>

      <div className="mt-8 flex justify-center gap-4">
        <Emoji name="heart" size={26} />
        <Emoji name="flower" size={26} />
        <Emoji name="sparkles" size={26} />
      </div>
    </motion.div>
  );
}