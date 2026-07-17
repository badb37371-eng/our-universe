"use client";

import LiquidButton from "./LiquidButton";
import Emoji from "./Emoji";

export default function AnimatedButton() {
  return (
    <div className="mt-10 flex justify-center">
      <LiquidButton className="w-full">
        <Emoji name="pinkHeart" size={22} />
        <span>Begin Our Journey</span>
        <Emoji name="sparkles" size={22} />
      </LiquidButton>
    </div>
  );
}