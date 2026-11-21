import 'react';
import { FadeInSection } from '../FadeInSection';
import { useCountdown } from '../../hooks/useCountdown';

export function Countdown({ targetDate }) {
  // El contador maneja su propio estado de forma aislada
  const timeLeft = useCountdown(targetDate);

  const units = [
    { label: 'Días', value: timeLeft.days },
    { label: 'Horas', value: timeLeft.hours },
    { label: 'Min', value: timeLeft.mins },
    { label: 'Seg', value: timeLeft.secs },
  ];

  return (
    <FadeInSection className="w-full mt-8 flex flex-col items-center z-10">
      {/* Encabezado clásico */}
      <div className="flex items-center gap-3 mb-4">
        <span className="h-[1px] w-8 bg-gradient-to-r from-transparent via-[#d2c5b2]/35 to-[#d2c5b2]/65" />
        <span className="material-symbols-outlined text-[#d2c5b2]/90 text-[15px] leading-none">
          hourglass_top
        </span>
        <h2
          className="text-[11px] uppercase tracking-[0.3em] text-[#e2e8f0]/90 font-normal"
          style={{ fontFamily: "'Cinzel', serif" }}
        >
          Solo Faltan
        </h2>
        <span className="h-[1px] w-8 bg-gradient-to-l from-transparent via-[#d2c5b2]/35 to-[#d2c5b2]/65" />
      </div>

      {/* Bloques del contador */}
      <div className="grid grid-cols-4 gap-2 sm:gap-3 w-full max-w-[25.5rem]">
        {units.map((item) => (
          <div
            key={item.label}
            className="relative flex flex-col items-center justify-center py-4 px-2 rounded-xl bg-gradient-to-b from-[#162746]/85 via-[#101e38]/90 to-[#0a1324]/95 backdrop-blur-md border border-[#d2c5b2]/20 border-t-[#e2e8f0]/30 ring-1 ring-inset ring-white/[0.04] shadow-[0_14px_30px_-8px_rgba(0,8,24,0.8)]"
          >
            <span
              className="text-[26px] sm:text-[32px] tabular-nums tracking-normal text-[#f8fafc] leading-none font-semibold"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {String(item.value).padStart(2, '0')}
            </span>

            <span
              className="mt-2.5 text-[10px] uppercase tracking-[0.22em] text-[#d2c5b2] font-normal"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </FadeInSection>
  );
}