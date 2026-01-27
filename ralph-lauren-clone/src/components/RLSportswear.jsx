"use client";
import { useRef, useState } from "react";
import Image from "next/image";

export default function RLSportswear() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section className="px-1 md:px-4 space-y-2 mt-5 ">
      {/* Top Full Width Image Section */}
      <div className="relative w-full h-[120vh]">
        <Image
          src="/images/sportswear/top.avif"
          alt="Sportswear"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex items-end">
          <div className="sticky bottom-0 w-full text-white p-6 md:p-10 bg-gradient-to-t from-black/70 via-transparent to-transparent">
            <h4 className="text-sm tracking-widest uppercase mb-1 opacity-80">
              POLO RALPH LAUREN
            </h4>
            <h2 className="text-2xl md:text-3xl font-light mb-1">
              Sophisticated Sportswear
            </h2>
            <p className="text-xs md:text-sm mb-4">
              A versatile wardrobe for weekday commutes and weekend adventures
            </p>
            <a
              href="#"
              className="text-xs underline uppercase tracking-wider hover:text-gray-200"
            >
              Explore Now
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Two Columns Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {/* Left Video Section */}
        <div className="relative h-[110vh]">
          <video
            ref={videoRef}
            src="/videos/wimbledon.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute w-full h-full object-cover"
          />
          <button
            onClick={togglePlay}
            className="absolute bottom-4 left-4 w-8 h-8 border border-white rounded-full flex items-center justify-center text-white text-sm hover:bg-white hover:text-black transition z-10"
          >
            {isPlaying ? "⏸" : "▶"}
          </button>
          <div className="absolute inset-0 flex items-end">
            <div className="sticky bottom-0 w-full text-white p-6 md:p-10 bg-gradient-to-t from-black/70 via-transparent to-transparent">
              <h4 className="text-sm tracking-widest uppercase mb-1 opacity-80">
                POLO RALPH LAUREN
              </h4>
              <h2 className="text-2xl md:text-3xl font-light mb-1">Wimbledon</h2>
              <p className="text-xs md:text-sm mb-4">Official outfitter since 2006</p>
              <a
                href="#"
                className="text-xs underline uppercase tracking-wider hover:text-gray-200"
              >
                Explore Now
              </a>
            </div>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="relative h-[110vh]">
          <Image
            src="/images/sportswear/summer.jpg"
            alt="Summer Styles"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 flex items-end">
            <div className="sticky bottom-0 w-full text-white p-6 md:p-10 bg-gradient-to-t from-black/70 via-transparent to-transparent">
              <h4 className="text-sm tracking-widest uppercase mb-1 opacity-80">RLX</h4>
              <h2 className="text-2xl md:text-3xl font-light mb-1">Summer Styles</h2>
              <p className="text-xs md:text-sm mb-4">
                Crafted for peak performance in warm weather, elevated essentials define timeless Ralph Lauren style
              </p>
              <a
                href="#"
                className="text-xs underline uppercase tracking-wider hover:text-gray-200"
              >
                Shop Men
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
