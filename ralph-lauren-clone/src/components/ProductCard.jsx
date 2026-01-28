"use client";
import Image from "next/image";
import { useState } from "react";
import { Heart, ShoppingBag } from "lucide-react";
import { useShop } from "@/context/ShopContext";

export default function ProductCard({ item }) {
  const [hovered, setHovered] = useState(false);
  const { addToCart, toggleFavorite, favorites } = useShop();

  // Check if this specific item is already in the favorites list
  const isFavorite = favorites.some((fav) => fav.id === item.id);

  return (
    <div
      className="group flex flex-col h-full"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image Container (No longer a Link) */}
      <div className="block relative">
        <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
          <Image
            src={hovered ? item.hoverImage : item.image}
            alt={item.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Favorite Button (Heart) */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleFavorite(item);
            }}
            className="absolute top-3 right-3 p-2 rounded-full hover:bg-white/80 transition-colors z-10 cursor-pointer"
          >
            <Heart
              className={`w-5 h-5 transition-colors ${
                isFavorite ? "fill-red-600 text-red-600" : "text-gray-700 hover:text-red-600"
              }`}
              strokeWidth={1.5}
            />
          </button>

          {/* Quick Add Button (Slides up on hover) */}
          <div
            className={`absolute bottom-0 left-0 w-full p-4 transition-all duration-300 transform ${
              hovered ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
            }`}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                addToCart(item);
              }}
              className="w-full bg-white/95 backdrop-blur-sm text-[#001f2a] text-[11px] font-semibold tracking-[0.2em] uppercase py-3 hover:bg-[#001f2a] hover:text-white transition-colors border border-gray-200 shadow-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              <ShoppingBag className="w-3 h-3" />
              Quick Add
            </button>
          </div>
        </div>
      </div>

      {/* Color Swatches */}
      <div className="h-6 mt-2 flex gap-1 justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {item.colors &&
          item.colors.slice(0, 5).map((color, i) => (
            <div
              key={i}
              className="w-3 h-3 rounded-full border border-gray-300"
              style={{ backgroundColor: color }}
            ></div>
          ))}
      </div>

      {/* Product Name & Price Info (No longer a Link) */}
      <div className="text-center mt-1 flex flex-col flex-grow">
        <h3 className="font-medium text-[13px] tracking-wide text-[#001f2a]">
          {item.name}
        </h3>
        <p className="text-xs text-gray-500 mb-1">{item.brand}</p>
        <div className="text-[13px] mt-1 space-x-2">
          <span className="line-through text-gray-500">{item.originalPrice}</span>
          <span className="text-[#c92f2f] font-medium">{item.discountedPrice}</span>
        </div>
        <p className="text-xs text-gray-700 mt-1">{item.promo}</p>
      </div>
    </div>
  );
}
