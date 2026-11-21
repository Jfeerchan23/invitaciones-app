import 'react';
import { FadeInSection } from '../FadeInSection';

export function HeroSection() {
  return (
    <section className="w-full min-h-screen min-h-dvh flex flex-col items-center justify-center text-center px-6 pb-10 relative overflow-hidden">
      <FadeInSection
        immediate
        className="w-full flex flex-col items-center justify-center z-10 max-w-lg mx-auto"
      >

        {/* Texto superior: "Mis" */}
        <span
          className="text-2xl md:text-3xl italic silver-color font-serif mb-[-10px] z-10"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Mis
        </span>

        {/* Título central grande: "XV" con resplandor interno */}
        <h1
          className="text-7xl md:text-9xl font-bold tracking-wider silver-color my-2 select-none drop-shadow-md"
          style={{ fontFamily: "'Cinzel', serif" }}
        >
          XV
        </h1>

        {/* Nombre: "Selene Guadalupe" */}
        <div
          className="text-3xl md:text-5xl italic silver-color font-semibold mt-1 tracking-wide"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Selene Guadalupe
        </div>

        {/* Separador ornamental de alta costura con trinidad estelar */}
        <div className="flex items-center justify-center gap-3 w-48 my-6">
          <div className="w-14 h-[1px] silver-bg opacity-50"></div>
          <div className="flex items-center gap-1.5">
            <svg className="w-2.5 h-2.5 text-[#94a3b8]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4L12 2z" /></svg>
            <svg className="w-4 h-4 text-white animate-pulse" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4L12 2z" /></svg>
            <svg className="w-2.5 h-2.5 text-[#94a3b8]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4L12 2z" /></svg>
          </div>
          <div className="w-14 h-[1px] silver-bg opacity-50"></div>
        </div>

        {/* Fecha en la parte inferior */}
        <div
          className="text-sm md:text-base tracking-[0.3em] uppercase silver-color font-medium"
          style={{ fontFamily: "'Cinzel', serif" }}
        >
          29 • Mayo • 2027
        </div>

      </FadeInSection>
    </section>
  );
}