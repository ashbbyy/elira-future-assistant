import { useState } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowSheWorks from "@/components/HowSheWorks";
import Testimonial from "@/components/Testimonial";
import FinalCTA from "@/components/FinalCTA";
import HolographicIntro from "@/components/HolographicIntro";

const Index = () => {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <div className="min-h-screen">
      {showIntro && <HolographicIntro onComplete={() => setShowIntro(false)} />}
      
      <div className={`transition-opacity duration-1000 ${showIntro ? 'opacity-0' : 'opacity-100'}`}>
        <Navigation />
        <Hero />
        <Features />
        <HowSheWorks />
        <Testimonial />
        <FinalCTA />
      </div>
    </div>
  );
};

export default Index;
