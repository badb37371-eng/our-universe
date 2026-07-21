"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Star = {
  id: number;
  top: number;
  left: number;
  angle: number;
};

export default function ShootingStar() {
  const [star, setStar] = useState<Star | null>(null);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const spawn = () => {
      setStar({
        id: Date.now(),
        top: 5 + Math.random() * 35,
        left: -20,
        angle: 25 + Math.random() * 15,
      });

      timeout = setTimeout(
        spawn,
        15000 + Math.random() * 10000
      );
    };

    spawn();

    return () => clearTimeout(timeout);
  }, []);

  if (!star) return null;

  return (
    <motion.div
      key={star.id}
      initial={{
        x: 0,
        y: 0,
        opacity: 0,
      }}
      animate={{
        x: window.innerWidth + 300,
        y: 350,
        opacity: [0, 1, 1, 0],
      }}
      transition={{
        duration: 1.5,
        ease: "easeOut",
      }}
      style={{
        position: "fixed",
        top: `${star.top}%`,
        left: `${star.left}px`,
        rotate: `${star.angle}deg`,
        zIndex: 1,
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          width: "180px",
          height: "2px",
          background:
            "linear-gradient(to right, rgba(255,255,255,1), rgba(255,255,255,.3), transparent)",
          borderRadius: "999px",
          boxShadow:
            "0 0 12px rgba(255,255,255,.8)",
        }}
      />
    </motion.div>
  );
}