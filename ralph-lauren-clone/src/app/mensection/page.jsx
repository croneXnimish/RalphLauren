"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";

export default function MenSection() {
  const items = [
    {
      id: "m1",
      name: "Custom Fit Linen Shirt",
      brand: "Polo Ralph Lauren",
      image: "/images/menfolder/men5.avif",
      hoverImage: "/images/menfolder/hover1.avif",
      originalPrice: "₹ 18,800.00",
      discountedPrice: "₹ 15,040.00",
      promo: "Summer Sale",
      colors: ["#D2B48C", "#A0522D", "#B22222", "#F5F5DC", "#FAEBD7", "#8B4513", "#2F4F4F"],
    },
    {
      id: "m2",
      name: "Cable-Knit Mineral-Dyed Cotton Jumper",
      brand: "Polo Ralph Lauren",
      image: "/images/menfolder/men6.avif",
      hoverImage: "/images/menfolder/hover2.avif",
      originalPrice: "₹ 20,000.00",
      discountedPrice: "₹ 16,100.00",
      promo: "Summer Sale",
      colors: ["#B0C4DE", "#778899", "#708090"],
    },
    {
      id: "m3",
      name: "16.5 cm Cormac Relaxed Fit Chino Short",
      brand: "Polo Ralph Lauren",
      image: "/images/menfolder/men7.avif",
      hoverImage: "/images/menfolder/hover3.avif",
      originalPrice: "₹ 20,500.00",
      discountedPrice: "₹ 14,350.00",
      promo: "Summer Sale",
      colors: ["#A0522D", "#CD853F", "#DEB887", "#F5DEB3"],
    },
    {
      id: "m4",
      name: "Slim Fit Oxford Shirt",
      brand: "Polo Ralph Lauren",
      image: "/images/menfolder/men8.avif",
      hoverImage: "/images/menfolder/hover4.avif",
      originalPrice: "₹ 13,200.00",
      discountedPrice: "₹ 10,600.00",
      promo: "Online Exclusive",
      colors: ["#FFFFFF", "#D3D3D3", "#708090", "#4682B4", "#B0E0E6"],
    },
    {
      id: "m5",
      name: "Classic Fit Denim Jacket",
      brand: "Polo Ralph Lauren",
      image: "/images/menfolder/men9.avif",
      hoverImage: "/images/menfolder/hover5.avif",
      originalPrice: "₹ 21,000.00",
      discountedPrice: "₹ 17,800.00",
      promo: "Summer Sale",
      colors: ["#000080", "#1E90FF", "#4682B4"],
    },
    {
      id: "m6",
      name: "Cotton Polo Bear Sweatshirt",
      brand: "Polo Ralph Lauren",
      image: "/images/menfolder/men10.avif",
      hoverImage: "/images/menfolder/hover6.avif",
      originalPrice: "₹ 19,500.00",
      discountedPrice: "₹ 15,750.00",
      promo: "Limited Edition",
      colors: ["#8B0000", "#800000"],
    },
    {
      id: "m7",
      name: "Athletic Fleece Jogger Pant",
      brand: "Polo Ralph Lauren",
      image: "/images/menfolder/men11.avif",
      hoverImage: "/images/menfolder/hover7.avif",
      originalPrice: "₹ 12,400.00",
      discountedPrice: "₹ 10,200.00",
      promo: "Summer Sale",
      colors: ["#D2B48C", "#A9A9A9", "#808080", "#000000"],
    },
    {
      id: "m8",
      name: "Custom Fit Striped Rugby Shirt",
      brand: "Polo Ralph Lauren",
      image: "/images/menfolder/men12.avif",
      hoverImage: "/images/menfolder/hover8.avif",
      originalPrice: "₹ 18,000.00",
      discountedPrice: "₹ 14,500.00",
      promo: "Just Dropped",
      colors: ["#8A2BE2", "#FF6347", "#20B2AA", "#DAA520", "#8B008B"],
    },
    {
      id: "m9",
      name: "Lambswool Full-Zip Sweater",
      brand: "Polo Ralph Lauren",
      image: "/images/menfolder/men13.avif",
      hoverImage: "/images/menfolder/hover9.avif",
      originalPrice: "₹ 22,000.00",
      discountedPrice: "₹ 18,200.00",
      promo: "Winter Essential",
      colors: ["#800000", "#2F4F4F", "#000000", "#708090", "#B0C4DE", "#FAEBD7"],
    },
  ];

  return (
    <>
      <Navbar />
      <main className="bg-white text-black pt-28 pb-16 min-h-screen">
        <div className="px-6 md:px-60 text-xs text-gray-500 mb-2 uppercase">
          <span className="hover:underline cursor-pointer">Sale</span> /{" "}
          <span className="hover:underline cursor-pointer">Men</span> /
        </div>
        <div className="px-6 md:px-60 mb-8">
          <h1 className="text-4xl font-serif font-semibold text-gray-900">Men's Summer Sale</h1>
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
