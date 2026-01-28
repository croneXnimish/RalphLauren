"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";

export default function HomeSection() {
  const items = [
    {
      id: "h1",
      name: "Canyon Road Bedding Collection",
      brand: "Polo Ralph Lauren",
      image: "/images/home/hoe1.avif",
      hoverImage: "/images/home/hover1.avif",
      originalPrice: "₹ 18,800.00",
      discountedPrice: "₹ 15,040.00",
      promo: "Summer Sale",
      colors: ["#D2B48C", "#A0522D"],
    },
    {
      id: "h2",
      name: "RL x Naiomi Glasses Asher Pillow",
      brand: "Polo Ralph Lauren",
      image: "/images/home/hoe2.avif",
      hoverImage: "/images/home/hover2.avif",
      originalPrice: "₹ 20,000.00",
      discountedPrice: "₹ 16,100.00",
      promo: "Summer Sale",
      colors: ["#B0C4DE"],
    },
    {
      id: "h3",
      name: "Wessex Dinner Plate",
      brand: "Polo Ralph Lauren",
      image: "/images/home/hoe3.avif",
      hoverImage: "/images/home/hover3.avif",
      originalPrice: "₹ 20,500.00",
      discountedPrice: "₹ 14,350.00",
      promo: "Summer Sale",
      colors: ["#A0522D"],
    },
    {
      id: "h4",
      name: "RL x Tyler Glasses Serving Set",
      brand: "Polo Ralph Lauren",
      image: "/images/home/hoe4.avif",
      hoverImage: "/images/home/hover4.avif",
      originalPrice: "₹ 13,200.00",
      discountedPrice: "₹ 10,600.00",
      promo: "Online Exclusive",
      colors: ["#FFFFFF"],
    },
    {
      id: "h5",
      name: "Montgomery Candlestick Holder Set",
      brand: "Polo Ralph Lauren",
      image: "/images/home/hoe5.avif",
      hoverImage: "/images/home/hover5.avif",
      originalPrice: "₹ 21,000.00",
      discountedPrice: "₹ 17,800.00",
      promo: "Summer Sale",
      colors: ["#000080"],
    },
    {
      id: "h6",
      name: "Hudson Plaid Vase",
      brand: "Polo Ralph Lauren",
      image: "/images/home/hoe6.avif",
      hoverImage: "/images/home/hover6.webp",
      originalPrice: "₹ 19,500.00",
      discountedPrice: "₹ 15,750.00",
      promo: "Limited Edition",
      colors: ["#8B0000"],
    },
    {
      id: "h7",
      name: "Cable-Knit Cotton Cardigan",
      brand: "Polo Ralph Lauren",
      image: "/images/home/hoe7.avif",
      hoverImage: "/images/home/hover7.webp",
      originalPrice: "₹ 12,400.00",
      discountedPrice: "₹ 10,200.00",
      promo: "Summer Sale",
      colors: ["#D2B48C"],
    },
    {
      id: "h8",
      name: "Velour Hoodie Set",
      brand: "Polo Ralph Lauren",
      image: "/images/home/hoe8.avif",
      hoverImage: "/images/home/hover8.avif",
      originalPrice: "₹ 18,000.00",
      discountedPrice: "₹ 14,500.00",
      promo: "Just Dropped",
      colors: ["#8A2BE2"],
    },
    {
      id: "h9",
      name: "Cable-Knit Set",
      brand: "Polo Ralph Lauren",
      image: "/images/home/hoe9.webp",
      hoverImage: "/images/home/hover9.avif",
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
          <span className="hover:underline cursor-pointer">Home</span> /
        </div>
        <div className="px-6 md:px-60 mb-8">
          <h1 className="text-4xl font-serif font-semibold text-gray-900">Home's Summer Sale</h1>
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
