import 'react';
import { FadeInSection } from '../FadeInSection';

export function EventDate() {
  return (
    <FadeInSection className="mt-4 z-10 w-full flex justify-center">
      <div className="bg-[#111f38]/80 backdrop-blur-md px-6 py-3 rounded-full shadow-lg flex items-center gap-3 border border-[#cbd5e1]/20">
        <span className="material-symbols-outlined text-[#cbd5e1] text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>calendar_month</span>
        <span className="text-[#d7e2ff] font-medium text-sm md:text-base">Sábado, 27 de mayo, 2027</span>
      </div>
    </FadeInSection>
  );
}