import { useState } from 'react';
import { HeroSection } from './components/sections/HeroSection';
import { Countdown } from './components/sections/Countdown';
import { PhotoCarousel } from './components/sections/PhotoCarousel';
import { ParentsBlessing } from './components/sections/ParentsBlessing';
import { CeremonyAndReception } from './components/sections/CeremonyAndReception';
import { AudioPlayer } from './components/sections/AudioPlayer';

const GALA_DATE = '2027-05-27T19:00:00';

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div 
      className="bg-[#04132b] text-[#d7e2ff] flex flex-col min-h-screen selection:bg-[#cbd5e1] selection:text-[#0f172a]" 
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      <AudioPlayer isPlaying={isPlaying} onToggle={() => setIsPlaying(!isPlaying)} />
      <HeroSection />
      <Countdown targetDate={GALA_DATE} />
      <PhotoCarousel />
      <ParentsBlessing />
      <CeremonyAndReception />
    </div>
  );
}