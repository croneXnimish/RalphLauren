"use client";
import { useShop } from "@/context/ShopContext";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";

export default function FavoritesPage() {
  const { favorites } = useShop();

  return (
    <>
      <Navbar />
      <main className="pt-32 px-6 md:px-20 min-h-screen bg-white text-black">
        <h1 className="text-3xl font-serif font-semibold mb-8">My Wishlist ({favorites.length})</h1>
        
        {favorites.length === 0 ? (
          <p className="text-center py-20 text-gray-500">You haven't saved any items yet.</p>
        ) : (
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {favorites.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </section>
        )}
      </main>
    </>
  );
}
