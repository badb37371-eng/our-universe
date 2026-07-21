"use client";

import { useEffect, useState } from "react";

interface TypewriterProps {
  text: string;
  speed?: number;
}

export default function Typewriter({
  text,
  speed = 30,
}: TypewriterProps) {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let current = 0;

    const interval = setInterval(() => {
      current++;

      setDisplayText(text.slice(0, current));

      if (current >= text.length) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <pre
      className="
        whitespace-pre-wrap

        font-sans

        leading-8

        text-white/80

        text-sm
        sm:text-base
      "
    >
      {displayText}
    </pre>
  );
}