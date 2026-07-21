"use client";

import { useState } from "react";
import VideoGallery from "@/components/gallery/VideoGallery";
import AudioProvider from "@/components/music/AudioProvider";
import MusicEffects from "@/components/effects/MusicEffects";
import Background from "../components/background/Background";
import Aurora from "../components/background/Aurora";
import Stars from "../components/background/Stars";
import FloatingAppleEmojis from "@/components/background/FloatingAppleEmojis";
import SmoothScroll from "@/components/ui/SmoothScroll";
import Hero from "../components/hero/Hero";
import Timeline from "@/components/timeline/Timeline";
import Reasons from "@/components/reasons/Reasons";
import PromiseLetter from "@/components/promise/PromiseLetter";
import LongDistance from "@/components/long-distance/LongDistance";
import MemoryCapsule from "@/components/memory-capsule/MemoryCapsule";
import Dreams from "@/components/dreams/Dreams";
import PlaylistSection from "@/components/music/PlaylistSection";
import ShootingStar from "@/components/background/ShootingStar";



import Finale from "@/components/finale/Finale";
import FloatingLoveNotes from "@/components/floating-notes/FloatingLoveNotes";
import LoadingScreen from "../components/hero/LoadingScreen";
import WelcomeScene from "../components/hero/WelcomeScene";
import MusicModal from "../components/hero/MusicModal";
import RelationshipStats from "@/components/relationship-stats/RelationshipStats";
import JourneyCounter from "@/components/story/JourneyCounter";
import MemorySection from "@/components/story/MemorySection";
import Gallery from "@/components/gallery/Gallery";
import LetterSection from "@/components/letter/LetterSection";
import Ending from "@/components/ending/Ending";
import Parallax from "@/components/ui/Parallax";
import MusicPlayer from "@/components/music/MusicPlayer";

export default function Home() {
  const [started, setStarted] = useState(false);
  const [showMusicModal, setShowMusicModal] = useState(false);

  return (
    <AudioProvider>
      <SmoothScroll>
        <Parallax />
        <main className="relative min-h-screen overflow-hidden bg-[#050816]">

        {/* Loading */}
        <LoadingScreen />

        {/* Background */}
        <div data-depth="1" className="parallax">
  <Background />
</div>

<div data-depth="2" className="parallax">
  <Aurora />
</div>

<div data-depth="3" className="parallax">
  <Stars />
</div>

<ShootingStar />

<FloatingAppleEmojis />

<MusicEffects />

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

            <div className="relative h-24 overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-500/5 to-transparent" />
</div>

            <JourneyCounter />

            <MemorySection />

            <Gallery />

            <div className="relative h-20 overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-fuchsia-500/5 to-transparent" />
</div>

           <VideoGallery />

            <div className="relative h-20 overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-500/5 to-transparent" />
</div>

            <RelationshipStats />

            <div className="relative h-20 overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />
</div>

            <Reasons />

            <div className="relative h-20 overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-500/5 to-transparent" />
</div>

            <FloatingLoveNotes />

            <Timeline />

            <div className="relative h-20 overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />
</div>

            <PromiseLetter />

            <Dreams />

            <div className="relative h-20 overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-500/5 to-transparent" />
</div>

            <LongDistance />

            <PlaylistSection />

            <MemoryCapsule />

            <div className="relative h-20 overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-fuchsia-500/5 to-transparent" />
</div>

            <LetterSection />

            <div className="relative h-20 overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-500/5 to-transparent" />
</div>

            <Finale />

            <Ending />

            <MusicPlayer />
          </>
        )}

      </main>
    </SmoothScroll>
    </AudioProvider>
  );
}