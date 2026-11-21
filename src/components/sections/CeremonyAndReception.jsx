import 'react';
import { FadeInSection } from '../FadeInSection';

export function CeremonyAndReception({
  ceremonyImage = 'https://scontent.fpcm1-2.fna.fbcdn.net/v/t39.99422-6/913009330_2422662288543025_3468537681757142918_n.png?stp=dst-jpg_tt6&cstp=mx1206x1595&ctp=s1206x1595&_nc_cat=101&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEonBu41kPIWZn7_qlCNDvaCYHYQK8WHxcJgdhArxYfF_XkmpYTJsy76r_D12uRXcrPIaR4PJKNkGxm9vtfKa_u&_nc_ohc=Dt_s-59lnegQ7kNvwH6IibL&_nc_oc=AdqynfqZ0aguJ54i4nZNKC-y7foTECkZJDbnvLjUxmbmczxfVi7LdwKC1Tc4FZdjXQM&_nc_zt=14&_nc_ht=scontent.fpcm1-2.fna&_nc_gid=Ldo6ZcKw0jam28NQf3PWsQ&_nc_ss=7b2a8&oh=00_AQSondRXkGIF5kCXBduSuUadCRILgXlwEpgRzAHHioYEqQ&oe=6B070F7F',
  receptionImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRknJB2WIM-2axlFHeLFlwS5GOvzp7TaDfp5BugvocVmi_BGmiunzQrY-Q&s=10',
}) {
  return (
    <FadeInSection className="w-full mt-16 z-10">
      <div className="w-full max-w-lg mx-auto">
        {/* ================= CEREMONIA ================= */}
        <section className="flex flex-col-reverse sm:flex-row items-start sm:items-center justify-between gap-6">
          {/* Texto a la izquierda */}
          <div className="text-left flex-1">
            <div className="inline-flex flex-col items-start">
              <span className="material-symbols-outlined text-[38px] text-[#d2c5b2]/85 font-light leading-none mb-2.5">
                church
              </span>

              <h2
                className="text-2xl sm:text-[32px] italic silver-color font-medium tracking-[0.03em] leading-snug"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Ceremonia
              </h2>
            </div>

            <div className="w-12 h-[1px] bg-gradient-to-r from-[#d2c5b2]/60 to-transparent my-4" />

            <div>
              <p
                className="text-lg sm:text-xl text-[#e6c99c] font-semibold tracking-[0.02em]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Parroquia Las Tres Cruces
              </p>

              <p
                className="text-xs sm:text-sm text-[#cbd5e1]/75 leading-[1.8] mt-2 font-normal"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Calle Av. Jacinto Canek &amp; Av. Cecilio Chí 223
                <br />
                Paseos Kabah, 77517
                <br />
                Cancún, Q.R.
              </p>
            </div>

            <div className="flex justify-start mt-6">
              <a
                href="https://www.google.com/maps/place/Capilla+Las+3+Cruces./@21.180418,-86.8680677,818m/data=!3m2!1e3!4b1!4m6!3m5!1s0x8f4c2c8c60b7fc07:0x8995d6563f498e1a!8m2!3d21.180418!4d-86.8680677!16s%2Fg%2F11b7g47xfs?entry=ttu&g_ep=EgoyMDI2MDkzMC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#162746]/65 border border-[#d2c5b2]/35 text-[#e6c99c] text-[11px] uppercase tracking-[0.22em] font-normal hover:border-[#d2c5b2]/70 hover:bg-[#1c3259]/80 transition-colors duration-200"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                <span className="material-symbols-outlined text-[15px] text-[#d2c5b2]/90 leading-none">
                  location_on
                </span>
                <span>Ver Ubicación</span>
              </a>
            </div>
          </div>

          {/* Círculo de imagen a la derecha */}
          <div className="relative shrink-0 self-start sm:self-center">
            <div className="p-1.5 rounded-full border border-[#d2c5b2]/35 bg-[#0a162c]/60 shadow-[0_14px_30px_-8px_rgba(0,8,24,0.85)]">
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden ring-1 ring-[#e2e8f0]/20">
                <img
                  src={ceremonyImage}
                  alt="Parroquia Las Tres Cruces"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ================= SEPARADOR CENTRAL ================= */}
        <div className="my-12 flex items-center justify-center gap-3">
          <span className="h-[1px] w-14 sm:w-20 bg-gradient-to-r from-transparent to-[#d2c5b2]/40" />
          <span className="w-1 h-1 rotate-45 bg-[#d2c5b2]/55" />
          <span className="w-2 h-2 rotate-45 border border-[#d2c5b2]/80" />
          <span className="w-1 h-1 rotate-45 bg-[#d2c5b2]/55" />
          <span className="h-[1px] w-14 sm:w-20 bg-gradient-to-l from-transparent to-[#d2c5b2]/40" />
        </div>

        {/* ================= RECEPCIÓN ================= */}
        <section className="flex flex-col sm:flex-row items-end sm:items-center justify-between gap-6">
          {/* Círculo de imagen a la izquierda */}
          <div className="relative shrink-0 self-end sm:self-center">
            <div className="p-1.5 rounded-full border border-[#d2c5b2]/35 bg-[#0a162c]/60 shadow-[0_14px_30px_-8px_rgba(0,8,24,0.85)]">
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden ring-1 ring-[#e2e8f0]/20">
                <img
                  src={receptionImage}
                  alt="Salón de eventos Centenario"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Texto a la derecha */}
          <div className="text-right flex-1">
            <div className="inline-flex flex-col items-end">
              <span className="material-symbols-outlined text-[38px] text-[#d2c5b2]/85 font-light leading-none mb-2.5">
                celebration
              </span>

              <h2
                className="text-2xl sm:text-[32px] italic silver-color font-medium tracking-[0.03em] leading-snug"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Recepción
              </h2>
            </div>

            <div className="w-12 h-[1px] bg-gradient-to-l from-[#d2c5b2]/60 to-transparent my-4 ml-auto" />

            <div>
              <p
                className="text-lg sm:text-xl text-[#e6c99c] font-semibold tracking-[0.02em]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Salón de eventos &ldquo;Centenario&rdquo;
              </p>

              <p
                className="text-xs sm:text-sm text-[#cbd5e1]/75 leading-[1.8] mt-2 font-normal"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                Av. Centenario, Río Hondo 227
                <br />
                77516 Cancún, Q.R.
              </p>
            </div>

            <div className="flex justify-end mt-6">
              <a
                href="https://www.google.com/maps/place/Sal%C3%B3n+de+eventos+%22Centenario%22/data=!4m2!3m1!1s0x0:0x472e0adeeb046798?sa=X&ved=1t:2428&ictx=111"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#162746]/65 border border-[#d2c5b2]/35 text-[#e6c99c] text-[11px] uppercase tracking-[0.22em] font-normal hover:border-[#d2c5b2]/70 hover:bg-[#1c3259]/80 transition-colors duration-200"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                <span className="material-symbols-outlined text-[15px] text-[#d2c5b2]/90 leading-none">
                  location_on
                </span>
                <span>Ver Ubicación</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </FadeInSection>
  );
}