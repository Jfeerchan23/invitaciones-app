import { useState } from 'react';
import { FadeInSection } from '../FadeInSection';

export function RsvpSection({
  whatsappNumber,
  eventName = 'los XV de Selene',
}) {
  const [name, setName] = useState('');
  const [attendance, setAttendance] = useState('Sí, ahí estaré');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !whatsappNumber) return;

    const lines = [
      `Hola, quiero confirmar mi asistencia a ${eventName}:`,
      `• *Nombre:* ${name.trim()}`,
      `• *Confirmación:* ${attendance}`,
    ];

    const text = encodeURIComponent(lines.join('\n'));
    const url = `https://wa.me/${whatsappNumber}?text=${text}`;

    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <FadeInSection className="w-full mt-16 z-10">
      <div className="w-full max-w-md mx-auto text-center">
        {/* Separador superior */}
        <div className="flex items-center justify-center gap-3 mb-5">
          <span className="h-[1px] w-10 sm:w-14 bg-gradient-to-r from-transparent via-[#d2c5b2]/35 to-[#d2c5b2]/70" />
          <span className="material-symbols-outlined text-[16px] text-[#d2c5b2]/90 leading-none">
            mark_email_read
          </span>
          <span className="h-[1px] w-10 sm:w-14 bg-gradient-to-l from-transparent via-[#d2c5b2]/35 to-[#d2c5b2]/70" />
        </div>

        <h2
          className="mt-1 text-2xl sm:text-[32px] italic silver-color font-medium tracking-[0.03em] leading-snug"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Confirmar Asistencia
        </h2>

        <p
          className="mt-3 text-xs sm:text-sm text-[#d2c5b2]/85 leading-relaxed max-w-sm mx-auto"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Agradeceremos mucho que nos confirmes para preparar cada detalle con cariño.
        </p>

        <form onSubmit={handleSubmit} className="mt-7 space-y-4 text-left">
          <div>
            <label
              htmlFor="rsvp-name"
              className="block text-[11px] uppercase tracking-[0.2em] text-[#d2c5b2]/80 mb-1.5 font-medium"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Nombre
            </label>
            <input
              id="rsvp-name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ej. Valeria Méndez"
              className="w-full px-4 py-2.5 rounded-xl bg-[#0d1c36]/80 border border-[#d2c5b2]/25 text-sm text-[#f1f5f9] placeholder:text-[#cbd5e1]/35 focus:outline-none focus:border-[#e6c99c]/70 transition-colors"
            />
          </div>

          <div>
            <label
              htmlFor="rsvp-attendance"
              className="block text-[11px] uppercase tracking-[0.2em] text-[#d2c5b2]/80 mb-1.5 font-medium"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Asistencia
            </label>
            <select
              id="rsvp-attendance"
              value={attendance}
              onChange={(e) => setAttendance(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-[#0d1c36]/80 border border-[#d2c5b2]/25 text-sm text-[#f1f5f9] focus:outline-none focus:border-[#e6c99c]/70 transition-colors"
            >
              <option value="Sí, ahí estaré">Sí, ahí estaré</option>
              <option value="No podré asistir">No podré asistir</option>
            </select>
          </div>

          <div className="pt-2 flex justify-center">
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full bg-[#162746]/80 border border-[#dfc397]/50 text-[#e6c99c] text-xs uppercase tracking-[0.22em] font-medium hover:bg-[#1e355e] hover:border-[#e6c99c] transition-colors duration-200 cursor-pointer"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              <span className="material-symbols-outlined text-[16px] leading-none">
                chat
              </span>
              <span>Confirmar por WhatsApp</span>
            </button>
          </div>
        </form>
      </div>
    </FadeInSection>
  );
}