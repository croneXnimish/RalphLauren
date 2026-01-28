"use client";
import { useShop } from "@/context/ShopContext";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";

export default function CartPage() {
  const { cart, removeFromCart, user, clearCart } = useShop(); // Get clearCart
  const router = useRouter();

  // Calculate Total
  const total = cart.reduce((sum, item) => {
    const price = parseFloat(item.discountedPrice.replace(/[^0-9.]/g, ""));
    return sum + price * item.quantity;
  }, 0);

  // Checkout Handler
  const handleCheckout = async () => {
    // 1. Check if user is logged in
    if (!user) {
      alert("Please sign in to place an order.");
      router.push("/account/create"); // Redirect to Login
      return;
    }

    // 2. Send Order to Backend
    try {
      const res = await fetch("http://localhost:5000/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userEmail: user.email,
          items: cart,
          total: total
        }),
      });

      if (res.ok) {
        alert("Order placed successfully!");
        clearCart(); // 3. Empty the cart locally
        router.push("/account"); // 4. Redirect to Order History
      } else {
        alert("Failed to place order. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Server error. Is the backend running?");
    }
  };

  return (
    <>
      <Navbar />
      <main className="pt-32 px-6 md:px-20 min-h-screen bg-white text-black">
        <h1 className="text-3xl font-serif font-semibold mb-8">Shopping Bag ({cart.length})</h1>

        {cart.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500">Your bag is empty.</p>
            <Link href="/" className="underline mt-4 block text-[#001f2a]">Continue Shopping</Link>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Cart Items List */}
            <div className="flex-1 space-y-8">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-6 border-b pb-6">
                  <div className="relative w-28 h-36 bg-gray-100 flex-shrink-0">
                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-sm">{item.name}</h3>
                        <p className="text-xs text-gray-500 mt-1">{item.brand}</p>
                      </div>
                      <p className="font-semibold text-sm">{item.discountedPrice}</p>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <p className="text-xs text-gray-600">Qty: {item.quantity}</p>
                      <button 
                        onClick={() => removeFromCart(item.id)} 
                        className="text-gray-400 hover:text-red-600 flex items-center gap-1 text-xs uppercase tracking-wider"
                      >
                        <Trash2 size={14} /> Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary Box */}
            <div className="w-full lg:w-80 h-fit bg-gray-50 p-6">
              <h3 className="font-semibold mb-4 text-sm uppercase tracking-wide">Order Summary</h3>
              <div className="flex justify-between mb-2 text-sm">
                <span>Subtotal</span>
                <span>₹ {total.toLocaleString()}</span>
              </div>
              <div className="flex justify-between mb-6 text-sm">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="border-t border-gray-200 pt-4 flex justify-between font-semibold text-base">
                <span>Total</span>
                <span>₹ {total.toLocaleString()}</span>
              </div>
              
              <button 
                onClick={handleCheckout} 
                className="w-full bg-[#001f2a] text-white py-3 mt-6 text-[11px] uppercase tracking-[0.2em] font-semibold hover:bg-black transition"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
