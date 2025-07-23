import eliraPhoto from "@/assets/elira-profile.png";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left side - Text */}
          <div className="space-y-8 fade-in">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-light tracking-tight">
                Meet <span className="font-medium">Elira</span>
              </h1>
              <h2 className="text-2xl lg:text-3xl font-light text-muted-foreground">
                Your Executive Partner in Productivity
              </h2>
              <p className="text-xl lg:text-2xl font-light text-muted-foreground leading-relaxed">
                Hyper-efficient. Emotionally intelligent. Quietly powerful.
              </p>
            </div>
            
            <button className="btn-hero text-lg">
              Get Started with Elira
            </button>
          </div>

          {/* Right side - Elira's photo */}
          <div className="flex justify-center lg:justify-end fade-in-delay-1">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-glow rounded-3xl blur-xl glow"></div>
              <img
                src={eliraPhoto}
                alt="Elira, your executive assistant"
                className="relative w-80 h-96 lg:w-96 lg:h-[480px] object-cover rounded-3xl glass-card glow"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;