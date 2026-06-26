import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Menu from "@/components/sections/Menu";
import Ingredients from "@/components/sections/Ingredients";
import Locations from "@/components/sections/Locations";
import WaveDivider from "@/components/animations/wave-divider";

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative">
        <Hero />
        <About />
        <WaveDivider />
        <Menu />
        <Ingredients />
        <Locations />
      </main>
      <Footer />
    </>
  );
}
