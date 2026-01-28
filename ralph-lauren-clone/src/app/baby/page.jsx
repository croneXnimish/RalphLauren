"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";

export default function BabySection() {
  const items = [
    {
      id: "bb1",
      name: "Flag Cotton Coverall",
      brand: "Polo Ralph Lauren",
      image: "/images/babyfolder/baby1.avif",
      hoverImage: "/images/babyfolder/hover1.avif",
      originalPrice: "₹ 18,800.00",
      discountedPrice: "₹ 15,040.00",
      promo: "Summer Sale",
      colors: ["#D2B48C", "#A0522D"],
    },
    {
      id: "bb2",
      name: "Polo Bear Fleece Coverall",
      brand: "Polo Ralph Lauren",
      image: "/images/babyfolder/baby2.avif",
      hoverImage: "/images/babyfolder/hover2.avif",
      originalPrice: "₹ 20,000.00",
      discountedPrice: "₹ 16,100.00",
      promo: "Summer Sale",
      colors: ["#B0C4DE"],
    },
    {
      id: "bb3",
      name: "Polo Bear Sweatshirt & Trouser Set",
      brand: "Polo Ralph Lauren",
      image: "/images/babyfolder/baby3.avif",
      hoverImage: "/images/babyfolder/hover3.avif",
      originalPrice: "₹ 20,500.00",
      discountedPrice: "₹ 14,350.00",
      promo: "Summer Sale",
      colors: ["#A0522D"],
    },
    {
      id: "bb4",
      name: "Polo Shirt, Cardigan & Chino Set",
      brand: "Polo Ralph Lauren",
      image: "/images/babyfolder/baby4.avif",
      hoverImage: "/images/babyfolder/hover4.avif",
      originalPrice: "₹ 13,200.00",
      discountedPrice: "₹ 10,600.00",
      promo: "Online Exclusive",
      colors: ["#FFFFFF"],
    },
    {
      id: "bb5",
      name: "Polo Bear Jumper & Trouser Set",
      brand: "Polo Ralph Lauren",
      image: "/images/babyfolder/baby5.avif",
      hoverImage: "/images/babyfolder/hover5.avif",
      originalPrice: "₹ 21,000.00",
      discountedPrice: "₹ 17,800.00",
      promo: "Summer Sale",
      colors: ["#000080"],
    },
    {
      id: "bb6",
      name: "Polo Bear Sweatshirt Set",
      brand: "Polo Ralph Lauren",
      image: "/images/babyfolder/baby6.avif",
      hoverImage: "/images/babyfolder/hover6.avif",
      originalPrice: "₹ 19,500.00",
      discountedPrice: "₹ 15,750.00",
      promo: "Limited Edition",
      colors: ["#8B0000"],
    },
    {
      id: "bb7",
      name: "Cable-Knit Cardigan & Trouser Set",
      brand: "Polo Ralph Lauren",
      image: "/images/babyfolder/baby7.avif",
      hoverImage: "/images/babyfolder/hover7.avif",
      originalPrice: "₹ 12,400.00",
      discountedPrice: "₹ 10,200.00",
      promo: "Summer Sale",
      colors: ["#D2B48C"],
    },
    {
      id: "bb8",
      name: "Velour Hoodie Set",
      brand: "Polo Ralph Lauren",
      image: "/images/babyfolder/baby8.avif",
      hoverImage: "/images/babyfolder/hover8.avif",
      originalPrice: "₹ 18,000.00",
      discountedPrice: "₹ 14,500.00",
      promo: "Just Dropped",
      colors: ["#8A2BE2"],
    },
    {
      id: "bb9",
      name: "Cable-Knit Set (Winter)",
      brand: "Polo Ralph Lauren",
      image: "/images/babyfolder/baby9.avif",
      hoverImage: "/images/babyfolder/hover9.avif",
      originalPrice: "₹ 22,000.00",
      discountedPrice: "₹ 18,200.00",
      promo: "Winter Essential",
      colors: ["#800000"],
    },
  ];

  return (
    <>
      <Navbar />
      <main className="bg-white text-black pt-28 pb-16 min-h-screen">
        <div className="px-6 md:px-60 text-xs text-gray-500 mb-2 uppercase">
          <span className="hover:underline cursor-pointer">Sale</span> /{" "}
          <span className="hover:underline cursor-pointer">Baby</span> /
        </div>
        <div className="px-6 md:px-60 mb-8">
          <h1 className="text-4xl font-serif font-semibold text-gray-900">Baby's Summer Sale</h1>
        </div>
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16 px-6 md:px-60">
          {items.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
