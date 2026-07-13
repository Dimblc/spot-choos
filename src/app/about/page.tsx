import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AboutPageContent from "@/components/sections/AboutPageContent";

export const metadata = {
  title: "Spot & Choo's — О нас",
  description: "История, концепция и локации Spot&Choo's",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <AboutPageContent />
      </main>
      <Footer />
    </>
  );
}
