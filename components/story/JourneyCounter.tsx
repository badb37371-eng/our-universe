"use client";

import LiquidPanel from "@/components/ui/LiquidPanel";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Emoji from "@/components/ui/Emoji";


const START_DATE = new Date("2023-07-22T00:00:00");

export default function JourneyCounter() {

  const [time, setTime] = useState({
    years: 0,
    days: 0,
    hours: 0,
    minutes: 0,
  });

  useEffect(() => {
    const update = () => {
      const now = new Date();

      const diff = now.getTime() - START_DATE.getTime();

      const totalMinutes = Math.floor(diff / 60000);
      const totalHours = Math.floor(diff / 3600000);
      const totalDays = Math.floor(diff / 86400000);

      const years = now.getFullYear() - START_DATE.getFullYear();

      setTime({
        years,
        days: totalDays,
        hours: totalHours,
        minutes: totalMinutes,
      });
    };

    update();

    const interval = setInterval(update, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative z-20 px-6 py-28">
      <motion.div
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
>
  <LiquidPanel className="mx-auto max-w-xl p-10">

        {/* Title */}
        <div className="flex items-center justify-center gap-3">
          <Emoji name="heart" size={34} />
          <h2 className="heading-font text-center text-4xl text-white">
            Our Journey
          </h2>
          <Emoji name="heart" size={34} />
        </div>

        <p className="mt-3 text-center text-pink-300">
          Together Since
        </p>

        <p className="mt-2 text-center text-2xl text-white">
          22 July 2023
        </p>

        {/* Counter */}
        <div className="mt-10 grid gap-5">

          <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-xl">
  <div className="flex items-center gap-3">
    <Emoji name="flower" size={24} />
    <span>Years Together</span>
  </div>

  <span className="text-2xl font-bold text-white">
    {time.years}
  </span>
</div>

          <div className="flex items-center gap-3">
            <Emoji name="sun" size={24} />
            <span>{time.days.toLocaleString()} Days</span>
          </div>

          <div className="flex items-center gap-3">
            <Emoji name="moon" size={24} />
            <span>{time.hours.toLocaleString()} Hours</span>
          </div>

          <div className="flex items-center gap-3">
            <Emoji name="heart" size={24} />
            <span>{time.minutes.toLocaleString()} Minutes</span>
          </div>

        </div>

        {/* Quote */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 text-center italic leading-8 text-pink-200">
          <span>&quot;Every second with you has been my favorite memory.&quot;</span>
          <Emoji name="pleading" size={22} />
          <Emoji name="heart" size={22} />
        </div>
      </LiquidPanel>
</motion.div>
    </section>
  );
}