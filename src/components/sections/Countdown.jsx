import 'react';
import { FadeInSection } from '../FadeInSection';

export function Countdown({ timeLeft }) {
  return (
    <FadeInSection className="w-full mt-6 flex flex-col items-center z-10">
      <div className="flex items-center gap-2 mb-3">
        <span className="material-symbols-outlined text-[#cbd5e1] text-[18px]">hourglass_top</span>
        <h2 className="text-[12px] uppercase tracking-widest text-[#cbd5e1] font-bold">Solo Faltan</h2>
      </div>
      <div className="grid grid-cols-4 gap-2 w-full max-w-sm">
        {[
          { label: 'Días', val: timeLeft.days },
          { label: 'Horas', val: timeLeft.hours },
          { label: 'Min', val: timeLeft.mins },
          { label: 'Seg', val: timeLeft.secs }
        ].map((item, index) => (
          <div key={index} className="flex flex-col items-center justify-center p-3 bg-[#111f38]/85 backdrop-blur-md rounded-xl shadow-[0_8px_20px_rgba(0,14,38,0.6)] border border-[#cbd5e1]/10">
            <span className="text-2xl md:text-3xl font-serif text-[#cbd5e1] leading-none font-bold">{String(item.val).padStart(2, '0')}</span>
            <span className="text-[11px] text-[#d2c5b2] uppercase mt-1 font-medium">{item.label}</span>
          </div>
        ))}
      </div>
    </FadeInSection>
  );
}