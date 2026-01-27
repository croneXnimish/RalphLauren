"use client";
import Image from "next/image";

export default function RLHamptons() {
  const sections = [
    {
      image: "/images/hamptons/women.avif",
      title: "New Classics",
      subtitle: "POLO RALPH LAUREN",
      description: "A modern approach to wardrobe essentials",
      link: "Shop Now",
    },
    {
      image: "/images/hamptons/kids.avif",
      title: "Preppy Icons",
      subtitle: "POLO RALPH LAUREN",
      description: "Charming styles they'll love season after season",
      buttons: ["BOYS", "GIRLS"],
    },
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 w-full mt-5 gap-4 ">
      {sections.map((item, idx) => (
        <div key={idx} className="relative h-[150vh] w-full ">
          {/* Background Image */}
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover"
            priority
          />

          {/* Sticky Content */}
          <div className="relative z-10 flex h-full items-end">
            <div className="sticky bottom-0 w-full text-white p-6 md:p-10 bg-gradient-to-t from-black/70 via-transparent to-transparent">
              <h4 className="text-sm tracking-widest uppercase mb-2 opacity-80">
                {item.subtitle}
              </h4>
              <h2 className="text-2xl md:text-3xl font-light mb-2">
                {item.title}
              </h2>
              <p className="text-xs md:text-sm mb-4">{item.description}</p>

              {item.buttons ? (
                <div className="flex gap-3">
                  {item.buttons.map((btn, i) => (
                    <button
                      key={i}
                      className="text-xs border border-white px-4 py-1 tracking-widest uppercase hover:bg-white hover:text-black transition"
                    >
                      {btn}
                    </button>
                  ))}
                </div>
              ) : (
                <a
                  href="#"
                  className="text-xs underline uppercase tracking-wider hover:text-gray-200"
                >
                  {item.link}
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
