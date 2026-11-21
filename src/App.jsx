import { useState } from 'react';
import { HeroSection } from './components/sections/HeroSection';
import { Countdown } from './components/sections/Countdown';
import { PhotoCarousel } from './components/sections/PhotoCarousel';
import { ParentsBlessing } from './components/sections/ParentsBlessing';
import { CeremonyAndReception } from './components/sections/CeremonyAndReception';
import { RsvpSection } from './components/sections/RsvpSection';
import { AudioPlayer } from './components/sections/AudioPlayer';

const GALA_DATE = '2027-05-29T19:00:00';
const RSVP_WHATSAPP = import.meta.env.VITE_WHATSAPP_NUMBER ?? '';

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div
      className="bg-[#04132b] text-[#d7e2ff] flex flex-col min-h-screen selection:bg-[#cbd5e1] selection:text-[#0f172a]"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      <AudioPlayer
        isPlaying={isPlaying}
        onToggle={() => setIsPlaying(!isPlaying)}
      />

      <main className="w-full flex-1 px-4 sm:px-6 md:px-8 pb-16 sm:pb-24">
        <HeroSection />
        <Countdown targetDate={GALA_DATE} />
        <PhotoCarousel />
        <ParentsBlessing />
        <CeremonyAndReception />
        <RsvpSection whatsappNumber={RSVP_WHATSAPP} />
      </main>
    </div>
  );
}