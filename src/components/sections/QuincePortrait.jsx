import 'react';
import { FadeInSection } from '../FadeInSection';

export function QuincePortrait() {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center py-12 px-4 relative">
      <FadeInSection className="flex flex-col items-center justify-center max-w-md w-full">
        
        {/* Título o dedicatoria sutil opcional arriba de la foto */}
        <span 
          className="text-lg md:text-xl italic silver-color mb-4 tracking-wider"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Nuestra querida quinceañera
        </span>

        {/* Marco elegante para el retrato */}
        <div className="relative w-full max-w-[320px] aspect-[3/4] rounded-[2.5rem] p-2 bg-gradient-to-b from-[#cbd5e1] via-[#94a3b8] to-[#354875] shadow-[0_0_40px_rgba(203,213,225,0.25)] flex items-center justify-center overflow-hidden">
          <div className="w-full h-full rounded-[2.3rem] overflow-hidden relative bg-[#111f38]">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9FtJhgZR6_BYxBjLhRCYYiJTHdB0Ka8D4Hk9PAvb_xXSQXCB3tBxNElro&s=10" 
              alt="Selene Guadalupe - Quinceañera" 
              className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105" 
            />
          </div>
        </div>

        {/* Nombre completo abajo de la foto */}
        <h2 
          className="text-2xl md:text-3xl silver-color font-semibold mt-6 tracking-wide text-center"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Selene Guadalupe
        </h2>

      </FadeInSection>
    </section>
  );
}