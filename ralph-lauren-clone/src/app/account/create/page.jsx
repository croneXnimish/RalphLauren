"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useShop } from "@/context/ShopContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Input Component
function Input({ placeholder, type = "text", value, onChange }) {
  return (
    <div className="mb-4">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full h-12 border border-gray-300 px-4 text-[11px] tracking-[0.12em] outline-none focus:border-black placeholder:text-gray-500 transition-colors"
      />
    </div>
  );
}

export default function CreateAccountPage() {
  const router = useRouter();
  const { login } = useShop(); 
  const [tab, setTab] = useState("create"); 

  const [form, setForm] = useState({
    email: "",
    password: "",
    name: "",
  });

  const onChange = (key) => (e) => {
    setForm({ ...form, [key]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const endpoint = tab === "signin" 
      ? "http://localhost:5000/api/auth/login" 
      : "http://localhost:5000/api/auth/register";

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (res.ok) {
        alert(data.message);
        if (tab === "signin") {
          login(data.user); 
          router.push("/"); 
        } else {
          setTab("signin");
        }
      } else {
        alert(data.message);
      }
    } catch (err) {
      alert("Server error.");
    }
  };

  return (
    <div>
        <Navbar />
        <main className="min-h-screen bg-white flex pt-40 justify-center">
      <div className="w-full max-w-[500px] px-8 py-12">
          {/* Tabs */}
          <div className="grid grid-cols-2 mb-10 border-b border-gray-200">
            <button
              type="button"
              onClick={() => setTab("signin")}
              className={`pb-4 text-[13px] font-semibold tracking-[0.14em] uppercase transition-colors ${
                tab === "signin" ? "border-b-2 border-[#001f2a] text-[#001f2a]" : "text-gray-400"
              }`}
            >
              Sign In
            </button>
            <button
              type="button"
              onClick={() => setTab("create")}
              className={`pb-4 text-[13px] font-semibold tracking-[0.14em] uppercase transition-colors ${
                tab === "create" ? "border-b-2 border-[#001f2a] text-[#001f2a]" : "text-gray-400"
              }`}
            >
              Create Account
            </button>
          </div>

          {/* Forms */}
          <form onSubmit={onSubmit} className="space-y-5">
            {tab === "signin" ? (
                <>
                    <Input placeholder="EMAIL ADDRESS *" type="email" value={form.email} onChange={onChange("email")} />
                    <Input placeholder="PASSWORD *" type="password" value={form.password} onChange={onChange("password")} />
                    <button type="submit" className="w-full h-12 mt-4 bg-[#041e3a] text-white text-[11px] font-medium tracking-[0.2em] uppercase">Sign In</button>
                </>
            ) : (
              <>
                <Input placeholder="NAME *" value={form.name} onChange={onChange("name")} />
                <Input placeholder="EMAIL ADDRESS *" value={form.email} onChange={onChange("email")} />
                <Input placeholder="PASSWORD *" type="password" value={form.password} onChange={onChange("password")} />
                <button type="submit" className="w-full h-12 mt-6 bg-[#041e3a] text-white text-[11px] font-medium tracking-[0.2em] uppercase">Create Account</button>
              </>
            )}
          </form>
      </div>
    </main>
    <Footer />
    </div>
  );
}
