import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Differentials from "@/components/Differentials";
import Services from "@/components/Services";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Booking from "@/components/Booking";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => (
  <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-black overflow-x-hidden">
    <Header />
    <main className="overflow-x-hidden">
      <Hero />
      <Differentials />
      <About />
      <Services />
      <Gallery />
      <Booking />
      <Contact />
    </main>
    <Footer />
    <WhatsAppButton />
  </div>
);

export default Index;
