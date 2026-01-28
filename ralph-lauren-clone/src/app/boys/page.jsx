"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";

export default function BoysSection() {
  const items = [
    {
      id: "b1",
      name: "The Gorham Down Hooded Jacket",
      brand: "Polo Ralph Lauren",
      image: "/images/boysfolder/boys1.avif",
      hoverImage: "/images/boysfolder/hover1.avif",
      originalPrice: "₹ 18,800.00",
      discountedPrice: "₹ 15,040.00",
      promo: "Summer Sale",
      colors: ["#D2B48C", "#A0522D"],
    },
    {
      id: "b2",
      name: "The Gorham Glossed Down Jacket",
      brand: "Polo Ralph Lauren",
      image: "/images/boysfolder/boys2.avif",
      hoverImage: "/images/boysfolder/hover2.avif",
      originalPrice: "₹ 20,000.00",
      discountedPrice: "₹ 16,100.00",
      promo: "Summer Sale",
      colors: ["#B0C4DE", "#778899"],
    },
    {
      id: "b3",
      name: "Logo Down Hooded Jacket",
      brand: "Polo Ralph Lauren",
      image: "/images/boysfolder/boys3.avif",
      hoverImage: "/images/boysfolder/hover3.avif",
      originalPrice: "₹ 20,500.00",
      discountedPrice: "₹ 14,350.00",
      promo: "Summer Sale",
      colors: ["#A0522D", "#CD853F"],
    },
    {
      id: "b4",
      name: "Fleece Hoodie",
      brand: "Polo Ralph Lauren",
      image: "/images/boysfolder/boys4.avif",
      hoverImage: "/images/boysfolder/hover4.avif",
      originalPrice: "₹ 13,200.00",
      discountedPrice: "₹ 10,600.00",
      promo: "Online Exclusive",
      colors: ["#FFFFFF", "#D3D3D3"],
    },
    {
      id: "b5",
      name: "Fleece Hoodie (Navy)",
      brand: "Polo Ralph Lauren",
      image: "/images/boysfolder/boys5.avif",
      hoverImage: "/images/boysfolder/hover5.avif",
      originalPrice: "₹ 21,000.00",
      discountedPrice: "₹ 17,800.00",
      promo: "Summer Sale",
      colors: ["#000080", "#1E90FF"],
    },
    {
      id: "b6",
      name: "Fleece Sweatshirt",
      brand: "Polo Ralph Lauren",
      image: "/images/boysfolder/boys6.avif",
      hoverImage: "/images/boysfolder/hover6.avif",
      originalPrice: "₹ 19,500.00",
      discountedPrice: "₹ 15,750.00",
      promo: "Limited Edition",
      colors: ["#8B0000"],
    },
    {
      id: "b7",
      name: "Fleece Full-Zip Hoodie",
      brand: "Polo Ralph Lauren",
      image: "/images/boysfolder/boys7.avif",
      hoverImage: "/images/boysfolder/hover7.avif",
      originalPrice: "₹ 12,400.00",
      discountedPrice: "₹ 10,200.00",
      promo: "Summer Sale",
      colors: ["#D2B48C", "#A9A9A9"],
    },
    {
      id: "b8",
      name: "Flag Cotton Crewneck Jumper",
      brand: "Polo Ralph Lauren",
      image: "/images/boysfolder/boys8.avif",
      hoverImage: "/images/boysfolder/hover8.avif",
      originalPrice: "₹ 18,000.00",
      discountedPrice: "₹ 14,500.00",
      promo: "Just Dropped",
      colors: ["#8A2BE2", "#FF6347"],
    },
    {
      id: "b9",
      name: "Cotton Jersey Crewneck T-Shirt",
      brand: "Polo Ralph Lauren",
      image: "/images/boysfolder/boys9.avif",
      hoverImage: "/images/boysfolder/hover9.avif",
      originalPrice: "₹ 22,000.00",
      discountedPrice: "₹ 18,200.00",
      promo: "Winter Essential",
      colors: ["#800000", "#2F4F4F"],
    },
  ];

  return (
    <>
      <Navbar />
      <main className="bg-white text-black pt-28 pb-16 min-h-screen">
        <div className="px-6 md:px-60 text-xs text-gray-500 mb-2 uppercase">
          <span className="hover:underline cursor-pointer">Sale</span> /{" "}
          <span className="hover:underline cursor-pointer">Boys</span> /
        </div>
        <div className="px-6 md:px-60 mb-8">
          <h1 className="text-4xl font-serif font-semibold text-gray-900">Boys' Summer Sale</h1>
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
