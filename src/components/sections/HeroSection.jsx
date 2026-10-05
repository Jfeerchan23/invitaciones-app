import 'react';
import { FadeInSection } from '../FadeInSection';

export function HeroSection() {
  return (
    <section className="w-full h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
      
      {/* ==================================================== */}
      {/* MARCO CELESTIAL ENVOLVENTE (SVG Background Decorativo) */}
      {/* ==================================================== */}
      
      {/* Esquina Superior Izquierda: Gran Luna Creciente y Constelación */}
      <div className="absolute top-4 left-4 pointer-events-none text-[#cbd5e1]/90 flex items-start gap-1">
        <svg className="w-16 h-16 transform -rotate-45 drop-shadow-[0_0_10px_rgba(203,213,225,0.5)]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.3 2.05C15.9 2.4 19 5.4 19 9.3c0 4.1-3.3 7.4-7.4 7.4-2.2 0-4.2-.9-5.6-2.4.4.1.9.2 1.3.2 4.1 0 7.4-3.3 7.4-7.4 0-1.8-.7-3.5-1.8-4.8z" />
        </svg>
        <div className="flex flex-col gap-1 pt-2">
          <svg className="w-5 h-5 text-white animate-pulse" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4L12 2z" />
          </svg>
          <svg className="w-3 h-3 text-[#94a3b8] ml-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4L12 2z" />
          </svg>
        </div>
      </div>

      {/* Esquina Superior Derecha: Cascada de Estrellas y Destellos */}
      <div className="absolute top-4 right-4 pointer-events-none text-[#cbd5e1]/90 flex items-center gap-2">
        <div className="flex flex-col items-end gap-1 pb-2">
          <svg className="w-4 h-4 text-[#94a3b8]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4L12 2z" />
          </svg>
          <svg className="w-6 h-6 text-white animate-pulse" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4L12 2z" />
          </svg>
        </div>
        <svg className="w-14 h-14 transform rotate-12 drop-shadow-[0_0_10px_rgba(203,213,225,0.5)]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4L12 2z" />
        </svg>
      </div>

      {/* Franja Superior Central: Polvo de Estrellas (Línea de conexión sutil) */}
      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 pointer-events-none flex items-center gap-4 text-[#cbd5e1]/60">
        <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#cbd5e1]"></div>
        <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4L12 2z" />
        </svg>
        <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#cbd5e1]"></div>
      </div>

      {/* Esquina Inferior Izquierda: Cúmulo estelar inferior */}
      <div className="absolute bottom-6 left-6 pointer-events-none text-[#cbd5e1]/80 flex items-end gap-2">
        <svg className="w-10 h-10 transform -rotate-12 drop-shadow-[0_0_8px_rgba(203,213,225,0.4)]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4L12 2z" />
        </svg>
        <svg className="w-5 h-5 text-white animate-pulse mb-1" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4L12 2z" />
        </svg>
      </div>

      {/* Esquina Inferior Derecha: Luna Invertida Enmarcada */}
      <div className="absolute bottom-6 right-6 pointer-events-none text-[#cbd5e1]/90 flex items-center gap-2">
        <svg className="w-4 h-4 text-white animate-pulse mb-3" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4L12 2z" />
        </svg>
        <svg className="w-16 h-16 transform rotate-180 drop-shadow-[0_0_10px_rgba(203,213,225,0.5)]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.3 2.05C15.9 2.4 19 5.4 19 9.3c0 4.1-3.3 7.4-7.4 7.4-2.2 0-4.2-.9-5.6-2.4.4.1.9.2 1.3.2 4.1 0 7.4-3.3 7.4-7.4 0-1.8-.7-3.5-1.8-4.8z" />
        </svg>
      </div>

      {/* ==================================================== */}
      {/* CONTENIDO PRINCIPAL CON ANIMACIÓN Y JERARQUÍA       */}
      {/* ==================================================== */}
      <FadeInSection className="flex flex-col items-center justify-center z-10 max-w-lg mx-auto">
        
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