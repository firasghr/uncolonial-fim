import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Submit from "@/components/Submit";
import Program from "@/components/Program";
import Gallery from "@/components/Gallery";
import Tickets from "@/components/Tickets";
import GetInvolved from "@/components/GetInvolved";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Submit />
      <Program />
      <Gallery />
      <Tickets />
      <GetInvolved />
      <FAQ />
      <Footer />
    </main>
  );
}
