"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [hovered, setHovered] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const timeoutRef = useRef(null);
  const accountTimeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (item) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setHovered(item);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setHovered(null), 300);
  };

  const handleAccountEnter = () => {
    if (accountTimeoutRef.current) clearTimeout(accountTimeoutRef.current);
    setAccountOpen(true);
  };

  const handleAccountLeave = () => {
    accountTimeoutRef.current = setTimeout(() => setAccountOpen(false), 300);
  };

  const navItems = ["MEN", "WOMEN", "KIDS & BABY", "HOME", "DISCOVER", "SALE"];

  const menuContent = {
    MEN: {
      sidebar: [
        "Brands",
        "Explore",
        "Clothing",
        "Accessories",
        "Shoes",
        "Big & Tall",
        "Polo Bear Shop",
      ],
      brands: [
        { name: "POLO", img: "/images/menfolder/men1.jpg" },
        { name: "PURPLE LABEL", img: "/images/menfolder/men2.jpg" },
        { name: "DOUBLE RL", img: "/images/menfolder/men3.jpg" },
        { name: "RLX", img: "/images/menfolder/men4.jpg" },
      ],
    },
    WOMEN: {
      sidebar: [
        "Brands",
        "Dresses",
        "Outerwear",
        "Shoes",
        "Accessories",
        "Handbags",
      ],
      brands: [
        { name: "COLLECTION", img: "/images/womenfolder/women1.jpg" },
        { name: "PURPLE LABEL", img: "/images/womenfolder/women2.jpg" },
        { name: "POLO", img: "/images/womenfolder/women3.jpg" },
        { name: "LAUREN", img: "/images/womenfolder/women4.jpeg" },
      ],
    },
    "KIDS & BABY": {
      sidebar: ["Girls", "Boys", "Baby Girl", "Baby Boy", "Accessories", "Shoes"],
      brands: [
        { name: "BOYS", img: "/images/kids/kids1.avif" },
        { name: "GIRLS", img: "/images/kids/kids2.avif" },
        { name: "BABY", img: "/images/kids/kids3.avif" },
        { name: "SHOES", img: "/images/kids/kids4.avif" },
      ],
    },
    HOME: {
      sidebar: ["Bed & Bath", "Decor", "Dining", "Furniture", "Lighting", "Candles"],
      brands: [
        { name: "BEDROOM", img: "/images/home/home1.avif" },
        { name: "DINING", img: "/images/home/home2.avif" },
        { name: "DECOR", img: "/images/home/home3.avif" },
        { name: "FURNITURE", img: "/images/home/home4.avif" },
      ],
    },
    DISCOVER: {
      sidebar: [
        "RL Mag",
        "Sustainability",
        "RL Stories",
        "The Polo App",
        "Store Locator",
      ],
      brands: [
        { name: "SUSTAINABILITY", img: "/images/disco/discover1.avif" },
        { name: "MAGAZINE", img: "/images/disco/discover2.jpg" },
        { name: "STORIES", img: "/images/disco/discover3.jpeg" },
        { name: "POLO APP", img: "/images/disco/discover4.avif" },
      ],
    },
    SALE: {
      sidebar: ["Men", "Women", "Kids", "Home", "Accessories", "Shoes"],
      brands: [
        { name: "MEN SALE", img: "/images/menfolder/men1.jpg" },
        { name: "WOMEN SALE", img: "/images/womenfolder/women1.jpg" },
        { name: "KIDS SALE", img: "/images/kids/kids2.avif" },
        { name: "HOME SALE", img: "/images/home/home2.avif" },
      ],
    },
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white text-black shadow-sm border-b"
          : "bg-transparent text-white"
      } group`}
    >
      {/* Top Strip */}
      <div className="bg-[#002e3e] text-white text-sm text-center py-1">
        Summer Sale | <span className="underline cursor-pointer">Shop Now</span>
      </div>

      {/* Main Navbar */}
      <div
        className={`flex justify-between items-center px-6 py-4 uppercase text-sm font-medium relative transition-all duration-300 ${
          scrolled
            ? "text-black"
            : "text-white group-hover:bg-white group-hover:text-black"
        }`}
      >
        {/* Logo */}
        <Link
          href="/"
          className={`text-3xl font-serif italic tracking-wide transition-colors duration-300 ${
            scrolled ? "text-black" : "text-inherit"
          }`}
        >
          Ralph Lauren
        </Link>

        {/* Nav Items */}
        <div className="flex gap-6 relative text-inherit">
          {navItems.map((item) => (
            <div
              key={item}
              className="relative"
              onMouseEnter={() => handleMouseEnter(item)}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`px-3 py-1 transition duration-300 ${
                  hovered === item
                    ? "bg-black text-white"
                    : "hover:bg-black hover:text-white"
                }`}
              >
                {item}
              </button>

              {/* Mega Menu */}
              {hovered === item && menuContent[item] && (
                <div
                  className="fixed top-[94px] left-0 w-full bg-white shadow-xl py-8 px-10 flex gap-10 z-40 border-t transition-all duration-300 text-black"
                  onMouseEnter={() => handleMouseEnter(item)}
                  onMouseLeave={handleMouseLeave}
                >
                  {/* Sidebar */}
                  <div className="w-1/5">
                    <h4 className="font-semibold mb-2 text-gray-800">
                      Categories
                    </h4>
                    <ul className="space-y-2">
                      {menuContent[item].sidebar.map((link, i) => (
                        <li
                          key={i}
                          className="hover:underline cursor-pointer text-gray-600"
                        >
                          {link}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Brand Images */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
                    {menuContent[item].brands.map((brand, i) => (
                      <div key={i} className="text-center group cursor-pointer">
                        <div className="w-full h-72 relative overflow-hidden rounded-md">
                          <Image
                            src={brand.img}
                            alt={brand.name}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <p className="mt-3 text-sm tracking-wide text-gray-800 group-hover:underline">
                          {brand.name}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4 text-lg text-inherit">
          <span className="cursor-pointer">🔍</span>

          {/* Account icon + dropdown */}
          <div
            className="relative"
            onMouseEnter={handleAccountEnter}
            onMouseLeave={handleAccountLeave}
          >
            <span className="cursor-pointer">👤</span>

            {accountOpen && (
              <div
                className="fixed top-[94px] right-0 w-[390px] bg-white shadow-2xl border-l border-b border-gray-200 z-50 text-black"
                onMouseEnter={handleAccountEnter}
                onMouseLeave={handleAccountLeave}
              >
                {/* header */}
                <div className="px-8 pt-7 pb-4 border-b border-gray-200 flex items-start justify-between">
                  <h3 className="text-[18px] tracking-wide font-semibold text-gray-900">
                    Sign In
                  </h3>

                  <Link
                    href="/account/create"
                    className="text-[10px] tracking-[0.18em] uppercase text-gray-700 hover:underline"
                  >
                    Create Account
                  </Link>
                </div>

                {/* form */}
                <div className="px-8 py-6 text-[11px] tracking-wide">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                    }}
                  >
                    <label className="block mb-1 text-[10px] font-semibold tracking-[0.18em] uppercase text-gray-800">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      className="w-full border border-gray-300 h-10 px-3 mb-4 text-[11px] outline-none focus:border-black"
                    />

                    <label className="block mb-1 text-[10px] font-semibold tracking-[0.18em] uppercase text-gray-800">
                      Password *
                    </label>
                    <input
                      type="password"
                      className="w-full border border-gray-300 h-10 px-3 mb-3 text-[11px] outline-none focus:border-black"
                    />

                    <div className="flex items-start justify-between gap-3 mb-4">
                      <Link
                        href="/account/forgot-password"
                        className="text-[10px] underline text-gray-700 whitespace-nowrap"
                      >
                        Forgot Password?
                      </Link>

                      <label className="flex items-start gap-2 text-[10px] text-gray-700 leading-4">
                        <input type="checkbox" className="mt-[2px] accent-black" />
                        <span>
                          Remember me – I want Ralph Lauren to personalise my
                          shopping experience
                        </span>
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="w-full h-11 bg-[#001f2a] text-white text-[11px] tracking-[0.18em] uppercase"
                    >
                      Sign In
                    </button>
                  </form>

                  {/* or divider */}
                  <div className="flex items-center my-4">
                    <div className="flex-1 border-t border-gray-200" />
                    <span className="mx-4 text-[10px] uppercase tracking-[0.18em] text-gray-600">
                      or
                    </span>
                    <div className="flex-1 border-t border-gray-200" />
                  </div>

                  {/* social buttons */}
                  <div className="flex justify-between gap-2 pb-2">
                    <button
                      type="button"
                      className="flex-1 h-10 border border-gray-300 flex flex-col items-center justify-center text-[10px] uppercase tracking-[0.16em] hover:bg-gray-50"
                    >
                      Facebook
                    </button>
                    <button
                      type="button"
                      className="flex-1 h-10 border border-gray-300 flex flex-col items-center justify-center text-[10px] uppercase tracking-[0.16em] hover:bg-gray-50"
                    >
                      Google
                    </button>
                    <button
                      type="button"
                      className="flex-1 h-10 border border-gray-300 flex flex-col items-center justify-center text-[10px] uppercase tracking-[0.16em] hover:bg-gray-50"
                    >
                      Apple
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          <span className="cursor-pointer">♡</span>
          <span className="cursor-pointer">🛒</span>
        </div>
      </div>
    </nav>
  );
}
