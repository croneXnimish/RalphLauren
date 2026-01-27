export default function Collections() {
  return (
    <section className="relative w-full h-[100vh] overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/collections.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 bg-black/20">
        <p className="text-xs md:text-sm tracking-widest font-medium uppercase mb-4">
          Ralph Lauren Spring 2025
        </p>
        <h1 className="text-4xl md:text-6xl font-serif font-light mb-6">
          Ralph’s Hamptons
        </h1>
        <div className="flex gap-4 flex-wrap justify-center">
          <button className="px-6 py-2 border border-white text-sm uppercase tracking-wide hover:bg-white hover:text-black transition duration-300">
            Shop Now
          </button>
          <button className="px-6 py-2 border border-white text-sm uppercase tracking-wide hover:bg-white hover:text-black transition duration-300">
            Explore the Campaign
          </button>
        </div>
      </div>
    </section>
  );
}
