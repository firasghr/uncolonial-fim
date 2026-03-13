import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Program from "@/components/Program";
import Submit from "@/components/Submit";
import Gallery from "@/components/Gallery";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Program />
      <Gallery />
      <Submit />
      <FAQ />
      <Footer />
    </main>
  );
}
