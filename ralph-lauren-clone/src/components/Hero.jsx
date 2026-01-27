"use client";
import { useRef, useState } from "react";
import Link from "next/link";

export default function Hero() {
  const videoRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (video) {
      if (video.paused) {
        video.play();
        setIsPaused(false);
      } else {
        video.pause();
        setIsPaused(true);
      }
    }
  };

  return (
    <section className="relative w-full h-screen overflow-hidden mb-5">
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 bg-black/20">
        <h1 className="text-4xl md:text-6xl font-serif font-semibold mb-3">
          Summer Sale
        </h1>
        <p className="uppercase text-sm md:text-base tracking-widest font-semibold mb-6">
          Enjoy up to 30% off
        </p>

        {/* Navigation Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mb-6">
          {[
            { label: "MEN", path: "mensection" },
            { label: "WOMEN", path: "womensection" },
            { label: "BOYS", path: "boys" },
            { label: "GIRLS", path: "girls" },
            { label: "BABY", path: "baby" },
            { label: "HOME", path: "hoe" },
          ].map(({ label, path }, i) => (
            <Link href={`/${path}`} key={i}>
              <button className="border border-white px-5 py-1 rounded-full text-xs tracking-wider hover:bg-white hover:text-black transition">
                {label}
              </button>
            </Link>
          ))}
        </div>

        {/* SEE DETAILS with Tooltip */}
        <div
          className="relative"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          <a
            href="#"
            className="text-xs underline tracking-widest hover:text-gray-200"
          >
            SEE DETAILS
          </a>

          <div
            className={`absolute left-1/2 -translate-x-1/2 mt-2 w-[400px] p-4 bg-white text-black text-sm rounded shadow-lg transition-opacity duration-300 z-10 ${
              showTooltip ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
          >
            <p className="font-bold mb-1">Limited Time Offer</p>
            <p>
              From 18/03/2026 to 22/04/2026 only for purchases made on this
              website. Applies only to items identified with a discount tag
              (“Eligible items”). Automatically applies at checkout. Max 5 of
              same item. Total limit: 50 items. We reserve rights to modify or
              cancel the offer anytime.
            </p>
          </div>
        </div>
      </div>

      {/* Pause/Play Button */}
      <button
        onClick={togglePlayPause}
        className="absolute bottom-5 left-5 w-8 h-8 border border-white rounded-full flex items-center justify-center text-white text-sm hover:bg-white hover:text-black transition"
      >
        {isPaused ? "▶️" : "⏸"}
      </button>
    </section>
  );
}
