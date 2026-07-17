"use client";

import EmojiText from "@/components/ui/EmojiText";
import Image from "next/image";

const emojiMap = {
  // Hearts
  heart: "2764-fe0f.png",
  pinkHeart: "1f496.png",
  sparklingHeart: "1f49d.png",
  growingHeart: "1f497.png",
  heartWithArrow: "1f498.png",
  heartDecoration: "1f49f.png",

  // Faces
  pleading: "1f979.png",
  smile: "1f60a.png",
  laughing: "1f602.png",
  heartEyes: "1f60d.png",
  smilingHearts: "1f970.png",
  kiss: "1f618.png",

  // Flowers
  flower: "1f338.png",
  rose: "1f339.png",
  hibiscus: "1f33a.png",
  tulip: "1f337.png",

  // Nature
  butterfly: "1f98b.png",
  moon: "1f319.png",
  stars: "1f31f.png",
  sparkles: "2728.png",
  cloud: "2601-fe0f.png",
  rainbow: "1f308.png",
  sun: "2600-fe0f.png",
  leaf: "1f340.png",

  // Music
  music: "1f3b5.png",
  notes: "1f3b6.png",
  headphones: "1f3a7.png",

  // Gifts
  gift: "1f381.png",
  ribbon: "1f380.png",
  teddy: "1f9f8.png",

  // Love
  letter: "1f48c.png",
  camera: "1f4f8.png",

  // Misc
  star: "2b50.png",
  down: "2b07-fe0f.png",
  up: "2b06-fe0f.png",
} as const;

export type EmojiName = keyof typeof emojiMap;

interface EmojiProps {
  name: EmojiName;
  size?: number;
  className?: string;
}

export default function Emoji({
  name,
  size = 32,
  className = "",
}: EmojiProps) {
  return (
    <Image
  src={`/apple-emojis/${emojiMap[name]}`}
  alt={name}
  width={size}
  height={size}
  draggable={false}
  loading="eager"
  priority={size >= 40}
  className={className}
/>

  );
}