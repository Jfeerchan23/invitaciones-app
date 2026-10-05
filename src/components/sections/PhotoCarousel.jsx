import 'react';
import { FadeInSection } from '../FadeInSection';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

export function PhotoCarousel() {
    const photos = [
        {
            url: "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800&auto=format&fit=crop",
            caption: "Primeros Pasos"
        },
        {
            url: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=800&auto=format&fit=crop",
            caption: "Ternura Inolvidable"
        },
        {
            url: "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?q=80&w=800&auto=format&fit=crop",
            caption: "Sonrisas que Iluminan"
        },
        {
            url: "https://images.unsplash.com/photo-1544126592-807ade215a0b?q=80&w=800&auto=format&fit=crop",
            caption: "Magia de Niñez"
        }
    ];

    return (
        <section className="w-full min-h-screen flex flex-col items-center justify-center py-16 px-4 relative overflow-hidden">

            <FadeInSection className="flex flex-col items-center justify-center w-full max-w-lg z-10">

                {/* Versículo e invitación */}
                <div className="text-center mb-8 px-4">

                    {/* Versículo */}
                    <p
                        className="text-sm md:text-base italic silver-color leading-relaxed"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                        "Porque yo sé muy bien los planes que tengo para ustedes
                        —afirma el Señor—, planes de bienestar y no de calamidad,
                        a fin de darles un futuro y una esperanza."
                    </p>

                    {/* Referencia */}
                    <p
                        className="text-xs md:text-sm tracking-[0.2em] uppercase silver-color font-semibold opacity-90 mt-4"
                        style={{ fontFamily: "'Cinzel', serif" }}
                    >
                        Jeremías 29:11
                    </p>

                    {/* Invitación */}
                    <p
                        className="text-sm md:text-base italic silver-color leading-relaxed pt-2 mt-5"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                        Hay momentos en la vida que se quedan grabados para siempre
                        en el corazón. Por eso, quiero compartir contigo la alegría
                        de celebrar esta fecha tan especial.
                    </p>

                    {/* Separador */}
                    <div className="w-16 h-[1px] silver-bg mx-auto mt-6 opacity-60"></div>

                </div>

                {/* Carrusel */}
                <div className="w-full">
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        slidesPerView="auto"
                        centeredSlides={true}
                        spaceBetween={15}
                        grabCursor={true}
                        loop={true}
                        autoplay={{
                            delay: 1500,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        pagination={{
                            clickable: true,
                            dynamicBullets: true
                        }}
                        className="w-full py-6 pb-14"
                    >
                        {photos.map((photo, index) => (
                            <SwiperSlide
                                key={index}
                                className="!w-[210px] sm:!w-[240px] transition-all duration-300"
                            >
                                {/* Polaroid */}
                                <div className="bg-[#fbf9f5] p-3 pb-8 rounded-sm shadow-[0_10px_25px_rgba(0,0,0,0.4)] border border-[#e2dec9] transform rotate-1 hover:rotate-0 transition-transform duration-300">

                                    <div className="w-full aspect-[4/5] bg-[#111f38] overflow-hidden shadow-inner">
                                        <img
                                            src={photo.url}
                                            alt={photo.caption}
                                            className="w-full h-full object-cover object-center filter sepia-[0.1] contrast-[1.05]"
                                        />
                                    </div>

                                    {/* Caption */}
                                    <div className="mt-3 text-center">
                                        <p
                                            className="text-[#333333] text-sm md:text-base italic"
                                            style={{ fontFamily: "'Playfair Display', serif" }}
                                        >
                                            {photo.caption}
                                        </p>
                                    </div>

                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

            </FadeInSection>
        </section>
    );
}