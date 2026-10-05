import 'react';
import { FadeInSection } from '../FadeInSection';

export function ParentsBlessing() {
  return (
    <FadeInSection className="w-full mt-10 px-4 z-10">
      <div className="w-full max-w-lg mx-auto text-center">

        {/* Adorno superior */}
        <div className="flex items-center justify-center gap-3 mb-5">
          <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#cbd5e1]/50"></div>

          <span className="material-symbols-outlined text-[18px] text-[#cbd5e1]">
            auto_awesome
          </span>

          <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#cbd5e1]/50"></div>
        </div>

        {/* Título */}
        <h2
          className="text-2xl md:text-3xl italic silver-color font-serif font-bold tracking-wide"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Mis Padres
        </h2>

        {/* Subtítulo */}
        <p
          className="text-xs md:text-sm uppercase tracking-[0.25em] text-[#cbd5e1]/70 mt-3"
          style={{ fontFamily: "'Cinzel', serif" }}
        >
          Con la bendición de Dios
        </p>

        {/* Frase */}
        <p
          className="text-sm md:text-base italic text-[#d2c5b2] leading-relaxed max-w-md mx-auto mt-6"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Y el amor infinito de quienes han sido mi guía,
          mi fortaleza y mi inspiración.
        </p>

        {/* Nombres */}
        <div className="mt-7 space-y-2">
          <p
            className="text-xl md:text-2xl text-[#dfc397] font-semibold tracking-wide"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            José Chan
          </p>

          <span
            className="block text-[#cbd5e1]/60 text-sm italic"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            &amp;
          </span>

          <p
            className="text-xl md:text-2xl text-[#dfc397] font-semibold tracking-wide"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Magali Dzib
          </p>
        </div>

        {/* Adorno inferior */}
        <div className="flex items-center justify-center gap-2 mt-8">
          <span className="w-1.5 h-1.5 rotate-45 bg-[#cbd5e1]/60"></span>
          <span className="w-2.5 h-2.5 rotate-45 bg-[#cbd5e1]"></span>
          <span className="w-1.5 h-1.5 rotate-45 bg-[#cbd5e1]/60"></span>
        </div>

      </div>
    </FadeInSection>
  );
}