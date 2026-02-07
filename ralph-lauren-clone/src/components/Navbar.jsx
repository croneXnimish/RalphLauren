"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, User, Heart, ShoppingBag } from "lucide-react";
import { useShop } from "@/context/ShopContext";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const { cart, favorites, user, login, logout } = useShop();
  const router = useRouter();

  const [hovered, setHovered] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  
  // Login Form State
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

  const closeMenu = () => {
    setAccountOpen(false);
  };

  const handleQuickLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (res.ok) {
        login(data.user);
        closeMenu();
      } else {
        alert(data.message);
      }
    } catch (err) {
      alert("Server error");
    }
  };

  const navItems = ["MEN", "WOMEN", "KIDS & BABY", "HOME", "DISCOVER", "SALE"];

  const menuContent = {
    MEN: {
      sidebar: ["Brands", "Explore", "Clothing", "Accessories", "Shoes", "Big & Tall", "Polo Bear Shop"],
      brands: [
        { name: "POLO", img: "/images/menfolder/men1.jpg" },
        { name: "PURPLE LABEL", img: "/images/menfolder/men2.jpg" },
        { name: "DOUBLE RL", img: "/images/menfolder/men3.jpg" },
        { name: "RLX", img: "/images/menfolder/men4.jpg" },
      ],
    },
    WOMEN: {
      sidebar: ["Brands", "Dresses", "Outerwear", "Shoes", "Accessories", "Handbags"],
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
      sidebar: ["RL Mag", "Sustainability", "RL Stories", "The Polo App", "Store Locator"],
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
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white text-black shadow-sm border-b" : "bg-transparent text-white"} group`}>
      {/* Top Strip */}
      <div className="bg-[#002e3e] text-white text-sm text-center py-1">
        Summer Sale | <span className="underline cursor-pointer">Shop Now</span>
      </div>

      {/* Main Navbar */}
      <div className={`flex justify-between items-center px-6 py-4 uppercase text-sm font-medium relative transition-all duration-300 ${scrolled ? "text-black" : "text-white group-hover:bg-white group-hover:text-black"}`}>
        
        {/* Logo */}
        <Link href="/" className={`text-3xl font-serif italic tracking-wide transition-colors duration-300 ${scrolled ? "text-black" : "text-inherit"}`}>
          Ralph Lauren
        </Link>

        {/* Nav Items (Mega Menu) */}
        <div className="hidden lg:flex gap-6 relative text-inherit">
          {navItems.map((item) => (
            <div key={item} className="relative" onMouseEnter={() => handleMouseEnter(item)} onMouseLeave={handleMouseLeave}>
              <button className={`px-3 py-1 transition duration-300 ${hovered === item ? "bg-black text-white" : "hover:bg-black hover:text-white"}`}>
                {item}
              </button>

              {hovered === item && menuContent[item] && (
                <div className="fixed top-[94px] left-0 w-full bg-white shadow-xl py-8 px-10 flex gap-10 z-40 border-t transition-all duration-300 text-black" onMouseEnter={() => handleMouseEnter(item)} onMouseLeave={handleMouseLeave}>
                  <div className="w-1/5">
                    <h4 className="font-semibold mb-2 text-gray-800">Categories</h4>
                    <ul className="space-y-2">
                      {menuContent[item].sidebar.map((link, i) => (
                        <li key={i} className="hover:underline cursor-pointer text-gray-600">{link}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="grid grid-cols-4 gap-6 w-full">
                    {menuContent[item].brands.map((brand, i) => (
                      <div key={i} className="text-center group cursor-pointer">
                        <div className="w-full h-64 relative overflow-hidden rounded-md">
                          <Image src={brand.img} alt={brand.name} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                        </div>
                        <p className="mt-3 text-sm tracking-wide text-gray-800 group-hover:underline">{brand.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Icons Section */}
        <div className="flex items-center gap-6 text-inherit">
          <Search strokeWidth={1.5} className="w-5 h-5 cursor-pointer hover:text-gray-500" />

          {/* User Account Dropdown */}
          <div className="relative" onMouseEnter={handleAccountEnter} onMouseLeave={handleAccountLeave}>
            <Link href={user ? "/account" : "/account/create"}>
              <User strokeWidth={1.5} className="w-5 h-5 cursor-pointer hover:text-gray-500" />
            </Link>

            {accountOpen && (
              <div className="fixed top-[94px] right-0 w-[300px] bg-white shadow-2xl border-l border-b border-gray-200 z-50 text-black">
                {user ? (
                  // Logged In View
                  <div className="p-6">
                    <div className="border-b pb-4 mb-4">
                        <p className="text-xs text-gray-500 mb-1">Welcome back,</p>
                        <h3 className="text-lg font-semibold">{user.name}</h3>
                    </div>
                    <ul className="space-y-3 text-sm">
                        <li><Link href="/account" className="hover:underline block py-1" onClick={closeMenu}>My Account</Link></li>
                        <li><Link href="/account" className="hover:underline block py-1" onClick={closeMenu}>My Orders</Link></li>
                        <li><Link href="/favorites" className="hover:underline block py-1" onClick={closeMenu}>Wishlist</Link></li>
                    </ul>
                    <button onClick={() => { logout(); closeMenu(); router.push("/"); }} className="w-full mt-6 bg-gray-200 text-black py-2 text-xs uppercase tracking-wider font-semibold hover:bg-gray-300">Sign Out</button>
                  </div>
                ) : (
                  // Sign In Form View
                  <div className="px-8 py-6">
                    <h3 className="text-[18px] tracking-wide font-semibold text-gray-900 mb-4 border-b pb-4 flex justify-between">
                      Sign In <Link href="/account/create" className="text-[10px] tracking-[0.18em] uppercase text-gray-700 hover:underline pt-1">Create Account</Link>
                    </h3>
                    <form onSubmit={handleQuickLogin}>
                        <label className="block mb-1 text-[10px] font-semibold tracking-[0.18em] uppercase text-gray-800">Email Address *</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border border-gray-300 h-10 px-3 mb-4 text-[11px] outline-none focus:border-black" />
                        
                        <label className="block mb-1 text-[10px] font-semibold tracking-[0.18em] uppercase text-gray-800">Password *</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full border border-gray-300 h-10 px-3 mb-3 text-[11px] outline-none focus:border-black" />
                        
                        <div className="mb-4"><Link href="/account/forgot-password" className="text-[10px] underline text-gray-700">Forgot Password?</Link></div>
                        <button type="submit" className="w-full h-11 bg-[#001f2a] text-white text-[11px] tracking-[0.18em] uppercase">Sign In</button>
                    </form>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Wishlist Icon */}
          <Link href="/favorites" className="relative group">
            <Heart strokeWidth={1.5} className="w-5 h-5 cursor-pointer hover:text-gray-500" />
            {favorites.length > 0 && <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[9px] w-4 h-4 flex items-center justify-center rounded-full">{favorites.length}</span>}
          </Link>

          {/* Cart Icon */}
          <Link href="/cart" className="relative group">
            <ShoppingBag strokeWidth={1.5} className="w-5 h-5 cursor-pointer hover:text-gray-500" />
            {cart.length > 0 && <span className="absolute -top-2 -right-2 bg-[#001f2a] text-white text-[9px] w-4 h-4 flex items-center justify-center rounded-full">{cart.length}</span>}
          </Link>

        </div>
      </div>
    </nav>
  );
}