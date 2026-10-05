import 'react';
import { FadeInSection } from '../FadeInSection';

export function CeremonyAndReception() {
    return (
        <FadeInSection className="w-full mt-16 px-4 z-10">
            <div className="w-full max-w-lg mx-auto">

                {/* ================= CEREMONIA ================= */}
                <div className="text-left mb-12">

                    {/* Adorno superior */}
                    <div className="flex items-center justify-start gap-3 mb-5">
                        <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#cbd5e1]/50"></div>

                        <span className="material-symbols-outlined text-[18px] text-[#cbd5e1]">
                            auto_awesome
                        </span>

                        <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#cbd5e1]/50"></div>
                    </div>

                    {/* Icono y título */}
                    <div className="w-fit">
                        <div className="text-center mb-3">
                            <span className="material-symbols-outlined text-5xl text-[#cbd5e1]/80">
                                church
                            </span>
                        </div>

                        <h2
                            className="text-2xl md:text-3xl italic silver-color font-serif font-bold tracking-wide"
                            style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                            Ceremonia
                        </h2>
                    </div>

                    {/* Lugar */}
                    <div className="mt-5 max-w-sm">
                        <p
                            className="text-base md:text-lg text-[#d2c5b2] font-semibold"
                            style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                            Parroquia Las Tres Cruces
                        </p>

                        <p
                            className="text-xs md:text-sm text-[#cbd5e1]/70 leading-relaxed mt-2"
                            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                        >
                            Calle Av. Jacinto Canek & Av. Cecilio Chí 223
                            <br />
                            Paseos Kabah, 77517
                            <br />
                            Cancún, Q.R.
                        </p>
                    </div>
                    {/* Botón */}
                    <div className="flex justify-start mt-6">
                        <a
                            href="https://www.google.com/maps/place/Capilla+Las+3+Cruces./@21.180418,-86.8680677,818m/data=!3m2!1e3!4b1!4m6!3m5!1s0x8f4c2c8c60b7fc07:0x8995d6563f498e1a!8m2!3d21.180418!4d-86.8680677!16s%2Fg%2F11b7g47xfs?entry=ttu&g_ep=EgoyMDI2MDkzMC4wIKXMDSoASAFQAw%3D%3D"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-6 py-2.5 rounded-full bg-[#dfc397]/10 border border-[#dfc397]/50 text-[#dfc397] text-xs md:text-sm uppercase tracking-[0.2em] font-semibold hover:bg-[#dfc397]/20 transition-all duration-300"
                            style={{ fontFamily: "'Cinzel', serif" }}
                        >
                            Ver Ubicación
                        </a>
                    </div>
                </div>

                {/* Separador */}
                <div className="flex items-center justify-center gap-2 mb-12">
                    <span className="w-1.5 h-1.5 rotate-45 bg-[#cbd5e1]/60"></span>

                    <div className="w-16 h-[1px] bg-[#cbd5e1]/20"></div>

                    <span className="w-2.5 h-2.5 rotate-45 bg-[#cbd5e1]"></span>

                    <div className="w-16 h-[1px] bg-[#cbd5e1]/20"></div>

                    <span className="w-1.5 h-1.5 rotate-45 bg-[#cbd5e1]/60"></span>
                </div>

                {/* ================= RECEPCIÓN ================= */}
                <div className="text-right">

                    {/* Adorno superior */}
                    <div className="flex items-center justify-end gap-3 mb-5">
                        <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#cbd5e1]/50"></div>

                        <span className="material-symbols-outlined text-[18px] text-[#cbd5e1]">
                            auto_awesome
                        </span>

                        <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#cbd5e1]/50"></div>
                    </div>

                    {/* Icono y título */}
                    <div className="w-fit ml-auto">
                        <div className="text-center mb-3">
                            <span className="material-symbols-outlined text-5xl text-[#cbd5e1]/80">
                                celebration
                            </span>
                        </div>

                        <h2
                            className="text-2xl md:text-3xl italic silver-color font-serif font-bold tracking-wide"
                            style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                            Recepción
                        </h2>
                    </div>

                    {/* Lugar */}
                    <div className="mt-5 max-w-sm ml-auto">
                        <p
                            className="text-base md:text-lg text-[#d2c5b2] font-semibold"
                            style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                            Salón de eventos "Centenario"
                        </p>

                        <p
                            className="text-xs md:text-sm text-[#cbd5e1]/70 leading-relaxed mt-2"
                            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                        >
                            Av. Centenario, Río Hondo 227
                            <br />
                            77516 Cancún, Q.R.
                        </p>
                    </div>

                    {/* Botón */}
                    <div className="flex justify-end mt-6">
                        <a
                            href="https://www.google.com/maps/place/Sal%C3%B3n+de+eventos+%22Centenario%22/data=!4m2!3m1!1s0x0:0x472e0adeeb046798?sa=X&ved=1t:2428&ictx=111"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-6 py-2.5 rounded-full bg-[#dfc397]/10 border border-[#dfc397]/50 text-[#dfc397] text-xs md:text-sm uppercase tracking-[0.2em] font-semibold hover:bg-[#dfc397]/20 transition-all duration-300"
                            style={{ fontFamily: "'Cinzel', serif" }}
                        >
                            Ver Ubicación
                        </a>
                    </div>
                </div>

            </div>
        </FadeInSection>
    );
}