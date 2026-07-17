"use client";

import Emoji from "./Emoji";


const map: Record<string, any> = {
  "❤️": "heart",
  "🤍": "heartDecoration",
  "💖": "pinkHeart",
  "💞": "sparklingHeart",
  "💕": "growingHeart",
  "💘": "heartWithArrow",

  "🥹": "pleading",
  "😊": "smile",
  "😂": "laughing",
  "😍": "heartEyes",
  "🥰": "smilingHearts",
  "😘": "kiss",

  "🌸": "flower",
  "🌹": "rose",
  "🌺": "hibiscus",
  "🌷": "tulip",

  "🦋": "butterfly",
  "🌙": "moon",
  "⭐": "star",
  "✨": "sparkles",
  "☁️": "cloud",
  "🌈": "rainbow",
  "☀️": "sun",
  "🍀": "leaf",

  "🎵": "music",
  "🎶": "notes",
  "🎧": "headphones",

  "🎁": "gift",
  "🎀": "ribbon",
  "🧸": "teddy",

  "💌": "letter",
  "📸": "camera",

  "⬇️": "down",
  "⬆️": "up",
};

interface Props {
  children: string;
  size?: number;
  className?: string;
}

export default function EmojiText({
  children,
  size = 26,
  className = "",
}: Props) {
  const chars = Array.from(children);

  return (
    <>
      {chars.map((char, i) =>
        map[char] ? (
          <Emoji
            key={i}
            name={map[char]}
            size={size}
            className={`inline-block align-middle ${className}`}
          />
        ) : (
          <span key={i}>{char}</span>
        )
      )}
    </>
  );
}