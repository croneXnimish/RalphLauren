"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

export default function HeroSlider() {
  const slides = [
    {
      image: "/images/slider/hero3.jpg",
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
    <section className="relative w-full h-[80vh] mb-5">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 5000 }}
        loop
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[80vh]">
              <img
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center text-center px-4">
                <h3 className="text-white text-sm md:text-base tracking-widest uppercase mb-2">
                  {slide.subtitle}
                </h3>
                <h2 className="text-white text-3xl md:text-5xl font-light uppercase mb-4">
                  {slide.title}
                </h2>
                <button className="text-white border px-6 py-2 uppercase text-xs tracking-wider hover:bg-white hover:text-black transition">
                  Shop Now
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
