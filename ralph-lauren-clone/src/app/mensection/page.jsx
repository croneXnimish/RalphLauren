// pages/index.js
"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import Link from "next/link";

export default function MenSection() {
  const items = [
    {
      name: "Custom Fit Linen Shirt",
      brand: "Polo Ralph Lauren",
      image: "/images/menfolder/men5.avif",
      hoverImage: "/images/menfolder/hover1.avif",
      originalPrice: "₹ 18,800.00",
      rangePrice: "₹ 18,900.00",
      discountedPrice: "₹ 15,040.00",
      promo: "Summer Sale",
      colors: ["#D2B48C", "#A0522D", "#B22222", "#F5F5DC", "#FAEBD7", "#8B4513", "#2F4F4F"],
    },
    {
      name: "Cable-Knit Mineral-Dyed Cotton Jumper",
      brand: "Polo Ralph Lauren",
      image: "/images/menfolder/men6.avif",
      hoverImage: "/images/menfolder/hover2.avif",
      originalPrice: "₹ 20,000.00",
      discountedPrice: "₹ 16,100.00",
      promo: "Summer Sale",
      colors: ["#B0C4DE", "#778899", "#708090"],
    },
    {
      name: "16.5 cm Cormac Relaxed Fit Chino Short",
      brand: "Polo Ralph Lauren",
      image: "/images/menfolder/men7.avif",
      hoverImage: "/images/menfolder/hover3.avif",
      originalPrice: "₹ 20,500.00",
      rangePrice: "₹ 20,900.00",
      discountedPrice: "₹ 14,350.00",
      promo: "Summer Sale",
      colors: ["#A0522D", "#CD853F", "#DEB887", "#F5DEB3"],
    },
    {
      name: "Slim Fit Oxford Shirt",
      brand: "Polo Ralph Lauren",
      image: "/images/menfolder/men8.avif",
      hoverImage: "/images/menfolder/hover4.avif",
      originalPrice: "₹ 13,200.00",
      discountedPrice: "₹ 10,600.00",
      promo: "Online Exclusive",
      colors: ["#FFFFFF", "#D3D3D3", "#708090", "#4682B4", "#B0E0E6"],
    },
    {
      name: "Classic Fit Denim Jacket",
      brand: "Polo Ralph Lauren",
      image: "/images/menfolder/men9.avif",
      hoverImage: "/images/menfolder/hover5.avif",
      originalPrice: "₹ 21,000.00",
      discountedPrice: "₹ 17,800.00",
      promo: "Summer Sale",
      colors: ["#000080", "#1E90FF", "#4682B4"],
    },
    {
      name: "Cotton Polo Bear Sweatshirt",
      brand: "Polo Ralph Lauren",
      image: "/images/menfolder/men10.avif",
      hoverImage: "/images/menfolder/hover6.avif",
      originalPrice: "₹ 19,500.00",
      discountedPrice: "₹ 15,750.00",
      promo: "Limited Edition",
      colors: ["#8B0000", "#800000"],
    },
    {
      name: "Athletic Fleece Jogger Pant",
      brand: "Polo Ralph Lauren",
      image: "/images/menfolder/men11.avif",
      hoverImage: "/images/menfolder/hover7.avif",
      originalPrice: "₹ 12,400.00",
      discountedPrice: "₹ 10,200.00",
      promo: "Summer Sale",
      colors: ["#D2B48C", "#A9A9A9", "#808080", "#000000"],
    },
    {
      name: "Custom Fit Striped Rugby Shirt",
      brand: "Polo Ralph Lauren",
      image: "/images/menfolder/men12.avif",
      hoverImage: "/images/menfolder/hover8.avif",
      originalPrice: "₹ 18,000.00",
      discountedPrice: "₹ 14,500.00",
      promo: "Just Dropped",
      colors: ["#8A2BE2", "#FF6347", "#20B2AA", "#DAA520", "#8B008B"],
    },
    {
      name: "Lambswool Full-Zip Sweater",
      brand: "Polo Ralph Lauren",
      image: "/images/menfolder/men13.avif",
      hoverImage: "/images/menfolder/hover9.avif",
      originalPrice: "₹ 22,000.00",
      discountedPrice: "₹ 18,200.00",
      promo: "Winter Essential",
      colors: ["#800000", "#2F4F4F", "#000000", "#708090", "#B0C4DE", "#FAEBD7"],
    },

  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <>
      <Navbar />
      <main className="bg-white text-black pt-28">

        {/* Breadcrumb */}
        <div className="px-6 md:px-60 text-xs text-gray-500 mb-2 uppercase">
          <span className="hover:underline cursor-pointer">Sale</span> /{" "}
          <span className="hover:underline cursor-pointer">Men</span> /
        </div>

        {/* Title */}
        <div className="px-6 md:px-60 mb-4">
          <h1 className="text-4xl font-serif font-semibold text-gray-900">
            Men's Summer Sale
          </h1>
        </div>

        {/* Product Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 md:px-60 pb-8">
          {items.map((item, index) => (
            <Link href={`/men/${item.id}`} key={index}>
              <div
                className="group cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="relative">
                  <Image
                    src={hoveredIndex === index ? item.hoverImage : item.image}
                    alt={item.name}
                    width={800}
                    height={1000}
                    className="w-full object-cover transition duration-300"
                  />
                  <div className="absolute top-3 right-3 text-xl text-gray-600">♡</div>
                  {hoveredIndex === index && item.colors && (
                    <div className="absolute bottom-0 left-0 w-full bg-white p-2 flex gap-1">
                      {item.colors.map((color, i) => (
                        <span key={i} className="w-4 h-4 rounded-full border" style={{ backgroundColor: color }}></span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="mt-4 text-sm">
                  <h3 className="font-medium text-[15px] hover:underline">{item.name}</h3>
                  <p className="text-xs text-gray-500 mb-1">{item.brand}</p>
                  <div className="text-[13px]">
                    <span className="line-through text-gray-500 mr-1">{item.originalPrice}</span>
                    <span className="text-black font-semibold">{item.discountedPrice}</span>
                  </div>
                  <p className="text-xs text-gray-700 mt-1">{item.promo}</p>
                </div>
              </div>
            </Link>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
