import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Programs } from "@/components/Programs";
import { WhyChoose } from "@/components/WhyChoose";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <div id="programs">
        <Programs />
      </div>
      <div id="why">
        <WhyChoose />
      </div>
      <div id="locations">
        <CTA />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
