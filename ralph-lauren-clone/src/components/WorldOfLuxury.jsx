"use client";
import { useRef } from "react";
import Image from "next/image";

export default function WorldOfLuxury() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current)
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    if (scrollRef.current)
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  const items = [
    {
      image: "/images/luxury/summer-living.avif",
      title: "Summer Living",
      subtitle: "RALPH LAUREN HOME",
      link: "SHOP NOW",
    },
    {
      image: "/images/luxury/summer-2.avif",
      title: "Summer II",
      subtitle: "DOUBLE RL",
      link: "SHOP MEN",
    },
    {
      image: "/images/luxury/summer.avif",
      title: "Summer",
      subtitle: "DOUBLE RL",
      link: "SHOP WOMEN",
    },
    {
      image: "/images/luxury/prefall-2025.avif",
      title: "Pre-Fall 2025",
      subtitle: "RALPH LAUREN COLLECTION",
      link: "EXPLORE",
    },
  ];

  return (
    <section className="w-full py-12 px-4">
      {/* Heading */}
      <div className="text-center mb-6">
        <h2 className="text-3xl md:text-4xl font-serif font-medium mb-2">
          The World of Luxury
        </h2>
        <p className="text-sm md:text-base text-gray-600">
          Explore seasonal collections, iconic accessories, and more
        </p>
      </div>

      {/* Scroll Section */}
      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={scrollLeft}
          className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white shadow text-black items-center justify-center hover:bg-gray-100 transition"
        >
          &#8249;
        </button>

        {/* Scrollable Items */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto scroll-smooth gap-4 md:gap-4 custom-scrollbar pb-2"
        >
          {items.map((item, idx) => (
            <div
              key={idx}
              className="relative min-w-[80vw] md:min-w-[45%] lg:min-w-[37%] h-[85vh] shrink-0 rounded-md overflow-hidden"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 flex items-end">
                <div className="sticky bottom-0 w-full text-white p-6 bg-gradient-to-t from-black/70 via-transparent to-transparent">
                  <h4 className="text-xs tracking-widest uppercase mb-1 opacity-90">
                    {item.subtitle}
                  </h4>
                  <h2 className="text-xl md:text-2xl font-light mb-2">
                    {item.title}
                  </h2>
                  <a
                    href="#"
                    className="text-xs underline uppercase tracking-wider hover:text-gray-200"
                  >
                    {item.link}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={scrollRight}
          className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white shadow text-black items-center justify-center hover:bg-gray-100 transition"
        >
          &#8250;
        </button>
      </div>
    </section>
  );
}
