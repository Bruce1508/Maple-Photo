import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Pricing from "@/components/sections/Pricing";
import Printing from "@/components/sections/Printing";
import Booking from "@/components/sections/Booking";
import Reviews from "@/components/sections/Reviews";
import FAQ from "@/components/sections/FAQ";
import Location from "@/components/sections/Location";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Pricing />
        <Printing />
        <Booking />
        <Reviews />
        <FAQ />
        <Location />
      </main>
      <Footer />
    </>
  );
}
