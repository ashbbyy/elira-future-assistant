import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowSheWorks from "@/components/HowSheWorks";
import Testimonial from "@/components/Testimonial";
import FinalCTA from "@/components/FinalCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Features />
      <HowSheWorks />
      <Testimonial />
      <FinalCTA />
    </div>
  );
};

export default Index;
