"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

export default function HeroSlider() {
  const slides = [
    {
      image: "/images/slider/hero3.jpeg",
      title: "Outdoor Dining",
      subtitle: "RALPH LAUREN HOME",
    },
    {
      image: "/images/slider/hero2.jpeg",
      title: "New Arrivals",
      subtitle: "RALPH LAUREN COLLECTION",
    },
    {
      image: "/images/slider/hero1.jpg",
      title: "Luxury Bedding",
      subtitle: "RALPH LAUREN BEDROOM",
    },
  ];

  return (
    <section className="relative w-full h-[80vh] mb-5 group">
      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false, // Keeps autoplay running even after clicking
        }}
        loop={true}
        speed={1000} // Smoother transition speed
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <Image
                src={slide.image}
                alt={slide.title}
                fill={true}
                sizes="100vw"
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-center text-center px-4">
                <h3 className="text-white text-sm md:text-base tracking-[0.2em] uppercase mb-3 drop-shadow-lg font-medium">
                  {slide.subtitle}
                </h3>
                <h2 className="text-white text-4xl md:text-6xl font-serif italic mb-8 drop-shadow-lg">
                  {slide.title}
                </h2>
                <button className="bg-white text-black px-10 py-4 uppercase text-xs font-bold tracking-[0.15em] hover:bg-[#001f2a] hover:text-white transition duration-300">
                  Shop Now
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Custom CSS to hide navigation arrows until hover */}
      <style jsx global>{`
        .swiper-button-next, .swiper-button-prev {
          color: white;
          opacity: 0;
          transition: opacity 0.3s;
        }
        .group:hover .swiper-button-next, 
        .group:hover .swiper-button-prev {
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background-color: white !important;
        }
      `}</style>
    </section>
  );
}
