import 'react';

export function AudioPlayer({ isPlaying, onToggle }) {
  return (
    <div className="fixed top-4 right-4 z-40">
      <div
        onClick={onToggle}
        className="bg-[#111f38]/90 backdrop-blur-xl shadow-xl rounded-full px-4 py-2 flex items-center gap-3 cursor-pointer transition-transform active:scale-95 border border-[#cbd5e1]/20"
      >
        <button
          type="button"
          aria-label="Reproducir música de fondo"
          className="w-8 h-8 rounded-full bg-gradient-to-br from-[#cbd5e1] to-[#94a3b8] flex items-center justify-center text-[#04132b] shadow-[0_0_12px_rgba(203,213,225,0.45)] focus:outline-none"
        >
          <span className="material-symbols-outlined text-[18px]">
            {isPlaying ? 'pause' : 'play_arrow'}
          </span>
        </button>
      </div>
    </div>
  );
}