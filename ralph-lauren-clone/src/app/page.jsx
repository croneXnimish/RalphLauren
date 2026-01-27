import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Collections from "@/components/Collections";
import Footer from "@/components/Footer";
import HeroSlider from "@/components/HeroSlider";
import RLHamptons from "@/components/RLHamptons";
import RLSportswear from "@/components/RLSportswear";
import WorldOfLuxury from "@/components/WorldOfLuxury";




export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <HeroSlider />
      <Collections />
      <RLHamptons/>
      <RLSportswear/>
      <WorldOfLuxury/>
      <Footer />
    </main>
  );
}



