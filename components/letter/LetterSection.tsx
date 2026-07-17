"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import SectionTitle from "@/components/ui/SectionTitle";
import Envelope from "./Envelope";
import LoveLetter from "./LoveLetter";

export default function LetterSection() {
  const [opened, setOpened] = useState(false);

  return (
    <section className="relative z-20 py-28 px-6">

      <SectionTitle
        title="A Letter For You"
        subtitle="Something I've wanted to tell you."
        leftEmoji="letter"
        rightEmoji="heart"
      />

      <AnimatePresence mode="wait">

        {!opened ? (
          <Envelope
            key="envelope"
            onOpen={() => setOpened(true)}
          />
        ) : (
          <LoveLetter key="letter" />
        )}

      </AnimatePresence>

    </section>
  );
}