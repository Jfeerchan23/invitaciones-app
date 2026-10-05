import { useState, useEffect } from 'react';
import { AudioPlayer } from './components/sections/AudioPlayer';
import { HeroSection } from './components/sections/HeroSection';
import { EventDate } from './components/sections/EventDate';
import { ParentsBlessing } from './components/sections/ParentsBlessing';
import { Countdown } from './components/sections/Countdown';
import { QuincePortrait } from './components/sections/QuincePortrait';
import { PhotoCarousel } from './components/sections/PhotoCarousel';
import { CeremonyAndReception } from './components/sections/CeremonyAndReception';

export default function App() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const galaDate = new Date('2027-05-27T19:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = galaDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          mins: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          secs: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#04132b] text-[#d7e2ff] flex flex-col min-h-screen selection:bg-[#cbd5e1] selection:text-[#0f172a]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      {/* Fuentes y Símbolos de Google */}
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,600&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" />

      <HeroSection />
      {/* <QuincePortrait /> */}
      <PhotoCarousel/>
      <ParentsBlessing />
      <CeremonyAndReception />
      {/* Contenido Principal */}
{/*       <main className="flex flex-col relative w-full pt-16 pb-28 bg-[#04132b] min-h-screen">
        <div className="flex flex-col w-full text-[#d7e2ff]">
          <div className="relative w-full max-w-[680px] mx-auto px-4 flex flex-col items-center">

            <AudioPlayer isPlaying={isPlaying} onToggle={() => setIsPlaying(!isPlaying)} />
            <EventDate />
            <ParentsBlessing />
            <Countdown timeLeft={timeLeft} />

          </div>
        </div>
      </main> */}
    </div>
  );
}