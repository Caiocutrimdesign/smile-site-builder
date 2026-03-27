import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Differentials from "@/components/Differentials";
import Services from "@/components/Services";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Booking from "@/components/Booking";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import TeamHighlight from "@/components/TeamHighlight";

const Index = () => (
  <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-black overflow-x-hidden">
    <Header />
    <main className="overflow-x-hidden">
      <Hero />
      <Differentials />
      <About />
      <TeamHighlight />
      <Services />
      <Gallery />
      <Booking />
      <Contact />
    </main>
    <Footer />
    <FloatingActions />
  </div>
);

export default Index;
