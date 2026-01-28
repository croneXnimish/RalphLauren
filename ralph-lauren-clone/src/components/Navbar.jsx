"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, User, Heart, ShoppingBag } from "lucide-react";
import { useShop } from "@/context/ShopContext"; // Import Context
import { useRouter } from "next/navigation"; // For redirection

export default function Navbar() {
  const { cart, favorites, user, login, logout } = useShop(); // Get User & Logout
  const router = useRouter();
  
  // ... (Keep existing scroll/hover state & logic) ...
  const [hovered, setHovered] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const timeoutRef = useRef(null);
  const accountTimeoutRef = useRef(null);

  // ... (Keep useEffect scroll logic) ...
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ... (Keep mouse handlers) ...
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

  // Login Form State (Inside Navbar for quick access)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
        setAccountOpen(false); // Close dropdown
      } else {
        alert(data.message);
      }
    } catch (err) {
      alert("Server error");
    }
  };

  // ... (Keep navItems and menuContent) ...
  const navItems = ["MEN", "WOMEN", "KIDS & BABY", "HOME", "DISCOVER", "SALE"];
  const menuContent = { /* ... keep your existing menu content ... */ };
    
  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white text-black shadow-sm border-b" : "bg-transparent text-white"} group`}>
       
      {/* ... (Keep Top Strip & Logo) ... */}
      <div className="bg-[#002e3e] text-white text-sm text-center py-1">
        Summer Sale | <span className="underline cursor-pointer">Shop Now</span>
      </div>

      <div className={`flex justify-between items-center px-6 py-4 uppercase text-sm font-medium relative transition-all duration-300 ${scrolled ? "text-black" : "text-white group-hover:bg-white group-hover:text-black"}`}>
        <Link href="/" className={`text-3xl font-serif italic tracking-wide transition-colors duration-300 ${scrolled ? "text-black" : "text-inherit"}`}>
          Ralph Lauren
        </Link>

        {/* ... (Keep Nav Items) ... */}
        <div className="flex gap-6 relative text-inherit">
           {/* ... (Paste your existing Nav Items map logic here) ... */}
           {navItems.map((item) => (
            <div key={item} className="relative" onMouseEnter={() => handleMouseEnter(item)} onMouseLeave={handleMouseLeave}>
              <button className={`px-3 py-1 transition duration-300 ${hovered === item ? "bg-black text-white" : "hover:bg-black hover:text-white"}`}>{item}</button>
              {/* ... Mega Menu Logic ... */}
            </div>
          ))}
        </div>

        {/* Icons Section */}
        <div className="flex items-center gap-6 text-inherit">
          {/* <Search strokeWidth={1.5} className="w-5 h-5 cursor-pointer hover:text-gray-500" /> */}

          {/* ACCOUNT DROPDOWN LOGIC */}
          <div className="relative" onMouseEnter={handleAccountEnter} onMouseLeave={handleAccountLeave}>
            
            {/* If logged in, clicking icon goes to account page */}
            <Link href={user ? "/account" : "/account/create"}>
                <User strokeWidth={1.5} className="w-5 h-5 cursor-pointer hover:text-gray-500" />
            </Link>

            {accountOpen && (
              <div className="fixed top-[94px] right-0 w-[300px] bg-white shadow-2xl border-l border-b border-gray-200 z-50 text-black">
                
                {/* --- CONDITION 1: USER IS LOGGED IN --- */}
                {user ? (
                  <div className="p-6">
                    <div className="border-b pb-4 mb-4">
                        <p className="text-xs text-gray-500 mb-1">Welcome back,</p>
                        <h3 className="text-lg font-semibold">{user.name}</h3>
                    </div>
                    <ul className="space-y-3 text-sm">
                        <li>
                            <Link href="/account" className="hover:underline block py-1">My Account</Link>
                        </li>
                        <li>
                            <Link href="/account" className="hover:underline block py-1">My Orders</Link>
                        </li>
                        <li>
                            <Link href="/favorites" className="hover:underline block py-1">Wishlist</Link>
                        </li>
                    </ul>
                    <button 
                        onClick={() => {
                            logout();
                            setAccountOpen(false);
                            router.push("/");
                        }}
                        className="w-full mt-6 bg-gray-200 text-black py-2 text-xs uppercase tracking-wider font-semibold hover:bg-gray-300"
                    >
                        Sign Out
                    </button>
                  </div>
                ) : (
                  
                  /* --- CONDITION 2: USER IS NOT LOGGED IN (Show Form) --- */
                  <>
                    <div className="px-8 pt-7 pb-4 border-b border-gray-200 flex items-start justify-between">
                      <h3 className="text-[18px] tracking-wide font-semibold text-gray-900">Sign In</h3>
                      <Link href="/account/create" className="text-[10px] tracking-[0.18em] uppercase text-gray-700 hover:underline">
                        Create Account
                      </Link>
                    </div>

                    <div className="px-8 py-6 text-[11px] tracking-wide">
                      <form onSubmit={handleQuickLogin}>
                        <label className="block mb-1 text-[10px] font-semibold tracking-[0.18em] uppercase text-gray-800">Email Address *</label>
                        <input 
                            type="email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full border border-gray-300 h-10 px-3 mb-4 text-[11px] outline-none focus:border-black" 
                        />

                        <label className="block mb-1 text-[10px] font-semibold tracking-[0.18em] uppercase text-gray-800">Password *</label>
                        <input 
                            type="password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full border border-gray-300 h-10 px-3 mb-3 text-[11px] outline-none focus:border-black" 
                        />

                        <div className="flex items-start justify-between gap-3 mb-4">
                          <Link href="/account/forgot-password" className="text-[10px] underline text-gray-700 whitespace-nowrap">Forgot Password?</Link>
                        </div>

                        <button type="submit" className="w-full h-11 bg-[#001f2a] text-white text-[11px] tracking-[0.18em] uppercase">Sign In</button>
                      </form>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>

          <Link href="/favorites" className="relative group">
            <Heart strokeWidth={1.5} className="w-5 h-5 cursor-pointer hover:text-gray-500" />
            {favorites.length > 0 && <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[9px] w-4 h-4 flex items-center justify-center rounded-full">{favorites.length}</span>}
          </Link>

          <Link href="/cart" className="relative group">
            <ShoppingBag strokeWidth={1.5} className="w-5 h-5 cursor-pointer hover:text-gray-500" />
            {cart.length > 0 && <span className="absolute -top-2 -right-2 bg-[#001f2a] text-white text-[9px] w-4 h-4 flex items-center justify-center rounded-full">{cart.length}</span>}
          </Link>
        </div>
      </div>
    </nav>
  );
}
