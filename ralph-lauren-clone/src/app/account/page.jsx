"use client";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useShop } from "@/context/ShopContext";
import { useRouter } from "next/navigation";

export default function AccountPage() {
  const { user, logout } = useShop();
  const router = useRouter();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/api/orders/${user.email}`)
        .then((res) => res.json())
        .then((data) => setOrders(data))
        .catch((err) => console.error(err));
    } else {
      router.push("/account/create");
    }
  }, [user, router]);

  if (!user) return null;

  return (
    <>
      <Navbar />
      <main className="pt-32 px-6 md:px-20 min-h-screen bg-gray-50 text-black">
        <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl font-serif font-semibold mb-8">My Account</h1>

            <div className="flex flex-col lg:flex-row gap-10">
                
                {/* Sidebar */}
                <aside className="w-full lg:w-1/4 bg-white p-6 shadow-sm h-fit">
                    <div className="mb-6">
                        <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Hello,</p>
                        <p className="font-semibold text-lg">{user.name}</p>
                        <p className="text-sm text-gray-600">{user.email}</p>
                    </div>
                    <nav className="space-y-4 text-sm border-t pt-6">
                        <span className="block font-medium text-[#001f2a] cursor-pointer">Order History</span>
                        
                        {/* Removed Address & Payment */}
                        
                        <span className="block text-gray-500 hover:text-black cursor-pointer">Personal Details</span>
                        
                        <button 
                            onClick={() => { logout(); router.push("/"); }}
                            className="text-red-700 hover:underline mt-4 text-left block w-full"
                        >
                            Sign Out
                        </button>
                    </nav>
                </aside>

                {/* Main Content Area */}
                <div className="flex-1">
                    {/* Order History */}
                    <div className="bg-white p-8 shadow-sm mb-10">
                        <h2 className="text-xl font-medium mb-6 border-b pb-4">Order History</h2>
                        
                        {orders.length === 0 ? (
                            <div className="text-center py-10 text-gray-500 bg-gray-50 rounded-lg border border-dashed border-gray-300">
                                <p className="mb-2">You haven't placed any orders yet.</p>
                                <button onClick={() => router.push("/")} className="text-[#001f2a] underline font-medium">Start Shopping</button>
                            </div>
                        ) : (
                            <div className="space-y-6">
                                {orders.map((order) => (
                                    <div key={order._id} className="border border-gray-200 rounded-lg p-6">
                                        <div className="flex justify-between border-b pb-4 mb-4">
                                            <div>
                                                <p className="text-xs text-gray-500 uppercase">Order Date</p>
                                                <p className="text-sm font-medium">{new Date(order.date).toLocaleDateString()}</p>
                                            </div>
                                            <div>
                                                <p className="text-xs text-gray-500 uppercase text-right">Total</p>
                                                <p className="text-sm font-bold">₹ {order.total ? order.total.toLocaleString() : "0"}</p>
                                            </div>
                                        </div>
                                        <div className="space-y-4">
                                            {order.items.map((item, index) => (
                                                <div key={index} className="flex gap-4 items-center">
                                                    <div className="relative w-16 h-20 bg-gray-100 flex-shrink-0">
                                                        <Image src={item.image} alt={item.name} fill className="object-cover" />
                                                    </div>
                                                    <div>
                                                        <p className="text-sm font-medium">{item.name}</p>
                                                        <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                                                        <p className="text-xs font-semibold">{item.price}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Personal Details Section (Still here) */}
                    <div className="bg-white p-8 shadow-sm">
                        <h2 className="text-xl font-medium mb-6 border-b pb-4">Personal Information</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Name</p>
                                <p>{user.name}</p>
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Email</p>
                                <p>{user.email}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </main>
    </>
  );
}
