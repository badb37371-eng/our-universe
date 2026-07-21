import { random } from "./random";

export type Star = {
  id: number;
  top: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
};

export type FloatingEmoji = {
  emoji: string;
  left: number;
  top: number;
  duration: number;
  size: number;
  delay: number;
};

export type Firefly = {
  id: number;
  left: number;
  top: number;
  duration: number;
  delay: number;
};

export type HeartParticle = {
  id: number;
  left: number;
  duration: number;
  delay: number;
  size: number;
};

const emojis = [
  "heart",
  "pinkHeart",
  "flower",
  "rose",
  "sparkles",
  "stars",
  "butterfly",
  "moon",
  "cloud",
  "hibiscus",
  "tulip",
  "rainbow",
  "leaf",
] as const;

export const stars: Star[] = Array.from({ length: 120 }, (_, i) => ({
  id: i,
  top: random(0, 100),
  left: random(0, 100),
  size: random(1, 4),
  duration: random(2, 5),
  delay: random(0, 5),
}));

export const floatingEmojis14: FloatingEmoji[] = Array.from(
  { length: 14 },
  (_, i) => ({
    emoji: emojis[i % emojis.length],
    left: random(0, 100),
    top: random(0, 100),
    duration: random(4, 10),
    size: random(18, 38),
    delay: i * 0.15,
  })
);

export const floatingEmojis36: FloatingEmoji[] = Array.from(
  { length: 36 },
  (_, i) => ({
    emoji: emojis[i % emojis.length],
    left: random(0, 100),
    top: random(0, 100),
    duration: random(4, 10),
    size: random(18, 38),
    delay: i * 0.15,
  })
);

export const fireflies: Firefly[] = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  left: random(0, 100),
  top: random(0, 100),
  duration: random(3, 8),
  delay: i * 0.2,
}));

export const heartParticles: HeartParticle[] = Array.from(
  { length: 18 },
  (_, i) => ({
    id: i,
    left: random(10, 90),
    duration: random(8, 12),
    delay: i * 0.4,
    size: random(18, 30),
  })
);