"use client";

import { useState } from "react";

import AudioProvider from "@/components/music/AudioProvider";
import MusicEffects from "@/components/effects/MusicEffects";
import Background from "../components/background/Background";
import Aurora from "../components/background/Aurora";
import Stars from "../components/background/Stars";
import FloatingAppleEmojis from "@/components/background/FloatingAppleEmojis";
import SmoothScroll from "@/components/ui/SmoothScroll";
import Hero from "../components/hero/Hero";
import LoadingScreen from "../components/hero/LoadingScreen";
import WelcomeScene from "../components/hero/WelcomeScene";
import MusicModal from "../components/hero/MusicModal";

import JourneyCounter from "@/components/story/JourneyCounter";
import MemorySection from "@/components/story/MemorySection";
import Gallery from "@/components/gallery/Gallery";
import LetterSection from "@/components/letter/LetterSection";
import Ending from "@/components/ending/Ending";

import MusicPlayer from "@/components/music/MusicPlayer";

export default function Home() {
  const [started, setStarted] = useState(false);
  const [showMusicModal, setShowMusicModal] = useState(false);

  return (
    <AudioProvider>
      <SmoothScroll>
        <main className="relative min-h-screen overflow-hidden bg-[#050816]">

        {/* Loading */}
        <LoadingScreen />

        {/* Background */}
        <Background />
        <Aurora />
        <Stars />
        <MusicEffects />
        <FloatingAppleEmojis />

        {/* Welcome */}
        {!started && (
          <WelcomeScene
            onContinue={() => {
              setStarted(true);
              setShowMusicModal(true);
            }}
          />
        )}

        {/* Music Modal */}
        {showMusicModal && (
          <MusicModal
            onPlay={() => {
              setShowMusicModal(false);
            }}
            onSkip={() => {
              setShowMusicModal(false);
            }}
          />
        )}

        {/* Main Website */}
        {started && !showMusicModal && (
          <>
            <Hero />

            <JourneyCounter />

            <MemorySection />

            <Gallery />

            <LetterSection />

            <Ending />

            <MusicPlayer />
          </>
        )}

      </main>
    </SmoothScroll>
    </AudioProvider>
  );
}