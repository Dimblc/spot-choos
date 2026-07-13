import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MenuPageContent from "@/components/sections/MenuPageContent";

export default function MenuPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-[10vh] md:pt-[6vw]">
        <MenuPageContent />
      </main>
      <Footer />
    </>
  );
}
